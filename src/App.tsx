import * as React from 'react';

interface IProps {
  compiler: string;
  framework: string;
}

const App = (props: IProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

export default App;
