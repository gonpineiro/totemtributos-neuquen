import axios from 'axios';
import qs from 'qs';

export const sendMailRecibo = async (mail, recibo) => {
    // eslint-disable-next-line no-self-compare
    const weblogin = 'https://weblogin.muninqn.gov.ar/';

    const token = '123';
    const subject = `Recibo de tributo nro. ${recibo}`;
    const htmlBody = '<p>Municipalidad de Neuquén</p>';

    const url = `${weblogin}apps/Utils/public/sendMailRecibosTributarios.php`;

    try {
        const responseOne = await axios({
            method: 'post',
            url: url,
            data: qs.stringify({
                token: token,
                address: mail,
                subject: subject,
                htmlBody: htmlBody,
                reciboAdjunto: recibo,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });

        return responseOne.data;
    } catch (error) {
        return null;
    }
};

export const sendMailSemestral = async (mail, IMPONIBLE_ID, TR1E200_ID) => {
    // eslint-disable-next-line no-self-compare
    const weblogin = 'https://weblogin.muninqn.gov.ar/';

    const token = '123';
    const subject = `Recibo Semestral `;
    const htmlBody = '<p>Municipalidad de Neuquén</p>';
    const url = `${weblogin}apps/Utils/public/sendMailSemestralTributarios.php`;
    try {
        const responseOne = await axios({
            method: 'post',
            url: url,
            data: qs.stringify({
                token: token,
                address: mail,
                subject: subject,
                htmlBody: htmlBody,
                imponibleID: IMPONIBLE_ID,
                TR1E200_ID: TR1E200_ID,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        });
        return responseOne.data;
    } catch (error) {
        return null;
    }
};
