import React, { useState } from 'react'
import { useRouter } from 'next/router'

const EventList = ({ eventList }: any) => {
  const [events, setEvents] = useState(eventList)
  const router = useRouter()
  return (
    <>
      <h1>List of Events</h1>
      <button
        onClick={() => {
          fetcSportsEvents(setEvents, router)
        }}
      >
        Sprots Events
      </button>
      <button
        onClick={() => {
          fetcAllEvents(setEvents, router)
        }}
      >
        Show All Events
      </button>
      <hr /> <hr />
      {events.map((event: any) => {
        return (
          <>
            <div key={event.id}>
              <h2>
                {event.id} {event.titke} {event.data} | {event.category}
              </h2>
              <p>{event.description}</p>
              <hr />
            </div>
          </>
        )
      })}
    </>
  )
}
const fetcSportsEvents = async (
  setEvents: (data: any) => void,
  router: any,
) => {
  const response = await fetch(`http://localhost:4000/events?category=sports`)
  const data = await response?.json()
  setEvents(data)
  router.push(`/events?category=sports`, undefined, { shallow: true })
}
const fetcAllEvents = async (setEvents: (data: any) => void, router: any) => {
  const response = await fetch(`http://localhost:4000/events`)
  const data = await response?.json()
  setEvents(data)
  router.push(`/events`, undefined, { shallow: true })
}
export default EventList
export async function getServerSideProps(context: { query: any }) {
  try {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response?.json()
    return { props: { eventList: data } }
  } catch (err) {
    return { props: { eventList: [] } }
  }
}
