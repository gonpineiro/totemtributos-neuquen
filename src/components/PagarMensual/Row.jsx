export const Row = ({ id, saldo, total, reg_id, fecha, handlerCheckboxChance }) => {

  const fireCheckboxOnTrClick = (e, id) => {
    e.stopPropagation();
    const checkbox = document.getElementById(id),
          props = { checked: checkbox.checked, value: checkbox.value };

    console.log('what');
    handlerCheckboxChance(props, total);
  };
  
  return (
    <tr onClick={(e) => fireCheckboxOnTrClick(e, id)}>
      <td className="text-center">
        <input
          id={id}
          type="checkbox"
          className="form-check-input"
          onChange={(e) => e.stopPropagation()}
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
