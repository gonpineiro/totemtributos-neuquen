export const Row = ({ id, saldo, total, reg_id, fecha, handlerCheckboxChance }) => {

  const fireCheckboxOnTrClick = (id) => {
    const checkbox = document.getElementById(id),
          fakeEvent = { target: { checked: checkbox.checked, value: checkbox.value } };

    handlerCheckboxChance(fakeEvent, total);
  };
  
  return (
    <tr onClick={(e) => fireCheckboxOnTrClick(id)}>
      <td className="text-center">
        <input
          id={id}
          type="checkbox"
          className="form-check-input"
          onChange={(e) => handlerCheckboxChance(e, total, id)}
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
