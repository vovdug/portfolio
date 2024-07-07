gsap.registerPlugin(ScrollTrigger);

gsap.from('#hero', {
    x:-400,
    duration:2.5,
    opacity:0,
    ease:'bounce',
}) 

gsap.from('[data-card-skill]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger: '#mySkills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 1.5,
    }
})

gsap.from('[data-card-project]',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger: '#myWorks',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 1.5,
    }
})

gsap.from('#mySkillsTitle', {
    x: 400,
    duration:4.5,
    opacity:0,
    ease:'none',
    scrollTrigger:{
        trigger: '#mySkills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 1.5,
    }
}) 

gsap.from('#myWorksTitle', {
    x: -400,
    duration:4.5,
    opacity:0,
    ease:'none',
    scrollTrigger:{
        trigger: '#myWorks',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 1.5,
    }
}) 

gsap.from('#menuItemAboutMe', {
    y:-100,
    duration:1,
    opacity:0,
    ease:'none',
}) 
gsap.from('#menuItemMySkills', {
    y:-100,
    duration:1.5,
    opacity:0,
    ease:'none',
}) 
gsap.from('#menuItemMyWorks', {
    y:-100,
    duration:2,
    opacity:0,
    ease:'none',
}) 
gsap.from('#menuItemReviews', {
    y:-100,
    duration:2.5,
    opacity:0,
    ease:'none',
}) 
gsap.from('#menuItemMyContacts', {
    y:-100,
    duration:3,
    opacity:0,
    ease:'none',
}) 

function paralax() {
    const preview = document.querySelector('#welcome');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;

    document.addEventListener('mousemove', function(event){
    const mouseX = event.clientX - initialX;
    const mouseY = event.clientY - initialY;
    
    
    gsap.to(
        '#picture-avatar-one', 
        {
            rotationX: -mouseX * 0.02, 
            rotationY: mouseY * 0.02, 
            x:-mouseX * 0.02,
            y: mouseY * 0.02,
            ease: 'power2.out' ,
        },);
        
    gsap.to(
        '#picture-avatar-two', 
        {
            rotationX: mouseX * 0.025, 
            rotationY: -mouseY * 0.025,
            x:-mouseX * 0.02,
            y: mouseY * 0.02, 
            ease: 'power2.out' ,
        },);
        
        gsap.to(
        '#picture-avatar-photo', 
        {
            rotationX: -mouseX * 0.025, 
            rotationY: -mouseY * 0.025, 
            x:-mouseX * 0.02,
            y: mouseY * 0.02,
            ease: 'power2.out' ,
        },);
    }) 
}

paralax()