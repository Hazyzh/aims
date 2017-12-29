import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'

const { Header, Footer, Content } = Layout

const App = ({children}) =>
  <div>
    <Layout>
      <Header><Link to='/'>Header</Link></Header>
      <Content>
        <div className='App-content-box'>
          {children}
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
