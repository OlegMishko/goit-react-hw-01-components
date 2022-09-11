import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        // <li className="item" key={id}>
        <>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User Name" width="48" />
            <p className="name">{name}</p>

            {/* </li> */}
            
        </>
    );
};
// console.log(FriendListItem);

FriendListItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

