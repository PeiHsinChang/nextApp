"use client";
import React from "react";
import styled from "styled-components";

// 日期 date.getDate()
// 月份 date.getMonth() (month-1)

const fillInCalendarData = (date) => {
  const getLastMonDate = (num) =>
    new Date(date.getFullYear(), date.getMonth(), 1 - num).getDate();

  const getNextMonDate = (num) =>
    new Date(date.getFullYear(), date.getMonth(), 1 + num).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const firstDayOfdate = firstDay.getDay();

  let dates = [];

  // 上個月
  for (let i = firstDayOfdate; i > 0; i--) {
    dates.push({ date: getLastMonDate(i) });
  }

  // 這個月
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const isToday = i === date.getDate();
    dates.push({ date: i, isToday });
  }

  let nextMonDates = lastDay.getDay() + 1;
  const nextMonthDates = 7 - nextMonDates;

  // 下個月
  for (let i = 0; i < nextMonthDates; i++) {
    dates.push({ date: getNextMonDate(i) });
  }

  return dates;
};

export default function Calendar() {
  const date = new Date();
  console.log(date.getDate());
  console.log(date.getMonth());
  console.log(date.getFullYear());
  console.log("星期", date.getDay());

  const dates = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const weekDateMap = ["Sun", "Mon", "Tue", "Wen", "Thus", "Fri", "Sat"];

  const dateStr = fillInCalendarData(date);
  // console.log(dateStr)
  // for (let i = 0; i < dates; i++) {}
  console.log({ dateStr });
  // const dates=date.getDate(date.getFullYear(),date.getMonth())

  return (
    <Wrapper>
      <h1>Calendar</h1>
      <div>{date.toDateString()}</div>

      {/* {dateStr} */}
      <div className={"calendar"}>
        {weekDateMap.map((item, index) => {
          return (
            <div key={index} className="day">
              {item}
            </div>
          );
        })}
        {dateStr.map((item, index) => {
          return (
            <div key={index} className={`day ${item.isToday ? "red" : ""}`}>
              {item.date}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 2px solid red;
  .calendar {
    display: flex;
    border: 2px solid pink;

    flex: 1;
    flex-wrap: wrap;
    .day {
      display: flex;
      /* border: 2px solid green; */
      width: calc(100% / 7);
      flex: 1 1 1/7;
    }

    .red {
      background-color: red;
    }
  }
`;
