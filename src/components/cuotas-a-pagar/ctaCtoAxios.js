import axios from 'axios';
import qs from 'qs';

export const imponible = async (tipo, id) => {
    const responseOne = await axios({
        method: 'post',
        url: 'https://sigemi.muninqn.gov.ar/apex/prueba/rfws/apiweb/consulta_imponible',
        data: qs.stringify({
            IMPONIBLE_TIPO: tipo,
            IMPONIBLE_IDENTIFICACION: id,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
    });

    if (responseOne.data.error) return responseOne.data;

    const responseTwo = await axios({
        method: 'post',
        url: 'https://sigemi.muninqn.gov.ar/apex/prueba/rfws/apiweb/cuenta_corriente',
        data: qs.stringify({
            IMPONIBLE_ID: responseOne.data.items[0].tr02100_id,
            FECHA_ACTUALIZACION: '2021-05-24',
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
    });

    const impuestos = responseTwo.data.items.filter(function (el) {
        return el.es_deuda === 'S' && el.es_transac === 'S';
    });

    const obj = {
        imp_nombre: responseOne.data.items[0].imp_nombre,
        imp_identificacion: responseOne.data.items[0].imp_identificacion,
        tr02100_id: responseOne.data.items[0].tr02100_id,
        impuestos,
    };

    return obj;

    //console.log(response.data.items[0].imp_nombre);
};
