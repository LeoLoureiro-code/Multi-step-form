import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiStepsService {
  
  step:number = 1;

  NextStep(){
    if(this.step < 5){
      this.step ++; 
    }
  }

  PreviousStep(){
    if(this.step >= 5){
      this.step --;
    }
  }

}

