const office = document.querySelector(".officeSection")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            office.classList.add('is-visible')
        }
    })
});

observer.observe(office)