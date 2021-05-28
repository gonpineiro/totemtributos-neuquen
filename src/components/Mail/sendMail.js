import axios from 'axios';

export const sendMail = async (mail) => {
    /* const data = JSON.stringify({
        address: mail,
        subject: 'testeru',
        htmlBody: 'test test test',
        reciboAdjunto: '255653044'
    }); */

    try {
        const resp = await axios({
            method: 'POST',
            url: 'http://muninqn.gov.ar:90/api/TotemMail',
            data: JSON.stringify({
                address: mail,
                subject: 'testeru',
                htmlBody: 'test test test',
                reciboAdjunto: '255653044'
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors',
        });
        return resp;
    } catch (error) {
        console.log('error', error);
    }

};
