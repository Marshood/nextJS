import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
async function fetchDashBoardData() {
  const response = await fetch('http://localhost:4000/dashboard')
  const data = await response.json()
  return data
}
const Dashboard = () => {
  const { data, error } = useSWR('dashboard', fetchDashBoardData)
  if (error) return 'An error has occured'
  if (!data) {
    return <h2> Loading....</h2>
  }

  return (
    <div>
      <h2> DashBoard</h2>
      -----------
      <h2> Likes - {data.likes}</h2>
      <h2> Posts - {data.posts}</h2>
      <h2> Followers - {data.followers}</h2>
      <h2> Following - {data.following}</h2>
    </div>
  )
}
export default Dashboard
