class HelloWorld extends HTMLElement {
    constructor() {
        super()
    }
// custom methods start
    getId() {
        return this.id
    }
  // custom methods end
}
customElements.define("hello-world", HelloWorld)
