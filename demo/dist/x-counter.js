
// Lego version undefined
import { h, Component } from 'https://unpkg.com/@polight/lego/dist/lego.min.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("button", {"class": `primary`, "onclick": this.decrement.bind(this)}, `-`),
  h("span", {}, `${ state.value }`),
  h("button", {"onclick": this.increment.bind(this)}, `+`)]
  }
  
}



export default class extends Lego {
    init() {
      this.state = { value: 0 }
    }
    increment() { this.render({ value: Number(this.state.value) + 1 }) }
    decrement() { this.render({ value: Number(this.state.value) - 1 }) }
  }
