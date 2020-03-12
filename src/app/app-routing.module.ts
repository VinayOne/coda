import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountsearchComponent } from './components/accountsearch/accountsearch.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'accountsearch', component:AccountsearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
