import { action, observable } from 'mobx'
import { getLocalCount, setLocalCount } from '../libs'

export default class CounterStore {
  constructor (store) {
    this.store = store
    this.init()
  }

  init = async () => {
    this.count = await getLocalCount()
  }

  @observable count = 0

  @action
  increase = () => {
    this.count += 1
    this.setCount()
  }

  @action
  decrease = () => {
    this.count -= 1
    this.setCount()
  }

  setCount = () => {
    setLocalCount(this.count)
  }
}
