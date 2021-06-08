import { Link } from "react-router-dom";

export const Row = ({ id, tr02100_id, saldo, total, reg_id, fecha, handlerCheckboxChance, tipo }) => {

  const Pagar = () => {
    if (tipo !== 'PPG') {
      return (
              <input 
                type="checkbox" 
                className="form-check-input" 
                onChange={(e) => handlerCheckboxChance(e, total)} 
                value={id} 
              />
      );
    }
    return (
        <Link
            to={{
                pathname: '/apps/totems/recibo/',
                state: { id, tr02100_id },
            }}
            type="button"
            className="btn btn-oap active"
        >
            EMITIR RECIBO
        </Link>
    );
  }

  return (
      <tr>
          <td className="text-center">{Pagar()}</td>
          <td className="text-center">{reg_id}</td>
          <td className="text-center">{fecha.substring(0, 10)}</td>
          <td className="text-center">$ {saldo.toFixed(2)}</td>
          <td className="text-center">$ {(total - saldo).toFixed(2)}</td>
          <td className="text-center">$ {total.toFixed(2)}</td>
      </tr>
  );
};
