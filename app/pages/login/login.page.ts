import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdlusuario: string = '';
  mdlcontrasena: string = '';

  constructor(private router: Router, private alertController: AlertController,
    private db: DatabaseService) { }
  
  ngOnInit() {
  }

  Ingresar() {
    let validador = this.db.validarCredenciales(this.mdlusuario, this.mdlcontrasena);
    if (validador = true) {
      this.router.navigate(['principal']);
    } else {
      this.mostrarMensaje
        ('Credenciales Inválidas');
    }

  }
  async mostrarMensaje(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Información',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  navegar() {

    let extras: NavigationExtras = {
      state: {
        usuario: this.mdlusuario,
        mensaje: 'Bienvenid@'
      }
    }
    this.router.navigate(['principal'], extras);
  }

}
