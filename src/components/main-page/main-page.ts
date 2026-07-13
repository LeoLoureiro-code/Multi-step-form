import { Component } from '@angular/core';
import { PersonalInfoForm } from "../personal-info-form/personal-info-form";
import { NextButton } from '../next-button/next-button';
import { StepsBar } from "../steps-bar/steps-bar";
import { GoBackButton } from "../go-back-button/go-back-button";
import { SelectPlan } from '../select-plan/select-plan';
import { AddOn } from '../add-on/add-on';
import { Confirmation } from '../confirmation/confirmation';
import { FinalMessage } from '../final-message/final-message';
import { MultiStepsService } from '../../services/multi-steps-service/multi-steps-service';

@Component({
  selector: 'main-page',
  imports: [PersonalInfoForm, SelectPlan, NextButton, StepsBar, Confirmation, FinalMessage, GoBackButton, AddOn],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
   step:number;

   constructor(private multiStepService:MultiStepsService){
     this.step = this.multiStepService.step;
   }


   NextStep(){
    this.multiStepService.NextStep();
    this.step = this.multiStepService.step;
    console.log(this.step);
   }

   PreviousStep(){
    this.multiStepService.PreviousStep();
    this.step = this.multiStepService.step;
    console.log(this.step);
   }

}
