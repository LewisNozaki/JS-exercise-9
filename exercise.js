"use strict";

// Solution 1
function encrypt(text, n) {
  if (text === "" || text === null || n <= 0) {
    return text;
  }
  
  let textArr = text.split("");
  let repeat = n
  let newText = "";
  
  while (repeat > 0) {
    let arrOdd = [];
    let arrEven = [];
    
    textArr.forEach((item, id) => {
      if (id % 2 === 0) {
        arrEven.push(item)
      } else {
        arrOdd.push(item)
      }
    })
    
    newText = [...arrOdd, ...arrEven].join("");
    textArr = newText.split("");

    repeat--;
  }
  
  return newText;
}

function decrypt(encryptedText, n) {
  if (encryptedText === "" || encryptedText === null || n <= 0) {
    return encryptedText;
  }
  
  let textArr = encryptedText.split("");
  let repeat = n;
  let newText = "";
  let middle = Math.floor(textArr.length / 2);
  
  
  while (repeat > 0) {
    let arrOdd = [];
    let arrEven = [];
    let output = "";
    
    textArr.forEach((item, index) => {
      if (index < middle) {
        arrOdd.push(item);
      } else {
        arrEven.push(item);
      }
    });
    
    for (let i = 0; i <= middle; i++) {
      if (arrEven[i]) {
        output += arrEven[i];
      }
      
      if (arrOdd[i]) {
        output += arrOdd[i];
      }
    }
    
    textArr = output.split("");
    newText = output;
    repeat--;
  }
  
  return newText;
}
