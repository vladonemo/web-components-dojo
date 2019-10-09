class AppBarComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
					<link rel="stylesheet" type="text/css" href="app-bar.css"/>
					<div class="nav">
                        <input type="checkbox" id="nav-check">
                        <div class="nav-header">
                            <div class="nav-title">
                                TDC Dojo
                            </div>
                        </div>
                        <div class="nav-btn">
                            <label for="nav-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>

                        <slot></slot>
                    </div>
					`;
    }
}

customElements.define('app-bar', AppBarComponent);