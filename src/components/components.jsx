import Form from './Form';

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
        nodesHtml={[<p>99999999-9</p>]}
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

/* Inmuebles */
export const Inmuebles = () => (
    <Form
        name="Inmuebles"
        h2="Ingrese su partida"
        label="Partida"
        inputName="inmueble"
        nodesHtml={[<p>9999999</p>]}
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

/* Natatorio */
export const Natatorio = () => (
    <Form
        name="Natatorios"
        h2="Ingrese su número"
        label="Número"
        inputName="natatorio"
        nodesHtml={[<p>9999999 / 99XX99999999999</p>]}
        tipo="ROD"
    />
);

/* Residuo Patógenos */
export const ResiduosPatogenos = () => (
    <Form
        name="Residuos Patógenos"
        h2="Ingrese su número"
        label="Número"
        inputName="residuos"
        nodesHtml={[<p>9999999 / 99XX99999999999</p>]}
        tipo="ROD"
    />
);

/* Recupero Plan Federal */
export const RecuperoPlanFederal = () => (
    <Form
        name="Recupero Plan Federal"
        h2="Ingrese su número"
        label="Número"
        inputName="recuperoPlanFederal"
        nodesHtml={[<p>999999999999</p>]}
        tipo="ROD"
    />
);

/* Comercio */
export const Comercio = () => (
    <Form
        name="Comercio"
        h2="Ingrese su número de licencia comercial"
        label="Lic. comercial"
        inputName="comercio"
        nodesHtml={[<p>999999</p>]}
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

/* Planes de pago */
export const PlanPago = () => (
    <Form
        name="Planes de pago"
        h2="Ingrese su número"
        label="Plan de pago"
        inputName="planPago"
        nodesHtml={[<p>999999999</p>]}
        tipo="PPG"
        titles={{ titulo: 'Identificación :', subtitulo: 'Plan de pago :' }}
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