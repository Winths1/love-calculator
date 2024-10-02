import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoveResult } from 'src/app/love.service';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss'],
})
export class ResultModalComponent  implements OnInit {

  @Input({required: true }) loveResultInput!: LoveResult;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {}

}
