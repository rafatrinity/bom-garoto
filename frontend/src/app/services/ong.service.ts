import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OngService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(environment.apiUrl + 'ongs');
  }
  getByName(name: string) {
    return this.http.get(environment.apiUrl + 'ongs/' + name);
  }
  createNew(ong: any) {
    return this.http.post(environment.apiUrl + 'ongs', ong);
  }
}
