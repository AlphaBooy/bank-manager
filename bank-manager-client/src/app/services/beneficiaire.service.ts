import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeneficiaireService {

    apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    getID(IDBeneficiaire: number): Observable<object> {
        const apiGet = this.apiBaseUrl + '/beneficiaires/' + IDBeneficiaire;
        return this.http.get(apiGet, {responseType: 'json'});
    }

    getAll(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/beneficiaires';
        console.log(this.http.get(apiGet, {responseType: 'json'}))
        return this.http.get(apiGet, {responseType: 'json'});
    }

    newBeneficiaire(nomBeneficiaire: string): Observable<object> {
        const apiPost = this.apiBaseUrl + '/beneficiaires';
        const params = new HttpParams().set("nomBeneficiaire", nomBeneficiaire);
        return this.http.post(apiPost, params );
    }

    getAllTotal(): Observable<object> {
        const apiGet = this.apiBaseUrl + "/beneficiaires/getTotal";
        return this.http.get(apiGet, {responseType: 'json'});
    }
}
