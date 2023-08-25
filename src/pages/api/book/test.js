function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const millisBetween = endDate.getTime() - beginDate.getTime();
  const days = millisBetween / millisecondsPerDay;

  return Math.floor(days);
}

// find all images without alternate text
// and give them a red border
function process() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    if (!image.alt) {
      image.style.border = "5px solid red";
    }
  });
}

// Express server on port 3000
// Return the current time
