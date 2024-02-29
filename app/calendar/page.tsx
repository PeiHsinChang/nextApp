import React from 'react';


export default function Calendar() {
  const date=new Date()
  console.log(date.getDate())
  console.log(date.getMonth())
  console.log(date.getFullYear())

  const dates=new Date(date.getFullYear(),date.getMonth()+1, 0).getDate()
  const weekDateMap=['Sun','Mon','Tue','Wen','Thus','Fri','Sat']

  console.log({dates})
  // const dates=date.getDate(date.getFullYear(),date.getMonth())
  dates

  return (
  <><h1>Calendar</h1>
  <div>{date.toDateString()}</div>
  <div></div>

  </>)
  
}