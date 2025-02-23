import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { Listagem } from '../lista_pessoa';
import { PessoaService } from '../_services/pessoa.service';
@Component({
  selector: 'app-extranet',
  imports: [],
  templateUrl: './extranet.component.html',
  styleUrl: './extranet.component.css'
})
export class ExtranetComponent implements OnInit{
  pessoa: Pessoa | null = null;

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoa = this.pessoaService.getPessoa();  // Obtém a pessoa do serviço
  }
}