function getHistory() {
  return document.getElementById('history-value').innerText;
}
function printHistory(num) {
  return (document.getElementById('history-value').innerText = num);
}
function getOutput(num) {
  return document.getElementById('output-value').innerText;
}
function printOutput(num) {
  if (num == '') {
    document.getElementById('output-value').innerText = num;
  } else {
    document.getElementById('output-value').innerText = getformatednumber(num);
  }
}
function getformatednumber(num) {
  if (num == '-') {
    return '';
  }
  var n = Number(num);
  var value = n.toLocaleString('en');
  return value;
}
function reverseNumberFormat(num) {
  //   console.log(num);
  return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function () {
    if (this.id == 'clear') {
      printHistory('');
      printOutput('');
    } else if (this.id == 'backspace') {
      // console.log('!!!!!!!!');
      var output = reverseNumberFormat(getOutput()).toString();
      //console.log(output, getOutput());
      if (output) {
        // console.log('FLAG', output, output.substr(0, output, length - 1));
        output = output.slice(0, length - 1);
        printOutput(output);
      }
    } else {
      var output = getOutput();
      var history = getHistory();
      //   console.log(output, history, 'HELLO');
      if (output == '' && history != '') {
        console.log('ONE');
        if (isNaN(history[history.lenght - 1])) {
          console.log('TWO');
          history = history.slice(0, history.length - 1);
        }
      }
      if (output != '' || history != '') {
        console.log('THREE');
        output = output == '' ? output : reverseNumberFormat(output);
        history += output;
        if (this.id == '=') {
          console.log('FOUR');
          console.log(history);
          var result = eval(history);
          printHistory('');
          printOutput(result);
        } else {
          history += this.id;
          printHistory(history);
          printOutput(result);
          printOutput('');
        }
      }
    }
  });
}
var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function () {
    var output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output += this.id;
      printOutput(output);
    }
  });
}
