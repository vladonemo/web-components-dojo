class WordCount extends HTMLElement {
    constructor() {
        super();

        const recountedElement = this.parentNode;

        const shadowRoot = this.attachShadow({mode: 'open'});
        const text = document.createElement('span');
        shadowRoot.innerHTML = `
					<link rel="stylesheet" type="text/css" href="word-count.css"/>`;
        text.className = 'word-count';
        shadowRoot.appendChild(text);

        const update = function() {
            const fullText = recountedElement.innerText || recountedElement.textContent;
            text.textContent = `Word count ${fullText.split(/\s+/g).filter(v => v.length).length}`;
        };

        setInterval(update, 200);
    }
}

customElements.define('word-count', WordCount);