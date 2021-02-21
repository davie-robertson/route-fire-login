// look-details.ts

import { LitElement, html, customElement,property } from 'lit-element';

@customElement('look-details')
export class LookDetails extends LitElement {
  @property({type: String}) id=context.params.id

  render() {
    return html`
      <h2>a look ${this.id}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
        est, placerat ut risus non, bibendum tincidunt nisl. Sed vitae gravida
        urna. Maecenas ut efficitur massa, sed viverra dolor. Ut euismod, nibh
        vel suscipit porttitor, augue libero dictum lacus, et pellentesque enim
        libero quis dui. Curabitur lorem sapien, tristique eget dictum non,
        lobortis ac justo. Ut ac ipsum aliquam, vehicula metus eu, vulputate
        felis. Nunc commodo viverra dolor commodo viverra. Donec et leo diam.
        Duis iaculis cursus bibendum. Vivamus a venenatis turpis. Proin ultrices
        libero vel sollicitudin condimentum. Curabitur vitae nisl id orci
        placerat imperdiet. In eget orci leo. Fusce dignissim, orci nec
        fermentum lobortis, ligula massa bibendum mauris, at imperdiet velit
        purus a dolor. Donec et tempor ante.
      </p>
    `;
  }
}