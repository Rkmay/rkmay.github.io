// helper function to get a single element
function $ (selector) {
    return document.querySelector(selector);
}

// helper function to get all elements matching the selector
function $$ (selector) {
    return Array.from(document.querySelectorAll(selector));
}


function listenHomepage () {

   

    let chocolate = false;

    $(".chocolate").addEventListener("click", evt => {

        console.log(evt)
        if (chocolate) {
            alert(`The combination is 1-2-3-4`);
            window.location = '/index2.html'
        } else {
            
            window.location = 'Chocolate.html'
           
        }
    })
    let bake = false;

    $(".bakery").addEventListener("click", evt => {

        console.log(evt)
        if (bake) {
            alert(`The combination is 1-2-3-4`);
            window.location = '/index2.html'
        } else {
            
            window.location = 'Bakery.html'
           
        }
    })
    let gifts = false;

    $(".gifts").addEventListener("click", evt => {

        console.log(evt)
        if (gifts) {
            alert(`The combination is 1-2-3-4`);
            window.location = '/index2.html'
        } else {
            
            window.location = 'Gifts.html'
           
        }
    })


    $('.todo-form--add').addEventListener('click', function () {
        const inputField = $('.todo-form--input');
        const text = inputField.value;
        if(text === '' || text === ' '){
            console.log(text);
            alert("Please Enter A Task");
        }
        else{
        
        console.log(text);
        addItem(text + "  ");
        inputField.value = '';
    
        }
    });
    

    $('.todo-list--item--remove').addEventListener('click', removeItem);

    $('.todo-list--item--done').addEventListener('click', markItemDone);

    console.log('homepage listeners set');
}

function addItem (text) {
    const newItem = document.createElement('li');
    newItem.textContent = text;
    

    const buttons = createItemButtons();
   
    buttons.forEach(button => {
        newItem.appendChild(button)
        
        
    });

    $('.todo-list').appendChild(newItem);
}

function createItemButtons () {
    const done = document.createElement('button');
    
    done.classList.add('todo-list--item--done');
    done.textContent = 'done';
    done.addEventListener('click', markItemDone);

    const remove = document.createElement('button');
    remove.classList.add('todo-list--item--remove');
    remove.textContent = 'remove';
    remove.addEventListener('click', removeItem);

    return [done, remove];
}

function markItemDone (event) {
   

        event.target.parentElement.classList.add('done');



}

function removeItem (event) {
    
   $('.todo-list').removeChild(event.target.parentElement);


}



let home = false;
$("#paragraph").addEventListener("click", evt => {
    if (home) {
        alert(`The combination is 1-2-3-4`);
        window.location = '/index.html'
    } else {
        
        window.location = '/index.html'
       
    }
})

