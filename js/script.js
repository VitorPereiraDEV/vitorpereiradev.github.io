VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25,
    speed: 400,
    glare: true,
    "max-glare": 1,
});

var typed = new Typed('.typing-text', {
    strings :['','front-end developer','web developer',], 
    loop : true,
    typeSpeed : 150
});
