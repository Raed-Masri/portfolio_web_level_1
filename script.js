// Initialize EmailJS
// document.addEventListener('DOMContentLoaded', function() {
//     // Replace with your EmailJS public key
//     emailjs.init("YOUR_PUBLIC_KEY");
// });

emailjs.init("BOsI5N1534ojq81UO");
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("response-message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!name || !email || !message) {
      responseMessage.style.color = "red";
      responseMessage.textContent = "All fields are required.";
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_tl2tgin",
            template_id: "template_gigjqmh",
            user_id: "BOsI5N1534ojq81UO",
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        responseMessage.style.color = "green";
        responseMessage.textContent = "Message sent successfully!";
        document.getElementById("contact-form").reset(); // Clear the form
      } else {
        responseMessage.style.color = "red";
        responseMessage.textContent = "Failed to send message.";
      }
    } catch (error) {
      responseMessage.style.color = "red";
      responseMessage.textContent = "An unexpected error occurred.";
    }
  });


// Skills Data
const skillsData = [
    {
        name: "HTML",
        image: "images/html-logo.webp"
    },
    {
        name: "CSS",
        image: "images/css-logo.webp"
    },
    {
        name: "JavaScript",
        image: "images/javascript-logo.webp"
    },
    {
        name: "Node.js",
        image: "images/node-logo.webp"
    },
    {
        name: "React.js",
        image: "images/react-logo.webp"
    }
];

// Projects Data
const projectsData = [
    {
        title: "Project One",
        image: "images/project1.webp",
        description: "Description of project one goes here.",
        tags: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/username/project1",
            demo: "https://demo-link.com"
        }
    }
    // Add more projects as needed
];

// Initialize phone input
const phoneInput = document.querySelector("#phone");
if (phoneInput) {
    window.intlTelInput(phoneInput, {
        preferredCountries: ["us", "gb"],
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    });
}

// Form validation and submission will be added later 