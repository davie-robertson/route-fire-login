import { html, TemplateResult } from 'lit-html';
import '../src/fire-login.js';

export default {
  title: 'FireLogin',
  component: 'fire-login',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <fire-login style="--fire-login-background-color: ${backgroundColor}" .title=${title}></fire-login>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
