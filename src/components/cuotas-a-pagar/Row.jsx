export const Row = ({ id, saldo, total, reg_id, fecha, handlerCheckboxChance }) => {
    return (
        <tr>            
            <td>
                <input type="checkbox" className="form-check-input chksel" onChange={(e) => handlerCheckboxChance(e, total)} value={id} />
            </td>
            <td>{reg_id}</td>
            <td>{fecha.substring(0,10)}</td>
            <td>$ {saldo.toFixed(2)}</td>
            <td>$ {(total - saldo).toFixed(2)}</td>
            <td className="total">$ {total.toFixed(2)}</td>
        </tr>
    );
};
