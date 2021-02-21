// looks.ts

import { LitElement, html, customElement } from 'lit-element';

@customElement('lit-looks')
export class Looks extends LitElement {

  render() {
    return html`
      // eslint-disable-next-line no-restricted-globals
      <h2>Looks ${document.location}</h2>
      <ul>
        <li><a href="/look/look/1">look1 Introduction</a></li>
        <li><a href="/look/look/2">Look of JavaScript</a></li>
        <li><a href="/look/look/3">Look Web Components and TypeScript</a></li>
      </ul>
    `;
  }
}