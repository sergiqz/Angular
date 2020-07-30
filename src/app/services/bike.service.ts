import {Injectable} from '@angular/core'

@Injectable()
export class BikeService{

    private bikes:any[]= [
        {
            name:"bicicleta roja",
            bio:"Super bicicleta veloz 2000",
            img:"assets/img/bike2.jpg",
            aparicion: "2010-10-11",
            marca:"Speed"
        },
        {
            name:"bicicleta azul",
            bio:"Super bicicleta veloz 3000",
            img:"assets/img/bicilcleta.jpg",
            aparicion: "2011-10-11",
            marca:"Speed"
        }

    ];

    constructor(){
        console.log("Ready Service !!");
    }

    getBikes(){
        return this.bikes;
    }
}
