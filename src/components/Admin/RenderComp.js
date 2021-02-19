import React, { Component } from 'react'
import styled from 'styled-components'
import FeedView from './FeedView'
import MemberView from './MemberView';
import LetterView from './LetterView';

export default class RenderComp extends Component {

  constructor() {
    super();
    this.state = {
      name: "View",
      showFeedView: true,
      showMemberView: false,
      showLetterView: false
    };

    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showFeedView":
        this.setState({ showFeedView: !this.state.showFeedView });
        this.setState({ showMemberView: false });
        this.setState({ showLetterView: false });
        break;
      case "showMemberView":
        this.setState({ showMemberView: !this.state.showMemberView });
        this.setState({ showFeedView: false });
        this.setState({ showLetterView: false });
        break;
      case "showLetterView":
        this.setState({ showLetterView: !this.state.showLetterView });
        this.setState({ showFeedView: false });
        this.setState({ showMemberView: false });
        break;
      default:
        this.setState({ showFeedView: this.state.showFeedView });
        this.setState({ showMemberView: false });
        this.setState({ showLetterView: false });
    }
  }


  render() {
    const { showFeedView, showMemberView, showLetterView } = this.state;


    return (
      <div>

        <Menu>
          <button onClick={() => this.hideComponent("showFeedView")}>
            showFeedView
          </button>
          <button onClick={() => this.hideComponent("showMemberView")}>
            showMemberView
          </button>
          <button onClick={() => this.hideComponent("showLetterView")}>
            showLetterView
          </button>
        </Menu>        
        
        <div>
        {showFeedView && <FeedView/>}

        {showMemberView && <MemberView/>}

        {showLetterView && <LetterView/>}
        </div>
      </div>
    
    )
  }
}


export const Menu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #CDE4E2;
width: 20vw;
height: 100vh;
position: absolute;
top: 0;
padding-top: 20vh;
`