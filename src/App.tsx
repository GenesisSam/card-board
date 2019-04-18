import React, { PureComponent } from "react";
import styled from "styled-components";
import Title from "./components/title";
import Content from "./components/content";

const Wrapper = styled.div<IState>`
  transition: transform, position 0.3s ease-in-out;
  box-sizing: border-box;
  padding: 16px;

  background-color: white;
  border: 1px solid grey;
  border-radius: 8px;
  width: 600px;
  height: 500px;

  cursor: pointer;

  ${props => {
    if (props.modal) {
      return {
        position: "fixed",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
      };
    }
  }}
`;

interface IProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
}

interface IState {
  modal: boolean;
}

class CardBoard extends PureComponent<IProps, IState> {
  public state: IState = {
    modal: false,
  };

  public render() {
    return (
      <>
        {this.state.modal ? (
          <div
            style={{
              width: "600px",
              height: "500px",
            }}
          />
        ) : null}
        <Wrapper onClick={this.handleClick} modal={this.state.modal}>
          <Title>{this.props.title}</Title>
          <Content modal={this.state.modal}>
            <img
              src="https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg"
              width="200px"
              height="200px"
            />

            <img
              src="https://smedia2.intoday.in/btmt/images/stories/whatsapp_660_031419103558.jpg"
              width="200px"
              height="200px"
            />

            <img
              src={`https://images.unsplash.com/photo-1552819686-ca8c45a018b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`}
              width="200px"
              height="200px"
            />
          </Content>
        </Wrapper>
      </>
    );
  }

  private readonly handleClick = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
}

export default CardBoard;
