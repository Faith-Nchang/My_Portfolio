

// theme switcher
const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
    body.classList.toggle('white-theme');
});

// detects the current view port
const slideRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slideInRight");
        }
    });
});


const animatedSection = document.querySelector(".about-desc");

slideRight.observe(animatedSection);

//about image observer
const slideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slideInFromLeft");
        }
    });
});

const animated_img = document.querySelector(".about-img");

slideLeft.observe(animated_img);

// appearing observer
const fadeIn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
        }
    });
});

const programming_languages = document.querySelector(".programming-languages");
fadeIn.observe(programming_languages)


const Frameworks = document.querySelector(".Frameworks");
fadeIn.observe(Frameworks)

const Backend_technologies = document.querySelector(".Backend-technologies");
fadeIn.observe(Backend_technologies)

const Data_bases= document.querySelector(".Data-bases");
fadeIn.observe(Data_bases)


// appearing observer
const slideFromBottom = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slideFromBottom");
            
        }
    });
});


const work_1 = document.querySelector(".work-1");
slideFromBottom.observe(work_1)

const work_2 = document.querySelector(".work-2");
slideFromBottom.observe(work_2)

const work_3 = document.querySelector(".work-3");
slideFromBottom.observe(work_3)

const work_4 = document.querySelector(".work-4");
slideFromBottom.observe(work_4)


const animated_projects = document.querySelector(".projects");
fadeIn.observe(animated_projects);

const animated_licenses = document.querySelector(".certs");
slideRight.observe(animated_licenses);


const contact = document.querySelector("#contact");
fadeIn.observe(contact);

const p1 = document.querySelector(".project-1");
slideLeft.observe(p1);

const p2 = document.querySelector(".project-2");
slideFromBottom.observe(p2);

const p3 = document.querySelector(".project-3");
slideRight.observe(p3);

const home = document.querySelector(".home-btn");
slideFromBottom.observe(home);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav');

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            //Check if the section is intersecting (in view)
            if (entry.isIntersecting) {
                // Get the ID of the currently intersecting section
                const id = entry.target.getAttribute('id');

                // Update navigation links
                navLinks.forEach(link => {
                    // Toggle the 'active' class based on the link's href attribute
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.2 //Adjust the threshold for when sections are considered in view
    });

    //Observe each section with the IntersectionObserver
    sections.forEach(section => {
        observer.observe(section);
    });
});


// form control

function sendEmail()
{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    if (name.value === '')
    {
        name.focus();
    }
    else if (email.value === '')
        {
            email.focus();
        }
    else if (subject.value === '')
        {
            subject.focus();
        }
    else if (message.value === '')
        {
            message.focus();
        }


    Email.send({
        Host : "smtp.gmail.com",
        Username : "nchangfru24@gmail.com",
        Password : "Will update",
        To : 'nchangfru24@gmail.com',
        From : email.value,
        Subject : "Portfolio Contact Me",
        Body : "Name: " + name.value
            + "<br> Subject: " + subject.value
            + "<br> Email: " + email.value
            + "<br> Message: " + message.value
    }).then(
      message => alert("Your message was sent successfully")
    ).catch(
        error => alert("There was an error sending the message")
    );
}


