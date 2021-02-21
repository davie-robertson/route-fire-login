// talent.ts
import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-talent')
export class Talent extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}