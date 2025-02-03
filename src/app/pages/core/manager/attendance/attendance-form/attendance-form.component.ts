import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogueModel, EmployeeModel } from "@models/core";
import { CataloguesHttpService, EmployeesHttpService, AttendanceHttpService } from "@servicesHttp/core";
import { CatalogueTypeEnum } from "@shared/enums";
import { PrimeIcons } from "primeng/api";

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.scss']
})
export class AttendanceFormComponent implements OnInit {
  protected form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  protected types: CatalogueModel[] = [];
  protected employees: EmployeeModel[] = []; // Lista de empleados

  private readonly cataloguesHttpService = inject(CataloguesHttpService);
  private readonly employeesHttpService = inject(EmployeesHttpService);
  private readonly attendanceHttpService = inject(AttendanceHttpService);

  protected readonly PrimeIcons = PrimeIcons;
 constructor() {}

  @Input() attendanceId!: string | undefined;
  @Output() savedOut: EventEmitter<boolean> = new EventEmitter(false);

  ngOnInit(): void {
    this.buildAttendanceForm();
    this.loadCatalogues();
    this.findEmployees();
    if (this.attendanceId) {
      this.findAttendance(this.attendanceId);
      this.employeeIdField.disable();
    }
  }

  buildAttendanceForm() {
    this.form = this.formBuilder.group({
      employeeId: [null, Validators.required],
      typeId: [null, Validators.required],
      registeredAt: [new Date(), Validators.required],
      late: [false, Validators.required]
    });
  }

  loadCatalogues() {
    this.types = this.cataloguesHttpService.findByType(CatalogueTypeEnum.ATTENDANCE_TYPE);
  }

  findEmployees(): void {
    this.employeesHttpService.findAll().subscribe(
      (response: EmployeeModel[]) => {
        this.employees = response;
      }
    );
  }
  onSubmit(): void {
    if (this.form.valid) {
      if (this.attendanceId) {
        this.updateAttendance();
      } else {
        this.createAttendance();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }


  findAttendance(attendanceId: string) {
    this.attendanceHttpService.findOne(attendanceId).subscribe(response => {
      this.form.patchValue(response);
      this.registeredAtField.patchValue(new Date(response.registeredAt))
    });
  }

  createAttendance() {
    this.attendanceHttpService.create(this.form.value).subscribe(response => {
      this.savedOut.emit(true);
    });
  }

  updateAttendance() {
    this.attendanceHttpService.update(this.attendanceId!, this.form.value).subscribe(response => {
      this.savedOut.emit(true);
    });
  }

  get employeeIdField() {
    return this.form.controls['employeeId'];
  }

  get typeIdField() {
    return this.form.controls['typeId'];
  }

  get registeredAtField() {
    return this.form.controls['registeredAt'];
  }

  get lateField() {
    return this.form.controls['late'];
  }
}
