import React from 'react'
import { Event } from '../interfaces'

interface EventListProps {
  events: Event[]
}

type Props = EventListProps

const EventList: React.FC<Props> = ({ events }) => {
  const renderEventList = () =>
    events.map((item, index) => (
      <p
        style={{
          background: '#242424',
          margin: '10px',
          padding: '5px',
        }}
        key={index.toString()}
      >
        {item.name}
      </p>
    ))

  return <>{events.length > 0 ? renderEventList() : <p>No Events</p>}</>
}

export default EventList
