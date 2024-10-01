import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  implements OnChanges {

  @Input({ required: true }) placeholder1Input!: string
  @Input({ required: true }) placeholder2Input!: string

  @Input({ required: true }) name1Input!: string
  @Input({ required: true }) name2Input!: string

  @Output() submitFormOutput = new EventEmitter<[string, string]>()

  form = new FormGroup({
    name1: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    name2: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    })
  })

  constructor() { }

  ngOnChanges() {
    const { name1, name2 } = this.form.controls
    name1.setValue(this.name1Input)
    name2.setValue(this.name2Input)
  }

  onSubmitForm() {
    if ( this.form.invalid ) {
      return this.form.markAllAsTouched();
    }

    const { name1, name2 } = this.form.controls;

    this.submitFormOutput.emit(
      [name1.value, name2.value]
    );
  }

}
