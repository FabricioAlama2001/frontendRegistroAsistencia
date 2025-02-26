import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CatalogueModel} from "@models/core";
import {CataloguesHttpService, EmployeesHttpService} from "@servicesHttp/core";
import {CatalogueTypeEnum} from "@shared/enums";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  protected positions: CatalogueModel[] = [];
  protected sexes: CatalogueModel[] = [];
  private readonly cataloguesHttpService = inject(CataloguesHttpService);
  private readonly employeesHttpService = inject(EmployeesHttpService);

  protected readonly PrimeIcons = PrimeIcons;

  constructor() {
  }

  @Input() userId!: string | undefined;
  @Output() savedOut: EventEmitter<boolean> = new EventEmitter(false);

  ngOnInit(): void {
    this.buildUserForm();
    this.loadCatalogues();

    if (this.userId) {
      this.findEmployee(this.userId);
    }
  }

  buildUserForm() {
    this.form = this.formBuilder.group({
      identification: [null, [Validators.required, Validators.minLength(10),
        Validators.maxLength(12), Validators.pattern(/^\d{10}$/)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      sex: [null, Validators.required],
      employee: this.employeeForm,
    });
  }

  loadCatalogues() {
    this.positions = this.cataloguesHttpService.findByType(CatalogueTypeEnum.EMPLOYEES_POSITION);
    this.sexes = this.cataloguesHttpService.findByType(CatalogueTypeEnum.USERS_SEX);
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.userId) {
        this.updateEmployee();
      } else {
        this.createEmployee();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  findEmployee(userId: string) {
    this.employeesHttpService.findOne(userId).subscribe(response => {
      this.form.patchValue(response);
    });
  }

  createEmployee() {
    console.log(this.form.value);
    this.employeesHttpService.create(this.form.value).subscribe(response => {
      console.log(response);
      this.savedOut.emit(true);
    });
  }

  updateEmployee() {
    console.log(this.form.value);
    this.employeesHttpService.update(this.userId!, this.form.value).subscribe(response => {
      console.log(response);
      this.savedOut.emit(true);
    });
  }

  get employeeForm() {
    return this.formBuilder.group({
      position: ['', [Validators.required, Validators.maxLength(50)]],
    })
  }

  get identificationField() {
    return this.form.controls['identification'];
  }

  get employeeFormField(): FormGroup {
    return this.form.controls['user'] as FormGroup;
  }

  get positionField() {
    return this.employeeFormField.controls['position'];
  }
}
