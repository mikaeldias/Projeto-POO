import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { NewCadastroPlatinumComponent } from "../new-cadastro-platinum/new-cadastro-platinum.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, RouterLink, NavbarComponent, NewCadastroPlatinumComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nome: string = 'Mikael'
}
