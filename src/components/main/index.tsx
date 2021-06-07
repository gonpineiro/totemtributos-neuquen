import TipoImp from './TipoImp'
import './main.scss';
import logo from '../shared/images/logo.png';
const Main = () => {
    return (
        <div className="container">
            <div className="text-center logo-container">
                <img className="logo" src={logo} />
            </div>
            <div className="row mt-5">
                <div className="col flex-row text-center">
                    <TipoImp name={'Rodados'} url={'/apps/totems/rodado'} />
                    <TipoImp name={'Inmuebles'} url={'/apps/totems/inmuebles'} />
                    <TipoImp name={'Comercio'} url={'/apps/totems/comercio'} />
                    <TipoImp name={'Cementerio'} url={'/apps/totems/cementerio'} />
                    <TipoImp name={'Planes de pago'} url={'/apps/totems/plan-de-pago'} />
                    {/* <TipoImp name={'Recupero Plan Federal'} url={'/apps/totems/recupero-plan-federal'} />
                    <TipoImp name={'Residuos Patógenos'} url={'/apps/totems/cementerio'} />
                    <TipoImp name={'Natatorios '} url={'/apps/totems/natatorio'} /> */}
                </div>
            </div>
        </div>
    );
};

export default Main;