import { Routes } from '@angular/router';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { EventosComponent } from './eventos/eventos.component';

export const routes: Routes = [
    {path: "sobrenos", component: SobrenosComponent},
    {path: "navbar", component: NavbarComponent},
    {path: "cardapio", component: CardapioComponent},
    {path: "eventos", component: EventosComponent},
    {path: '', redirectTo:'/navbar', pathMatch: 'full'}, /*rota principal mudar depois*/
];
