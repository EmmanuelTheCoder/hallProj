import React, { Component} from 'react';
import './App.css';
import './index.css';
import Input from './Set';

class App extends Component {

   calculation = () =>{

      let firstnumber;
      let secondnumber;
      let thirdnumber;
      let fourthnumber;
      let fifthnumber
      let sixthnumber
      let seventhnumber
      let eightnumber
      let ninethnumber

      let firstbox = document.getElementById('coursebox1');
      let secondbox = document.getElementById('coursebox2');
      let thirdbox = document.getElementById('coursebox3');
      let fourthbox = document.getElementById('coursebox4');
      let fifthbox = document.getElementById('coursebox5');
      let sixthbox = document.getElementById('coursebox6');
      let seventhbox = document.getElementById('coursebox7');
      let eightbox = document.getElementById('coursebox8');
      let ninethbox = document.getElementById('coursebox9');


      let firstUnitBox = document.getElementById('unitbox1');
      let secondUnitBox = document.getElementById('unitbox2');
      let thirdUnitBox = document.getElementById('unitbox3');
      let fourthUnitBox = document.getElementById('unitbox4');
      let fifthUnitBox = document.getElementById('unitbox5');
      let sixthUnitBox = document.getElementById('unitbox6');
      let seventhUnitBox = document.getElementById('unitbox7');
      let eightUnitBox = document.getElementById('unitbox8');
      let ninethUnitBox = document.getElementById('unitbox9');

      let firstUnitNumber;
      let secondUnitNumber
      let thirdUnitNumber;
      let fourthUnitNumber;
      let fifthUnitNumber;
      let sixthUnitNumber;
      let seventhUnitNumber;
      let eightUnitNumber;
      let ninthUnitNumber;

      let summation;
      let finalResult;



      if(firstbox.value === "A" ){
          firstnumber = 5
      }
      else if (firstbox.value === "B"){
         firstnumber = 4
      }
      else if (firstbox.value === "C"){
         firstnumber = 3
      }
      else if (firstbox.value === "D"){
         firstnumber = 2
      }
      else if (firstbox.value === "E"){
         firstnumber = 1
      }
      else if (firstbox.value === "F"){
         firstnumber = 0
      }
      else if (firstbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         // firstbox.remove();
         firstnumber = 0;
      }
      
     
      if (secondbox.value === "A"){
         secondnumber = 5
      }
      else if (secondbox.value === "B"){
         secondnumber = 4
      }
      else if (secondbox.value === "C"){
         secondnumber = 3
      }
      else if (secondbox.value === "D"){
         secondnumber = 2
      }
      else if (secondbox.value === "E"){
         secondnumber = 1
      }
      else if (secondbox.value === "F"){
         secondnumber = 0
      }
      else if (secondbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         // firstbox.remove();
         secondnumber = 0;
      }

      //this is the third gradebox

      if (thirdbox.value === "A"){
         thirdnumber = 5
      }
      else if (thirdbox.value === "B"){
         thirdnumber = 4
      }
      else if (thirdbox.value === "C"){
         thirdnumber = 3
      }
      else if (thirdbox.value === "D"){
         thirdnumber = 2
      }
      else if (thirdbox.value === "E"){
         thirdnumber = 1
      }
      else if (thirdbox.value === "F"){
         thirdnumber = 0
      }
      else if (thirdbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         thirdnumber = 0;
      }


      if (fourthbox.value === "A"){
         fourthnumber = 5
      }
      else if (fourthbox.value === "B"){
         fourthnumber = 4
      }
      else if (fourthbox.value === "C"){
         fourthnumber = 3
      }
      else if (fourthbox.value === "D"){
         fourthnumber = 2
      }
      else if (fourthbox.value === "E"){
         fourthnumber = 1
      }
      else if (fourthbox.value === "F"){
         fourthnumber = 0
      }
      else if (fourthbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         fourthnumber = 0;
      }

      if (fifthbox.value === "A"){
         fifthnumber = 5
      }
      else if (fifthbox.value === "B"){
         fifthnumber = 4
      }
      else if (fifthbox.value === "C"){
         fifthnumber = 3
      }
      else if (fifthbox.value === "D"){
         fifthnumber = 2
      }
      else if (fifthbox.value === "E"){
         fifthnumber = 1
      }
      else if (fifthbox.value === "F"){
         fifthnumber = 0
      }
      else if (fifthbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         fifthnumber = 0;
      }

      if (sixthbox.value === "A"){
         sixthnumber = 5
      }
      else if (sixthbox.value === "B"){
         sixthnumber = 4
      }
      else if (sixthbox.value === "C"){
         sixthnumber = 3
      }
      else if (sixthbox.value === "D"){
         sixthnumber = 2
      }
      else if (sixthbox.value === "E"){
         sixthnumber = 1
      }
      else if (sixthbox.value === "F"){
         sixthnumber = 0
      }
      else if (sixthbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         sixthnumber = 0;
      }


      if (seventhbox.value === "A"){
         seventhnumber = 5
      }
      else if (seventhbox.value === "B"){
         seventhnumber = 4
      }
      else if (seventhbox.value === "C"){
         seventhnumber = 3
      }
      else if (seventhbox.value === "D"){
         seventhnumber = 2
      }
      else if (seventhbox.value === "E"){
         seventhnumber = 1
      }
      else if (seventhbox.value === "F"){
         seventhnumber = 0
      }
      else if (seventhbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         seventhnumber = 0;
      }

      if (eightbox.value === "A"){
         eightnumber = 5
      }
      else if (eightbox.value === "B"){
         eightnumber = 4
      }
      else if (eightbox.value === "C"){
         eightnumber = 3
      }
      else if (eightbox.value === "D"){
         eightnumber = 2
      }
      else if (eightbox.value === "E"){
         eightnumber = 1
      }
      else if (eightbox.value === "F"){
         eightnumber = 0
      }
      else if (eightbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         eightnumber = 0;
      }
      


      if (ninethbox.value === "A"){
         ninethnumber = 5
      }
      else if (ninethbox.value === "B"){
         ninethnumber = 4
      }
      else if (ninethbox.value === "C"){
         ninethnumber = 3
      }
      else if (ninethbox.value === "D"){
         ninethnumber = 2
      }
      else if (ninethbox.value === "E"){
         ninethnumber = 1
      }
      else if (ninethbox.value === "F"){
         ninethnumber = 0
      }
      else if (ninethbox.value !== "A" || "B" || "C" || "D" || "E" || "F"){
         ninethnumber = 0;
      }

      //THIS IS THE SECTION FOR THE UNITS.

      //first unit box

      if (firstUnitBox.value === "1"){
         firstUnitNumber = 1
      }
      else if (firstUnitBox.value === "2"){
         firstUnitNumber = 2
      }
      else if (firstUnitBox.value === "3"){
         firstUnitNumber = 3
      }
      else if (firstUnitBox.value === "4"){
         firstUnitNumber = 4
      }
      else if (firstUnitBox.value === "5"){
         firstUnitNumber = 5
      }
      else if (firstUnitBox.value === "6"){
         firstUnitNumber = 6
      }
      else if (firstUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         firstUnitNumber = 0
      }
      

      //second unit box

      if (secondUnitBox.value === "1"){
         secondUnitNumber = 1
      }
      else if (secondUnitBox.value === "2"){
         secondUnitNumber = 2
      }
      else if (secondUnitBox.value === "3"){
         secondUnitNumber = 3
      }
      else if (secondUnitBox.value === "4"){
         secondUnitNumber = 4
      }
      else if (secondUnitBox.value === "5"){
         secondUnitNumber = 5
      }
      else if (secondUnitBox.value === "6"){
         secondUnitNumber = 6
      }
      else if (secondUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         secondUnitNumber = 0
      }

      //third unit

      if (thirdUnitBox.value === "1"){
         thirdUnitNumber = 1
      }
      else if (thirdUnitBox.value === "2"){
         thirdUnitNumber = 2
      }
      else if (thirdUnitBox.value === "3"){
         thirdUnitNumber = 3
      }
      else if (thirdUnitBox.value === "4"){
         thirdUnitNumber = 4
      }
      else if (thirdUnitBox.value === "5"){
         thirdUnitNumber = 5
      }
      else if (thirdUnitBox.value === "6"){
         thirdUnitNumber = 6
      }
      else if (thirdUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         thirdUnitNumber = 0
      }
      
      //fourth unit

      if (fourthUnitBox.value === "1"){
         fourthUnitNumber = 1
      }
      else if (fourthUnitBox.value === "2"){
         fourthUnitNumber = 2
      }
      else if (fourthUnitBox.value === "3"){
         fourthUnitNumber = 3
      }
      else if (fourthUnitBox.value === "4"){
         fourthUnitNumber = 4
      }
      else if (fourthUnitBox.value === "5"){
         fourthUnitNumber = 5
      }
      else if (fourthUnitBox.value === "6"){
         fourthUnitNumber = 6
      }
      else if (fourthUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         fourthUnitNumber = 0
      }

      // fifth unit

      if (fifthUnitBox.value === "1"){
         fifthUnitNumber = 1
      }
      else if (fifthUnitBox.value === "2"){
         fifthUnitNumber = 2
      }
      else if (fifthUnitBox.value === "3"){
         fifthUnitNumber = 3
      }
      else if (fifthUnitBox.value === "4"){
         fifthUnitNumber = 4
      }
      else if (fifthUnitBox.value === "5"){
         fifthUnitNumber = 5
      }
      else if (fifthUnitBox.value === "6"){
         fifthUnitNumber = 6
      }
      else if (fifthUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         fifthUnitNumber = 0
      }

      // sixth unit

      if (sixthUnitBox.value === "1"){
         sixthUnitNumber = 1
      }
      else if (sixthUnitBox.value === "2"){
         sixthUnitNumber = 2
      }
      else if (sixthUnitBox.value === "3"){
         sixthUnitNumber = 3
      }
      else if (sixthUnitBox.value === "4"){
         sixthUnitNumber = 4
      }
      else if (sixthUnitBox.value === "5"){
         sixthUnitNumber = 5
      }
      else if (sixthUnitBox.value === "6"){
         sixthUnitNumber = 6
      }
      else if (sixthUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         sixthUnitNumber = 0
      }

      // seventh unit


      if (seventhUnitBox.value === "1"){
         seventhUnitNumber = 1
      }
      else if (seventhUnitBox.value === "2"){
         seventhUnitNumber = 2
      }
      else if (seventhUnitBox.value === "3"){
         seventhUnitNumber = 3
      }
      else if (seventhUnitBox.value === "4"){
         seventhUnitNumber = 4
      }
      else if (seventhUnitBox.value === "5"){
         seventhUnitNumber = 5
      }
      else if (seventhUnitBox.value === "6"){
         seventhUnitNumber = 6
      }
      else if (seventhUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         seventhUnitNumber = 0
      }

      //eight unit

      if (eightUnitBox.value === "1"){
         eightUnitNumber = 1
      }
      else if (eightUnitBox.value === "2"){
         eightUnitNumber = 2
      }
      else if (eightUnitBox.value === "3"){
         eightUnitNumber = 3
      }
      else if (eightUnitBox.value === "4"){
         eightUnitNumber = 4
      }
      else if (eightUnitBox.value === "5"){
         eightUnitNumber = 5
      }
      else if (eightUnitBox.value === "6"){
         eightUnitNumber = 6
      }
      else if (eightUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         eightUnitNumber = 0
      }

      //nineth unit

      if (ninethUnitBox.value === "1"){
         ninthUnitNumber = 1
      }
      else if (ninethUnitBox.value === "2"){
         ninthUnitNumber = 2
      }
      else if (ninethUnitBox.value === "3"){
         ninthUnitNumber = 3
      }
      else if (ninethUnitBox.value === "4"){
         ninthUnitNumber = 4
      }
      else if (ninethUnitBox.value === "5"){
         ninthUnitNumber = 5
      }
      else if (ninethUnitBox.value === "6"){
         ninthUnitNumber = 6
      }
      else if (ninethUnitBox.value !== "1" || "2" || "3" || "4" || "5" || "6"){
         ninthUnitNumber = 0
      }



      
      let summationUnit = firstUnitNumber + secondUnitNumber + thirdUnitNumber + 
     fourthUnitNumber + fifthUnitNumber + sixthUnitNumber + seventhUnitNumber
       + eightUnitNumber + ninthUnitNumber;

      summation = firstnumber * firstUnitNumber + secondnumber * secondUnitNumber + 
      thirdnumber * thirdUnitNumber + fourthnumber * fourthUnitNumber + fifthnumber * fifthUnitNumber + sixthnumber * sixthUnitNumber
      + seventhnumber * seventhUnitNumber + eightnumber * eightUnitNumber + ninethnumber * ninthUnitNumber 
      

      finalResult = summation / summationUnit;


      let preCursor = document.querySelector('.preCursor');
      let revealResult = document.querySelector('.revealResult');
      let spinner = document.querySelector('.lds-roller');
      let adviceBox = document.querySelector('.advice')

      

      spinner.style.textAlign = "center"
      spinner.style.display = "none"

      setTimeout(() =>{
         spinner.style.display = "flex"
      }, 100);

      setTimeout(() => {
         spinner.style.display = "none"
         preCursor.style.display = "block"
         revealResult.style.display = "block"
         revealResult.innerHTML = finalResult;
         adviceBox.style.display = "block"

         if (finalResult === 5){
            revealResult.innerHTML =  "5.0"
            revealResult.style.color="rgb(101, 233, 101)"
            adviceBox.innerHTML = 
            " ADVICE: wow! This result is very unique and extra-ordinary. You are currently at the very top of the class and you need to let it stay that way!" 
            
             
         }
         else if (finalResult >= 4.5){
            revealResult.style.color="rgb(101, 233, 101)"
            adviceBox.innerHTML = 
            " ADVICE: You are currently on FIRST CLASS. This is a good feat. You have to keep studying to maintain this excellent result!"             
         }
         
         
         
         else if (finalResult === 4){
            revealResult.innerHTML = "4.0"
            revealResult.style.color="rgb(101, 233, 101)"
            adviceBox.innerHTML = 
            " ADVICE: You are currently on SECOND CLASS UPPER. This is a good result but if you add more effort, you will make it to a first class!" 
         }
         else if (finalResult >= 3.5){
            revealResult.style.color="rgb(101, 233, 101)"
            adviceBox.innerHTML = 
            " ADVICE: You are currently on SECOND CLASS UPPER. This is a good result but if you add more effort, you will make it to a first class!" 
           
         }
         
         else if (finalResult === 3){
            revealResult.innerHTML = "3.0"
            revealResult.style.color = "yellow"
            adviceBox.innerHTML =
            "ADVICE: You are currently on SECOND CLASS LOWER. Please work harder to attain greater feat and graduate with atleast a second class upper!"
         }
         else if (finalResult >= 2.40){
            revealResult.style.color = "yellow"
            adviceBox.innerHTML =
            "ADVICE: You are currently on SECOND CLASS LOWER. This is not your best, please put in more effort in studying to attain greater feat!"
         }
         else if (finalResult === 2){
            revealResult.innerHTML = "2.0"
            revealResult.style.color = "red"
            adviceBox.innerHTML = 
            "ADVICE: You are currently on THIRD CLASS. This is not a good result, you really need to work harder. I believe you can do better"
         }
         else if (finalResult >= 1.5  ){
            revealResult.style.color = "red"
            adviceBox.innerHTML = 
            "ADVICE: You are currently on THIRD CLASS. This is not a good result, you really need to work harder. I believe you can do better"
         }
         else if (finalResult === 0){
            revealResult.innerHTML = "0"
            revealResult.style.color = "rgb(255, 1, 1)"
            adviceBox.innerHTML =  "ADVICE: This result is not possible. Please visit an educational councillor immediately for help!"
           
         }
         else if(finalResult <= 1.4){
            revealResult.style.color = "red"
            adviceBox.innerHTML =
            "ADVICE: You are currently on the PASS LEVEL. This is a terrible result. You need to put in your best to avoid falling below society's standard! You can do better! "
         }
         else if (finalResult === 1){
            revealResult.innerHTML = "1.0"
            revealResult.style.color = "rgb(255, 1, 1)"
            adviceBox.innerHTML =
            "ADVICE: You are currently on the PASS LEVEL. This is a terrible result. You need to put in your best to avoid falling below society's standard! You can do better! "
         }
        
       
         else if (isNaN){
            revealResult.innerHTML = "Sorry! You can't get a result because your inputs are invalid. Try again!";
            preCursor.style.display = "none"
            adviceBox.style.display = "none"

         }
 
         
      },4000, preCursor.style.display = "none", revealResult.style.display = "none", adviceBox.style.display = "none");

   }

   alert = ()=>{
      alert(`To use GPA calculator, fill in the required fields with your grades and the course unit then press calculate. 
      If the available spaces are more than your courses, you should leave it unselected and it won't affect your result!
      
      `)
   }

      render(){
        return(
           <div className="container">
              <h1 className="gp">GPA Calculator</h1>
              <p style={{textAlign: 'right', fontSize: '20px', color: 'green', cursor: 'pointer', marginBottom: '5px', marginTop: '-5px', marginRight: '12px'}} onClick={this.alert}>???</p>
              <Input drag={this.calculation} newLoad={this.addLoad}/>

              <footer>
                 <p>loyaltysamuel001@gmail.com</p>
              </footer>
           </div>
        );
    }
}
export default App;

// I shall be back in the future to implement the below codes.


//  const anotherOne = ()=>{
//    let p = document.querySelector('.p');
//    let createSelect = document.createElement('select');

//    let createOption0 = document.createElement('option');
//    createOption0.appendChild(document.createTextNode('Select your grade'));
//    createOption0.value=""
//    let createOption1 = document.createElement('option');
//    createOption1.appendChild(document.createTextNode('A'));
//    createOption1.value = "A"
 
//    let createOption2 = document.createElement('option');
//    createOption2.appendChild(document.createTextNode('B'))
//    createOption2.value = "B";

//    let createOption3 = document.createElement('option');
//    createOption3.appendChild(document.createTextNode('C'))
//    createOption3.value = "C";

//    let createOption4 = document.createElement('option');
//    createOption4.appendChild(document.createTextNode('D'))
//    createOption4.value = "D";

//    let createOption5 = document.createElement('option');
//    createOption5.appendChild(document.createTextNode('E'))
//    createOption5.value = "E";

//    let createOption6 = document.createElement('option');
//    createOption6.appendChild(document.createTextNode('F'))
//    createOption6.value = "F";

 
//    createSelect.appendChild(createOption0);
//    createSelect.appendChild(createOption1);
//    createSelect.appendChild(createOption2);
//    createSelect.appendChild(createOption3);
//    createSelect.appendChild(createOption4);
//    createSelect.appendChild(createOption5);
//    createSelect.appendChild(createOption6);

//    createSelect.id="coursebox1";

//    p.appendChild(createSelect);
   
   
//    console.log(p)
//    //creating functionality to the unit box
//    let p2 = document.querySelector('.p2');
//    let createUnit = document.createElement('select');
//    let unitEmpty = document.createElement('option');
//    unitEmpty.appendChild(document.createTextNode("Select your unit"));
//    unitEmpty.value = "";

//    let unitOne = document.createElement('option');
//    unitOne.appendChild(document.createTextNode(1));
//    unitOne.value = 1;

//    let unitTwo = document.createElement('option');
//    unitTwo.appendChild(document.createTextNode(2));
//    unitTwo.value = 2;

//    let unitThree = document.createElement('option');
//    unitThree.appendChild(document.createTextNode(3));
//    unitThree.value = 3;

//    let unitFour = document.createElement('option');
//    unitFour.appendChild(document.createTextNode(4));
//    unitFour.value = 4;

//    let unitFive = document.createElement('option');
//    unitFive.appendChild(document.createTextNode(5));
//    unitFive.value= 5;

//    let unitSix = document.createElement('option');
//    unitSix.appendChild(document.createTextNode(6));
//    unitSix.value = 6;

//    createUnit.appendChild(unitEmpty)
//    createUnit.appendChild(unitOne)
//    createUnit.appendChild(unitTwo)
//    createUnit.appendChild(unitThree)
//    createUnit.appendChild(unitFour)
//    createUnit.appendChild(unitFive)
//    createUnit.appendChild(unitSix);
//    createUnit.id="unitbox1"

//    p2.appendChild(createUnit);

//    console.log(createUnit)


//  }