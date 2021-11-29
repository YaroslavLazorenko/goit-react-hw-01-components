import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
import TransactionTableRow from '../TransactionTableRow';
import capitalize from '../capitalize';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.headRow}>
        <tr>
          <th className={s.headCell}>Type</th>
          <th className={s.headCell}>Amount</th>
          <th className={s.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionTableRow
              type={capitalize(type)}
              amount={amount}
              currency={currency}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};

export default TransactionHistory;
