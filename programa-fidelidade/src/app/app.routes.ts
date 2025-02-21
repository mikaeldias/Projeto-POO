import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCadastroComponent } from './new-cadastro/new-cadastro.component';
import { BoasVindasClienteComponent } from './boas-vindas-cliente/boas-vindas-cliente.component';
import { BoasVindasFuncionarioComponent } from './boas-vindas-funcionario/boas-vindas-funcionario.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: NewCadastroComponent},
    {path: 'cliente', component: BoasVindasClienteComponent},
    {path: 'funcionario', component: BoasVindasFuncionarioComponent},
];
