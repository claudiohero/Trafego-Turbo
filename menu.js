window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)

})

window.sr = ScrollReveal({ reset: true});

sr.reveal('.imagem-container', {duration: 1500 });
sr.reveal('.oferecemos-reveal', {
    duration: 1500,
    distance: '90px'
 });

//           PACOTES

 sr.reveal('.bg-pacotes1', {
    duration: 1500,
    delay:400,
    distance: '90px'
 });

 sr.reveal('.bg-pacotes2', {
    duration: 1500,
    delay:500,
    distance: '90px'
 });

 sr.reveal('.bg-pacotes3', {
    duration: 1500,
    delay:600,
    distance: '90px'
 });

 sr.reveal('.bg-pacotes4', {
    duration: 1500,
    delay:700,
    distance: '90px'
 });
//   FIM PACOTES  
sr.reveal ('.rodapé', {duration: 1500 });

sr.reveal('.apresentação', {duration: 1500});
