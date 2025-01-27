import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SchedulesHttpService } from '@servicesHttp/core/schedules-http.service';
import { ScheduleModel } from '@models/core/schedule.model';
import {PrimeIcons} from "primeng/api";
import {format} from "date-fns";

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss'],
})
export class ScheduleFormComponent implements OnInit {
  protected form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  private readonly schedulesHttpService = inject(SchedulesHttpService);

  @Input() scheduleId!: string | undefined; // Para cargar datos existentes
  @Output() savedOut: EventEmitter<boolean> = new EventEmitter(false);

  constructor() {}

  ngOnInit(): void {
    this.buildScheduleForm();
    if (this.scheduleId) {
      this.findSchedule(this.scheduleId);
    }
  }

  findSchedule(scheduleId: string): void {
    this.schedulesHttpService.findOne(scheduleId).subscribe(response  => {
      this.form.patchValue(response);
    });
  }

  // Crear el formulario con los campos requeridos
  private buildScheduleForm() {
    this.form = this.formBuilder.group(
      {
        hourStartedAt: [null, [Validators.required]],
        minuteStartedAt: [null, [Validators.required]],
        hourEndedAt: [null, [Validators.required]],
        minuteEndedAt: [null, [Validators.required]],
      },
      { validators: this.timeRangeValidator }
    );
  }

  // Validación personalizada para asegurarse de que el horario de inicio sea antes del final
  private timeRangeValidator(formGroup: FormGroup) {
    const startTime = formGroup.get('startTime')?.value;
    const endTime = formGroup.get('endTime')?.value;
    if (startTime && endTime && startTime >= endTime) {
      return { invalidRange: true };
    }
    return null;
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.form.valid) {
      if (this.scheduleId) {
        this.updateSchedule();
      } else {
        this.createSchedule();
      }
    }
  }

  // Crear un nuevo horario
  private createSchedule(): void {

    this.schedulesHttpService.create(this.form.value).subscribe(() => {
      this.savedOut.emit(true);
    });
  }

  // Actualizar un horario existente
  private updateSchedule(): void {
    this.schedulesHttpService.update(this.scheduleId!, this.form.value).subscribe(() => {
      this.savedOut.emit(true);
    });
  }

  get hourStartedAtField(): AbstractControl {
    return this.form.controls['hourStartedAt'];
  }

  get hourEndedAtField(): AbstractControl {
    return this.form.controls['hourEndedAt'];
  }
  get minuteStartedAtField(): AbstractControl {
    return this.form.controls['minuteStartedAt'];
  }

  get minuteEndedAtField(): AbstractControl {
    return this.form.controls['minuteEndedAt'];
  }
  protected readonly PrimeIcons = PrimeIcons;
}
