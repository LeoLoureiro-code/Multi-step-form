import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'go-back-button',
  imports: [],
  templateUrl: './go-back-button.html',
  styleUrl: './go-back-button.css',
})
export class GoBackButton {

  @Output()
  PreviousStep = new EventEmitter<void>();
}
