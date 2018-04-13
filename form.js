document.querySelector("form").addEventListener("submit", submitForm);
const alohaVacation = document.getElementsByClassName('placeholder')[0]

function submitForm(event){
    event.preventDefault();
    // alohaVacation.removeChild(div);

    var selectedValue = selected.options[selected.selectedIndex];
    var peopleValue = people.options[people.selectedIndex];

    var img = document.createElement("img");
    img.src = selectedValue.id
    img.setAttribute('class', 'beach')
    alohaVacation.append(img)

    var img1 = document.createElement("img");
    img1.src = peopleValue.id
    img1.setAttribute('class', 'dog')
    alohaVacation.append(img1)


    // setTimeout(remove, 900)
    // console.log('aloha',alohaVacation)
        }

    // function remove () {

    // }
          

    
    

  
