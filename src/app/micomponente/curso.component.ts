/* El nucleo de Angular*/
import { Component } from '@angular/core';

/* ReactiveX JS */
import 'rxjs/add/operator/toPromise';

/* Realizar Peticiones HTTP */
import { Http } from '@angular/http';

/* importar firebase*/
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AuthProviders, AuthMethods} from 'angularfire2';

/* Decorator para inicializar datos de nuestro componente*/
@Component({
    selector : 'app-curso',
    templateUrl : './curso.component.html',
    styleUrls : ['curso.component.css']
})

export class CursoComponent {
    /* variable para obtener datos externos */
    url: String = 'https://jsonplaceholder.typicode.com/posts';
    http: Http;
    error: any;
    losposts: any;
    /*variables para iniciar firebase*/
    login: AngularFire;

    minombre: String = 'Jose';
    viewMsg: Boolean = false;
    viewList: Boolean = true;
    lista: any = [
        {
            name: 'Benjamin'
        },
        {
            name: 'Sole'
        },
        {
            name: 'Pablo'
        },
        {
            name: 'Pollo'
        },
        {
            name: 'Kaya'
        }
    ];
    constructor(private httpe: Http, private af: AngularFire){
        this.http = httpe;
        /* obteniendo conexion firebase*/
        this.login = af;
    }

    mostrar(): void {
        this.viewMsg = !this.viewMsg;
    }

    mostrarLista(): void {
        this.viewList = !this.viewList;
    }

    /* Obtener los Post de typicode */
    getPosts() {
        return this.http.get(this.url.toString())
        .toPromise()
        .then( response => {
            this.losposts =  response.json();
        })
        .catch( this.error );
    }

    /* Aqui iniciamos el Popup, para logearnos con Google */
    signin(): void {
        this.login.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        });
  }
}
