import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountsearchComponent } from './components/accountsearch/accountsearch.component';
import { MembersComponent } from './components/members/members.component';
import { TransactionsComponent } from './components/transactions/transactions.component';


const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full' },
  { path:'home', component:HomeComponent },
  { path:'members', component:MembersComponent },
  { path:'accountsearch', component:AccountsearchComponent },
  { path:'update-transactions', component: TransactionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
