import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  selected:any
  message:string="";
  message2:string="";
  msg1(){
    this.message="Data Saved Successfully!!!";
      }
      msg2(){
        this.message2="Data Saved Successfully!!!";
          }
  constructor() { }

  ngOnInit(): void {
  }

}
export class NgbdCarouselBasic {
}
export class TabGroupBasicExample {}
export class SelectValueBindingExample {}
export class FormFieldHintExample {}

export class FormFieldAppearanceExample {}