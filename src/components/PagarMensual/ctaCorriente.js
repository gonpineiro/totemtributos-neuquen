import axios from 'axios';
import qs from 'qs';
import { URL, NOW, TOKEN, YEAR_NOW } from '../utils/const';
import { groupByRegId } from '../utils/groupBy';

export const ctaCorriente = async (imponibleId, tipo) => {
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

        const impFilter = ctaCorriente.data.items.filter((el) => {
            if (tipo !== 'PPG') {
                const fecha = parseInt(el.reg_id.substring(0, 4));
                return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR_NOW;
            }
            if (el.reg_id.includes(':')) {
                const fecha = parseInt(el.reg_id.split(':', 4)[1]);
                return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR_NOW;
            }
            const fecha = parseInt(el.fecha.substring(0, 4));
            return el.es_deuda === 'S' && el.actualizado !== el.saldo && fecha >= YEAR_NOW;
        });

        if (tipo === 'COM' || tipo === 'INM') {            
            return groupByRegId(impFilter)
        }else{
            return impFilter
        }

    } catch (error) {
        return error;
    }
};
