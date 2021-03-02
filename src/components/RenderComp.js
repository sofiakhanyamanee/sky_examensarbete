import React, { Component } from 'react'
import styled from 'styled-components'
import FeedView from './Admin/FeedView'
import MemberView from './Admin/MemberView';
import LetterView from './Admin/LetterView';
import FeedIcon from '../../images/feed.png'
import MemberIcon from '../../images/member.png'
import DocumentIcon from '../../images/document.png'

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
          <FlexBtnBox>
            <ShowViewBtn onClick={() => this.hideComponent("showFeedView")}>
              <img src={FeedIcon} alt="feed"/>
            </ShowViewBtn>
            <ShowViewBtn onClick={() => this.hideComponent("showMemberView")}>
              <img src={MemberIcon} alt="member"/>
            </ShowViewBtn>
            <ShowViewBtn onClick={() => this.hideComponent("showLetterView")}>
            <img src={DocumentIcon} alt="document"/>
            </ShowViewBtn>
          </FlexBtnBox>
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
padding-top: 30vh;
`


export const ShowViewBtn = styled.button`
background: transparent;
border: none;
cursor: pointer;

& img {
  width: 45px;
  height: 45px;
}

&:focus {
  outline: none;
}
`

export const FlexBtnBox = styled.div`
// background: whitesmoke;
display: flex;
flex-direction: column;
height: 50vh;
justify-content: space-around;
`