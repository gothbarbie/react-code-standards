import React, { Component } from 'react'

export default class Dropdown extends Component {
  state = {
    isOpen: false,
  }

  toggleOpen = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    return (
      <div>
        <button>Toggle open</button>
        {this.state.isOpen && <div>Open sesame!</div>}
      </div>
    )
  }
}
