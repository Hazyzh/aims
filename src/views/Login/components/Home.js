import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ a }) =>
  <div>
    <h3>ccc</h3>
    { a }
  </div>

Home.propTypes = {
  a: PropTypes.string.isRequired
}

export default Home
