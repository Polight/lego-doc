
// Lego version undefined
import { h, Component } from '/demo/node_modules/@polight/lego/dist/lego.min.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("button", {"onclick": this.toggleText.bind(this)}, [
    ((state.showInspector) ? h("span", {}, `🎪`) : ''),
    ((!state.showInspector) ? h("span", {}, `🕵️‍♀️`) : '')
])]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    @import url("/demo/index.css");
    button {
    cursor: pointer;
  }
  `)}
}



export default class extends Lego {
    toggleText() {
      this.render({ showInspector: !this.state.showInspector })
    }
  }
