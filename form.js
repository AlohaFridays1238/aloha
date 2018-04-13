document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
    var selectedValue = selected.options[selected.selectedIndex];
    var peopleValue = people.options[people.selectedIndex];
    var img = document.createElement("img");
    img.src = selectedValue.id
    alohaVacation.append(img)
        }
          

    
    

  
