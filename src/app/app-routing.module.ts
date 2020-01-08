import { ContactComponent } from './button/contact/contact.component';
import { InfoComponent } from './button/info/info.component';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './button/home/home.component';


const routes: Routes = [
                        {path:"button" ,component:ButtonComponent,
                          children: [
                          { path: 'info', component:InfoComponent},
                          { path: 'contact', component:ContactComponent},
                          { path: 'home', component:HomeComponent}
                                    ] 
                        }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
