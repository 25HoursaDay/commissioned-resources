class HelloWorld extends HTMLElement {

    constructor() {
        super()
    }
// custom callbacks start
    connectedCallback() {
        if (this.hasAttribute("ishidden")) {
            this.style.backgroundColor = "grey"
            this.style.pointerEvents = "none"
        }
    }
// custom callbacks end
// custom methods start
    getId() {
        return this.id
    }
// custom methods end
}

customElements.define("hello-world", HelloWorld)
