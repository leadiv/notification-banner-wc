import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `notification-banner-wc`
 * A notification banner
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class NotificationBannerWc extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'notification-banner-wc',
      },
    };
  }
}

window.customElements.define('notification-banner-wc', NotificationBannerWc);
