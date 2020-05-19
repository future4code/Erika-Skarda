var today = new Date().getTime();
var christmas = new Date("2020-12-25").getTime();
var timeUntilChristmas = christmas - today;
var christmasInSeconds = timeUntilChristmas / 1000;
var christmasInMinutes = christmasInSeconds / 60;
var christmasInHours = christmasInMinutes / 60;
var christmasUnDays = christmasInHours / 24;
console.log("" + christmasUnDays.toFixed(0));
