import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const login = () => {
  console.log(2)
}

const Home = ({ a }) =>
  <div>
    <Button onClick={login}>click</Button>
  </div>

Home.propTypes = {
  a: PropTypes.string.isRequired
}

export default Home
