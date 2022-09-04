import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  validador: boolean = false;
  userValido: string = 'admin';
  passValida: string = 'admin';

  constructor(private router: Router) { }

  canActivate() {
    if (this.validador) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

  validarCredenciales(user: string, pass: string) {
    if (user == this.userValido && pass == this.passValida) {
      this.validador = true;
      this.router.navigate(['principal']);
      return true;
    } else {
      return false;
    }
  }

  validarRecuperacionContrasena(user: string, pass: string, newpass: string) {

    let msje: string = '';

    if (user == this.userValido && pass == this.passValida) {
      if (newpass != pass) {
        this.passValida == newpass;
        msje = 'La nueva contraseña ha sido establecida con éxito'
      } 
    } else {
        msje = 'No ha sido posible restablecer su contraseña. por favor intente nuevamente'
    }
    return msje;
  }
}

