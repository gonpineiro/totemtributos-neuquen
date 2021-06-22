import axios from "axios";
import qs from 'qs';

export const saveStats = async (tributo, send_type, periodo, cant_imponible) => {
    // eslint-disable-next-line no-self-compare
    const url = 'http://localhost/utils/public/postStats.php';

    const token = '2e556c639977413aa8f983e212ce17357664d150';

    try {
        const response = await axios({
            method: 'post',
            url: url,
            data: qs.stringify({
                token,
                send_type,
                tributo,
                periodo,
                cant_imponible,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });
        return response
    } catch (error) {
        return error;
    }
};