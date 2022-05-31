import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CryptosService {

    apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    getAll(): Observable<object> {
        const apiGet = this.apiBaseUrl + '/cryptos';
        return this.http.get(apiGet, { responseType: 'json' });
    }
}
