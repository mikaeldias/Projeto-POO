import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// classes

import { Pessoa } from '../pessoa';
import { Listagem } from '../lista_pessoa';
import { PessoaService } from '../_services/pessoa.service';


@Component({
  selector: 'app-new-cadastro-platinum',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './new-cadastro-platinum.component.html',
  styleUrl: './new-cadastro-platinum.component.css'
})
export class NewCadastroPlatinumComponent {
  listagemTotal: Listagem = new Listagem();
    id: number = 0;
    nome: string = '';
    cpf: string = '';
    idade: number = 0;
    estado_nascimento: string = '';
    email: string = '';
    categoria: string = 'Platinum'
    
    constructor(private router: Router, private pessoaService: PessoaService) {}
    
    adcionarPessoa() {
      const AddPessoa:Pessoa = new Pessoa(
        this.id,
        this.nome,
        this.cpf,
        this.idade,
        this.estado_nascimento, 
        this.email,
        this.categoria,
      );
      this.listagemTotal.adcicionaPessoa(AddPessoa)
      console.log(this.listagemTotal)
      this.router.navigate(['/cliente']);
      this.pessoaService.setPessoa(AddPessoa)
    }
  
    removerPessoa(indice: number) {
      this.listagemTotal.removerPessoa(indice)
    }
  }

