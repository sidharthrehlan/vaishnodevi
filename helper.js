const { parse, isAfter, endOfYear, getYear, endOfMonth } = require('date-fns');

function isAfterApril30(dateString) {
    // Parse the date string
    const date = parse(dateString, 'dd-MMM-yyyy', new Date());
  
    // Get the year of the date
    const year = getYear(date);
  
    // Get the end of April of the given year
    const endOfApril = new Date(year, 2, 30); // April is represented as 3 because months are zero-based
  
    // Check if the date is after April 30th
    return isAfter(date, endOfApril);
  }