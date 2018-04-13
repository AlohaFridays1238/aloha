const alohaVacation = document.getElementsByClassName('vacationpicture')[0]
const picture = document.getElementsByClassName('location')[0]
const url = "./beaches.json";

// "./listings.json";

// const data = beaches.json"

// function createNode(element) {
//     return document.createElement(element) 
//   }
  
//   function append(parent, el) {
//     return parent.appendChild(el) 
//   }

function createVacay(data) {
  data.beaches.forEach(function(item) {
    var option = document.createElement('option');
    option.text = item.name
    option.value = item.id
    // option.id = item.imageURL
    picture.appendChild(option)
  })
}

function appendPicture(data){
  console.log('insideAppend')
  console.log('url', data.beaches[0].imageURL)

  var img = document.createElement("img");

  // let img = createNode('img')
  console.log('imagefirst', img)

  img.src = data.beaches[0].imageURL

  console.log('imagesecond', img)

  alohaVacation.append(img)
}
  
// function append(parent, el) {
//   return parent.appendChild(el) 
// }
// function createVacay(){
// data.


// <option value="volvo">Volvo</option>

// }
  


  fetch(url) 
    .then(resp => resp.json()) 
  
    .then(function(data) {
        console.log('before')
        console.log('data',data)
        console.log('name', data.beaches[0])
        createVacay(data)
        appendPicture(data)
          })
    
  
    .catch(function(error) {
      console.log('error')
    });

    
  


