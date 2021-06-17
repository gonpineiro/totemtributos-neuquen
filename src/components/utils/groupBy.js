export const groupByRegId = (obj) => (
    obj.reduce((p, c) => {
        let idx = p[1].indexOf(c.reg_id);

        if (idx === -1) {
            p[1].push(c.reg_id);

            let otmp = {
                actualizado: c.actualizado,
                reg_id: c.reg_id,
                fecha: c.fecha,
                saldo: c.saldo,
                tr1a102_id: [c.tr1a102_id]
            }
            p[0].push(otmp);

        }
        else {
            p[0][idx].actualizado = p[0][idx].actualizado + c.actualizado;
            p[0][idx].saldo = p[0][idx].saldo + c.saldo;
            p[0][idx].tr1a102_id.push(c.tr1a102_id);
        }

        return p;

    }, [[], []])[0]
)