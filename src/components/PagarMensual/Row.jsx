import { useState } from "react";

export const Row = ({ id, saldo, total, reg_id, fecha, handlerCheckboxChance, selected = false }) => {
  const [rowSelected, setRowSelected] = useState(selected);

  const handleRowClick = () => {
    let currentlySelected = !rowSelected;
    
    const props = {
      value: id,
      checked: currentlySelected,
    };

    handlerCheckboxChance(props, total);
    setRowSelected(currentlySelected);
  };
  
  return (
    <tr onClick={handleRowClick} id={id}>
      <td className="text-center">
        <input
          type="checkbox"
          className="form-check-input"
          checked={rowSelected}
          value={id}
          onChange={(e) => {e.stopPropagation()}}
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
