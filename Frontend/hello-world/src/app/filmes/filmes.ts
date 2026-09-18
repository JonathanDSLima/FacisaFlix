import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule
  ],
  selector: 'app-filmes',
  styleUrl: './filmes.css',
  templateUrl: './filmes.html',
})
export class Filmes implements OnInit {

  filmeForm!: FormGroup;
  listaFilmes = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.criarFormulario(); //Função chamada na hora que carrega o componente

    this.filmeForm.valueChanges.pipe(debounceTime(400), take(2)).subscribe((res) => { //O valuesChanges funciona como observable, logo, nele podemos fazer N coisas durante uma requisição ou alteração de dados do formulário
      console.log(res);
    })

    this.httpClient.get("http://localhost:8080/filmes").subscribe((res: any) => {
      console.log(res);
    })

  }


  private criarFormulario(): void { // Função que cria o formulario passando cada um dos campos JSON
    this.filmeForm = this.formBuilder.group({
      titulo: ["", Validators.required],
      genero: ["", Validators.required],
      sinopse: ["", Validators.required],
      autor: ["", Validators.required],
      anoLancamento: [null, Validators.required],
      duracao: [null, Validators.required]
    });
    console.log("filmeForm", this.filmeForm);
  }

  public enviarDados() { // Função responsável por enviar os dados para o backend
    console.log(this.filmeForm.valid);
    console.log(this.filmeForm.getRawValue());
    if (this.filmeForm.valid) { //url = localhost:8080/filmes
      console.log("Envie para o back end");
      this.httpClient.post("http://localhost:8080/filmes", this.filmeForm.getRawValue()).subscribe(() => {
    });
    }
  }

}
