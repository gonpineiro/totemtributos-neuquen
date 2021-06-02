import axios from 'axios';
import qs from 'qs';
import { URL_DEV, NOW, TOKEN } from '../utils/const';

export const imponible = async (tipo, id) => {
    try {
        const responseOne = await axios({
            method: 'post',
            url: URL_DEV + 'consulta_imponible',
            data: qs.stringify({
                TOKEN: TOKEN,
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
            url: URL_DEV + 'cuenta_corriente',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: responseOne.data.items[0].tr02100_id,
                FECHA_ACTUALIZACION: NOW,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        if (responseTwo.data.error) return responseTwo.data;

        const impuestos = responseTwo.data.items.filter((el) => {
            const YEAR = 2017
            if (el.reg_id.includes(':')) {
                const fecha = parseInt(el.reg_id.split(':', 4)[1]);
                return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR;
            }
            const fecha = parseInt(el.reg_id.substring(0, 4));
            return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR;
        });

        return {
            imp_nombre: responseOne.data.items[0].imp_nombre,
            imp_identificacion: responseOne.data.items[0].imp_identificacion,
            tr02100_id: responseOne.data.items[0].tr02100_id,
            impuestos,
        };

    } catch (error) {
        return -1
    }

};
