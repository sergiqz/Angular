import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BikeService } from './services/bike.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
