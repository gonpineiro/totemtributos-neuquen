#### Imprimir documentacion de los Iframe:

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

Esta funcion no se puede utilizar en un navagador con la configuracion estandar porque es bloqueado, arroja el siguente error:

`SecurityError: Blocked a frame with origin "web-site" from accessing a cross-origin frame.`

Se debe generar un acceso directo del navegador de la siguente manera:

- Chorme:    
    `"ubicacion-chorme" --user-data-dir="C://Chrome dev session" --disable-web-security -kiosk -fullscreen <url>`
    <b>Ejemplo</b>:
`"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C://Chrome dev session" --disable-web-security -kiosk -fullscreen http://localhost:3000`