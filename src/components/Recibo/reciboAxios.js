import axios from 'axios';
import qs from 'qs';

import { TOKEN, URL_DEV, NOW } from '../utils/const';

export const recibo = async (tr02100_id, impApagar) => {
    const array = impApagar.map((obj) => Number(obj['value'])).toString();

    const responseOne = await axios({
        method: 'post',
        url: URL_DEV + 'facturar_cuenta_corriente',
        data: qs.stringify({
            IMPONIBLE_ID: tr02100_id,
            LISTA_TR1A102_ID: '[' + array + ']',
            FECHA_ACTUALIZACION: NOW,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
    });

    if (responseOne.data.error) return responseOne.data;

    const responseTwo = await axios({
        method: 'post',
        url: URL_DEV + 'recibo_pdf',
        data: qs.stringify({
            TOKEN: TOKEN,
            RECIBO_NRO: responseOne.data[0].recibo,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        responseType: 'blob',
    });
    return responseTwo.data;
};
