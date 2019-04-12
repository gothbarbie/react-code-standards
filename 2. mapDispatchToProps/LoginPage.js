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
        <div>
          You are not signed in yet
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  loginUser: dispatch(login()),
}

export default connect(null, mapDispatchToProps)(LoginPage)
