import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { ServerResponse } from '@models/http-response';
import { CoreService, MessageDialogService, MessageService } from '@servicesApp/core';
import { AttendanceModel, CreateAttendanceDto, UpdateAttendanceDto, SelectAttendanceDto } from '@models/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceHttpService {
  private readonly API_URL = `${environment.API_URL}/attendances`;
  private readonly httpClient = inject(HttpClient);
  private readonly coreService = inject(CoreService);
  private readonly messageService = inject(MessageService);
  private readonly messageDialogService = inject(MessageDialogService);

  constructor() {}

  // Crear asistencia
  create(payload: CreateAttendanceDto): Observable<AttendanceModel> {
    const url = `${this.API_URL}`;

    return this.httpClient.post<ServerResponse>(url, payload).pipe(
      map(response => {
        this.messageDialogService.successHttp(response);
        return response.data;
      })
    );
  }

  // Obtener todas las asistencias
  findAll(): Observable<AttendanceModel[]> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ServerResponse>(url).pipe(
      map(response => response.data)
    );
  }

  // Obtener una asistencia por ID
  findOne(id: string): Observable<AttendanceModel> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ServerResponse>(url).pipe(
      map(response => response.data)
    );
  }

  // Actualizar asistencia
  update(id: string, payload: UpdateAttendanceDto): Observable<AttendanceModel> {
    const url = `${this.API_URL}/${id}`;
    this.coreService.isProcessing = true;
    return this.httpClient.put<ServerResponse>(url, payload).pipe(
      map(response => {
        this.coreService.isProcessing = false;
        this.messageDialogService.successHttp(response);
        return response.data;
      })
    );
  }

  // Eliminar asistencia (elimina de la base de datos)
  remove(id: string): Observable<boolean> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<ServerResponse>(url).pipe(
      map(response => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  // Obtener asistencias filtradas por nombre del empleado
  findAttendancesByEmployeeName(
    employeeName: string,
    startedAt: Date,
    endedAt: Date
  ): Observable<AttendanceModel[]> {
    // Ajusta la URL a como tengas definido tu endpoint en el backend
    const url = `${this.API_URL}/filters`;

    const params = new HttpParams()
      .append('search', employeeName)
      .append('startedAt', startedAt.toDateString())
      .append('endedAt', endedAt.toDateString());

    return this.httpClient.get<ServerResponse>(url, { params }).pipe(
      map(response => response.data)
    );
  }


}
