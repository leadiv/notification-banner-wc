/**
 * `notification-banner-wc`
 * A notification banner
 *
 * @customElement
 * @demo demo/index.html
 */
class NotificationBannerWc extends HTMLElement {

    static get template() {

        return `
            <style>
                :host {
                  display: block;
                }
            </style>
            <h2></h2>
        `;
    }

    static get observedAttributes() {

        return ['prop1'];
    }

    constructor() {

        super();

        this.theRoot = this.attachShadow({mode: 'open'});
        this.theRoot.innerHTML = NotificationBannerWc.template;
    }

    connectedCallback() {

        this.render({prop1: this.prop1});
    }

    attributeChangedAttribute(prop, oldValue, newValue) {

        if (oldValue !== newValue) {

            switch (prop) {

            case 'prop1':
                this.prop1(newValue);
                break;
            }
        }
    }

    get prop1() {

        return this.getAttribute('prop1') || 'notification-banner-wc';
    }

    set prop1(nextValue) {

        this.setAttribute('prop1', nextValue);
        this.render({prop1: nextValue});
    }

    render({ prop1 }) {

        const $h2 = this.theRoot.querySelector('h2');
        const $nextH2 = document.createDocumentFragment();

        $nextH2.textContent = `Hello ${prop1}!`;

        while ($h2.firstChild) {

            $h2.removeChild($h2.firstChild);
        }

        $h2.appendChild($nextH2); 
    }
}



window.customElements.define('notification-banner-wc', NotificationBannerWc);
