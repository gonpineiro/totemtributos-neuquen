import axios from 'axios';

export const sendMail = async (mail) => {
    const data = {
        address: mail,
        subject: 'testeru',
        htmlBody: 'test test test'
    };

    console.log(data, 'data lenght');
    
    try {
        const resp = await axios({
            method: 'POST',
            url: 'https://weblogin.muninqn.gov.ar/api/Mail',
            params: data,
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return resp;
    } catch (error) {
        console.log('error', error);
    }

};
