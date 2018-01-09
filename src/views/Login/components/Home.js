import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const login = () => {
  console.log(2)
}
class Home extends Component {
  render () {
    console.log(this.props)
    const { location } = this.props
    const { from } = location.state || { from: { pathname: '/' } }
    return (
      <div>
        <Button onClick={login}>click</Button>
        {from.pathname}
      </div>
    )
  }
}

Home.propTypes = {
  a: PropTypes.string.isRequired
}

export default Home
