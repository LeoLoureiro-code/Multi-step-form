import { Component } from '@angular/core';
import { PersonalInfoForm } from "../personal-info-form/personal-info-form";
import { NextButton } from '../next-button/next-button';

@Component({
  selector: 'main-page',
  imports: [PersonalInfoForm,NextButton],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
