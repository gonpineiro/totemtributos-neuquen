import React from 'react';
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
        nodesHtml={CementerioNodeHtml}
        tipo="CEC"
        titles={['']}
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

const CementerioNodeHtml = [<p>999999999</p>];

/* Inmuebles */
export const Inmuebles = () => (
    <Form
        name="Inmuebles"
        h2="Ingrese su partida ó nomenclatura catastral - sin guiones"
        label="Partida o Nomenclatura"
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

const InmueblesNodeHtml = [<p>9999999 / 99XX99999999999</p>];

/* Natatorio */
export const Natatorio = () => (
    <Form name="Natatorios" h2="Ingrese su número" label="Número" inputName="natatorio" nodesHtml={NatatorioNodeHtml} tipo="ROD" />
);

const NatatorioNodeHtml = [<p>9999999 / 99XX99999999999</p>];

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

const ResiduosPatogenosNodeHtml = [<p>9999999 / 99XX99999999999</p>];

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

const RecuperoPlanFederalNodeHtml = [<p>999999999999</p>];
