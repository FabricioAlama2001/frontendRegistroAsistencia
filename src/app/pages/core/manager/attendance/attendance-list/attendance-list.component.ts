import {Component, inject, OnInit} from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import {AttendanceHttpService, CataloguesHttpService, EmployeesHttpService} from "@servicesHttp/core";
import {AttendanceModel, EmployeeModel, ScheduleModel} from "@models/core";
import {FormControl} from "@angular/forms";
import {MessageDialogService} from "@servicesApp/core";

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrl: './attendance-list.component.scss'
})
export class AttendanceListComponent implements OnInit {
  items: AttendanceModel[] = [];
  selectedItem!: AttendanceModel;
  attendanceModal: boolean = false;
  isNew: boolean = false;
  AttendanceControl: FormControl = new FormControl<any>(null);
  private readonly cataloguesHttpService = inject(CataloguesHttpService);
  private readonly employeesHttpService = inject(EmployeesHttpService);
  private readonly attendanceHttpService = inject(AttendanceHttpService);
  private readonly messageDialogService = inject(MessageDialogService);
  protected readonly PrimeIcons = PrimeIcons;

  // Nuevos controles para el filtrado
  employeeNameControl: FormControl = new FormControl('');
  datesControl: FormControl = new FormControl([]);
  startedAtControl: FormControl = new FormControl(new Date());
  endedAtControl: FormControl = new FormControl(new Date());

  constructor() {
  }

  ngOnInit(): void {
    this.findAttendances();
  }

  search() {

  }

  // Nuevo método para filtrar por nombre y fechas
  filterAttendancesByName(): void {
    const employeeName = this.employeeNameControl.value;
    // const startedAt = new Date(this.startedAtControl.value);
    // const endedAt = new Date(this.endedAtControl.value);

    const startedAt = new Date(this.datesControl.value[0]);
    const endedAt = new Date(this.datesControl.value[1]);

    this.attendanceHttpService.findAttendancesByEmployeeName(employeeName, startedAt, endedAt)
      .subscribe((response: AttendanceModel[]) => {
        this.items = response;
      });
  }

  findAttendances(): void {
    this.attendanceHttpService.findAll().subscribe(
      (response: AttendanceModel[]) => {
        this.items = response;
      }
    );
  }

  createAttendanceModal(): void {
    this.isNew = true;
    this.attendanceModal = true;
  }

  editAttendanceModal(item: AttendanceModel): void {
    this.selectedItem = item; // Copia del objeto seleccionado
    this.AttendanceControl.setValue(item);
    this.isNew = false;
    this.attendanceModal = true;
  }

  deleteAttendance(id: string): void {
    this.attendanceHttpService.remove(id).subscribe(() => {
        this.findAttendances();
        this.messageDialogService.errorCustom('Asistencia Eliminada', '');
      }
    )
  };
}
