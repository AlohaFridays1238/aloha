const selected = document.getElementsByClassName('location')[0]
const url = "./beaches.json";


function createVacay(data) {
  
  data.beaches.forEach(function(item) {
  
    var option = document.createElement('option');
    option.text = item.name
    option.value = item.id
    option.id = item.imageURL
    selected.appendChild(option)
  })
}

  fetch(url) 
    .then(resp => resp.json()) 
  
    .then(function(data) {
        createVacay(data)
  

          })
    
  
    .catch(function(error) {
      console.log('error')
    });

    
  


