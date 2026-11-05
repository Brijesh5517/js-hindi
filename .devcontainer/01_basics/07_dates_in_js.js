let mydate=new Date()
// console.log(mydate) // 2026-11-05T06:56:11.559Z
// console.log(mydate.toString()) //Thu Nov 05 2026 12:26:11 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()) //Thu Nov 05 2026
// console.log(mydate.toISOString()) // 2026-11-05T06:56:11.559Z
// console.log(mydate.toJSON())//2026-11-05T06:56:11.559Z
// console.log(mydate.toLocaleString()) //5/11/2026, 12:26:11 pm

//console.log(mydate.toLocaleString('default',{day: "2-digit", weekday: "long"})) //Thursday 05

// Get today's date locally
//const today = Temporal.Now.plainDateISO(); 
//console.log(today.toString()); // "2026-11-05"

// // Create a specific date. Months are finally 1-12!
// const birthday = Temporal.PlainDate.from({ year: 2026, month: 11, day: 5 });
// // Setup: Capture the exact moment in your local timezone (IST)
// const myTemporalDate = Temporal.Now.zonedDateTimeISO(); 


// // 1. Equivalent to console.log(mydate), .toISOString(), and .toJSON()
// // To get the pure UTC timestamp, convert to an "Instant"
// console.log(myTemporalDate.toInstant().toString()); 
// // Output: 2026-11-05T06:56:11.559Z


// // 2. Equivalent to mydate.toString()
// // Temporal drops the messy legacy format and uses explicit localization for timezones
// console.log(myTemporalDate.toLocaleString('en-US', { 
//   weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', 
//   hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'long' 
// }));
// // Output: Thu, Nov 05, 2026, 12:26:11 PM India Standard Time


// // 3. Equivalent to mydate.toDateString()
// // First extract just the Date part, then format it
// console.log(myTemporalDate.toPlainDate().toLocaleString('en-US', { 
//   weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' 
// }));
// // Output: Thu, Nov 05, 2026


// // 4. Equivalent to mydate.toLocaleString() (Indian format)
// // Temporal's toLocaleString is powerful and adapts to locale codes (like 'en-IN' for India)
// console.log(myTemporalDate.toLocaleString('en-IN', {
//   dateStyle: 'short', timeStyle: 'medium'
// }));
// // Output: 5/11/2026, 12:26:11 pm

const today = Temporal.PlainDate.from("2026-11-05");
const future = Temporal.PlainDate.from("2027-01-01");

console.log(Temporal.PlainDate.compare(today, future)); 
// Output: -1 (because today is before the future)

console.log(Temporal.PlainDate.compare(future, today)); 
// Output: 1 (because future is after today)