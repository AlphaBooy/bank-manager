import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

    apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    getID(IDCategorie: number): Observable<object> {
        const apiGet = this.apiBaseUrl + '/categories/' + IDCategorie;
        return this.http.get(apiGet, {responseType: 'json'});
    }

    getAll(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/categories';
        return this.http.get(apiGet, {responseType: 'json'});
    }

    getAllDepenses(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/categories/depenses';
        return this.http.get(apiGet, {responseType: 'json'});
    }

    getAllNames(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/categories/noms';
        return this.http.get(apiGet, {responseType: 'json'});
    }
}
