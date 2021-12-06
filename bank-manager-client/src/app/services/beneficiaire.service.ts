import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {

    apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    getID(IDBeneficiaire: number): Observable<object> {
        const apiGet = this.apiBaseUrl + '/beneficiaire/' + IDBeneficiaire;
        return this.http.get(apiGet, {responseType: 'json'});
    }

    getAll(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/beneficiaire';
        return this.http.get(apiGet, {responseType: 'json'});
    }
}
