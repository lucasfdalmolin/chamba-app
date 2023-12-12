###Introduccion###

-Este es un repositorio de pruebas el cual quizas sea descartado, pero es donde vamos a realizar pruebas. 
-En este caso vamos a usar React Native con typescript. 
-Vamos a construirla sobre Expo la cual es una plataforma que sirve para sintetizar y simplificar tareas y tambien sirve para desarrollar aplicaciones nativas universales para Android, IOS y Web, esto significa que el mismo codigo (salvo algunas excepciones con algunos componentes nativos determinados) va a poder usarse para los distintos SO/plataformas.

###Instalaciones/requisitos###

-Tener la ultima version estable de node, osea node lts (long term support)
-Al bajar el repo hay que instalar expo cli: npm install expo-cli. Hay una alternativa que es instalar globalmente expo poniendo la bandera -g pero no es necesario, el repo esta preparado para installar en desarrollo expo y listo.
-Una vez instalado expo en el nivel superior del repo osea en la carpeta "mi-primera-chamba", bajar un nivel, osea navegar hasta la carpeta "testApp" e hacer "npm install". Esto va a instalar el resto de las dependencias y paquetes para que funcione la aplicacion.
-Una vez hecho lo anterior y teniendo expo y las dependencias instaladas, estando parado en la misma carpeta hacer "npm start" para correr la aplicacion. Esto va a compilar el codigo y va a dar varias opciones para poder verlo, estas opciones son (en principio) mediante celular o web:
    -Para poder ver la app en el celular hay que instalar la aplicacion Expo Go, que esta en el app store y hay que escanear el qr que aparece en la consola o poner a mano el url local que nos da. Para poder abrirlo en el celular hay que estar conectado a la misma red.
    -Para poder verlo desde el navegador hay que executar el siguiente script en la consola (primero hacemos ctrl + C dos veces para 'matar' la app) npx expo install react-native-web@~0.19.6 react-dom@18.2.0 ; Una vez executado ese script volvermos a correr la aplicacion con npm start y en las opciones va a decir "› Press w │ open web", apretamos la 'w' y nos va a correr un servidor de desarrollo en el navegador.