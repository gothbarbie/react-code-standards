import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from 'actions/userActions'

class LoginPage extends Component {
  login = () => {
    this.props.loginUser()
  }

  render() {
    return (
      <div>
        <nav>
          <button onClick={this.login}>Log in</button>
        </nav>
        {this.props.isLoggedIn ? (
          <div>
            You are not signed in yet
          </div>
        ) : (
          <div>Welcome! :-)</div>
        )}
      </div>
    )
  }
}

// Destructuring state
const mapStateToProps = state => {
  isLoggedIn: state.user.isLoggedIn,
}

const mapDispatchToProps = {
  loginUser: login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
