import axios from 'axios';
import qs from 'qs';
import { URL, NOW, TOKEN } from '../utils/const';

export const ctaCorriente = async (imposibleId) => {
    try {
        const ctaCorriente = await axios({
            method: 'post',
            url: URL + 'cuenta_corriente',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: imposibleId,
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

/* Consulta de emisiones - Requiere Imponible_id, obtenido de imponible */
/* const emisiones = await axios({
            method: 'post',
            url: URL + 'emisiones',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: imponible.data.items[0].tr02100_id,
                FECHA_ACTUALIZACION: NOW,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        if (emisiones.data.error) return emisiones.data; */

/* Consulta de cuenta corriente - Requiere Imponible_id, obtenido de imponible */
/*  const ctaCorriente = await axios({
            method: 'post',
            url: URL + 'cuenta_corriente',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: imponible.data.items[0].tr02100_id,
                FECHA_ACTUALIZACION: NOW,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        }); */

/* if (ctaCorriente.data.error) return ctaCorriente.data;

        const impuestos = ctaCorriente.data.items.filter((el) => {
            const YEAR = 2017;
            if (el.reg_id.includes(':')) {
                const fecha = parseInt(el.reg_id.split(':', 4)[1]);
                return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR;
            }
            const fecha = parseInt(el.reg_id.substring(0, 4));
            return el.es_deuda === 'S' && el.es_transac === 'S' && fecha >= YEAR;
        });

        return {
            imp_nombre: imponible.data.items[0].imp_nombre,
            imp_identificacion: imponible.data.items[0].imp_identificacion,
            tr02100_id: imponible.data.items[0].tr02100_id,
            impuestos,
        };

    } catch (error) {
        return -1
    }

}; */
