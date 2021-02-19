import React from 'react'
import MemberList from './MemberList'
import NewMembers from './NewMembers'

export default function MemberView() {
  return (
    <div>
      <NewMembers/>
      <MemberList/>
    </div>
  )
}
