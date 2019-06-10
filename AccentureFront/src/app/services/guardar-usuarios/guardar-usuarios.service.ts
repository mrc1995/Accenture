import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './../../utils/usuario';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuardarUsuariosService {
  urlService: string = environment.url;
  constructor(private http: HttpClient) { }

  saveUser(data: Usuario): Observable<any>{
    return this.http.post(this.urlService+'save-users', data);
  }
}
