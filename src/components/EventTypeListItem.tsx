import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Event } from '../interfaces'
import EventList from './EventList'
import { getEvents } from '../apis'

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
    getEvents(name).then((data: Event[]) => {
      setEvents(data)
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
