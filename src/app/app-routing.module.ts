import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import{GiftCardComponent} from './gift-card/gift-card.component';
import {CardComponent} from './card/card.component';
import {Room1Component} from './room1/room1.component';
import {Urban1Component} from './urban1/urban1.component';
import {GridComponent} from './grid/grid.component';
import { Urban2Component } from './urban2/urban2.component';
import { Urban3Component } from './urban3/urban3.component';

const routes: Routes = [
  {
    component:HotelsComponent,
    path:'hotel'
  },
  {
    component:GiftCardComponent,
    path:'giftcard'
  },
  {
    component:CardComponent,
    path:'card'
  },
  {
    component:Room1Component,
    path:'room1'
  },
  {
    component:Urban1Component,
    path:'urban1'
  },
  {
    component:GridComponent,
    path:'grid'
  },{
    component:Urban2Component,
    path:'urban2'
  },
  {
    component:Urban3Component,
    path:'urban3'
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
