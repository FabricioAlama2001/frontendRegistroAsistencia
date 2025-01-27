import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { ServerResponse } from '@models/http-response';
import { ScheduleModel, CreateScheduleDto, UpdateScheduleDto } from '@models/core/schedule.model';
import { CoreService, MessageDialogService, MessageService } from '@servicesApp/core';

@Injectable({
  providedIn: 'root',
})
export class SchedulesHttpService {
  private readonly API_URL = `${environment.API_URL}/schedules`;
  private readonly httpClient = inject(HttpClient);
  private readonly coreService = inject(CoreService);
  private readonly messageService = inject(MessageService);
  private readonly messageDialogService = inject(MessageDialogService);

  constructor() {}

  /**
   * Crear un nuevo horario.
   * @param payload - Datos del horario a crear.
   * @returns Observable con el horario creado.
   */
  create(payload: CreateScheduleDto): Observable<ScheduleModel> {
    return this.httpClient.post<ServerResponse>(this.API_URL, payload).pipe(
      map((response) => {
        this.messageDialogService.successHttp(response);
        return response.data;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Obtener todos los horarios.
   * @returns Observable con la lista de horarios.
   */
  findAll(): Observable<ScheduleModel[]> {
    return this.httpClient.get<ServerResponse>(this.API_URL).pipe(
      map((response) => response.data),
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Buscar un horario por ID.
   * @param id - ID del horario.
   * @returns Observable con los datos del horario.
   */
  findOne(id: string): Observable<ScheduleModel> {
    return this.httpClient.get<ServerResponse>(`${this.API_URL}/${id}`).pipe(
      map((response) => response.data),
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Actualizar un horario existente.
   * @param scheduleId - ID del horario.
   * @param payload - Datos a actualizar.
   * @returns Observable con el horario actualizado.
   */
  update(scheduleId: string, payload: UpdateScheduleDto): Observable<ScheduleModel> {
    return this.httpClient.put<ServerResponse>(`${this.API_URL}/${scheduleId}`, payload).pipe(
      map((response) => {
        this.messageDialogService.successHttp(response);
        return response.data;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Eliminar un horario.
   * @param id - ID del horario.
   * @returns Observable con una confirmación de eliminación.
   */
  remove(id: string): Observable<boolean> {
    return this.httpClient.delete<ServerResponse>(`${this.API_URL}/${id}`).pipe(
      map((response) => {
        this.messageService.success(response);
        return response.data;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Manejo de errores en las peticiones HTTP.
   * @param error - Objeto de error recibido.
   * @returns Observable con el error procesado.
   */
  private handleError(error: any): Observable<never> {
    this.messageDialogService.errorHttp(error);
    return throwError(() => new Error(error));
  }
}
