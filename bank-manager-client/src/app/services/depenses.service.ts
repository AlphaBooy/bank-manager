import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepensesService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<object> {
    const apiGet = this.apiBaseUrl + '/depenses';
    return this.http.get(apiGet, { responseType: 'json' });
  }
}
