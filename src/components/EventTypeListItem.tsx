import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Event, EventResponse } from '../interfaces'
import EventList from './EventList'

interface EventTypeListItemProps {
  name: string
  index: number
}

type Props = EventTypeListItemProps

const EventTypeListItem: React.FC<Props> = ({ name, index }) => {
  const [events, setEvents] = React.useState<Event[]>([])
  const [hover, setHover] = React.useState<boolean>(false)

  const handleMouseHover = () => {
    setHover(!hover)
  }

  const handleClick = () => {
    fetch(`http://localhost:8000/api/events/${name}`)
      .then((res: Response) => res.json())
      .then((data: EventResponse) => {
        setEvents(data.events)
      })
  }

  return (
    <div
      style={{ flex: 1 }}
      onMouseLeave={handleMouseHover}
      onMouseEnter={handleMouseHover}
    >
      <Accordion.Toggle
        eventKey={index.toString()}
        style={{
          minHeight: '50px',
          width: '100%',
          borderTop: 0,
          background: hover ? '#00B073' : '#414141',
          color: '#fff',
          borderWidth: '0',
        }}
        onClick={handleClick}
      >
        {name}
        <Accordion.Collapse
          eventKey={index.toString()}
          style={{ padding: '20px' }}
        >
          <EventList events={events} />
        </Accordion.Collapse>
      </Accordion.Toggle>
    </div>
  )
}

export default EventTypeListItem
