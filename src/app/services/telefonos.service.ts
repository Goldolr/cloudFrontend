import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class TelefonosService {
  constructor(private http: HttpClient, private envService: EnvService) {}

  getTelefonos() {
    return this.http.get(this.envService.API_URL + 'telefonos');
  }

  createTelefono(telefono) {
    return this.http.post(this.envService.API_URL + 'telefonos', telefono);
  }

  updateTelefono(telefono) {
    return this.http.put(
      this.envService.API_URL + 'telefonos/' + telefono.id_telefono,
      telefono
    );
  }

  deleteTelefono(telefono) {
    return this.http.delete(
      this.envService.API_URL + 'telefonos/' + telefono.id_telefono
    );
  }
}
