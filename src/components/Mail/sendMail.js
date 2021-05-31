import axios from 'axios';
import qs from 'qs';

export const sendMail = async (mail, recibo) => {
    // eslint-disable-next-line no-self-compare
    const weblogin = 1===1?'http://200.85.183.194:90/':'https://weblogin.muninqn.gov.ar/';
    
    const token = '123';
    const subject = `Pago de tributo para recibo nro. ${recibo}`;
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
