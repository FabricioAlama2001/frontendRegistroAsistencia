import { Component, OnInit, inject } from '@angular/core';
import { AttendanceHttpService } from "@servicesHttp/core";
import { AttendanceModel } from "@models/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  totalAttendances: number = 0;
  onTimeAttendances: number = 0;
  lateAttendances: number = 0;
  attendanceData: AttendanceModel[] = [];

  // Datos para el gráfico de líneas
  data: any;
  options: any;

  private readonly attendanceHttpService = inject(AttendanceHttpService);

  constructor() { }

  ngOnInit(): void {
    this.fetchAttendances();
  }

  fetchAttendances(): void {
    // Suponiendo que tienes un servicio para obtener las asistencias de la base de datos
    this.attendanceHttpService.findAll().subscribe((response: AttendanceModel[]) => {
      this.attendanceData = response;
      this.calculateAttendances();
      this.prepareChartData();
    });
  }

  calculateAttendances(): void {
    this.totalAttendances = this.attendanceData.length;
    this.onTimeAttendances = this.attendanceData.filter(attendance => !attendance.late).length;
    this.lateAttendances = this.totalAttendances - this.onTimeAttendances;
  }

  prepareChartData(): void {
    // Inicializar las variables de mes (12 meses)
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const onTimeData = Array(12).fill(0);  // Inicializar con 0s
    const lateData = Array(12).fill(0);    // Inicializar con 0s

    // Rellenar los datos del gráfico con las asistencias por mes
    this.attendanceData.forEach(attendance => {
      const month = new Date(attendance.registeredAt).getMonth(); // Obtener el mes (0-11)
      if (attendance.late) {
        lateData[month]++;
      } else {
        onTimeData[month]++;
      }
    });

    // Asignar los datos al gráfico
    this.data = {
      labels: months,
      datasets: [
        {
          label: 'Asistencias a Tiempo',
          data: onTimeData,
          borderColor: '#4caf50',
          fill: false,
          tension: 0.4 // Esto hace que el gráfico de líneas sea más suave
        },
        {
          label: 'Asistencias Tardías',
          data: lateData,
          borderColor: '#f44336',
          fill: false,
          tension: 0.4
        }
      ]
    };

    this.options = {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Meses del Año'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Cantidad'
          }
        }
      }
    };
  }
}
