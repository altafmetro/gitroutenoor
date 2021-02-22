import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import { HomeComponent } from './home/home.component'; 
import { DashComponent } from './dash/dash.component'; 
 


@NgModule({ 
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    DashComponent 
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot([ 
      { path: 'home', component: HomeComponent }, 
      { path: 'dash', component:DashComponent }  
    ]) 
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 