var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let tl = gsap.timeline();
        tl.to('button', 1, {
            y: "-100%",
            opacity: 0,
            ease: "Expo.easeIn"
        })
        tl.to('.text1',1, {
            delay: 1.5,
            y: "-100%",
            ease: "Expo.easeIn"
        },"-=0.7")
        tl.to('.box1',1, {
            y: "-100%",
            ease: "Expo.easeInOut"
        },"-=0.5")
        tl.to('.box2',1, {
            y: "-200%",
            ease: "Expo.easeInOut",
        },"-=0.8")
        tl.to('.box2 h1, p',2, {
            stagger: 0.3,
            opacity: 1,
            ease: "Expo.easeInOut"
        },"-=0.5")
})