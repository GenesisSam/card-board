import * as React from "react";

import styled from "styled-components";

interface IProps {
  modal: boolean;
}

const Box = styled.div<IProps>`
  img {
    transition: all 0.3s ease-in-out;
    width: ${props => {
      return props.modal ? "100%" : "200px";
    }};

    height: ${props => {
      return props.modal ? "100%" : "200px";
    }};
  }
`;

export default class ContentBox extends React.PureComponent<IProps> {
  private readonly refBox = React.createRef<HTMLDivElement>();

  public render() {
    const { children, modal } = this.props;
    return (
      <Box ref={this.refBox} modal={modal}>
        {children}
      </Box>
    );
  }
}
