function telephoneCheck(str) {
  let myRegex = /[^0-9]/gi
  let myReg = /[^( ^) ^0-9 ^-]/gi
 console.log(str.match(myReg))
  let removed = str.replace(myRegex,"")
  console.log(str)
  console.log(removed.length)

if((removed.length == 10 || 
removed.length == 11) && 
(myReg.test(str) == false )){

  if(removed.length == 10 && 
     str.indexOf(" ") ==
      (str.indexOf('(') != -1 && str.indexOf(')') != -1)&& (str.indexOf('(') != 0 && 
       str.indexOf(')') != 4)){
         console.log("1st nested")
         console.log(str.indexOf('('))
         console.log(str.indexOf(')'))
      return false;
   }
  else if(removed.length == 11 && str[0] != 1){

        console.log("2nd nested")
        return false;
      }
  else if(removed.length == 10 &&
  str.indexOf(" ") == 2){
    return false;
  }


  else if(removed.length == 11 &&
      str[0] == 1 &&
      (str.indexOf('(') != -1 && 
      str.indexOf(')') != -1) &&
      str.indexOf(" ") == -1 &&

      (str.indexOf('(') != 1 && 
      str.indexOf(')') != 5)
      ){
        console.log("3rd nested")
     return false;
}
else if(
  (str.indexOf('(') != -1) &&
  (str.indexOf(')') == -1)){
console.log("4th nested")
    return false;
  }
  else if(
  (str.indexOf(')') != -1) &&
  (str.indexOf('(') == -1)){
console.log("5th nested")
    return false;
  }
  else if(
  (str.indexOf('(') == 0) &&
  (str.indexOf(')') != 4)){
console.log("5th nested")
    return false;
  }
  else if(str.indexOf(" ") == 3 ){
    console.log("first true")
    return false;
  }

else{
  console.log("Valid")
  let c = str.indexOf(")")
  console.log(c)
  console.log("else")
  return true;
}


  }











else{
  console.log("Outside else")
  return false;
}



  // return true;
}
