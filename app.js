const element = document.getElementById('main-heading')

console.log(element);


const title = document.getElementsByClassName('list-items')

console.log(title);


element.style.color= 'green'



const everyone = document.querySelectorAll('.list-item')

//everyone.style.color='pink'

for (let i = 0; i < everyone.length; i++) {
    everyone[i].style.color='pink'
    
}

console.log(everyone);

// creating elements

const ul = document.querySelector('ul')

const li= document.createElement('li')


//adding elements 

ul.append(li)

//modifying texts

const firslistitem= document.querySelector('.list-item')
 
console.log(firslistitem.innerText);
console.log(firslistitem.innerHTML);
console.log(firslistitem.innerContent);


li.innerText= 'X-Men'
// Modifying attributes and classes

li.setAttribute('id','main-heading')

li.removeAttribute('id');



li.classList.add('list-items')








