import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

    getTotalCrypto(crypto: string): Observable<object> {
        const apiGet = this.apiBaseUrl + '/cryptos/getTotalCrypto/' + crypto;
        return this.http.get(apiGet, { responseType: 'json' });
    }

    getDepensesCrypto(crypto: string): Observable<object> {
        const apiGet = this.apiBaseUrl + '/cryptos/getDepensesCrypto/' + crypto;
        return this.http.get(apiGet, { responseType: 'json' });
    }

    getCurrentCryptoValue(crypto: string): Observable<object> {
        //crypto = "crypto-com-chain"
        const apiGet = 'https://api.coingecko.com/api/v3/simple/price?ids=' + crypto + '&vs_currencies=EUR';
        return this.http.get(apiGet, {
            headers:
                {
                    'responseType': 'json',
                    'X-RapidAPI-Key': '5f08ed2f58msh920e89f15d7af3dp10dfe6jsn31d4389e45af'
                }
        });
    }
}
