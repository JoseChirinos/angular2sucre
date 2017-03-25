# Primeros pasos en angular 2
<p align="center">
        <img width="250" src="https://lh5.googleusercontent.com/cPnWesoAzQD5qBT_EdDewW3GAU9CsnDYOjOwTdcDawuWjtDwpdki5wVR4n1H4ximlAlAdlwnsCT_7zA=w1920-h857-rw">
</p>
Esto es el código que se trabajo en el workshop

# Iniciando el proyecto
  1. Tener instalado NodeJS 
  https://nodejs.org/es/

  2. Instalar el ( Client Line Interface ) angular-cli de forma global:
  ```sh
    npm install -g angular-cli
  ```
  3. Ir al directorio donde vas a trabajar
  ```sh
    cd misproyectos
  ```
  4.  Clonar el proyecto o si quieres descargarlo <a href="https://github.com/JoseChirinos/angular2sucre/archive/master.zip">aqui</a>: 
  ```sh
    git clone https://github.com/JoseChirinos/angular2sucre.git
  ```
  5. Para que funcione deberas entrar a la carpeta donde clonaste o descomprimiste y luego instalar todas las dependencias:
  ```sh
    cd my-app
    npm install
  ```
  6. Para conectarte a tu servicio firebase deberan copiar sus configuraciones en: 
    ```sh
        const firebaseConfig = {
            apiKey: "TU_API_KEY",
            authDomain: "TU_DOMINIO_FIREBASE.firebaseapp.com",
            databaseURL: "TU_DOMINIO_FIREBASE.firebaseio.com",
            storageBucket: "TU_DOMINIO_FIREBASE.appspot.com",
            messagingSenderId: "TU_NUMERO_LARGO"
        };
    ```
  7. Habilitar en firebase tu servicio de autenticación
  <p align="center">
        <img width="250" src="https://lh3.googleusercontent.com/LBfiCuC-lEC3xynil0eaKuL_MBvPiwJx-E4T6cXM58AKEOiNDm-rdYfBQSCLJt-0GLbIWmdY_AZdn7U=w1920-h918-rw">
  </p>

  8. Para iniciar el proyecto ejecutar:
  ```sh
    ng serve
  ```

  9. Para generar el proyecto final y dejarlo listo para producción

 ```sh
    ng build --aot
  ```