import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import './App.css'
import logo from './smarkets-logo.svg'

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
        <ListGroup.Item onClick={() => handleSelect(item)}>
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
        return <div>{item.name}</div>
      })
    )
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row xs={2} md={2} lg={2}>
          <Col>
            {loadingEventTypes ? (
              showSpinner()
            ) : (
              <ListGroup>{renderEventTypes()}</ListGroup>
            )}
          </Col>
          <Col>{loadingEvents ? showSpinner() : renderEvents()}</Col>
        </Row>
      </Container>
    </>
  )
}

export default App
