import {inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';
  private readonly toastr = inject(ToastrService);
  private readonly http = inject(HttpClient);

  constructor() { }

  showSuccess(message?: string) {
    this.toastr.success(message, 'Message');
  }

  showWarning(message?: string) {
    this.toastr.warning(message, 'Message');
  }

  showError(message?: string) {
    this.toastr.error(message, 'Message');
  }

  deleteRecordById(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/record/${id}`);
  }
}
