import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  public readonly http = inject(HttpClient);
  public apiUrl = environment.apiUrl;

  //https://api.cnelep.gob.ec/servicios-linea/v1/notificaciones/consultar/0924481583/IDENTIFICACION
  public getNotificaciones(cedula: string, tipo: string) {
    return this.http.get(`${this.apiUrl}${cedula}/${tipo}`);
  }
}
