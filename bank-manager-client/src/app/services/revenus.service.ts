import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RevenusService {

  constructor(private http: HttpClient) { }

    apiBaseUrl = environment.apiBaseUrl;

    getAll(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/revenus';
        return this.http.get(apiGet, { responseType: 'json' });
    }

    getRevenusByMois(year: any): Observable<object> {
        const apiGet = this.apiBaseUrl + '/revenus/mois/' + year;
        return this.http.get(apiGet, { responseType: 'json' });
    }
}
