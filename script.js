var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const paginationDotsContainer = document.querySelector('.slider-pagination');
let index = 0;

slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => showSlide(i));
    paginationDotsContainer.appendChild(dot);
});

function updateDots() {
    const dots = paginationDotsContainer.querySelectorAll('button');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function showSlide(i) {
    const totalSlides = slides.length;
    if (i >= totalSlides) {
        index = 0;
    } else if (i < 0) {
        index = totalSlides - 1;
    } else {
        index = i;
    }
    const offset = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    updateDots();
}

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

updateDots();

const scriptURL = 'https://script.google.com/macros/s/AKfycbyI9CFIJKc631QQXD_dtnuhOhQ4M4jaJwOSmIRdxQAVa7E_5WmQ6tShr8jI40P0mecb/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


  document.getElementById('submit-to-google-sheet').addEventListener('submit', function(event) {
    event.preventDefault();
    const messageContainer = document.getElementById('message-container');
    messageContainer.style.display = 'block';
    this.reset();
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 3000);
});