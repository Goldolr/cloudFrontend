import { Component, OnInit } from '@angular/core';
import { TelefonosService } from '../../services/telefonos.service';

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.component.html',
  styleUrls: ['./telefonos.component.css'],
})
export class TelefonosComponent implements OnInit {
  telefonos = [];
  telefono = {
    marca: '',
    modelo: '',
    stock: 0,
  };
  constructor(private telefonosService: TelefonosService) {}

  ngOnInit(): void {
    this.getTelefonos();
  }

  getTelefonos() {
    this.telefonosService.getTelefonos().subscribe((res: any) => {
      console.log(res);
      this.telefonos = res.data;
    });
  }

  createTelefono() {
    this.telefonosService.createTelefono(this.telefono).subscribe(
      (res: any) => {
        console.log(res);
        this.getTelefonos();
      },
      (error) => {
        console.log(error);
        this.getTelefonos();
      }
    );
  }

  updateTelefono(item) {
    this.telefonosService.updateTelefono(item).subscribe(
      (res: any) => {
        console.log(res);
        this.getTelefonos();
      },
      (error) => {
        console.log(error);
        this.getTelefonos();
      }
    );
  }

  deleteTelefono(item) {
    this.telefonosService.deleteTelefono(item).subscribe(
      (res: any) => {
        console.log(res);
        this.getTelefonos();
      },
      (error) => {
        console.log(error);
        this.getTelefonos();
      }
    );
  }
}
