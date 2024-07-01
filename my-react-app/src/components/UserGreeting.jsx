import PropTypes from "prop-types"

const UserGreeting = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>Welcome {props.username} </h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
};
UserGreeting.proptypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username: "Guest"
}

export default UserGreeting;
