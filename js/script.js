'use strict';

// creo funziona che mette insieme gli elementi 
function creaElemento(tagElement, className, name, role, photo) {
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.innerText = name;
    element.innerText = role;
    element.innerText = photo;
    return element;
}
// array del team con i suoi membri 
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
for (let i = 0; i < team.length; i++) {
    const card = creaElemento('div', 'col-4');
    const memberTeam = team[i];
    
    // ciclo che legge gli oggetti all'interno dell'array team 
    for (let key in memberTeam) {
        card.innerText = `${memberTeam}`; 
        // card.innerText = `${memberTeam[key]}`; 
        row.append(card);
        console.log(memberTeam)
    }
    
}


