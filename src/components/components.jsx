import Form from './Form';
import { IconoCementerio, IconoComercio, IconoCuotasPagar, IconoInmueble, IconoRodado } from './shared/iconos';
import TipoImp from './shared/TipoImp';

/* Rodados */
export const Rodado = () => (
    <Form
        name="Rodados"
        h2="INGRESE SU PATENTE"
        label="Patente"
        inputName="patente"
        nodesHtml={RodadoNodeHtml}
        tipo="ROD"
        titles={{ titulo: 'Dominio :', subtitulo: 'Marca-Modelo-Año :' }}
        keyboardLayout={{
            'default': [
                '1 2 3 4 5 6 7 8 9 0',
                'Q W E R T Y U I O P',
                'A S D F G H J K L -',
                'Z X C V B N M {bksp}',
            ],
        }}
    />
);

const RodadoNodeHtml = [
    <TipoImp name={'Rodados'} url={'/apps/totems/rodado'} icono={[<IconoRodado />]}/>,
    <p>
        Autos: XXX999 / XX999XX
        <br />
        Motos: 999XXX /X999XXX
    </p>,
];

/* Cementerio */
export const Cementerio = () => (
    <Form
        name="Cementerio"
        h2="Ingrese su número de contrato"
        label="Contrato"
        inputName="cementerio"
        nodesHtml={CementerioNodeHtml}
        tipo="CEC"
        titles={{ titulo: 'Ubicación :', subtitulo: 'Contrato :' }}
        keyboardLayout={{
            'default': [
                '1 2 3',
                '4 5 6',
                '7 8 9',
                '0 - {bksp}',
            ],
        }}
    />
);

const CementerioNodeHtml = [
    <TipoImp name={'Cementerio'} url={'/apps/totems/cementerio'} icono={[<IconoCementerio />]} />,
    <p>9999999</p>
];

/* Inmuebles */
export const Inmuebles = () => (
    <Form
        name="Inmuebles"
        h2="Ingrese su partida"
        label="Partida"
        inputName="inmueble"
        nodesHtml={InmueblesNodeHtml}
        tipo="INM"
        titles={{ titulo: 'Partida :', subtitulo: 'Nomenclatura :' }}
        keyboardLayout={{
            'default': [
                '1 2 3',
                '4 5 6',
                '7 8 9',
                '0 {bksp}',
            ],
        }}
    />
);

const InmueblesNodeHtml = [
    <TipoImp name={'Inmuebles'} url={'/apps/totems/inmuebles'} icono={[<IconoInmueble />]}/>,
    <p>9999999</p>
];

/* Natatorio */
export const Natatorio = () => (
    <Form
        name="Natatorios"
        h2="Ingrese su número"
        label="Número"
        inputName="natatorio"
        nodesHtml={NatatorioNodeHtml}
        tipo="ROD"
    />
);

const NatatorioNodeHtml = [
    <TipoImp name={'Inmuebles'} url={'/apps/totems/inmuebles'} icono={[<IconoInmueble />]} />,
    <p>9999999 / 99XX99999999999</p>,
];

/* Residuo Patógenos */
export const ResiduosPatogenos = () => (
    <Form
        name="Residuos Patógenos"
        h2="Ingrese su número"
        label="Número"
        inputName="residuos"
        nodesHtml={ResiduosPatogenosNodeHtml}
        tipo="ROD"
    />
);

const ResiduosPatogenosNodeHtml = [
    <TipoImp name={'Inmuebles'} url={'/apps/totems/inmuebles'} icono={[<IconoInmueble />]} />,
    <p>9999999 / 99XX99999999999</p>,
];

/* Recupero Plan Federal */
export const RecuperoPlanFederal = () => (
    <Form
        name="Recupero Plan Federal"
        h2="Ingrese su número"
        label="Número"
        inputName="recuperoPlanFederal"
        nodesHtml={RecuperoPlanFederalNodeHtml}
        tipo="ROD"
    />
);

const RecuperoPlanFederalNodeHtml = [
    <TipoImp name={'Inmuebles'} url={'/apps/totems/inmuebles'} icono={[<IconoInmueble />]} />,
    <p>999999999999</p>,
];

/* Comercio */
export const Comercio = () => (
    <Form
        name="Comercio"
        h2="Ingrese su número de licencia comercial"
        label="Lic. comercial"
        inputName="comercio"
        nodesHtml={ComercioNodeHtml}
        tipo="COM"
        titles={{ titulo: 'Nombre :', subtitulo: 'Licencia Comercial :' }}
        keyboardLayout={{
            default: [
                '1 2 3', 
                '4 5 6', 
                '7 8 9', 
                '0 {bksp}'
            ],
        }}
    />
);

const ComercioNodeHtml = [
    <TipoImp name={'Comercio'} url={'/apps/totems/comercio'} icono={[<IconoComercio />]}/>,
    <p>999999</p>,
];

/* Planes de pago */
export const PlanPago = () => (
    <Form
        name="Planes de pago"
        h2="Ingrese su número"
        label="Plan de pago"
        inputName="planPago"
        nodesHtml={PlanPagoNodeHtml}
        tipo="PPG"
        titles={{ titulo: 'Identificación :', subtitulo: 'Plan de pago :' }}
        keyboardLayout={{
            'default': [
                '1 2 3',
                '4 5 6',
                '7 8 9',
                '0 - {bksp}',
            ],
        }}
    />
);

const PlanPagoNodeHtml = [
    <TipoImp name={'Planes de pago'} url={'/apps/totems/plan-de-pago'} icono={[<IconoCuotasPagar />]} />,
    <p>999999999</p>,
];