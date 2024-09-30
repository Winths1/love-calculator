import { Component, Input, OnInit } from '@angular/core';
import { LoveResult } from 'src/app/love.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent  implements OnInit {

  @Input({ required: true }) loveResultInput!: LoveResult

  constructor() { }

  ngOnInit() {}

}
