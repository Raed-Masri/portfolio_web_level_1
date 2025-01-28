emailjs.init("BOsI5N1534ojq81UO");
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("response-message");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!name || !email || !phone || !message) {
      responseMessage.style.color = "red";
      responseMessage.textContent = "All fields are required.";
      return;
    }

    const templateParams = {
      name,
      email,
      phone,
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

// Skills Data ------------------------------------------------------------------------------------
const skillsData = [
  {
    name: "HTML",
    image: "images/html-logo.webp",
  },
  {
    name: "CSS",
    image: "images/css-logo.webp",
  },
  {
    name: "JavaScript",
    image: "images/javascript-logo.webp",
  },
  {
    name: "Node.js",
    image: "images/node-logo.webp",
  },
  {
    name: "React.js",
    image: "images/react-logo.webp",
  },
];

const skillsContainer = document.getElementById("skills-container");

skillsData.forEach((skill) => {
  const skillIcon = document.createElement("div");
  skillIcon.classList.add("icon");

  skillIcon.innerHTML = `
                <img src="${skill.image}" alt="${skill.name}">
                <span>${skill.name}</span>
            `;

  skillsContainer.appendChild(skillIcon);
});

// Projects Data---------------------------------------------------------------------------------------
const projectsData = [
  {
    title: "Netflix Clone",
    image: "netflix.jpg",
    description: "Description of project one goes here.",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/username/project1",
      demo: "https://demo-link.com",
    },
  },
  {
    title: "Real-time Chat Application",
    image: "chat-app.jpg",
    description:
      "A modern chat application with real-time messaging, file sharing, and group chat functionality. Includes user presence indicators and message notifications.",
    tags: ["Node.js", "Socket.io", "MongoDB"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "E-commerce Platform",
    image: "shopping-online.jpg",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management system.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Weather Dashboard",
    image: "weather.jpg",
    description:
      "An interactive weather dashboard with real-time weather data, 7-day forecast, and location-based weather information using geolocation.",
    tags: ["JavaScript", "API", "CSS"],
    links: {
      github: "#",
      demo: "#",
    },
  },
];

const container = document.getElementById("project-container");

projectsData.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tags">
                        ${project.tags
                          .map((tag) => `<span>${tag}</span>`)
                          .join("")}
                    </div>
                    <div class="links">
                        <a href="${
                          project.links.github
                        }" target="_blank"><i class="fab fa-github"></i> Code</a>
                        <a href="${
                          project.links.demo
                        }" target="_blank"><i class="fas fa-tv"></i> Live Demo</a>
                    </div>
                </div>
            `;

  container.appendChild(projectCard);
});

// Initialize phone input
const phoneInput = document.querySelector("#phone");
if (phoneInput) {
  window.intlTelInput(phoneInput, {
    preferredCountries: ["us", "gb"],
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  });
}

