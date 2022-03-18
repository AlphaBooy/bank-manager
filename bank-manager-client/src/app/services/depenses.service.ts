import {HttpClient, HttpParams} from '@angular/common/http';
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

  getDepenseByCategorie(year: string | number): Observable<object> {
      const apiGet = this.apiBaseUrl + '/depenses/categoriesDetails/year/' + year;
      return this.http.get(apiGet, { responseType: 'json' });
  }

    getDepenseCategorie(IDCategorie: number): Observable<object> {
        const apiGet = this.apiBaseUrl + '/depenses/categoriesDetails/' + IDCategorie;
        return this.http.get(apiGet, { responseType: 'json' });
    }

    getDepenseByMois(year: string | number): Observable<object> {
        const apiGet = this.apiBaseUrl + '/depenses/mois/' + year;
        return this.http.get(apiGet, { responseType: 'json' });
    }

    newDepense(date: string, montant: number, IDBeneficiaire: number, IDCategorie: number, Obligatoire: number, Description: string): Observable<object> {
        const apiPost = this.apiBaseUrl + '/depenses';
        const params = new HttpParams()
            .set("date", date)
            .set("montant", montant)
            .set("IDBeneficiaire", IDBeneficiaire)
            .set("IDCategorie", IDCategorie)
            .set("Obligatoire", Obligatoire)
            .set("Description", Description);
        return this.http.post(apiPost, params );
    }
}
