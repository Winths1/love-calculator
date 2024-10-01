import { Component, OnInit } from '@angular/core';
import { LoveService } from '../love.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(
    private service: LoveService,
    private alertCtrl: AlertController,
    private toasterCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  get history() {
    return this.service.history
  }

  async clearHistory() {
    const alert = await this.alertCtrl.create({
      header: `Vider l'historique`,
      message: `Voulez-vous vider l'historique`,
      buttons: [
        { text: 'Annuler', handler: () => alert.dismiss() },
        { text: 'Confirmer', handler: async () => {
          this.service.clear();
          const toaster = await this.toasterCtrl.create({
            message: 'Historique vidé',
            duration: 1500,
            position: 'bottom'
          })
          await toaster.present();
        }}
      ]
    });
    await alert.present();
  }
}
