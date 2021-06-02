import axios from 'axios';
import qs from 'qs';

import { TOKEN, URL_DEV, NOW } from '../utils/const';

export const recibo = async (tr02100_id, impApagar) => {
    const list = impApagar.map((obj) => Number(obj['value'])).toString();

    try {
        const responseOne = await axios({
            method: 'post',
            url: URL_DEV + 'facturar_cuenta_corriente',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: tr02100_id,
                LISTA_TR1A102_ID: '[' + list + ']',
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

        if (responseTwo.data.error) return responseTwo.data;

        return {
            blob: responseTwo.data,
            recibo: responseOne.data[0].recibo
        };
    } catch (error) {
        return -1
    }

};
