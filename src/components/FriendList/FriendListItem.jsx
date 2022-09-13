import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User Name" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
