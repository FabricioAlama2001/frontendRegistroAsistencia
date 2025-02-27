import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PrimeIcons} from "primeng/api";
import {AuthHttpService, AuthService} from '@servicesApp/auth';
import {CoreService, MessageService, RoutesService} from '@servicesApp/core';
import {LoginFormEnum} from "@shared/enums";
import {userName} from "@shared/regular-expresions";
import {environment} from "@env/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent {
  //Services
  protected readonly authService = inject(AuthService);
  private readonly authHttpService = inject(AuthHttpService);
  protected readonly coreService = inject(CoreService);
  private readonly formBuilder = inject(FormBuilder);
  public readonly messageService = inject(MessageService);
  private readonly routesService = inject(RoutesService);

  //Form
  protected form!: FormGroup;

  //Enums
  protected readonly PrimeIcons = PrimeIcons;
  protected readonly LoginFormEnum = LoginFormEnum;

  constructor() {
    this.authService.removeLogin();
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      // username: ['juan.perez', [Validators.required,Validators.pattern(userName())]],
      username: [null, [Validators.required]],
      // password: ['123', [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.checkValueChanges();
  }

  checkValueChanges() {

  }

  onSubmit() {
    if (this.usernameField.value) this.usernameField.patchValue(this.usernameField.value.trim());

    if (this.form.valid) {
      this.login();
    } else {
      this.form.markAllAsTouched();
      this.messageService.errorsFields();
    }
  }

  login() {
    this.authService.removeLogin();

    this.authHttpService.login(this.form.value)
      .subscribe(
        response => {
          if (this.authService.roles.length === 0) {
            this.messageService.errorCustom('Sin Rol', 'No cuenta con un rol asignado');
            this.authService.removeLogin();
            return;
          }

          this.routesService.roleSelect();
        });
  }

  /** Getters **/
  get usernameField(): AbstractControl {
    return this.form.controls['username'];
  }

  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }

  protected readonly environment = environment;
}
