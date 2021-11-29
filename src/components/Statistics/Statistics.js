import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatsItem from '../StatsItem';

const getRandomColor = () => {
  return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={s.item} style={{ backgroundColor: getRandomColor() }} key={id}>
              <StatsItem label={label} percentage={percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};

export default Statistics;
