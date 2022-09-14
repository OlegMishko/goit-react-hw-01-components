import PropTypes from 'prop-types';
import { Table, TableData } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  console.log(transactions);
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};
