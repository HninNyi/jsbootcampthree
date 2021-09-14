// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');


formel.addEventListener('submit',(e)=>{
    // console.log('hay');

    addtodo();

    e.preventDefault();
});

function addtodo(){
    // console.log('i am working');

    let todotext = inputel.value;
    // console.log(todotext);

    if(todotext){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(todotext));
        // console.log(li);
        todoul.appendChild(li);
        inputel.value = '';

        // add to local storage
        updatelocalstorage();

        // add line-throught by left click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');

            updatelocalstorage();
        });

        // remove by right click
        li.addEventListener('contextmenu',()=>{
            // console.log('i am working');
            li.remove();

            updatelocalstorage();
        });


    }else{
        window.alert('Enter your todo');
    }
}

function updatelocalstorage(){
    // console.log('storage is ready');
    
    let todolis = document.querySelectorAll('li');
    // console.log(todolis);

    const todos = [];

    todolis.forEach(todoli=>{
        // console.log(todoli);
        // console.log(todoli.innerText);

        todos.push({
            text:todoli.innerText,
            complete:todoli.classList.contains('completed')
        });
        
    });

    // console.log(todos);

    localStorage.setItem('todos',JSON.stringify(todos));
}