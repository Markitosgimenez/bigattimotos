//Toggle
//Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description')
const toggleAdditionalInformation = document.querySelector('.title-additional-information')
 
//Constantes Contenido Texto
const contentDescription = document.querySelector('.title-description')
const contentAdditionalInformation = document.querySelector('.title-additional-information')

//Funciones Toggle
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});