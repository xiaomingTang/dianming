function seedRandom(seed) {
  seed = ( seed * 9301 + 49297 ) % 233280; //为何是这三个数?
  return seed / ( 233280.0 );
}

Array.prototype._shuffle = function() {
  var result = JSON.parse(JSON.stringify(this))
  for(var j, x, i = result.length; i; j = parseInt(Math.random() * i), x = result[--i], result[i] = result[j], result[j] = x);
  return result;
};

Array.prototype.shuffleBaseDay = function() {
  var d = Math.floor((new Date()).getTime() / 86400000) * 10
  var result = JSON.parse(JSON.stringify(this))
  for(var j, x, i = result.length; i; j = parseInt(seedRandom(d + i) * i), x = result[--i], result[i] = result[j], result[j] = x);
  return result;
};
