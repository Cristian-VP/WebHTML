# Projecte De Norte a Sur

De norte a sur es un blog-agencia en el que pretendemos dar a conocer rincones únicos de Mallorca y que si el usuario le    
gusta pueda contactar con nosotros a través de un futuro formulario.

Visualizalo [aquí](https://cristian-vp.github.io/WebHTML/)

## Estructura de carpetes i arxius

            WebHTML/
            ├── assets/
            │   ├── images/      # Imatges utilitzades al projecte
            │   ├── styles/      # Fulls d'estil CSS
            │   └── fonts/       # Fonts personalitzades
            ├── components/      # Components HTML reutilitzables (com headers o footers)
            ├── js/              
            ├── pages/           # Pàgines HTML secundàries (ex: about.html, contact.html)
            ├── tests/           # Arxius de proves (unit tests o end-to-end tests)
            ├── 404.html         # Pàgina d'error 404 personalitzada
            ├── README.md        # Documentació del projecte
            ├── index.html       # Pàgina principal de la web
            ├── robots.txt       # Arxiu per gestionar l'indexació dels motors de cerca


L'arbre de continguts s'ha creat pensant que la web pot ser més complexa i en la implementació de crides JavaScript   
fetch() per tractar la web de manera dinàmica. En conseqüència, les carpetes "components/" i "test/" s'utilitzaran en un futur.    
D'altra banda, s'ha previst treballar amb formularis del costat del client sense enviar peticions al servidor i implementar diverses funcions.

## Tecnologies utilitzades

- HTML5.
- CSS3
- Fontawesome.
- [Figma]().
- Git 
- [FigmaJam](https://www.figma.com/board/SESONxPTn5YdZtHixlLXtg/norte-sur?node-id=0-1&t=cgnwzLbNbRMMFJXh-1)
- [Github Project](https://github.com/users/Cristian-VP/projects/2/views/1): 

- Punts desenvolupats:   
    - Optimització del contingut multimèdiaa: jpg, mp4 y webp.   
    - CEO: Nomenclatura accessible als arxius i ús d'elements semàntics.
    - Editor de codi: Visual Studio Code y WebStorm.
    - Gestió de versions: Git i [GitHub](https://github.com/Cristian-VP/WebHTML).
    - [Diseño Figma](https://www.figma.com/design/clucBBUsDKtfFqQ8IJJ4SW/WebPage?node-id=17-268&t=amMXRVozG83aVxDi-1) Utilitzat per al disseny previ i la planificació de la interfície d'usuari.
    - Característiques i funcionalitats principals declaradas solo con css
    - Disseny modular: Utilitza components reutilitzables per facilitar el manteniment.
    - Responsivitat: La web està optimitzada per a diferents dispositius (mòbil, tauleta, escriptori).
    - Pàgina 404 personalitzada: Millora l'experiència d'usuari en cas d'enllaços trencats (futuras implementaciones).
    -  Gestió d'indexació: L'arxiu robots.txt controla les pàgines indexades pels motors de cerca.
    -  Scripts optimitzats: Funcionalitats interactives implementades amb JavaScript.
    -  Captures de pantalla: Per visualitzar-les, accediu a la carpeta "Capturas_Web"


    
## Divisió de tasques entre els membres del grup

#### Github Project

GitHub Projects és una eina de gestió de projectes integrada a GitHub. Permet organitzar i visualitzar el progrés de les tasques dins d’un repositori o d’una organització utilitzant taulers Kanban, taules o vistes personalitzades.    
Està dissenyada per facilitar la col·laboració, el seguiment d’issues, pull requests i tasques, combinant característiques de planificació amb la integració de repositoris de codi.

 - tareas en Github Project](https://github.com/users/Cristian-VP/projects/2/views/1). Pudiant visualitzar-se a la secció de "Projects" dins del repositori.

 Cristian Vacacela se ha encargado del index y del segundo formulario relacionado con el registrate.
 Sebastià Romaguera se ha encargado del descubre y del ReadMe y modificaciones para el correcto funcionamiento de la pagina.
 Cristian Emilio se ha encargado de las paginas
 Abimael Álvarez se ha encargado del primer formulario relacionado con el contacta.

 #### Modificaciones realizadas en los archivos HTML, CSS
 Para el primer formulario hay una nueva page llamada formulario.html relacionado con el contacta y su css llamado formulario.css.
 Para el segundo solamente es una ventana emergente desde el boton registrarse desde el header. Solo se ha actualizado el index.html.

 #### Formularios
 ![image](https://github.com/user-attachments/assets/0f6f06cc-141e-4c07-9ddb-15c89d7e439d)
 Este formulario sirve solamente para contactar y obtener información del apartado que quieran con tan solo numero, mail y nombre.

![image](https://github.com/user-attachments/assets/f8f75558-928e-46c4-b40d-b33c87b2da3d)
 Este formulario sirve para registrarte y entrar en nuestra base de datos aceptando nuestros terminos con una checkbox.


 #### Expresiones regulares para la validación
Para el formulario de contácto no se han usado regex.

Para el formulario de registro que se encuentra dentro del header de todas las páginas:

Se le solicita 3 tipod de entradas al usuario: email, usuario, password. De manera que se configuró tres expresiones regulares que nos ayuda a validar la entrada del dato, usando el atributo patter = "regEx". 

Las expresiones regulares son:          

    type="email" pattern="^[\w.-]{3,30}@[a-z]{3,30}\.[a-z]{2,3}$"       
    
La regEx limita la siguiente estructura : [carácter alfanumérica ó barra baja ó punto ó guión (de 3 a 30 caracteres)] [caracter @] [carácter alfanumérica ó barra baja ó punto ó guión (de 3 a 30 carácteres)]  [ caracter .] [carácter alfanumérica ó barra baja ó punto ó guión (de 2 a 3 carácteres)]       

    type="text" pattern="^[\w.-]{4,10}$"        

La regEx limita la siguiente estructura: [carácter alfanumérica ó barra baja ó punto ó guión (de 4 a 10 carácteres)]        
    
    type="password" pattern="^(?=.*[A-Za-z])(?=.*\W)(?=.*\d).{8,}$"

La regEx limita la siguiente estructura, haciendo uso de tres LookAhead positivos definidos entre (): (nos asegura que después de cualquier carácter haya una letra)(nos asegura que después de cualquier carácter haya un carácter especial)(nos asegura que después de cualquier carácter haya un número){palabra de mínimo de 8 carácteres}


Tabla de Tareas

| Integrantes | Tareas Realizadas | Tiempo Dedicado | Descripcion del Trabajo                               |
|:-----------:|:-----------------:|:---------------:|:-----------------------------------------------------:|
| Cris        | Ejercicio 2       | 5h              | Funcion de luz y oscuro                               |
| Cris        | Ejercicio 3       | 5h              | Boton para implementar dicha funcion                  |
| Cris        | Ejercicio 8       | 10h             | Validacion de formularios utilizando javascrip        |
| Sebas       | Ejercicio 5       | 8h              | Cambiar los estilos de los elementos al interactuar   |
| Sebas       | Ejercicio 6       | 9h              | Crear un baner                                        |
| Sebas       | Ejercicio 7       | 7h              | Mostrar imagenes en miniatura y que se Amplien        |
| Abi         | Ejercicio 1       | 10              | Definir una estructura de datos con javascrip         |
| Abi         | Ejercicio 4       | 7h              | Añadir un boton para ver una lista de los comentarios |
| Abi         | Ejercicio 9       | 4h              | Modificar el Readme como se pide                      |