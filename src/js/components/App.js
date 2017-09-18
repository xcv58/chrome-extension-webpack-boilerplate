import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('counterStore')
@observer
export default class App extends React.Component {
  render () {
    const { counterStore: { count, increase, decrease } } = this.props
    return (
      <div style={{
        textAlign: 'center'
      }}>
        <h1>
          App
        </h1>
        <div>
          Count: {count}
        </div>
        <div>
          <button onClick={decrease}>
            Decrease
          </button>
          <button onClick={increase}>
            Increase
          </button>
        </div>
      </div>
    )
  }
}
