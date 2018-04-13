const people = document.getElementsByClassName('people')[0]
const url1 = "./people.json";


function createPerson(data) {
  data.people.forEach(function(item) {
    var option = document.createElement('option');
    option.text = item.name
    option.value = item.id
    option.id = item.picture
    people.appendChild(option)
  })
}
    
  fetch(url1) 
    .then(resp => resp.json()) 
  
    .then(function(data) {
        createPerson(data)
          })
    
  
    .catch(function(error) {
      console.log('error')
    });