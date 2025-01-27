import { Component, inject, OnInit } from '@angular/core';
import { SchedulesHttpService } from '@servicesHttp/core';
import { ScheduleModel } from '@models/core/schedule.model';
import { FormControl } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
  private schedulesHttpService = inject(SchedulesHttpService);

  items: ScheduleModel[] = [];
  selectedItem!: ScheduleModel;
  scheduleModal: boolean = false;
  scheduleControl: FormControl = new FormControl<any>(null);
  isNew: boolean = false;
  schedules: ScheduleModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.findSchedules();
  }

  /**
   * Cargar la lista de horarios
   */
  findSchedules(): void {
    this.schedulesHttpService.findAll().subscribe((response: ScheduleModel[]) => {
      this.items = response;
    });
  }

  /**
   * Abrir modal para crear un horario
   */
  createScheduleModal(): void {
    this.isNew = true;
    this.selectedItem = {} as ScheduleModel;
    this.scheduleModal = true;
  }

  /**
   * Abrir modal para editar un horario
   */
  editScheduleModal(item: ScheduleModel): void {
    this.selectedItem = item; // Copia del objeto seleccionado
    this.scheduleControl.setValue(item);
    this.isNew = false;
    this.scheduleModal = true;
  }

  /**
   * Eliminar un horario
   */
  deleteSchedule(id: string): void {
    this.schedulesHttpService.remove(id).subscribe(() => {
      this.findSchedules();
    });
  }

  /**
   * Asignar horario
   */
  assignSchedule(): void {
    if (this.scheduleControl.valid) {
      const updatedSchedule = this.scheduleControl.value;
      this.schedulesHttpService.update(this.selectedItem.id, updatedSchedule).subscribe(() => {
        this.findSchedules();
        this.scheduleModal = false;
      });
    }
  }

  protected readonly PrimeIcons = PrimeIcons;
}
