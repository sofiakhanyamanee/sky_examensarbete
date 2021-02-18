import React from 'react'
import MemberList from './MemberList'
import NewMembers from './NewMembers'

export default function MemberView() {
  return (
    <div>
      <h3>Memberview component</h3>
      <NewMembers/>
      <MemberList/>
    </div>
  )
}
