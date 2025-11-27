import { Routes } from '@angular/router';
import { ComissaoComponent } from './pages/comissao/comissao.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';  

export const routes: Routes = [
  { path: '', redirectTo: 'comissao', pathMatch: 'full' },
  { path: 'comissao', component: ComissaoComponent },
  { path: 'estoque', component: EstoqueComponent }
];
