import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { EmpleadosComponent } from './empleados/empleados.component';


const routes: Routes = [
{path:'departamentos',component:DepartamentosComponent},
{path:'empleados',component:EmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartamentosComponent,EmpleadosComponent];
