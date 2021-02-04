import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  message:string="";
  onAddCart(){
    this.message="Data Saved Successfully!!!";
      }
    
  constructor() { }

  ngOnInit(): void {
  }

}
export class ExpansionStepsExample {
  
}