/* # MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico! */



const userInfos = [
    {
        name: 'wayne barnett',
        job: 'founder & ceo',
        idPic: 'wayne-barnett-founder-ceo.jpg',


    },

    {
        name: 'Angela Caroll',
        job: 'Chief Editor ',
        idPic: 'angela-caroll-chief-editor.jpg',


    },

    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        idPic: 'walter-gordon-office-manager.jpg',


    },

    {
        name: 'angela lopez',
        job: 'social media manager',
        idPic: 'angela-lopez-social-media-manager.jpg',


    },

    {
        name: 'scott estrada',
        job: 'developer',
        idPic: 'scott-estrada-developer.jpg',


    },

    {
        name: 'barbara ramos',
        job: 'graphic designer',
        idPic: 'barbara-ramos-graphic-designer.jpg ',


    }
]

console.log(userInfos)
const lista = document.getElementById('infoList')
let userList = '';

for (let i = 0; i < userInfos.length; i++) 
   
{ userList += `<li>${userInfos[i].name}  ${userInfos[i].job}
    ${userInfos[i].idPic} 
    </li>`}
    
    
    
    lista.innerHTML = userList



