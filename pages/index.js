// REF: https://mdxjs.com/getting-started#working-with-components

import Content from "../content/hello.mdx";

const MyH1 = props => <h1 style={{ color: "tomato" }} {...props} />;
const components = {
  h1: MyH1
};

export default () => <Content components={components} />;
