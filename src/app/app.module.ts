import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule, AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { LoginComponent } from './login/login.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export  function appFactory() {
  return 'auth_shit';
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BlogpostComponent,
    BlogpostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, appFactory,
      {
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: 'login',
        authGuardLoggedInURL: '',// Password length min/max in forms independently of each componenet min/max.
        guardProtectedRoutesUntilEmailIsVerified: false,
        enableEmailVerification: false, // default: true
      })
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
