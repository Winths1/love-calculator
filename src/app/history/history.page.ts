import { Component, OnInit } from '@angular/core';
import { LoveResult, LoveService } from '../love.service';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(
    private service: LoveService,
    private alertCtrl: AlertController,
    private toasterCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router
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

  async actionSheet(result: LoveResult) {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: `Reprendre`,
          handler: () => this.router.navigate(['/calculator', result.id])
        },
        {
          text: `Supprimer`,
          handler: async () => {
            this.service.remove(result)
            const toaster = await this.toasterCtrl.create({
              message: 'Résultat supprimé',
              duration: 1500,
              position: 'bottom',
            })
            toaster.present()
          }
        }
      ]
    })
    await actionSheet.present()
  }
}
