import PropTypes from 'prop-types';
import { StyleProfile } from './Profile.styled.jsx';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <StyleProfile>
      <div className="description">
        <img src={avatar} alt="avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag} </p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </StyleProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
