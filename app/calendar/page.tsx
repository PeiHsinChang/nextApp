"use client" 
import React from 'react';
import styled from 'styled-components';


const EmptyFunction= (datewww)=>{
  console.log(datewww)
  // let datesArr
  // for(let i=0;i<dates;i++){
  //   datesStr+=<div></div>
  // }
  // console.log({datesStr})
  // return datesStr
}


export default function Calendar() {
  const date=new Date()
  console.log(date.getDate())
  console.log(date.getMonth())
  console.log(date.getFullYear())
  console.log('星期',date.getDay())

  const dates=new Date(date.getFullYear(),date.getMonth()+1, 0).getDate()
  const weekDateMap=['Sun','Mon','Tue','Wen','Thus','Fri','Sat']

  const dateStr= EmptyFunction(date.getDay())
  // console.log(dateStr)
  for(let i=0;i<dates;i++){

  }
  console.log({dates})
  // const dates=date.getDate(date.getFullYear(),date.getMonth())
  const datesArr=[]

  return (
  <Wrapper><h1>Calendar</h1>
  <div>{date.toDateString()}</div>

  {/* {dateStr} */}
  <div></div>

  </Wrapper>)
  
}


const Wrapper=styled.div`
  border: 2px solid red;
`