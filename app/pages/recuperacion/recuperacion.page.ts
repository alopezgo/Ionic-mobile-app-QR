import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  mdluser: string = '';
  mdlpass: string= '';
  mdlnewpass: string= '';

  constructor(private router: Router, private alertController: AlertController,
    private db: DatabaseService) { }

  ngOnInit() {
  }

  async mostrarMensajeCambioContrasena(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Información',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async recuperarContrasena() {
    const cambioContrasena = await this.alertController.create({
      header: 'Reestablecer mi contraseña',
      buttons: [
        {
          text: 'OK',
          handler: datos => this.mostrarMensajeCambioContrasena(this.db.validarRecuperacionContrasena(datos.user, datos.pass, datos.newpass))
        }
      ]
    })

  }

  

}
