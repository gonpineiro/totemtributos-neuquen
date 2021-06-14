#### Metodos de compilación

| Modo | Comando | Función | 
| ------ | ------ | ------ | 
| desarrollo | `npm run start` | Genera un servidor local para el desarrollo  | 
| producción | `npm run build` | Realiza la compilacion de los archivos para producción  |

Luego de realizar la compilación en el modo producción se debe agregar `\apps\totems` adelante de las rutas que llaman a todos los archivos estáticos que requiere la aplicación en el archivo generado: `build\index.html`. 
Al final del archivo `html` se encuentra una etiqueta `script` en el cual se debe mover a la siguente línea

```html
<script type="text/javascript">history.pushState(null,null,location.href),history.back(),history.forward(),window.onpopstate=function(){history.go(1)}</script>
<!-- Evita la navegación -->
```
#### Imprimir documentación de los Iframe:

Para poder imprimir lo que se muestra en un Iframe en este proyecto se debe utilizar la siguente funcion en el componente correspondiente:

```javascript
const printIframe = (id) => {
    const iframe = document.getElementById(id);
    const iframeWindow = iframe.contentWindow || iframe;

    iframe.focus();
    iframeWindow.print();

    return false;
  };
```

#### Configuracion del navegador 
Se debe generar un acceso directo del navegador de la siguente manera:


| Navegador | Configuración | Ejemplo |
| ------ | ------ | ------ |
| Chrome  |  `"ubicacion-chorme" --user-data-dir="C://Chrome dev session" --disable-web-security -kiosk -fullscreen --kiosk-printing  <url>` | `"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C://Chrome dev session" --disable-web-security -kiosk -fullscreen --kiosk-printing  http://localhost:3000` |


| Parametro | Función |
| ------ | ------ |
| <small>--disable-web-security</small>  | <b>Evita</b>: <small>SecurityError: Blocked a frame with origin "web-site" from accessing a cross-origin frame.</small>  |
| <small>-kiosk -fullscreen</small> | Inicia en Fullscreen |
| <small>--kiosk-printing</small> | Enviar a imprimir por la impresora que se encuentra por defecto |

#### Dependencias

| DEP | Función | Doc |
| ------ | ------ | ------ |
| axios | Realizar las llamadas AJAX  | https://www.npmjs.com/package/axios |
| react-router-dom | Manejo de las rutas en ReatJS  | https://reactrouter.com/ |
| react-simple-keyboard | Generar el teclado virtual | https://hodgef.com/simple-keyboard/documentation/ |

