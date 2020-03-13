import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountsearchComponent } from './components/accountsearch/accountsearch.component';
import { MembersComponent } from './components/members/members.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'members', component:MembersComponent },
  { path:'accountsearch', component:AccountsearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
