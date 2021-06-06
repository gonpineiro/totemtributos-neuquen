const printIframe = (id) => {
    const iframe = document.getElementById(id);
    const iframeWindow = iframe.contentWindow || iframe;

    iframe.focus();
    iframeWindow.print();

    return false;
};

export default printIframe