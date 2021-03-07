import styled from 'styled-components'


// *********** General *********** //

// export const AdminTag = styled.p`
//   background-color: #8dc2bd;
//   font-size: 10px;
//   padding: 2px 10px;
//   margin-right: 8px;
//   border-radius: 6pt;
//   color: white;
// `;

export const AdminTagPost = styled.p`
  background-color: #9FC4C6;
  font-size: 0.6rem;
  padding: 2px 10px;
  margin-left: 5px;
  border-radius: 6pt;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
`;


export const AdminTagComment = styled.p`
  background-color: #9FC4C6;
  font-size: 0.6rem;
  padding: 2px 10px;
  margin-left: 5px;
  border-radius: 6pt;
  color: white;
  letter-spacing: 0.5px;
`;


export const FlexBoxRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`

export const FlexBoxColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-left: 10px;
width: 100%;
// background: whitesmoke;
`

export const InputBtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 10px;
  align-items: center;
  margin-top: 20px;
`;


export const PostBtn = styled.button`
  color: black;
  background-color: #cde4e2;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  // padding: 0px 8px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  margin-top: 12px;
  margin-left: -70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &: hover {
    background-color: #2faaa6;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;


export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  // background: whitesmoke;
`;


export const Timestamp = styled.p`
  // margin-left: 5px;
  font-size: 0.8rem;
  font-weight: 400;
`;


export const BtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;


// *********** Post *********** //


export const PostContainer = styled.div`
  margin: 10px 0;
  width: 40vw;
  padding: 20px;
  text-align: left;
  border: none;
  border-radius: 12pt;
  background: #f8f9fa;
  font-family: 'Poppins';
`;

export const PostedAt = styled.div`
  display: flex;
  font-size: 12px;
  color: grey;
  margin-top: 5px;
  margin-bottom: 30px;
  justify-content: flex-end;
`;

export const PostedBy = styled.div`
  color: #555b6e;
  font-weight: 500;
  display: flex;
  // align-items: center;
  font-size: 14px;
  // background: lightgrey;
`;

export const Post = styled.p`
  margin-top: 1rem;
  font-size: 14px;
`;

export const RemovePostBtn = styled.button`
  border: none;
  background: white;
  cursor: pointer;
  font-size: 12px;
  color: grey;
  font-family: Poppins;
  padding: 10px 16px;
  border-radius: 4pt;

  &: hover {
    color: #e38f8c;
  }

  &:focus {
    outline: none;
  }
`;

export const PostAltBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
// background: tomato;
width: 30%;
// position: relative;
`

export const PostAltBoxBtn = styled.button`
width: 20%;
background: transparent;
border: none;
text-align: right;
font-size: 18px;
padding: 0;
cursor: pointer;

&:focus {
  outline: none;
}
`

// *********** Comments *********** //


export const CommentInputField = styled.input`
  width: 86%;
  padding: 15px 70px 15px 12px;
  margin-top: 12px;
  margin-left: -15px;
  border: none;
  border-radius: 12pt;

  &:focus {
    outline: none;
  }
`;



export const RemoveCommentBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 12px;
  color: grey;
  font-family: Poppins;
  padding-right: 10px;
  position: relative;

  &: hover {
    color: #e38f8c;
  }

  &:focus {
    outline: none;
  }
`;


export const CommentBtn = styled.button`
  color: black;
  background-color: #cde4e2;
  border: none;
  border-radius: 8pt;
  width: 10vw;
  margin-left: 15px;
  padding: 5px 7px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  &: hover {
    background-color: #cde4e2;
    color: gray;
  }

  &:focus {
    outline: none;
  }
`;

export const ShowCommentBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ShowCommentsBtn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: grey;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: transparent;

  & p {
    font-size: 12px;
    padding-left: 5px;
  }

  &:hover {
    color: lightgrey;
  }

  &:focus {
    outline: none;
  }
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  background: white;
  border-radius: 12pt;
  padding: 15px;
`;

export const CommentAltBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
// background: tomato;
width: 30%;
position: relative;
right: 0;
`

export const CommentAltBoxBtn = styled.button`
width: 20%;
background: transparent;
border: none;
text-align: right;
font-size: 18px;
padding: 0;
cursor: pointer;

&:focus {
  outline: none;
}
`


export const CommentBy = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
`;
export const TimestampComment = styled.p`
font-size: 0.7rem;
`;

export const Comment = styled.p`
  padding: 5px 0;
  font-size: 14px;
`;
export const CommentWrapper = styled.div`
  // background: lightpink;
  padding: 10px 0;
`;

export const HideComments = styled.button`
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: grey;
  font-family: Poppins;
  text-align: right;
  background: transparent;

  & p {
    font-size: 12px;
    padding-left: 5px;
  }

  &:hover {
    color: lightgrey;
  }

  &:focus {
    outline: none;
  }
`;

export const HideBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
