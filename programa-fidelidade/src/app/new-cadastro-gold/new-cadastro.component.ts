import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { PessoaService } from '../_services/pessoa.service';

// classes

import { Pessoa } from '../pessoa';
import { Listagem } from '../lista_pessoa';

@Component({
  selector: 'app-new-cadastro',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './new-cadastro.component.html',
  styleUrl: './new-cadastro.component.css'
})
export class NewCadastroComponent {
    listagemTotal: Listagem = new Listagem();
      id: number = 0;
      nome: string = '';
      cpf: string = '';
      idade: number = 0;
      estado_nascimento: string = '';
      email: string = '';
      categoria: string = 'Gold'
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
        this.listagemTotal.adcicionaPessoa(AddPessoa);
        console.log(this.listagemTotal);
        this.router.navigate(['/cliente']);
        this.pessoaService.setPessoa(AddPessoa);
      }
    
      removerPessoa(indice: number) {
        this.listagemTotal.removerPessoa(indice)
      }
}
