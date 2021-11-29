import PropTypes from 'prop-types';
import s from './TransactionTableRow.module.css';

const TransactionTableRow = ({ type, amount, currency }) => {
  return (
    <tr className={s.row}>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
};

TransactionTableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionTableRow;
