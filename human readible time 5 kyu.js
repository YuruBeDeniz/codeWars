/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript */

function humanReadable (seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    
  	let hDisplay = h <= 9 ? '0'+ h+':' : h+ ":";
    let mDisplay = m <= 9 ? '0'+ m+':' : m+ ":";
    let sDisplay = s <= 9 ? '0'+ s : s;
  return `${hDisplay}${mDisplay}${sDisplay}`
}

humanReadable(0) // '00:00:00', 'humanReadable(0)');
humanReadable(59) // '00:00:59', 'humanReadable(59)');
humanReadable(60) // '00:01:00', 'humanReadable(60)');
humanReadable(90) // '00:01:30', 'humanReadable(90)');
humanReadable(3599) // '00:59:59', 'humanReadable(3599)');