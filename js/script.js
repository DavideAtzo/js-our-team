'use strict';
// funzione crea elemento html 
function creaElemento(tagElement, className, secondClass, objet) {
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.classList.add(secondClass);
    element.innerText = objet;
    return element;
}
// array del team con i suoi membri 
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg',
    },
];
// variabile che richiamo dall'html 
const row = document.querySelector('.row');
// ciclo che corre l'array del team e mi sovrascrive degli elementi 


// ciclo che legge gli oggetti all'interno dell'array team 
for(let key in team){
    let teamMember=(team[key]);
    console.log(teamMember);
        let name = team[key].name;
        let role = team[key].role;
        var img = document.createElement("img"); 
        img.src = team[key].photo;
        let element = creaElemento('div','col-4', 'card',`${name} ${role} ${img}`);
        row.append(element);
        element.append(img);
    };    

