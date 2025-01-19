import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { ServerResponse } from '@models/http-response';
import { CoreService, MessageDialogService } from '@servicesApp/core';

@Injectable({
  providedIn: 'root',
})
export class AdministratorEmployeesHttpService {
  private readonly API_URL = `${environment.API_URL}/administrator-employees`;
  private readonly httpClient = inject(HttpClient);
  private readonly coreService = inject(CoreService);
  private readonly messageDialogService = inject(MessageDialogService);

  constructor() {}

  // Crear un empleado
  create(payload: any): Observable<ServerResponse> {
    const url = `${this.API_URL}`;
    return this.httpClient.post<ServerResponse>(url, payload).pipe(
      map((response) => {
        this.messageDialogService.successHttp(response);
        return response;
      })
    );
  }

  // Actualizar un empleado
  update(id: string, payload: any): Observable<ServerResponse> {
    const url = `${this.API_URL}/${id}`;
    this.coreService.isProcessing = true;
    return this.httpClient.put<ServerResponse>(url, payload).pipe(
      map((response) => {
        this.coreService.isProcessing = false;
        this.messageDialogService.successHttp(response);
        return response;
      })
    );
  }

  // Eliminar un empleado
  delete(id: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.delete<ServerResponse>(url).pipe(
      map((response) => {
        this.messageDialogService.successHttp(response);
        return response;
      })
    );
  }

  // Obtener todos los empleados
  findEmployeds(): Observable<ServerResponse> {
    const url = `${this.API_URL}`;
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  // Obtener un empleado por ID
  findEmployed(id: string): Observable<ServerResponse> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<ServerResponse>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
