function isNotEmpty(element) {

    return element.hasChildNodes();
}

class NotificationBannerWc extends HTMLElement {

    static get observedAttributes() {

        return ['inactive'];
    }

    static get template() {

        return `
            <style>
                :host([hidden]),
                :host([inactive="inactive"]) {
                    display: none;
                }

                /* fallback for host version */
                [inactive="inactive"] {
                    display: none;
                }
            </style>
            <span id="body" inactive="inactive">
                <slot name="body"></slot>
            </span>
        `;
    }

    constructor() {

        super();

        this.theRoot = this.attachShadow({mode: 'open'});
        this.theRoot.innerHTML = NotificationBannerWc.template;
        this.$body = this.theRoot.querySelector('#body');
        this.setAttribute('inactive', 'inactive');
    }

    connectedCallback() {

        this.$slot = this.theRoot.querySelector('[name=body]');
        this.$slot.addEventListener('slotchange', this.onslotchange.bind(this));
    }

    attributeChangedCallback(prop, oldValue, newValue) {

        if (oldValue !== newValue) {

            switch (prop) {

            case 'inactive':
                this.$body.setAttribute(prop, newValue);
                break;
            }
        }
    }

    disconnectedCallback() {

        this.$slot.removeEventListener('slotchange', this.onslotchange);
    }

    onslotchange(event) {

        const slots = this.$slot.assignedNodes();

        if (slots.some(isNotEmpty)) {

            this.inactive = 'active';
        }
    }

    set inactive(value) {

        this.setAttribute('inactive', value);
    }

    get inactive() {

        return this.getAttribute('inactive');
    }
}



window.customElements.define('notification-banner-wc', NotificationBannerWc);
