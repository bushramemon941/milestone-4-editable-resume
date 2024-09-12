"use strict";
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const educationElement = document.getElementById("education");
    const experienceElement = document.getElementById("experience");
    const skillsElement = document.getElementById("skills");
    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillsElement) {
        console.error("One or more elements are missing");
        return;
    }
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span class="editable" id="editName">${name}</span></p>
        <p><strong>Email:</strong> <span class="editable" id="editEmail">${email}</span></p>
        <p><strong>Phone:</strong> <span class="editable" id="editPhone">${phone}</span></p>
    
        <h3>Education</h3>
        <p class="editable" id="editEducation">${education}</p>
    
        <h3>Experience</h3>
        <p class="editable" id="editExperience">${experience}</p>
    
        <h3>Skills</h3>
        <p class="editable" id="editSkills">${skills}</p>
    `;
    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
}
// Function to handle toggling between Edit and Save modes
function toggleEditMode() {
    const editButton = document.getElementById("editButton");
    if (!editButton)
        return;
    const editableElements = document.querySelectorAll(".editable");
    if (editButton.textContent === "Edit") {
        // Switch to edit mode
        editableElements.forEach((element) => {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editButton.textContent = "Save";
    }
    else {
        // Switch to save mode
        editableElements.forEach((element) => {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editButton.textContent = "Edit";
    }
}
// Attach event listeners only once
function attachEventListeners() {
    const formElement = document.getElementById("resumeForm");
    const editButton = document.getElementById("editButton");
    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
    if (editButton) {
        editButton.addEventListener("click", toggleEditMode);
    }
}
// Initialize the script
attachEventListeners();
