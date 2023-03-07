'use strict';

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

function creaElemento(tagElement, className, name, role, photo) {
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.innerText = name;
    element.innerText = role;
    element.innerText = photo;
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

const row = document.querySelector('.row');
console.log(row)

for (let i = 0; i < team.length; i++) {
    const memberTeam = team[i];
    for (let key in memberTeam) {
        const card = creaElemento('div', 'col-4');
        // console.log(key + ':  ' + );
        card.innerText = `${memberTeam[key]}`; 
        // card.innerText = `${memberTeam.role}`;
        // card.innerText = `${memberTeam.role}`;
        row.append(card);
    }
    console.log('');
}
