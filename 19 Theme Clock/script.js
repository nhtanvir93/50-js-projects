const toggle = document.getElementById("toggle");
const html = document.documentElement;

const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

toggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggle.textContent = "Dark Theme";
  } else {
    html.classList.add("dark");
    toggle.textContent = "Light Theme";
  }
});

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hourDegreeUnit = 360 / 12;
const minSecDegreeUnit = 360 / 60;

function getCurrentDateTime() {
  const date = new Date();

  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return {
    weekDay: weekDays[weekDay],
    day,
    month: months[month],
    year,
    hour: hour % 12,
    minute,
    second,
    amPm: hour >= 12 ? "PM" : "AM",
  };
}

function updateClock() {
  const { weekDay, day, month, year, hour, minute, amPm, second } =
    getCurrentDateTime();

  timeElement.textContent = `${hour}:${
    minute < 10 ? "0" + minute : minute
  } ${amPm}`;
  dateElement.textContent = `${weekDay}, ${month} ${day}, ${year}`;

  hourElement.style.transform = `translate(-50%, -100%) rotate(${
    hour * hourDegreeUnit
  }deg)`;
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${
    minute * minSecDegreeUnit
  }deg)`;
  secondElement.style.transform = `translate(-50%, -100%) rotate(${
    second * minSecDegreeUnit
  }deg)`;
}

setInterval(() => updateClock(), 1000);

updateClock();
