import Form from './Form';
import { IconoCementerio, IconoComercio, IconoCuotasPagar, IconoInmueble, IconoRodado } from './shared/iconos';
import TipoImp from './shared/TipoImp';

/* Rodados */
export const Rodado = () => (
    <Form
        name="Rodados"
        h2="INGRESE SU PATENTE"
        maxinput="7"
        label="Patente"
        inputName="patente"
        nodesHtml={RodadoNodeHtml}
        tipo="ROD"
        titles={{ titulo: 'Dominio :', subtitulo: 'Marca-Modelo-Año :', ayuda: 'Ingrese la patente del rodado' }}
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
        Ejemplo patente de Autos: XXX999 / XX999XX
        <br />
        Ejemplo patente de Motos: 999XXX / X999XXX
    </p>,
];

/* Cementerio */
export const Cementerio = () => (
  <Form
    name="Cementerio"
    h2="Ingrese su número de contrato"
    maxinput="10"
    label="Contrato"
    inputName="cementerio"
    nodesHtml={CementerioNodeHtml}
    tipo="CEC"
    titles={{
      titulo: "Ubicación :",
      subtitulo: "Contrato :",
      ayuda: "Ingrese el número del contrato de cementerio",
    }}
    keyboardLayout={{
      default: ["1 2 3", "4 5 6", "7 8 9", "0 - {bksp}"],
    }}
  />
);

const CementerioNodeHtml = [
  <TipoImp
    name={"Cementerio"}
    url={"/apps/totems/cementerio"}
    icono={[<IconoCementerio />]}
  />,
  <p>Ejemplo de contrato: 99999999-9</p>,
];

/* Inmuebles */
export const Inmuebles = () => (
  <Form
    name="Inmuebles"
    h2="Ingrese su partida"
    maxinput="7"
    label="Partida"
    inputName="inmueble"
    nodesHtml={InmueblesNodeHtml}
    tipo="INM"
    titles={{
      titulo: "Partida :",
      subtitulo: "Nomenclatura :",
      ayuda: "Ingrese la partida del inmueble",
    }}
    keyboardLayout={{
      default: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp}"],
    }}
  />
);

const InmueblesNodeHtml = [
  <TipoImp
    name={"Inmuebles"}
    url={"/apps/totems/inmuebles"}
    icono={[<IconoInmueble />]}
  />,
  <p>Ejemplo de partida: 9999999</p>,
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
    maxinput="6"
    label="Lic. comercial"
    inputName="comercio"
    nodesHtml={ComercioNodeHtml}
    tipo="COM"
    titles={{
      titulo: "Nombre :",
      subtitulo: "Licencia Comercial :",
      ayuda: "Ingrese el número de la licencia comercial",
    }}
    keyboardLayout={{
      default: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp}"],
    }}
  />
);

const ComercioNodeHtml = [
  <TipoImp
    name={"Comercio"}
    url={"/apps/totems/comercio"}
    icono={[<IconoComercio />]}
  />,
  <p>Ejemplo de licencia comercial: 999999</p>,
];

/* Planes de pago */
export const PlanPago = () => (
    <Form
        name="Planes de pago"
        h2="Ingrese su número"
        maxinput="10"
        label="Plan de pago"
        inputName="planPago"
        nodesHtml={PlanPagoNodeHtml}
        tipo="PPG"
        titles={{ titulo: 'Identificación :', subtitulo: 'Plan de pago :', ayuda: "Ingrese el número del plan de pago", }}
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
    <p>Ejemplo de plan de pago: 99-9999999</p>,
];