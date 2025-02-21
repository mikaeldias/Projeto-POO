import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCadastroComponent } from './new-cadastro/new-cadastro.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cadastro', component: NewCadastroComponent}
];
