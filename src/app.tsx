import { Component, PropsWithChildren } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'
import hahaStore from './store/first'

import './app.less'

const store = {
  counterStore,
  hahaStore
}

class App extends Component<PropsWithChildren> {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
