//Variables

let name = "Gaurav";
let skills = 3;
let isLearning = true;

// Check Data Types

console.log(typeof name);
console.log(typeof skills);
console.log(typeof isLearning);

// Object & Object Methods

let developer = {
    name : "Gaurav",
    role : "Frontend Developer",
    isLearning: true,
    greet: function() {
        console.log("Hello, I'm Gaurav");
    }
};

// Access Object Properties

console.log(developer.name);
console.log(developer.role);

// Change Object Property

developer.isLearning = false;
console.log(developer.isLearning);

// Call Object Method
developer.greet();

// Array

let skillList = ["HTML", "CSS", "JavaScript", "Git", "Github"];

console.log(skillList[0]);

console.log(skillList[1]);
console.log(skillList[2]);
console.log(skillList[4]);

skillList.push("MySQL");

console.log(skillList);

// Remove Last Item from Array
skillList.pop();
console.log(skillList);

// Remove First Item from Array
skillList.shift();
console.log(skillList);

// Add Item to Beginning of Array
skillList.unshift("HTML");
console.log(skillList);

// Check Number of Items in Array
console.log(skillList.length);

// Practice map()
let numbers = [10, 20, 30, 40];
let doubleNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubleNumbers);

// Practice map() - Triple Numbers
let tripleNumbers = numbers.map(function(number) {
    return number * 3;

});
console.log(tripleNumbers);

// Practice filter()
let bigNumbers = numbers.filter(function(number) {

    return number > 20;

});

console.log(bigNumbers);

// Practice reduce()

let total = numbers.reduce(function(sum, number) {

    return sum + number;

}, 0);

console.log(total);


// Project Data

let projects = [


    {
        title: "MyOnlineMeal",
        description: "My journey of learning Data Structures and Algorithms using Java.",
        category: "javascript",
        technology: "JavaScript",
        link: "https://onlinemeal-gaurav.netlify.app/"
    },
    {
        title: "Java DSA Journey",
        description: "My journey of learning Data Structures and Algorithms using Java.",
        category: "javascript",
        technology: "Java",
        link: "https://github.com/codewithgkg/java-dsa-journey"
    },

    {
        title: "Git Practice",
        description: "A repository where I practice Git, GitHub, branches and version control.",
        category: "html-css",
        technology: "Git & GitHub",
        link: "https://github.com/codewithgkg/git-practice"
    },

    {
        title: "Gaurav.dev Portfolio",
        description: "My interactive developer portfolio built while learning frontend development.",
        category: "javascript",
        technology: "HTML, CSS & JavaScript",
        link: "https://codewithgkg.github.io/Portfolio/"
    }

];

// DOM Selection

let projectsContainer =
    document.getElementById("projectsContainer");

let projectSearch =
    document.getElementById("projectSearch");

let filterButtons =
    document.querySelectorAll(".filter-btn");

let projectCount =
    document.getElementById("projectCount");

let skillCount =
    document.getElementById("skillCount");

let technologyCount =
    document.getElementById("technologyCount");


// Display Projects

function displayProjects(projectList) {

    // Clear existing projects

    projectsContainer.innerHTML = "";


    // Check if no projects exist

    if (projectList.length === 0) {

        projectsContainer.innerHTML = `
            <p>No projects found.</p>
        `;

        return;
    }


    // Create a card for every project

    projectList.forEach(function(project) {

        let projectCard =
            document.createElement("div");


        projectCard.classList.add("project-card");


        projectCard.innerHTML = `

            <span class="project-category">
                ${project.category}
            </span>

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <p>
                <strong>Technology:</strong>
                ${project.technology}
            </p>

            <a
                href="${project.link}"
                target="_blank"
                class="project-link"
            >
                View Project →
            </a>

        `;


        projectsContainer.appendChild(projectCard);

    });

}


// Display projects when page loads

displayProjects(projects);



// Project Filters

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        // Remove active class from all buttons

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        // Add active class to clicked button

        button.classList.add("active");


        // Get selected category

        let selectedCategory =
            button.dataset.category;


        // Show all projects

        if (selectedCategory === "all") {

            displayProjects(projects);

        }


        // Show selected category

        else {

            let filteredProjects =
                projects.filter(function(project) {

                    return project.category === selectedCategory;

                });


            displayProjects(filteredProjects);

        }

    });

});

// Project Search

projectSearch.addEventListener("input", function() {


    // Get search text

    let searchText =
        projectSearch.value.toLowerCase();


    // Search projects

    let searchedProjects =
        projects.filter(function(project) {

            return (

                project.title
                    .toLowerCase()
                    .includes(searchText)

                ||

                project.description
                    .toLowerCase()
                    .includes(searchText)

                ||

                project.technology
                    .toLowerCase()
                    .includes(searchText)

            );

        });


    // Display search results

    displayProjects(searchedProjects);

});

// Developer Statistics


// Number of Projects

projectCount.textContent =
    projects.length;


// Number of Skills

skillCount.textContent =
    skillList.length;


// Get Technologies

let technologies = projects.map(function(project) {

    return project.technology;

});


// Remove Duplicate Technologies

let uniqueTechnologies =
    [...new Set(technologies)];


// Number of Technologies

technologyCount.textContent =
    uniqueTechnologies.length;

// Hero Buttons

let projectsBtn =
    document.getElementById("projectsBtn");

let contactBtn =
    document.getElementById("contactBtn");


// View Projects Button

projectsBtn.addEventListener("click", function() {

    document.getElementById("projects").scrollIntoView({

        behavior: "smooth"

    });

});


// Contact Button

contactBtn.addEventListener("click", function() {

    document.getElementById("contact").scrollIntoView({

        behavior: "smooth"

    });

});

// Contact Form

let contactForm =
    document.getElementById("contactForm");

let nameInput =
    document.getElementById("name");

let emailInput =
    document.getElementById("email");

let messageInput =
    document.getElementById("message");

let formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {


    // Prevent page refresh

    event.preventDefault();


    // Get values from form

    let userName =
        nameInput.value.trim();

    let userEmail =
        emailInput.value.trim();

    let userMessage =
        messageInput.value.trim();


    // Validate name

    if (userName === "") {

        formMessage.textContent =
            "Please enter your name.";

        return;
    }


    // Validate email

    if (userEmail === "") {

        formMessage.textContent =
            "Please enter your email.";

        return;
    }


    // Validate message

    if (userMessage === "") {

        formMessage.textContent =
            "Please enter your message.";

        return;
    }


    // Successful submission

    formMessage.textContent =
        "Thank you! Your message has been submitted.";


    // Clear form

    contactForm.reset();

});

// Dark / Light Mode

let themeButton =
    document.createElement("button");


themeButton.textContent =
    "☀️ Light Mode";


themeButton.id =
    "themeButton";


document.querySelector("nav").appendChild(themeButton);


// Change theme

themeButton.addEventListener("click", function() {

    let lightMode =
        document.body.classList.toggle("light-mode");


    if (lightMode) {

        themeButton.textContent =
            "🌙 Dark Mode";

    }

    else {

        themeButton.textContent =
            "☀️ Light Mode";

    }

});

// GitHub API

let githubContainer =
    document.getElementById("githubContainer");

let githubStatus =
    document.getElementById("githubStatus");


let githubUsername =
    "codewithgkg";

// Fetch GitHub Data

async function getGitHubData() {

    try {


        // Show loading message

        githubStatus.textContent =
            "Loading GitHub data...";


        // Send request to GitHub

        let response =
            await fetch(
                `https://api.github.com/users/${githubUsername}`
            );


        // Check if request was successful

        if (!response.ok) {

            throw new Error(
                "GitHub data could not be loaded."
            );

        }


        // Convert response to JavaScript object

        let data =
            await response.json();


        // Display GitHub information

        githubContainer.innerHTML = `

            <h3>
                ${data.name || data.login}
            </h3>

            <p>
                ${data.bio || "Frontend Developer in Progress"}
            </p>

            <p>
                Public Repositories:
                ${data.public_repos}
            </p>

            <p>
                Followers:
                ${data.followers}
            </p>

            <a
                href="${data.html_url}"
                target="_blank"
                class="project-link"
            >
                View GitHub Profile →
            </a>

        `;

    }


    catch (error) {


        // Show error message

        githubStatus.textContent =
            "Unable to load GitHub data.";


        console.log(error);

    }

}


// Run GitHub function
getGitHubData();

// Portfolio Loaded
console.log(
    "Gaurav.dev portfolio loaded successfully."
);