document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementsByClassName('hamburger-menu')[0];
  const navLinks = document.getElementsByClassName('nav-links')[0];
  const navbar = document.getElementsByClassName('navbar')[0];

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
});


// smooth scrolling of navigation link
// const navbarLinks = document.querySelectorAll('.nav-links a');

//     navbarLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 const offsetTop = targetSection.offsetTop;

//                 window.scrollTo({
//                     top: offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// const meetMeBtn = document.getElementById('meet-me-btn')
//  meetMeBtn.addEventListener('click', function(){
//   const contactSection = document.getElementById("contact");
//     contactSection.scrollIntoView({ behavior: 'smooth' });
// })

// ABOUT  SECTION
// Get all toggle elements
var toggles = document.querySelectorAll('.toggle-question');

// Loop through each toggle
toggles.forEach(function(toggle) {
    // Get toggle title and content
    var title = toggle.querySelector('.toggle-title');
    var content = toggle.querySelector('.toggle-content');

    // Add click event listener to the title
    title.addEventListener('click', function() {
        // Toggle the display of content
    // content.classList.toggle('show');
        // title.style.borderBottom = '0';
        // content.style.borderTop = '0';
        
        if (content.classList.contains('show')) {
            content.style.maxHeight = 0; // Collapse
            content.style.padding = "0 20px"; // Reset padding
            content.classList.remove('show');
        } else {
            content.classList.add('show');
            content.style.maxHeight = content.scrollHeight + "px"; // Expand
            content.style.padding = "10px 20px"; // Set padding
        }
    });
});

//School Section
// Add automatic sliding effect (every 3 seconds)
let index = 0;
const slides = document.querySelectorAll('.school-courses');
const totalSlides = slides.length;

function showSlide(i) {
    const slider = document.querySelector('.schools');
    slider.scrollLeft = slides[i].offsetLeft;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

setInterval(nextSlide, 5000); // Slide every 3 seconds

// Get all buttons that open the modal
var openModalBtns = document.querySelectorAll(".openModalBtn");

// Loop through the buttons to add event listeners
openModalBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.getAttribute("data-modal-id");
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    };
});

// Get all <span> elements that close the modal
var closeBtns = document.querySelectorAll(".close");

// Loop through the close buttons to add event listeners
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest(".modal");
        modal.style.display = "none";
    };
});
// when user clicks of the payment button
const paymentBtn = document.querySelectorAll(".payment-btn");

    paymentBtn.forEach(button => {
        button.addEventListener("click", function(event) {
            const contactSection = document.getElementById("contact");
            contactSection.scrollIntoView({ behavior: 'smooth' });

            function delayedFunction() {
                const grandgrandparentElement = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;               
                grandgrandparentElement.style.display ="none";
            }
            
            function activateAfterDelay(delay) {
                setTimeout(function() {
                    delayedFunction();
                }, delay);
            }
            activateAfterDelay(1000);

        });
    });
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};



// sending mail to out email

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const subject = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:chineduokatta1000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;
});