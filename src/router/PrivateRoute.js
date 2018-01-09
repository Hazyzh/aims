import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

const mapStateToProps = ({user}) => ({
  isAuthenticated: user.login
})

export default connect(mapStateToProps)(PrivateRoute)
