import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
    imports: [
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    selector: 'app-login',
    styleUrl: './login.css',
    templateUrl: './login.html',
    standalone: true
})
export class Login implements OnInit {

    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
      this.criarFormulario(); //Função chamada na hora que carrega o componente
    }


    private criarFormulario(): void {
        this.loginForm = this.formBuilder.group({
            login: [ "" , [ Validators.required, Validators.minLength(6) ]],
            senha: [ "" , Validators.required]
        });
        console.log("LoginForm", this.loginForm);
        console.log("Olá");
    }

    public enviarDados(){
        console.log(this.loginForm.getRawValue());
        //url = localhost:8080/filmes
    }

}
