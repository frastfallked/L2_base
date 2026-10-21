 function hasTwoCubeSums(n) {
  let count = 0;
  let limit = Math.cbrt(n);

  for (let a = 1; a <= limit; a++) {
    for (let b = a; b <= limit; b++) {
      if (a**3 + b**3 === n) {
        count++;
      }
    }
  }

  return count >= 2;
}



function ipv4Parser(ip, subnet) 
{
  const ipParts = ip.split('.').map(Number);
  const subnetParts = subnet.split('.').map(Number);
  let networkParts = [];
  let hostParts = [];
  
  for (let i = 0; i < 4; i++) 
  {
    const net = ipParts[i] & subnetParts[i];
    networkParts.push(net);
    const host = ipParts[i] - net;
    hostParts.push(host);
  }
  
  return [networkParts.join('.'), hostParts.join('.')];
}



function whatCentury(year) {
  let c = Math.ceil(year / 100);
  let s = ["th","st","nd","rd"], v = c % 100;
  return c + (s[(v-20)%10] || s[v] || s[0]);
}


function findMissing(list) {
  let step = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== step) return list[i] + step;
  }
}


function primeFactors(n) {
  let res = "", d = 2;
  while (n > 1) {
    let count = 0;
    while (n % d === 0) { count++; n /= d; }
    if (count > 0) res += `(${d}${count > 1 ? '**' + count : ''})`;
    d++;
  }
  return res;
}



function toWeirdCase(string){
  return string.split(' ').map(word => 
    [...word].map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('')
  ).join(' ');
}



function wave(str){
  let res = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' ') continue;
    res.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return res;
}



function expandedForm(num) {
  return String(num).split("")
    .map((d, i, arr) => d + "0".repeat(arr.length - i - 1))
    .filter(d => Number(d) > 0)
    .join(" + ");
}



function solution(str){
  if (str.length % 2 !== 0) str += '_';
  return str.match(/.{1,2}/g) || [];
}


function bingo(ticket, win){
  let wins = ticket.reduce((acc, [str, num]) => 
    acc + [...str].some(c => c.charCodeAt(0) === num), 0);
  return wins >= win ? 'Winner!' : 'Loser!';
}



function domainName(url){
  return url.replace(/https?:\/\//, '').replace(/www\./, '').split('/')[0].split('.')[0];
}



function longest(arr, n) {
  let withIndex = arr.map((str, idx) => ({str, idx}));
  withIndex.sort((a, b) => b.str.length - a.str.length || a.idx - b.idx);
  return withIndex[n - 1].str;
}



function hexStringToRGB(hexString) {
  let hex = hexString.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16)
  };
}



function isCircleSorted(arr) {
  let drops = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) drops++;
  }
  return drops <= 1;
}


function howManyTimes(time1, time2) {
  let t1 = new Date(time1).getTime() / 1000;
  let t2 = new Date(time2).getTime() / 1000;
  let count = 0;
  let startMark = Math.floor((t1 - 15) / 1800) * 1800;
  for (let C = startMark; C < t2; C += 1800) {
    let date = new Date(C * 1000);
    let m = date.getMinutes();
    let h = date.getHours() % 12;
    h = h === 0 ? 12 : h;
    let dur = (m === 0) ? h : 1;
    for (let k = 0; k < dur; k++) {
      let strikeTime = C + k;
      if (strikeTime >= t1 && strikeTime < t2) {
        count++;
      }
    }
  }
  return count;
}



Array.prototype.square = function() { return this.map(x => x ** 2); };
Array.prototype.cube = function() { return this.map(x => x ** 3); };
Array.prototype.average = function() { return this.length === 0 ? NaN : this.reduce((a,b)=>a+b,0) / this.length; };
Array.prototype.sum = function() { return this.reduce((a,b)=>a+b, 0); };
Array.prototype.even = function() { return this.filter(x => x % 2 === 0); };
Array.prototype.odd = function() { return this.filter(x => x % 2 !== 0); };




function cache(func) {
  let memo = {};
  return function(...args) {
    let key = JSON.stringify(args);
    if (!(key in memo)) {
      memo[key] = func.apply(this, args);
    }
    return memo[key];
  };
}