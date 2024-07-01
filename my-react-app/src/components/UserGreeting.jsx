
const UserGreeting = (props) => {
  return (
    <div>
        {props.isLoggedIn?(

        <h1>Welcome {props.username} </h1>
        ):(<h1>Please log in</h1>)
    }
    </div>
  )
}

export default UserGreeting