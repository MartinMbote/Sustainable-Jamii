const donateButton = document.getElementById('donate-button');
const donateButtonText = document.getElementById('donate-button-text');
const projectionLink = document.getElementById('Projections-link');
const thematicLink = document.getElementById('Thematic-link');
const aboutLink = document.getElementById('About-link');
const linkedInIcon = document.getElementById('linkedin-icon');
const linkedInIcon2 = document.getElementById('linkedin-icon-2');
const docImage = document.getElementById('doctor-image-id');
const srhrContainer = document.getElementById('SRHR');
const readMore1 = document.getElementById('read-more-1');
const climateJusticeContainer = document.getElementById('climate-justice');
const climateJusticeImage = document.getElementById('climate-justice-id');
const readMore2 = document.getElementById('read-more-2');
const peaceAndSecurityContainer = document.getElementById('Peace-and-security');
const peaceAndSecurityImage = document.getElementById('peace-and-security-id');
const readMore3 = document.getElementById('read-more-3');
const economicGovernanceContainer = document.getElementById('economic-governance');
const econimicGovernanceImage = document.getElementById('economic-governance-id');
const readMore4 = document.getElementById('read-more-4');




//mouseover event listener (start) Economic Governance
economicGovernanceContainer.addEventListener('mouseover', function() {
    econimicGovernanceImage.style.transform = 'scale(1.1)';
    readMore4.style.color = '#00AB4F';
});

//mouseout event listener (end) Economic Governance
economicGovernanceContainer.addEventListener('mouseout', function() {
    econimicGovernanceImage.style.transform = 'scale(1)';
    readMore4.style.color = '#E16162';
});




//mouseover event listener (start) Peace and Security
peaceAndSecurityContainer.addEventListener('mouseover', function() {
    peaceAndSecurityImage.style.transform = 'scale(1.1)';
    readMore3.style.color = '#00AB4F';
});

//mouseout event listener (end) Peace and Security
peaceAndSecurityContainer.addEventListener('mouseout', function() {
    peaceAndSecurityImage.style.transform = 'scale(1)';
    readMore3.style.color = '#E16162';
});




//mouseover event listener (start) Climate Justice
climateJusticeContainer.addEventListener('mouseover', function() {
    climateJusticeImage.style.transform = 'scale(1.1)';
    readMore2.style.color = '#00AB4F';
});

//mouseout event listener (end) Climate Justice
climateJusticeContainer.addEventListener('mouseout', function() {
    climateJusticeImage.style.transform = 'scale(1)';
    readMore2.style.color = '#E16162';
});




//mouseover event listener (start) SRHR
srhrContainer.addEventListener('mouseover', function() {
    docImage.style.transform = 'scale(1.1)';
    readMore1.style.color = '#00AB4F';
});

//mouseout event listener (end) SRHR
srhrContainer.addEventListener('mouseout', function() {
    docImage.style.transform = 'scale(1)';
    readMore1.style.color = '#E16162';
});




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