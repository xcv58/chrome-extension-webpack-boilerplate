import CounterStore from './CounterStore'

export default class Store {
  constructor () {
    this.counterStore = new CounterStore(this)
  }
}
