const today: number = new Date ().getTime()
const christmas: number = new Date(`2020-12-25`).getTime()

const timeUntilChristmas: number = christmas - today;
const christmasInSeconds: number = timeUntilChristmas/1000
const christmasInMinutes: number = christmasInSeconds/60
const christmasInHours: number = christmasInMinutes/60
const christmasUnDays: number = christmasInHours/24

console.log(`${christmasUnDays.toFixed(0)}`)
