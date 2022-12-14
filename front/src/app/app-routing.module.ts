import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaClienteComponent } from './dashboard/alta-cliente/alta-cliente.component';
import { AltaPedidoComponent } from './dashboard/alta-pedido/alta-pedido.component';
import { HomeComponent } from './dashboard/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'',redirectTo : 'layout',pathMatch : 'full'}, 
  {path:'layout',component : LayoutComponent},
  {path:'altaCliente' , component : AltaClienteComponent},
  {path:'altaPedido' , component : AltaPedidoComponent},
  {path:'home' , component : HomeComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
