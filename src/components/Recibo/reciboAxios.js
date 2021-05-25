import axios from 'axios';
import qs from 'qs';

export const recibo = async (tr02100_id, impApagar) => {
    const array = impApagar.map((obj) => Number(obj['value'])).toString();

    const responseOne = await axios({
        method: 'post',
        url: 'https://sigemi.muninqn.gov.ar/apex/prueba/rfws/apiweb/facturar_cuenta_corriente',
        data: qs.stringify({
            IMPONIBLE_ID: tr02100_id,
            LISTA_TR1A102_ID: "[" + array + "]",
            FECHA_ACTUALIZACION: '2021-05-25',
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        
    });

    if (responseOne.data.error) return responseOne.data;

    const responseTwo = await axios({
        method: 'post',
        url: 'https://sigemi.muninqn.gov.ar/apex/prueba/rfws/apiweb/recibo_pdf',
        data: qs.stringify({
            TOKEN: 'ZB4QMUL62BXKNP7NH6UGFPI5VATNUTJ9BPJMHJH9',
            RECIBO_NRO: responseOne.data[0].recibo,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        responseType: 'blob',
    });
    return responseTwo.data;
};
