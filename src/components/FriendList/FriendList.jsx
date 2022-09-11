import PropTypes from 'prop-types';
import { FriendListItem }  from 'components/FriendListItem/FriendListItem';
// console.log(FriendListItem);

export const FriendList = ({ friends }) => {
    // console.log(friends);
    return (
    <ul>
            {friends.map(friend => (
                <li className="item" key={friend.id}>
                    <FriendListItem 
                        avatar = {friend.avatar}
                        name = {friend.name}
                        isOnline ={friend.isOnline}>
                    </FriendListItem>
                    
                </li>
            ))}
        </ul>
    )
    
};


FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired
}
