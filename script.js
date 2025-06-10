// Data for Skills
const skillsData = [
  {
    name: "HTML5",
    description:
      "Proficient in structuring web content with semantic HTML, ensuring accessibility and SEO best practices.",
    icon: "fab fa-html5",
  },
  {
    name: "CSS3",
    description:
      "Expert in styling dynamic and responsive user interfaces using modern CSS features, including Flexbox, Grid, and animations.",
    icon: "fab fa-css3-alt",
  },
  {
    name: "JavaScript",
    description:
      "Strong command of core JavaScript for interactive web experiences, DOM manipulation, and asynchronous operations.",
    icon: "fab fa-js",
  },
  {
    name: "React.js",
    description:
      "Experienced in building efficient and scalable single-page applications using React components, hooks, and state management.",
    icon: "fab fa-react",
  },
  {
    name: "C",
    description:
      "Foundational knowledge in C programming for algorithms, data structures, and system-level programming concepts.",
    icon: "fas fa-c",
  },
  {
    name: "C++",
    description:
      "Competent in C++ for object-oriented programming, competitive programming, and efficient software development.",
    icon: "fas fa-cuttlefish",
  },
  {
    name: "SQL",
    description:
      "Fundamental understanding of SQL for database interaction, querying, and managing relational data for web applications.",
    icon: "fas fa-database",
  },
  {
    name: "MySQL",
    description:
      "Practical experience with MySQL for designing, querying, and managing relational databases, often used with web applications.",
    icon: "fas fa-database",
  },
  {
    name: "GitHub",
    description:
      "Skilled in version control using Git and collaborative development workflows on GitHub, including branching, merging, and pull requests.",
    icon: "fab fa-github",
  },
  {
    name: "VS Code",
    description:
      "Proficient in using Visual Studio Code as a primary IDE for efficient coding, debugging, and project management.",
    icon: "fas fa-code",
  },
  {
    name: "Bootstrap",
    description:
      "Experienced in rapidly building responsive and mobile-first web designs using the Bootstrap framework for consistent UI.",
    icon: "fab fa-bootstrap",
  },
  {
    name: "Responsive Design",
    description:
      "Ability to create layouts that adapt seamlessly to various screen sizes and devices, ensuring optimal user experience across platforms.",
    icon: "fas fa-mobile-alt",
  },
  {
    name: "Web APIs",
    description:
      "Capable of integrating third-party APIs to fetch and display data, enhancing application functionality.",
    icon: "fas fa-code-branch",
  },
];

// Data for Certifications
const certificationsData = [
  {
    title: "Front-End Web Development",
    issuer: "UDEMY",
    imageUrl: "images/Frontend Developer certificate.png",
    details:
      "Completed a comprehensive course covering HTML,CSS,JS,HTML5,CSS3,JQUERY,BOOTSTRAP, and building single-page applications.",
  },
  {
    title: "C++ Certification",
    issuer: "Scaler ",
    imageUrl: "images/C++ Certificate.png",
    details: "Achieved certification in C++, including Tests , Quizes.",
  },
  //   {
  //     title: "SQL Basics for Data Science",
  //     issuer: "IBM (via Coursera)",
  //     imageUrl:
  //       "https://d3njjcbhfv5pmd.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/c8/f59190c1f611e6a6405786ed6c19e5/SQL-Basics.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25",
  //     details:
  //       "Gained foundational knowledge in SQL for data manipulation and analysis, essential for backend integration.",
  //   },
];

// Projects array to store all projects
let projects = [
  {
    title: "Myntra Clone",
    description:
      "Web base  e-commerce platform built with HTML , JavaScript and CSS3, featuring product catalog, shopping cart, Login-Signup page. ",
    link: "https://krishankant1234.github.io/Myntra/",
    imageUrl: "images/MyntraImage.png",
  },
  {
    title: "Weather WebApp",
    description:
      "Developed a responsive web application using JavaScript, React, and integrating the OpenWeatherMapAPI to display real-time weather data for cities worldwide.",
    link: "https://krishankant1234.github.io/weather-app/",
    imageUrl: "images/WeatherApp_image.png",
  },
  {
    title: "Movie Suggestion WebApp",
    description:
      "Developed a dynamic web application using React.js, integrating the Open Movie Database API to enable users to search for movies and access detailed information including plot summaries, ratings, andcast details.",
    link: "https://movie-app-8suw.onrender.com/",
    imageUrl: "images/MovieSuggestion_image.png",
  },
  {
    title: "Recipe Finder WebApp",
    description:
      "Developed a full-stack Recipe Website with secure user authentication (Node.js, SQL DB) and responsive HTML/CSS/JS frontend. Users can add, view, and search recipes by keywords/ingredients, with all data managed in a SQL database.",
    link: "https://github.com/krishankant1234/Recipe-Website",
    imageUrl: "images/recipe_image.png",
  },
  {
    title: "FoodTime WebApp",
    description: "A responsive food ordering website with a clean interface.",
    link: "https://krishankant1234.github.io/Food-ordering-website/",
    imageUrl: "images/FoodWebsite_image.png",
  },
  {
    title: "Image Search WebApp",
    description:
      "Image Search App: A web app using HTML, CSS, and JS, integrated with Unsplash API to fetch high-quality images based on user search queries, displayed in a responsive and visually appealing gallery.",
    link: "https://krishankant1234.github.io/Image-Search-App/",
    imageUrl: "images/ImageApp_iamge.png",
  },
  //   {
  //     title: "FoodTime WebApp",
  //     description:
  //       "A responsive food ordering website with a clean interface.",
  //     link: "https://krishankant1234.github.io/Food-ordering-website/",
  //     imageUrl:
  //       "https://via.placeholder.com/400x250/FEE715/101820?text=Blog+Platform+Screenshot",
  //   },
];

const initialProjectsToShow = 2;
let showingAllProjects = false;

const initialSkillsToShow = 4;
let showingAllSkills = false;

const initialCertificationsToShow = 2;
let showingAllCertifications = false;

// --- Navigation and Header functionality ---
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "var(--header-bg)"; /* Use variable */
    header.style.boxShadow = "0 2px 30px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.background = "var(--header-bg)"; /* Use variable */
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }
});

// --- Theme Switch Functionality ---
const themeSwitchBtn = document.getElementById("themeSwitchBtn");

function applyTheme(theme) {
  const body = document.body;
  const themeIcon = themeSwitchBtn.querySelector("i");

  if (theme === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeSwitchBtn.setAttribute("aria-label", "Switch to Light Mode");
  } else {
    body.classList.remove("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeSwitchBtn.setAttribute("aria-label", "Switch to Dark Mode");
  }
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
}

themeSwitchBtn.addEventListener("click", toggleTheme);

// --- Generic Image Enlargement Modal ---
const imageModal = document.getElementById("imageModal");
const enlargedImageContent = document.getElementById("enlargedImageContent");

function openImageModal(imageUrl) {
  enlargedImageContent.src = imageUrl;
  imageModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  imageModal.classList.remove("active");
  document.body.style.overflow = "auto";
  enlargedImageContent.src = "";
}

imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    closeImageModal();
  }
});

// Event listener for profile image
document.getElementById("profileImageBtn").addEventListener("click", () => {
  const profileImgSrc = document.querySelector("#profileImageBtn img").src;
  openImageModal(profileImgSrc);
});

// --- Project Modal Functions ---
function openProjectModal() {
  document.getElementById("projectModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
  document.getElementById("projectForm").reset();
}

document.getElementById("projectModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("projectModal")) {
    closeProjectModal();
  }
});

// Add project function
document.getElementById("projectForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("projectTitle").value;
  const description = document.getElementById("projectDescription").value;
  const link = document.getElementById("projectLink").value;
  const imageUrl = document.getElementById("projectImage").value; // Get image URL

  const newProject = { title, description, link, imageUrl }; // Include imageUrl
  projects.push(newProject);

  renderProjects(showingAllProjects ? projects.length : initialProjectsToShow);
  closeProjectModal();

  const submitBtn = document.querySelector("#projectModal .submit-btn");
  submitBtn.innerHTML = '<i class="fas fa-check"></i> Added!';
  submitBtn.style.background = "#28a745"; // Green for success

  setTimeout(() => {
    submitBtn.innerHTML = "Add Project";
    submitBtn.style.background = "var(--submit-btn-bg)"; // Revert to original
  }, 2000);
});

// --- Render Functions (Projects, Skills, Certifications) ---
function renderProjects(count) {
  const projectsGrid = document.getElementById("projectsGrid");
  const projectsToggleBtn = document.getElementById("projectsToggleBtn");
  projectsGrid.innerHTML = "";

  const projectsToRender = projects.slice(0, count);

  projectsToRender.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
                    <button class="project-img-btn" data-img-url="${project.imageUrl}">
                        <img src="${project.imageUrl}" alt="${project.title} Screenshot">
                    </button>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> View Project
                    </a>
                `;
    projectCard.style.animation = `slideInUp 0.6s ease-out ${
      index * 0.1
    }s both`;
    projectsGrid.appendChild(projectCard);
  });

  // Add event listeners for project images AFTER they are rendered
  document.querySelectorAll(".project-img-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openImageModal(btn.dataset.imgUrl);
    });
  });

  if (projects.length > initialProjectsToShow) {
    projectsToggleBtn.style.display = "block";
    if (count === projects.length) {
      projectsToggleBtn.textContent = "See Less Projects";
      showingAllProjects = true;
    } else {
      projectsToggleBtn.textContent = "See More Projects";
      showingAllProjects = false;
    }
  } else {
    projectsToggleBtn.style.display = "none";
  }
}

function renderSkills(count) {
  const skillsGrid = document.getElementById("skillsGrid");
  const skillsToggleBtn = document.getElementById("skillsToggleBtn");
  skillsGrid.innerHTML = "";

  const skillsToRender = skillsData.slice(0, count);

  skillsToRender.forEach((skill, index) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card";
    skillCard.innerHTML = `
                    <i class="${skill.icon}"></i>
                    <h3>${skill.name}</h3>
                    <p>${skill.description}</p>
                `;
    skillCard.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
    skillsGrid.appendChild(skillCard);
  });

  if (skillsData.length > initialSkillsToShow) {
    skillsToggleBtn.style.display = "block";
    if (count === skillsData.length) {
      skillsToggleBtn.textContent = "See Less Skills";
      showingAllSkills = true;
    } else {
      skillsToggleBtn.textContent = "See More Skills";
      showingAllSkills = false;
    }
  } else {
    skillsToggleBtn.style.display = "none";
  }
}

function renderCertifications(count) {
  const certificationsGrid = document.getElementById("certificationsGrid");
  const certificationsToggleBtn = document.getElementById(
    "certificationsToggleBtn"
  );
  certificationsGrid.innerHTML = "";

  const certificationsToRender = certificationsData.slice(0, count);

  certificationsToRender.forEach((cert, index) => {
    const certificateCard = document.createElement("div");
    certificateCard.className = "certificate-card";
    certificateCard.innerHTML = `
                    <button class="certificate-img-btn" data-img-url="${cert.imageUrl}">
                        <img src="${cert.imageUrl}" alt="${cert.title} Certificate">
                    </button>
                    <h3>${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                    <p>${cert.details}</p>
                `;
    certificateCard.style.animation = `slideInUp 0.6s ease-out ${
      index * 0.1
    }s both`;
    certificationsGrid.appendChild(certificateCard);
  });

  // Add event listeners for certificate images AFTER they are rendered
  document.querySelectorAll(".certificate-img-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      openImageModal(btn.dataset.imgUrl);
    });
  });

  if (certificationsData.length > initialCertificationsToShow) {
    certificationsToggleBtn.style.display = "block";
    if (count === certificationsData.length) {
      certificationsToggleBtn.textContent = "See Less Certifications";
      showingAllCertifications = true;
    } else {
      certificationsToggleBtn.textContent = "See More Certifications";
      showingAllCertifications = false;
    }
  } else {
    certificationsToggleBtn.style.display = "none";
  }
}

// --- Toggle Buttons ---
document.getElementById("projectsToggleBtn").addEventListener("click", () => {
  if (showingAllProjects) {
    renderProjects(initialProjectsToShow);
  } else {
    renderProjects(projects.length);
  }
});

document.getElementById("skillsToggleBtn").addEventListener("click", () => {
  if (showingAllSkills) {
    renderSkills(initialSkillsToShow);
  } else {
    renderSkills(skillsData.length);
  }
});

document
  .getElementById("certificationsToggleBtn")
  .addEventListener("click", () => {
    if (showingAllCertifications) {
      renderCertifications(initialCertificationsToShow);
    } else {
      renderCertifications(certificationsData.length);
    }
  });

// --- Intersection Observer and Page Load ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideInUp 0.8s ease-out both";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  // Apply theme from localStorage on load
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id !== "home") {
      observer.observe(section);
    }
  });

  // Initial render of projects, skills, and certifications
  renderProjects(initialProjectsToShow);
  renderSkills(initialSkillsToShow);
  renderCertifications(initialCertificationsToShow);
});

// --- Smooth Scrolling for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// --- Typing Effect for Home Section ---
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
window.addEventListener("load", () => {
  const nameElement = document.querySelector(".home h1");
  const titleElement = document.querySelector(".home p");

  // Clear content first for typing effect
  nameElement.textContent = "";
  titleElement.textContent = "";

  setTimeout(() => {
    typeWriter(nameElement, "Krishankant Mishra", 80);
  }, 500);

  setTimeout(() => {
    typeWriter(titleElement, "Frontend Web Developer", 60);
  }, 2500);
});

// --- Parallax Effect for Home Section ---
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".home-content");
  const speed = 0.3;

  parallaxElements.forEach((element) => {
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});
