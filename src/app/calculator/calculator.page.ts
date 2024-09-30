import { Component, OnInit } from '@angular/core';
import { LoveResult, LoveService } from '../love.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  title = 'Calculator';

  placeholder1  = 'Batman'
  placeholder2 = 'Superman'

  loveResult!: LoveResult

  constructor(
    private service: LoveService
  ) { }

  ngOnInit() {
  }

  onSubmitFormOutput([name1, name2]: [string, string]) {
    this.service.calculate(name1, name2).subscribe({
      next: value => this.loveResult = value
    })
  }
}