import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  API_URL = 'https://api-cloudcomputing-utn.herokuapp.com/api/';
  constructor() {}
}
