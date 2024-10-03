import { Component, OnInit } from '@angular/core';
import { LoveResult, LoveService } from '../love.service';
import { ActionSheetController, AlertController, ModalController, ToastController, ViewWillEnter } from '@ionic/angular';
import { Router } from '@angular/router';
import { ResultModalComponent } from './result-modal/result-modal.component';
import { mergeMap } from 'rxjs';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements ViewWillEnter {

  history: LoveResult[] = [];

  constructor(
    private service: LoveService,
    private alertCtrl: AlertController,
    private toasterCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  ionViewWillEnter() {
    this.service.getAll().subscribe({
      next: res => this.history = res
    });
  }

  // get history() {
  //   return this.service.history
  // }

  async clearHistory() {
    const alert = await this.alertCtrl.create({
      header: `Vider l'historique`,
      message: `Voulez-vous vider l'historique`,
      buttons: [
        { text: 'Annuler', handler: () => alert.dismiss() },
        {
          text: 'Confirmer', handler: async () => {
            this.service.clear().pipe(
              mergeMap(() => this.service.getAll())
            ).subscribe({
               next: async res => {
                this.history = res
                const toaster = await this.toasterCtrl.create({
                  message: 'Historique vidé',
                  duration: 1500,
                  position: 'bottom'
                })
                await toaster.present();
              }
            })

          }
        }
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
          text: 'Partager',
          handler: () => {
            Share.share({
              title: 'A qui partager',
              text: `${result.fname} x ${result.sname} = ${result.percentage}%`,
            })
          }
        },
        {
          text: `Supprimer`,
          handler: async () => {
            this.service
            .remove(result)
            .pipe(
              mergeMap(() => this.service.getAll())
            )
            .subscribe({
              next: async (res) => {
                this.history = res;
                const toaster = await this.toasterCtrl.create({
                  message: 'Résultat supprimé',
                  duration: 1500,
                  position: 'bottom',
                })
                toaster.present()
              }
            })
          }
        }
      ]
    })
    await actionSheet.present()
  }

  async openModal(result: LoveResult) {
    const modal = await this.modalCtrl.create({
      component: ResultModalComponent,
      componentProps: { loveResultInput: result }
    });
    await modal.present();
  }
}
