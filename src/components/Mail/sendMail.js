import axios from 'axios';
import https from 'https';


export const sendMail = async (mail) => {
    const data = JSON.stringify({
        address: mail,
        subject: 'testeru',
        htmlBody: 'test test test',
        reciboAdjunto: '255653044'
    });

    try {
        const resp = await axios({
            method: 'POST',
            url: 'http://muninqn.gov.ar:90/api/TotemMail',
            data: JSON.stringify({
                address: 'santiago.lp.cop@gmail.com',
                subject: 'testeru',
                htmlBody: 'test test test',
                reciboAdjunto: '0002-55653044'
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return resp.data;
    } catch (error) {
        console.log(error);
    }

};
