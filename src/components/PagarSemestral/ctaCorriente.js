import axios from 'axios';
import qs from 'qs';
import { URL, NOW, TOKEN } from '../utils/const';

export const ctaCorriente = async (imponibleId) => {
    try {
        const emisiones = await axios({
            method: 'post',
            url: URL + 'emisiones',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: imponibleId,
                FECHA_ACTUALIZACION: NOW,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        if (emisiones.data.error) return emisiones.data;

        const emisionesPdf = await axios({
            method: 'post',
            url: URL + 'emisiones_pdf',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_ID: imponibleId,
                TR1E200_ID: emisiones.data.items[0].tr1e200_id,
                FECHA_ACTUALIZACION: NOW,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            responseType: 'blob',
        });

        if (emisionesPdf.data.error) return emisiones.data;
        console.log(emisionesPdf);
        return {
            blob: emisionesPdf.data,
        };
    } catch (error) {
        return error;
    }
};
