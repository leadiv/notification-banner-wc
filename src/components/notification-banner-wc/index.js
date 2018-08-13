class NotificationBannerWc extends HTMLElement {

    static get template() {

        return `
            <h2 id="body"></h2>
        `;
    }

    constructor() {

        super();

        this.theRoot = this.attachShadow({mode: 'open'});
        this.theRoot.innerHTML = NotificationBannerWc.template;
    }
}



window.customElements.define('notification-banner-wc', NotificationBannerWc);
