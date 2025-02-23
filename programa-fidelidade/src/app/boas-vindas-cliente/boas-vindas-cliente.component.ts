import { Component, OnInit } from '@angular/core';
import { NewCadastroBlackComponent } from '../new-cadastro-black/new-cadastro-black.component';
import { PessoaService } from '../_services/pessoa.service';
import { Pessoa } from '../pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boas-vindas-cliente',
  imports: [CommonModule],
  templateUrl: './boas-vindas-cliente.component.html',
  styleUrl: './boas-vindas-cliente.component.css'
})
export class BoasVindasClienteComponent implements OnInit{
  pessoa: Pessoa | null = null;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoa = this.pessoaService.getPessoa();
  }
}
