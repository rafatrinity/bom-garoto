import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(environment.apiUrl + 'incidents');
  }
  getByName(name: string) {//ainda não implementado
    return this.http.get(environment.apiUrl + 'incidents/' + name);
  }
  createNew(incident: any) {
    return this.http.post(environment.apiUrl + 'incidents', incident);
  }
  deleteById(id: number) {
    return this.http.get(environment.apiUrl + 'incidents/' + id);
  }
}
