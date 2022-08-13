
// Lego version undefined
import { h, Component } from '/demo/node_modules/@polight/lego/dist/lego.min.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("p", {}, `Hello ${state.name}`)]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    @import url("/demo/index.css");
    
  `)}
}



export default class extends Lego {
    init() {
      // "world" is set as the default value of `state.name`
      this.state = { name: 'world' }
    }
  }
