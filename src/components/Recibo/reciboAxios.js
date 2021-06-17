import axios from 'axios';
import qs from 'qs';

import { TOKEN, URL, NOW } from '../utils/const';

export const recibo = async (tr02100_id, impApagar, tipo) => {
    const list = impApagar.map((obj) => {
        if (tipo === 'INM') return obj['value'].join(',')
        return Number(obj['value'])
    }).toString();

    try {
        const responseOne = await axios({
            method: 'post',
            url: URL + 'facturar_cuenta_corriente',
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
            url: URL + 'recibo_pdf',
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
            recibo: responseOne.data[0].recibo,
        };
    } catch (error) {
        return -1;
    }
};

export const getQr = async (recibo) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://weblogin.muninqn.gov.ar/api2/ReciboTasas/' + recibo,
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        if (response.data.value.error) return -1;

        return response.data.value.qrImage;
    } catch (error) {
        return -1
    }
}
