import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-button',
  imports: [],
  templateUrl: './next-button.html',
  styleUrl: './next-button.css',
})
export class NextButton {

@Output()
NextStep = new EventEmitter<void>();

}
