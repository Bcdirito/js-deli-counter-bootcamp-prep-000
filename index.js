var katzDeli = [];
var katzDeliLine = [];

function takeANumber (katzDeliLine) {
 var takeaNumeber = katzDeliLine.push(katzDeliLine);

var takeANumber = 'Welcome. You are number ' + katzDeliLine.length + ' in line.';

return takeANumber;
}

function nowServing(katzDeliLine) {
  var nowServing = [];
  
  if (katzDeliLine.length === 0) {
    nowServing.push('There is nobody waiting to be served!');
  } else {
    nowServing.push('Currently serving ' + katzDeliLine[0] + '.')  ;
    katzDeliLine.shift();
  }
  
  return nowServing;
}

function currentLine(katzDeliLine) {
  var currentLine = [];

  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (let i = 1; i <= katzDeliLine.length; i++) {
      var name = katzDeliLine[i-1];
      currentLine.push(i + '. ' + name );
    }
  }
  return 'The line is currently: ' + currentLine.join(', ')
}