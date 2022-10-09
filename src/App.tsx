import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Container from '@mui/material/Container';

const App: React.FC = () => {
  return (
      <Container>
          <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              locale={'ja'}
              businessHours={true}
              dayCellContent={(e) => e.dayNumberText = e.dayNumberText.replace('日', '')}
              events={(info, successCallback, failureCallback) => {
                  const startDate = info.start
                  const endDate = info.end
                  let events = []
                  let date = startDate
                  while(date <= endDate) {
                      const daynum = Number(`${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`)
                      const num = (daynum - 1) % 9 + 1
                      if (num === 4)
                          events.push({title: '4の日', start: new Date(date.valueOf()), allDay: true})
                      date = new Date(date.setDate(date.getDate() + 1))
                  }
                  successCallback(events)
              }}
          />
      </Container>
  )
}

export default App;
