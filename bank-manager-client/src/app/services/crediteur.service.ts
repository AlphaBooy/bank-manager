import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrediteurService {

    apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    getID(IDCrediteur: number): Observable<object> {
        const apiGet = this.apiBaseUrl + '/crediteurs/' + IDCrediteur;
        return this.http.get(apiGet, {responseType: 'json'});
    }

    getAll(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/crediteurs';
        return this.http.get(apiGet, {responseType: 'json'});
    }
}
