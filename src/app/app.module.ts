import { NgModule } from '@angular/core';
import { BrowserModule ,HammerModule} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//  "@angular/fire/auth"
import { environment } from '../environments/environment';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//  "@angular/fire/auth"
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './service/auth.service';
import { ShareModule } from './shared/share.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,HammerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,AngularFirestoreModule,
    AngularFireStorageModule,AngularFireDatabaseModule
    
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
``