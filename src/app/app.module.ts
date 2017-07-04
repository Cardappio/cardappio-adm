import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClickOutsideModule } from 'ng-click-outside';

// Import the AF2 Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginModule } from './pages/login/login.module';
import { CardapioModule } from './pages/menu/cardapio/cardapio.module';
import { PerfilModule } from './pages/menu/perfil/perfil.module';
import { TablesModule } from './pages/menu/tables/tables.module';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCcAlOaliIlgSVnz-KoUkZOG9xbRybpqX4",
  authDomain: "cardappio-60ff4.firebaseapp.com",
  databaseURL: "https://cardappio-60ff4.firebaseio.com",
  storageBucket: "cardappio-60ff4.appspot.com",
  messagingSenderId: "586001503807"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClickOutsideModule,
    FormsModule,
    HttpModule,
    LoginModule,
    CardapioModule,
    PerfilModule,
    TablesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
