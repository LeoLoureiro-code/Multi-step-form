import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'confirm',
  imports: [],
  templateUrl: './confirm-button.html',
  styleUrl: './confirm-button.css',
})
export class Confirm {

  @Output()
  Confirm = new EventEmitter<void>();

}
