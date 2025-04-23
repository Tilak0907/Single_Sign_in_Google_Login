import React from 'react'
import EventCard from '../components/EventCard'

const meetings = [
  {
    id: 1,
    title: "React Basics",
    description: "Intro to React",
    start: "2025-04-20T10:00:00",
    end: "2025-04-20T11:00:00"
  },
  {
    id: 2,
    title: "Spring Boot Deep Dive",
    description: "Advanced Backend",
    start: "2025-04-21T15:00:00",
    end: "2025-04-21T16:30:00"
  }
]

const Home = ({ user }) => {
  return (
    <div>
      <h2>Hello, {user.name} 👋</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {meetings.map(meeting => (
          <EventCard key={meeting.id} meeting={meeting} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Home
