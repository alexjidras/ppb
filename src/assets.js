let loadData = (url) => fetch(url).then((res)=>  res.ok ? res.json() : res.text().then((text) => Promise.reject(text)));
String.prototype.capitalize = function() {return this.replace(/\b\w/g,x=>x.toUpperCase())}
function randInt(min, max) { return Math.random() * (max - min) + min }
function empty(el) {while (el.firstChild) el.removeChild(el.firstChild)}
export {loadData, randInt, empty}