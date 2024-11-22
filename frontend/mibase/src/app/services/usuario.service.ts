import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios'; // Cambia la URL si es necesario

  constructor(private http: HttpClient) {}

  fetchUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl); // Solicitud GET para obtener el mensaje
  }

  postUser(): Observable<any> {
    return this.http.post<any>(this.apiUrl, {}); // POST vacío
  }

  updateUser(): Observable<any> {
    return this.http.put<any>(this.apiUrl, {}); // PUT vacío
  }

  deleteUser(): Observable<any> {
    return this.http.delete<any>(this.apiUrl); // DELETE sin cuerpo
  }
}

