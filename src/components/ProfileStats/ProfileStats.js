import PropTypes from 'prop-types';
import s from './ProfileStats.module.css';
import capitalize from '../capitalize';

const ProfileStats = ({ label, quantity }) => {
  return (
    <>
      <span className={s.label}>{capitalize(label)}</span>
      <span className={s.quantity}>{quantity.toLocaleString()}</span>
    </>
  );
};

ProfileStats.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProfileStats;
