const vacation = document.getElementById('characters') 
const section = document.getElementsByClassName('vacationpicture')

// function createNode(element) {
//     return document.createElement(element) 
//   }
  
//   function append(parent, el) {
//     return parent.appendChild(el) 
//   }
  
  fetch(url) 
    .then(resp => resp.json()) 
  
    .then(function(data) {
    //   let characters = data.data 
    //   return characters.map(function(character) { 
    //     let li = createNode('li') 
    //       img = createNode('img')
    //       span = createNode('span')
    //     p = createNode('p')
    //     a = createNode('a')
    //     img.src = character.imageURL 
    //     span.innerHTML = character.name + ' ' + character.phone 
    //     p.innerHTML = character.message
    //     a.innerHTML = 'Leave ' + character.name + ' a message'
    //     a.href = 'contact.html?character=' + character.name
    //     append(li, img) 
    //     append(li, span)
    //     append(li, p)
    //     append(li, a)
    //     append(ul, li)
      })
    })
  
    .catch(function(error) {
      console.log('error')
    });
  


