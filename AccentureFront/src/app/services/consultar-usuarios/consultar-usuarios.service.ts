import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsultarUsuariosService {
  urlService: string = environment.url;
  constructor(private http: HttpClient) { }

  buscarUsuario(data): Observable<any>{
    return this.http.get(this.urlService + 'find-user?idUsuario=' + data);
  }
}
