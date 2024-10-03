import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LoveResult, LoveService } from '../love.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnChanges, OnInit {

  @Input() id!: string;

  title! : string;

  placeholder1  = 'Batman'
  placeholder2 = 'Superman'

  name1!: string;
  name2!: string;

  loveResult!: LoveResult
  loading = false

  constructor(
    private service: LoveService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.get('title').subscribe({
      next: value => this.title = value
    })
  }

  ngOnChanges() {
    if (!this.id) return;

    this.service.get(this.id).subscribe({
      next: result => {
        this.name1 = result.fname
        this.name2 = result.sname
      },
    })
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
