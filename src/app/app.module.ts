import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { CurrentworkComponent } from './currentwork/currentwork.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ProgressComponent } from './progress/progress.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { TrainingModuleComponent } from './TrainingModule/trainingmodule.component';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './Services/user.service';
import { AuthGuard } from './Services/auth-gaurd.service';

const appRoutes :Routes=[
   {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
   {path:'login',component:LoginComponent},
   {path:'training',component:TrainingModuleComponent,canActivate:[AuthGuard]},
   {path:'',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CurrentworkComponent,
    QuizzesComponent,
    ProgressComponent,
    ContributionsComponent,
    TrainingModuleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
