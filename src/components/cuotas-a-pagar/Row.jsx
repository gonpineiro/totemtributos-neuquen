export const Row = ({ id, saldo, total, reg_id, fecha, handlerCheckboxChance }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>
                <input type="checkbox" className="form-check-input chksel" onChange={(e) => handlerCheckboxChance(e, total)} value={id} />
            </td>
            <td>{reg_id}</td>
            <td>{fecha}</td>
            <td>$ {saldo}</td>
            <td>$ {total - saldo}</td>
            <td className="total">$ {total}</td>
        </tr>
    );
};
