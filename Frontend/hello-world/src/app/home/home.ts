import { Component } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  nome: string = "Fulano";

  numero: number = 1;

  condicional: boolean = false;

  condicionalVerdadeira: boolean = true;


  lista:Pessoa[] = [
    { nome:"Cicrano", idade:30 },
    { nome:"Fulano", idade:20 },
    { nome:"Beltrano", idade:10 },
    { nome:"Abella", idade:59 },
    { nome:"Fabricio", idade:80 }
  ];

  indefinido: undefined = undefined;

  teste = null;

  public retornaNome() {
    return this.lista[0].idade + " de Tal";
  }

}
