import * as React from 'react';

export interface Props {
  show: boolean;
  children: any;
}

const If = (props: Props) => {
  return <React.Fragment>{props.show ? props.children : null}</React.Fragment>;
};
export default If;
