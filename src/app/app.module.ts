import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { User11Component } from './user11/user11.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HotelsComponent } from './hotels/hotels.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsComponent } from './rooms/rooms.component';
import { Room1Component } from './room1/room1.component';
import { OffersComponent } from './offers/offers.component';
import { Urban1Component } from './urban1/urban1.component';
import { CustomerComponent } from './customer/customer.component';
import { Urban2Component } from './urban2/urban2.component';
import { Urban3Component } from './urban3/urban3.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    User11Component,
    CardComponent,
    GridComponent,
    HotelsComponent,
    GiftCardComponent,
    RoomsComponent,
    Room1Component,
    OffersComponent,
    Urban1Component,
    CustomerComponent,
    Urban2Component,
    Urban3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    NgbModule
  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
