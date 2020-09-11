import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import EventTypeListItem from './EventTypeListItem'

interface EventTypeListProps {
  eventTypes: string[]
}

type Props = EventTypeListProps
const EventTypeList: React.FC<Props> = ({ eventTypes }) => {
  const renderEventTypes = () =>
    eventTypes.map((item, index) => (
      <EventTypeListItem name={item} index={index} key={item} />
    ))

  return <Accordion>{renderEventTypes()}</Accordion>
}

export default EventTypeList
