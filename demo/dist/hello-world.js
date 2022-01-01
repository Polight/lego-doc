
// Lego version undefined
import { h, Component } from 'https://unpkg.com/@polight/lego/dist/lego.min.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("p", {}, `Hello ${state.name}`)]
  }
  
}



export default class extends Lego {
    init() {
      // "world" is set as the default value of `state.name`
      this.state = { name: 'world' }
    }
  }
