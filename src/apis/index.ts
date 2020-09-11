import { Event, EventResponse } from '../interfaces'
const apiUrl = process.env.API_URL || 'http://localhost:8000/api'

// GET /event-types
export const getAllEventTypes = (): Promise<string[]> =>
  fetch(`${apiUrl}/event-types`)
    .then((response: Response) => response.json())
    .then((data: string[]) => data)
    .catch(() => [])

// GET /events
export const getEvents = (eventType: string): Promise<Event[]> =>
  fetch(`${apiUrl}/events/${eventType}`)
    .then((response: Response) => response.json())
    .then((data: EventResponse) => data.events)
    .catch(() => [])
