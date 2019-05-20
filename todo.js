// helper function to get a single element
function $ (selector) {
    return document.querySelector(selector);
}

// helper function to get all elements matching the selector
function $$ (selector) {
    return Array.from(document.querySelectorAll(selector));
}


function listenHomepage () {
    $('.todo-form--add').addEventListener('click', function () {
        const inputField = $('.todo-form--input');
        const text = inputField.value;
        console.log(text);

        addItem(text);
    });

    $('.todo-flist--item--remove').addEventListener('click', function () {
        removeItem(text);
    });

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

    const remove = document.createElement('button');
    remove.classList.add('todo-list--item--remove');
    remove.textContent = 'remove';

    return [done, remove];
}

function markItemDone (event) {}

function removeItem (event) {
    console.log(event)
    $('.todo-list').removeChild(newItem);

}
