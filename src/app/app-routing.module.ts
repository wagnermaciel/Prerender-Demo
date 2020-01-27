import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex.component';

const routes: Routes = [
  { path: '', redirectTo: '/1', pathMatch: 'full' },
  { path: '**', component: PokedexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
