class NavLinksComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
					<link rel="stylesheet" type="text/css" href="nav-links.css"/>
                    <div class="nav-links">
                        <a href="#test">Test</a>
                        <a href="#test2">Test2</a>
                        <a href="#test3">Test3</a>
                        <a href="#test4">Test4</a>
                    </div>
					`;
    }
}

customElements.define('nav-links', NavLinksComponent);