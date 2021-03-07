import React from "react";
import UserAvatar from 'react-user-avatar'


export default function Avatar() {
  const AvatarColors = [
    "#ccaabb",
    "#ffb6b9",
    "#fae3d9",
    "#bbded6",
    "#bee5d3",
    "#fafcc2",
    "#ffeecc",
    "#f7e8f6",
    "#bbded6",
    "#e6e7e5",
    "#dde8b9",
    "#bad7df",
  ];

  let rand = Math.floor(Math.random()*AvatarColors.length);     

  const HeadingColor = {
    color: AvatarColors[rand]
  };

  return (
    <div>
      <h1 style={HeadingColor}>Välkommen</h1>
      {/* <UserAvatar size="48" name='Sofia Khan' colors={rand}/> */}
      {/* {console.log(HeadingColor.color)} */}
    </div>
  );
}

