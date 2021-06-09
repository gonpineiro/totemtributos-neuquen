export const Row = ({ id, saldo, total, reg_id, fecha, handlerCheckboxChance, tipo }) => {
    return (
        <tr id={id} onClick={(e) => handlerCheckboxChance(e, total)}>
            <td className="text-center" >
                <input type="checkbox" className={'form-check-input check-' + id} /* onChange={(e) => handlerCheckboxChance(e, total)} */ />
            </td>
            <td className="text-center">{reg_id}</td>
            <td className="text-center">{fecha.substring(0, 10)}</td>
            <td className="text-center">$ {saldo.toFixed(2)}</td>
            <td className="text-center">$ {(total - saldo).toFixed(2)}</td>
            <td className="text-center">$ {total.toFixed(2)}</td>
        </tr>
    );
};
