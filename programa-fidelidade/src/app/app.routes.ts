import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCadastroComponent } from './new-cadastro-gold/new-cadastro.component';
import { BoasVindasClienteComponent } from './boas-vindas-cliente/boas-vindas-cliente.component';
import { NewCadastroPlatinumComponent } from './new-cadastro-platinum/new-cadastro-platinum.component';
import { NewCadastroBlackComponent } from './new-cadastro-black/new-cadastro-black.component';
import { ExtranetComponent } from './extranet/extranet.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: NewCadastroComponent},
    {path: 'cliente', component: BoasVindasClienteComponent},
    {path: 'Gold', component: NewCadastroComponent},
    {path: 'Platinum', component: NewCadastroPlatinumComponent},
    {path: 'Black', component: NewCadastroBlackComponent},
    {path: 'Extranet', component: ExtranetComponent}
];
