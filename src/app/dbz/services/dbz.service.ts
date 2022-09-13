import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    //Primero Data
    
    private _personajes:Personaje[] = [
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    //Luego Geters & Setters
    get personajes():Personaje[] {
        return [...this._personajes];
    }

    //Luego Constructor
    constructor(){
        console.log('Servicio Inicializado')
    }

    //Luego los métodos}

    agregarPersonaje(personaje:Personaje) {
        this._personajes.push( personaje );
    }
}