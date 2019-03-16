import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import { FeedbackService} from './feedback.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Http } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import {MatNativeDateModule, MatSliderModule, DateAdapter} from '@angular/material';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { ConferenceroomComponent } from './conferenceroom/conferenceroom.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { Login1Component } from './login1/login1.component';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
    ConferenceroomComponent,
    FeedbackformComponent,
    Login1Component,
    PictureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
     MatInputModule,
     MatRadioModule,
    RouterModule,
    MatToolbarModule, MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
     MatSelectModule,
     MatCardModule,
     MatInputModule,
   MatDatepickerModule,
   MatProgressSpinnerModule,
    MatNativeDateModule,
    MatSliderModule,
       RouterModule.forRoot([
      {path: '',component:LoginComponent},
      {path: 'login',component:LoginComponent},
      {path: 'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
      {path: 'todos',component:ListTodosComponent,canActivate:[RouteGuardService]},
      {path: 'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
      {path: 'feedback',component:FeedbackformComponent,canActivate:[RouteGuardService]},
      {path: 'conference',component:ConferenceroomComponent,canActivate:[RouteGuardService]},
      {path: 'login1',component:Login1Component,canActivate:[RouteGuardService]},
      {path: 'todos/:id',component:TodoComponent,canActivate:[RouteGuardService]},

      {path: '**',component:ErrorComponent}
      
    ])
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpIntercepterBasicAuthService,multi:true},
    MatDatepickerModule,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
