import * as React from 'react';

interface Props {
  style?: object;
}

const Group: React.SFC<Props> = (props) => (
  <g {...props}>
    {props.children}
  </g>
);

export default Group;