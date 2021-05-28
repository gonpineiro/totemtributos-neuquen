import axios from 'axios';

export const sendMail = async (mail, recibo) => {
    // eslint-disable-next-line no-self-compare
    const weblogin = 1===1?'http://200.85.183.194:90/':'https://weblogin.muninqn.gov.ar/';
    
    //! implementar token un como la gente
    const token = '123';
    const subject = `Test a ${weblogin}`;
    const htmlBody = 'Test desde app totems con recibo no estatico';
    const reciboAdjunto = recibo;

    const url = `${weblogin}apps/Utils/public/sendMailRecibosTributarios.php?token=${token}&address=${mail}&subject=${subject}&htmlBody=${htmlBody}&reciboAdjunto=${reciboAdjunto}`;
    
    try {
        const responseOne = await axios({
            method: 'get',
            url: url
        });

        return responseOne.data;
    } catch (error) {
        return null;
    }

};
