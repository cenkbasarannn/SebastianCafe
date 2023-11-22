function goToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }else{
      console.log("hatalı işlem");
    }
}

document.getElementById('btn1').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
} ) 


document.getElementById('btn2').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });

} ) 

