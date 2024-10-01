import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LoveResult, LoveService } from '../love.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnChanges {

  @Input() id!: string;

  title = 'Calculator';

  placeholder1  = 'Batman'
  placeholder2 = 'Superman'

  name1!: string;
  name2!: string;

  loveResult!: LoveResult
  loading = false

  constructor(
    private service: LoveService
  ) { }

  ngOnChanges() {
    if (!this.id) return;

    const result = this.service.get(this.id)
    if (!result) return;

    this.name1 = result.fname
    this.name2 = result.sname
  }

  onSubmitFormOutput([name1, name2]: [string, string]) {
    this.loading = true
    this.service.calculate(name1, name2).subscribe({
      next: value => this.loveResult = value,
      complete: () => this.loading = false,
      error: () => this.loading = false,
    })
  }
}
