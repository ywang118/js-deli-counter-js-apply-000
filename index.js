var katzDeliLine= [];

function takeANumber(katzDeliLine,name) {
  // new customer waiting inline, and tell them the #
  katzDeliLine.push(name);
  for (let i = 0; i < katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      var position = i+1
      return position;
    }
  }
  console.log(`Welcome, ${name}. You are number ${position} in line.`)
  }
}
