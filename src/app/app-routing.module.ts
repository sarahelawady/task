import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' , redirectTo:'home', pathMatch:'full'},
  {path:'home' ,  component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' ,  component:ContactsComponent},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
