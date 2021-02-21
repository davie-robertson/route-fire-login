// talent-list.ts

import { LitElement, html, customElement } from 'lit-element';

@customElement('talent-list')
export class TalentList extends LitElement {
  render() {
    return html`
      <h2>Talent List</h2>
      <ul>
        <li><a href="/talent/talent/1">shlagg Introduction</a></li>
        <li><a href="/talent/talent/2">Rmas of JavaScript</a></li>
        <li><a href="/talent/talent/3">Web Components and TypeScript</a></li>
      </ul>
    `;
  }
}