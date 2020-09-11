import React from 'react'

import logo from './smarkets-logo.svg'

import NavBar from './components/NavBar'
import EventTypeList from './components/EventTypeList'
import { getAllEventTypes } from './apis'
import LoadingIndicator from './components/LoadingIndicator'

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
      {loading ? (
        <LoadingIndicator />
      ) : (
        <EventTypeList eventTypes={eventTypes} />
      )}
    </>
  )
}

export default App
