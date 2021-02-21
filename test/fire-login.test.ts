import { html, fixture, expect } from '@open-wc/testing';

import { FireLogin } from '../src/FireLogin.js';
import '../src/fire-login.js';

describe('FireLogin', () => {
  let element: FireLogin;
  beforeEach(async () => {
    element = await fixture(html`<fire-login></fire-login>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
