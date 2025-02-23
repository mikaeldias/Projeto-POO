import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Classes
import { Pessoa } from './pessoa';
import { Listagem } from './lista_pessoa';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listagemTotal: Listagem = new Listagem();
  id: number = 0;
  nome: string = '';
  cpf: string = '';
  idade: number = 0;
  estado_nascimento: string = '';
  email: string = '';
  categoria: string = '';
  
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
  }

  removerPessoa(indice: number) {
    this.listagemTotal.removerPessoa(indice)
    
  console.log(this.listagemTotal)
  }
}
