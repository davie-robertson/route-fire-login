// product.ts
import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-product')
export class Product extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}