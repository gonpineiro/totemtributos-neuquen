/* eslint-disable jsx-a11y/alt-text */
import TipoImp from './TipoImp'
import './main.scss';
import Header from '../Layout/header';

import { IconoCuotasPagar, IconoRodado, IconoInmueble, IconoCementerio, IconoComercio } from './iconos/iconos.js';
const Main = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row mt-5">
                    <div className="col flex-row text-center">
                        <TipoImp name={'Rodados'} url={'/apps/totems/rodado'} icono={[<IconoRodado />]} />
                        <TipoImp name={'Inmuebles'} url={'/apps/totems/inmuebles'} icono={[<IconoInmueble />]} />
                        <TipoImp name={'Comercio'} url={'/apps/totems/comercio'} icono={[<IconoComercio />]} />
                        <TipoImp name={'Cementerio'} url={'/apps/totems/cementerio'} icono={[<IconoCementerio />]} />
                        <TipoImp name={'Planes de pago'} url={'/apps/totems/plan-de-pago'} icono={[<IconoCuotasPagar />]} />
                        {/* <TipoImp name={'Recupero Plan Federal'} url={'/apps/totems/recupero-plan-federal'} />
                    <TipoImp name={'Residuos Patógenos'} url={'/apps/totems/cementerio'} />
                    <TipoImp name={'Natatorios '} url={'/apps/totems/natatorio'} /> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;