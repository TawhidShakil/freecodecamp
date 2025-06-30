const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date){
  const localTimeFormat = date.toLocaleDateString("en-US");
  return `Formatted Date (MM/DD/YYYY): ${localTimeFormat}`;
}


function formatDateLong(date){
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  //const currentDate = new Date();
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `Formatted Date (Month Day, Year): ${month} ${day}, ${year}`;

}

//console.log(formatDateLong("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)"))