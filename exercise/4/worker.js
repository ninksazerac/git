const colors = ["green", "red", "lightgreen", "blue", "pink", "orange"];
let colorIndex = 0;

function getNextColor() {
  const color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  return color;
}

function updateDateTimeAndColor() {
  const now = new Date().toString();
  const dateTimeString = now.toLocaleString();
  const bgColor = getNextColor();
  postMessage({ dateTime: dateTimeString, bgColor });
}

let intervalId;

self.onmessage = (event) => {
  if (event.data === "start") {
    intervalId = setInterval(updateDateTimeAndColor, 1000);
    updateDateTimeAndColor();
  } else if (event.data === "stop") {
    clearInterval(intervalId);
  }
};
