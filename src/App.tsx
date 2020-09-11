import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import './App.css'

import logo from './smarkets-logo.svg'

import { slide as Menu } from 'react-burger-menu'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import NavBar from './components/NavBar'

function App() {
  const [eventTypes, setEventTypes] = React.useState<string[]>([])
  const [eventType, setEventType] = React.useState('')
  const [events, setEvents] = React.useState([])

  const [loadingEventTypes, setLoadingEventTypes] = React.useState(false)
  const [loadingEvents, setLoadingEvents] = React.useState(false)

  React.useEffect(() => {
    setLoadingEventTypes(true)
    fetch('http://localhost:8000/api/event-types')
      .then((res) => res.json())
      .then((data) => {
        setLoadingEventTypes(false)
        setEventTypes(data)
      })
  }, [])

  React.useEffect(() => {
    if (eventType) {
      setLoadingEvents(true)
      fetch(`http://localhost:8000/api/events/${eventType}`)
        .then((res) => res.json())
        .then((data) => {
          setLoadingEvents(false)
          setEvents(data.events)
        })
    }
  }, [eventType])

  const handleSelect = (item: string) => {
    setEventType(item)
  }

  const renderEventTypes = () => {
    return eventTypes.map((item) => {
      return (
        <ListGroup.Item
          key={item}
          onClick={() => handleSelect(item)}
          style={{ background: '#343a40', color: '#fff', borderRadius: 0 }}
        >
          {item}
        </ListGroup.Item>
      )
    })
  }

  const showSpinner = () => (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )

  const renderEvents = () => {
    return (
      events &&
      events.map((item: any) => {
        return (
          <Card style={{ width: '18rem', height: '100px' }}>
            <Card.Body>
              <Card.Text>{item.name}</Card.Text>
            </Card.Body>
          </Card>
        )
      })
    )
  }

  return (
    <>
      <NavBar>
        <img
          alt="smarkets logo"
          src={logo}
          width="100"
          height="50"
          className="d-inline-block align-top"
        />
      </NavBar>
      <div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {loadingEventTypes ? (
              showSpinner()
            ) : (
              <ListGroup style={{ background: '#000' }}>
                {renderEventTypes()}
              </ListGroup>
            )}
          </div>
          {/* <Row
            style={{
              border: '1px solid red',
              paddingLeft: '3%',
              paddingTop: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {loadingEvents ? showSpinner() : renderEvents()}
          </Row> */}

          <Row>
            <Col>{loadingEvents ? showSpinner() : renderEvents()}</Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default App
