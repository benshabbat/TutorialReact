import PropTypes from "prop-types";

const UserGreeting = (props) => {
  const welcome = <h1>Welcome {props.username} </h1>;
  const login = <h1>Please log in</h1>;
  return <div>{props.isLoggedIn ? welcome : login}</div>;
};
UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
