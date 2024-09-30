import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent  implements OnInit {

  @Input({ required:true }) formControlInput!: FormControl
  @Input({ required:true }) placeholderInput!: string
  @Input({ required:true }) labelInput!: string

  constructor() { }

  ngOnInit() {}

}
