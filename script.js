const donateButton = document.getElementById('donate-button');
const donateButtonText = document.getElementById('donate-button-text');
const projectionLink = document.getElementById('Projections-link');
const thematicLink = document.getElementById('Thematic-link');
const aboutLink = document.getElementById('About-link');
const linkedInIcon = document.getElementById('linkedin-icon');
const linkedInIcon2 = document.getElementById('linkedin-icon-2');

//mouseover event listener (start) to amongUsButton
donateButton.addEventListener('mouseover', function() {
    donateButton.style.border = '0.1vw solid #FFEB3D';
    donateButtonText.style.color = '#FFEB3D';
    
});

//mouseout event listener (end) to amongUsButton
donateButton.addEventListener('mouseout', function() {
    donateButton.style.border = '0.1vw solid white';
    donateButtonText.style.color = 'white';
});



//mouseover event listener (start)
projectionLink.addEventListener('mouseover', function() {
    projectionLink.style.color = '#FFEB3D';
    projectionLink.style.top = '1.6vw';
});

//mouseout event listener (end) 
projectionLink.addEventListener('mouseout', function() {
    projectionLink.style.color = 'white';
    projectionLink.style.top = '1.7vw';
});



//mouseover event listener (start)
thematicLink.addEventListener('mouseover', function() {
    thematicLink.style.color = '#FFEB3D';
    thematicLink.style.top = '1.6vw';
});

//mouseout event listener (end) 
thematicLink.addEventListener('mouseout', function() {
    thematicLink.style.color = 'white';
    thematicLink.style.top = '1.7vw';
});



//mouseover event listener (start)
aboutLink.addEventListener('mouseover', function() {
    aboutLink.style.color = '#FFEB3D';
    aboutLink.style.top = '1.6vw';
});

//mouseout event listener (end) 
aboutLink.addEventListener('mouseout', function() {
    aboutLink.style.color = 'white';
    aboutLink.style.top = '1.7vw';
});




//mouseover event listener (start)
linkedInIcon.addEventListener('mouseover', function() {
    linkedInIcon.style.top = '42.1vw';
});

//mouseout event listener (end) 
linkedInIcon.addEventListener('mouseout', function() {
    linkedInIcon.style.top = '42.5vw';
});




//mouseover event listener (start)
linkedInIcon2.addEventListener('mouseover', function() {
    linkedInIcon2.style.top = '93.4vw';
});

//mouseout event listener (end) 
linkedInIcon2.addEventListener('mouseout', function() {
    linkedInIcon2.style.top = '93.8vw';
});