import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  bikes:any[] = [];
  constructor(private _bikeService:BikeService) { 

  }

  ngOnInit(): void {
    this.bikes = this._bikeService.getBikes();

    console.log(this.bikes);

  }

}
