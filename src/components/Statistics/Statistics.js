import PropTypes from 'prop-types';
import { SectionStatistics, StatList } from './Statistics.styled.jsx';

export const Statistics = ({ data }) => {
  return (
    <SectionStatistics>
      <h2 className="title">Upload stats</h2>
      <StatList>
        {data.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </StatList>
    </SectionStatistics>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
