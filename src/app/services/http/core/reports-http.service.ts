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
export class ReportsHttpService {
  private readonly API_URL = `${environment.API_URL}/reports`;
  private readonly httpClient = inject(HttpClient);
  private readonly coreService = inject(CoreService);
  private readonly messageService = inject(MessageService);
  private readonly messageDialogService = inject(MessageDialogService);

  constructor() {}

  downloadLateAttendance() {
    const url = `${this.API_URL}/attendances/late`;
    this.httpClient.get<BlobPart>(url, {responseType: 'blob' as 'json'})
      .subscribe(response => {
        // const filePath = URL.createObjectURL(new Blob(binaryData, {type: file.extension}));
        const filePath = URL.createObjectURL(new Blob([response]));
        const downloadLink = document.createElement('a');
        downloadLink.href = filePath;
        downloadLink.setAttribute('download', 'atrasos.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
      });
  }
}
