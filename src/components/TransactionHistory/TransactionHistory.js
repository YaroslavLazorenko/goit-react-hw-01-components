import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <div />
          //   <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id.toString()} />
        );
      })}
    </ul>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
};

export default TransactionHistory;
