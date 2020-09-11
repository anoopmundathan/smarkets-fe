import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const LoadingIndicator: React.FC = () => {
  return (
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
}

export default LoadingIndicator
