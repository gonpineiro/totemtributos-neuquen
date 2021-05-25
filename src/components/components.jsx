import React from 'react';
import Form from './Form';

/* Rodados */
export const Rodado = () => (
    <Form name="Rodados" h2="INGRESE SU PATENTE" label="Patente" inputName="patente" nodesHtml={RodadoNodeHtml} tipo="ROD" />
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
        tipo="ROD"
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
        tipo="ROD"
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
