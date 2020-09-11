import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import './App.css'

import logo from './smarkets-logo.svg'

import NavBar from './components/NavBar'
import EventTypeList from './components/EventTypeList'
import { getAllEventTypes } from './apis'

const App: React.FC = () => {
  const [eventTypes, setEventTypes] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    setLoading(true)
    getAllEventTypes().then((data: string[]) => {
      setEventTypes(data)
      setLoading(false)
    })
  }, [])

  const showSpinner = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )

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
      {loading ? showSpinner() : <EventTypeList eventTypes={eventTypes} />}
    </>
  )
}

export default App
