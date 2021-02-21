// look.ts
import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-look')
export class Look extends LitElement {
  render() {
    return html`
      <slot></slot>
      Hello!
    `;
  }
}