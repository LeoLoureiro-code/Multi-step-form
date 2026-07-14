import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'confirm',
  imports: [],
  templateUrl: './confirm.html',
  styleUrl: './confirm.css',
})
export class Confirm {

  @Output()
  Confirm = new EventEmitter<void>();

}
