import axios from 'axios';
import qs from 'qs';
import { URL, TOKEN } from '../utils/const';

export const getImponible = async (tipo, id) => {
    try {
        /* Consulta de imponible */
        const imponible = await axios({
            method: 'post',
            url: URL + 'consulta_imponible',
            data: qs.stringify({
                TOKEN: TOKEN,
                IMPONIBLE_TIPO: tipo,
                IMPONIBLE_IDENTIFICACION: id,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        if (imponible.data.error) return imponible.data;

        return imponible.data.items[0];
    } catch (error) {
        return -1;
    }
};
