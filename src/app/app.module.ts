import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/* importar nuestros componentes*/
import { CursoComponent } from './micomponente/curso.component';

/*importar firebase*/
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

/* Configuración para conectarse a FIREBASE 
  (copia en este lugar tus configuraciones que te genera firebase)
*/
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_DOMINIO_FIREBASE.firebaseapp.com",
    databaseURL: "TU_DOMINIO_FIREBASE.firebaseio.com",
    storageBucket: "TU_DOMINIO_FIREBASE.appspot.com",
    messagingSenderId: "TU_NUMERO_LARGO"
};


export const AuthConfig = {
  providers: AuthProviders.Google,
  method: AuthMethods.Popup
}
@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,AuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
