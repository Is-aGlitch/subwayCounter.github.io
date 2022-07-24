// WORKING OF THE INCREMENT AND THE DECREMENT BUTTON STEPS
//1. initialize the count as zero
//2. listen for clicks on the increament button
//3. increase the count variable when the button is clicked
//4. change the count-el in HTML to reflect the new count

let countEl= document.getElementById("count-el") //Passing an argument: giving the function some data to work with
let saveEl= document.getElementById("save-el")
console.log(countEl)
// document and console are objects whereas log ang getElementById are functions
let count=0
function increment(){

  count= count + 1
  countEl.innerText= count // the innertext (0) of the id count-el is increased by 1
  console.log(count)
}

function decrement (){
  count = count -1
  countEl.innerText = count
  console.log(count)
}

//Function save which logs out the count when it is called

function save(){
 

  //To keep the previous count STEPS
  //1. Create a variable that contains both count and dash seperator, i.e. "12 -"
  //2. Render the variable in saveEl using innerText
  //3. Make sure to not delete the exisitng content of the paragraph

  let countString= count+ " - "
  saveEl.textContent+= countString
  //.textContent is an alternative to innerText, which solves our problem of space because inneText can't read spaces

  // console.log(count)
  //To set the counter back to zero everytime I click on save
  countEl.textContent=0
  count=0

}
