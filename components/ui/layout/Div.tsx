import React from 'react'

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children } = props;
  return <div {...props}>{children}</div>;
}

export default Div
