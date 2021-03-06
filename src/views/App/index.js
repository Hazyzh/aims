import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import './index.less'
import HeaderComponent from './containers/HeaderComponent.js'
import FooterComponent from './containers/FooterComponent.js'

const { Header, Footer, Content } = Layout

const App = ({children}) =>
  <div>
    <Layout>
      <Header className='header'>
        <HeaderComponent />
      </Header>
      <Content>
        <div className='App-content-box'>
          {children}
        </div>
      </Content>
      <Footer className='footer-box'>
        <FooterComponent />
      </Footer>
    </Layout>
  </div>

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
