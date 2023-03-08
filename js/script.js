'use strict';
// array del team con i suoi membri 
function creaElemento(tagElement, className, objet) {
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.innerText = objet;
    return element;
}

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
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
        let img = team[key].photo;
        let element = creaElemento('div','col-4',`${name} ${role} ${img}`);
        row.append(element);
        element.append(img);
    };    

