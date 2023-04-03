class HelloWorld extends HTMLElement {
// constructor start
    constructor() {
        super()
    }
// constructor end
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
// start of custom element definitions
customElements.define("hello-world", HelloWorld);
// end of custom element definitions
