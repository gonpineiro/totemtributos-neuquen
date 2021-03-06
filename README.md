#### Metodos de compilación

| Modo | Comando | Función | 
| ------ | ------ | ------ | 
| desarrollo | `npm run start` | Genera un servidor local para el desarrollo  | 
| producción | `npm run build` | Realiza la compilacion de los archivos para producción  |

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
Hay que tener en cuenta cuanto tarda en cargar el documento en la ventana de impresion del navegador para configurar correctamente los timeout que se encuentran en: `src/components/Recibo/index.jsx` y `src/components/PagarSemestral/index.jsx` dentro de la función `printModal()`. Se generó una constante para centralizar la variable.


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
| react-bootstrap | Componentes ReactJS | https://react-bootstrap.github.io/ |

