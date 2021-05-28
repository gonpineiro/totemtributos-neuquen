export const Row = ({ id, saldo, total, reg_id, fecha, handlerCheckboxChance }) => {
    return (
      <tr>
        <td className="text-center">
          <input
            type="checkbox"
            className="form-check-input"
            onChange={(e) => handlerCheckboxChance(e, total)}
            value={id}
          />
        </td>
        <td className="text-center">{reg_id}</td>
        <td className="text-center">{fecha.substring(0, 10)}</td>
        <td className="text-center">$ {saldo.toFixed(2)}</td>
        <td className="text-center">$ {(total - saldo).toFixed(2)}</td>
        <td className="text-center">$ {total.toFixed(2)}</td>
      </tr>
    );
};
