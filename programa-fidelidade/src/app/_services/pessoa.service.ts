import { Injectable } from '@angular/core';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoa: Pessoa | null = null
  constructor() { }

  setPessoa(pessoa: Pessoa): void{
    this.pessoa = pessoa;
  }

  getPessoa(): Pessoa | null{
    return this.pessoa;
  }
}
