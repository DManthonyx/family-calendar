import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  H1,
  Button,
  Main,
  Div,
  P
} from './style'

const Calender = (props) => {

  const events = props.events
  const day = new Date();
  const [month, setMonth] = useState(day.getMonth())
  const [year, setYear] = useState(day.getFullYear())
  const [eventPicked, setEventPicked] = useState({})
  let monthAndYear = ''
  let currentDay = day.getDay();
  const months = ["Janruary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const daysInMonth = (month, year) =>  { 
    return new Date(year, month + 1, 0).getDate();
  }

  const weekDaysShort = moment.weekdaysShort();

  const next = () => {
    setMonth((month + 1) % 12)
    setYear((month === 11) ? year + 1 : year)
  }
  
  const previous = () => {
    setMonth((month === 0) ? 11 : month - 1)
    setYear((month === 0) ? year - 1 : year)
  }

  const calender = (month, year) => {
    let firstDay = (new Date(year, month)).getDay()
    let blanks = []
    let numOffSet = 32
    for (let i = 0; i < firstDay; i++) {
      blanks.push(<Td key={numOffSet * 10}>{''}</Td>)
      numOffSet++
    };
    let days = [];
    let num = 0
    if(events && events.length) {
      for (let d = 1; d <= daysInMonth(year, month); d++) {
        for(let i = 0; i < events.length; i++) {
          if(events[i].day === d && events[i].month === month && events[i].year === year) {
            days.push(<Td key={d} data={`${events[i].day}-${events[i].month}-${events[i].year}`} className='update'>{d}</Td>);
          }
        }
        if(days && days[num]) {
          
        } else {
          days.push(<Td key={d}>{d}</Td>);
        }
        num++
      }
    }
    let totalSlots = [...blanks, ...days]
    let rows = []
    let cells = []
    totalSlots.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];  
        cells.push(day); 
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });
    for(let i = 0; i < rows.length; i++) {
      let numOffSet2 = 100
      while(rows[i].length >= 1 && rows[i].length < 7) {
        rows[i].push(<Td key={numOffSet2}>{''}</Td>)
        numOffSet2++
      }
      if(rows[i].length === 0) {
        rows.splice(i,1)
      }
    }
    return rows
  }

  const showPickedEvent = (e) => {
    const data = e.target.getAttribute('data')
    if(events && data) {
      const day = Number(data.slice(0,1))
      const month = Number(data.slice(2,4))
      const year = Number(data.slice(5))
      const result = events.filter(ele =>  ele.day === day && ele.month === month && ele.year === year)
      setEventPicked({
        address: `${result[0].address}, ${result[0].city} ${result[0].zipcode}`,
        contact: result[0].contact,
        info: result[0].info,
        name: result[0].name,
        day: `${months[result[0].month]} ${result[0].day}, ${result[0].year}`,
        time: result[0].time,
        type: result[0].type
      })
    }
  }

  const firstEvent = () => {
    if(events) {
      setEventPicked({
        address: `${events[0].address}, ${events[0].city} ${events[0].zipcode}`,
        contact: events[0].contact,
        info: events[0].info,
        name: events[0].name,
        day: `${months[events[0].month]} ${events[0].day}, ${events[0].year}`,
        time: events[0].time,
        type: events[0].type
      })
    }
  }

  console.log(eventPicked, 'picked')

  useEffect(() => {
    firstEvent()
  },[events])

  return (
    <Main>
      <Table>
        <Thead>
          <Button onClick={previous} className='prev'></Button>
          <H1>{`${months[month]}`}<br />{`${year}`}</H1>
          <Button onClick={next} className='next'></Button>
        </Thead>
        <Tbody>
        <Tr>
          {
            weekDaysShort.map((day, i) => {
              return (
                <Td key={i}>{day}</Td>
              )
            })
          }
          </Tr>
          {
            calender(month, year).map((row, i) => {
              return <Tr key={i} onClick={(e) => showPickedEvent(e)}>{row}</Tr>;
            })
          }
        </Tbody>
      </Table>
      <Div>
        <Div className='event-picked'>
          <P>{eventPicked.day}</P>
          <P>{eventPicked.time}</P>
        </Div>
        <Div className='event-picked2'>
          <P>{eventPicked.type}</P>
          <P>{eventPicked.name}</P>
          <P>{eventPicked.address}</P>
          <P>Contact: {eventPicked.contact}</P>
        </Div>
      </Div>
    </Main>
  );
}

const mapStateToProps = (state) => {
  return {
    events: state.resource.events
  }
}

export default withRouter(connect(mapStateToProps, null)(Calender))

