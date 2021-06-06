import axios from 'axios';
import qs from 'qs';
import { URL, NOW, TOKEN } from '../utils/const';

export const ctaCorriente = async (imponibleId) => {
    try {
        const ctaCorriente = await axios({
            method: 'post',
            url: URL + 'cuenta_corriente',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: imponibleId,
                FECHA_ACTUALIZACION: NOW,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        if (ctaCorriente.data.error) return ctaCorriente.data;

        return ctaCorriente.data.items.filter((el) => {
            const YEAR = 2017;
            if (el.reg_id.includes(':')) {
                const fecha = parseInt(el.reg_id.split(':', 4)[1]);
                return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR;
            }
            const fecha = parseInt(el.reg_id.substring(0, 4));
            return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR;
        });
    } catch (error) {
        return error;
    }
};
