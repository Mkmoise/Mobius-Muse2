// ===============================
// PAGE 1 - SCHOOL POLICY & IDENTITY
// ===============================

// Automatically set today's date
window.addEventListener("DOMContentLoaded", () => {

    const dateInput = document.getElementById("date");

    if (dateInput && !dateInput.value) {

        const today = new Date().toISOString().split("T")[0];

        dateInput.value = today;
    }

    // Load saved data if it exists
    loadPageOneData();

});


// ===============================
// SAVE DATA
// ===============================

const nextButton = document.getElementById("nextBtn");

if (nextButton) {

    nextButton.addEventListener("click", function () {

        const schoolName = document.getElementById("schoolName").value.trim();

        const filledBy = document.getElementById("filledBy").value.trim();

        const date = document.getElementById("date").value;

        // Validation

        if (schoolName === "") {

            alert("Please enter the school name.");

            return;

        }

        const pageOneData = {

            schoolName,

            filledBy,

            date,

            gradeScope: document.querySelector('input[name="gradeScope"]:checked').value,

            overload: document.querySelector('input[name="overload"]:checked').value,

            ambiguous: document.querySelector('input[name="ambiguous"]:checked').value,

            specialist: document.querySelector('input[name="specialist"]:checked').value

        };

        // Save into localStorage

        localStorage.setItem(

            "pageOneData",

            JSON.stringify(pageOneData)

        );

        // Move to Page 2

        window.location.href = "page2.html";

    });

}


// ===============================
// LOAD SAVED DATA
// ===============================

function loadPageOneData() {

    const savedData = localStorage.getItem("pageOneData");

    if (!savedData) return;

    const data = JSON.parse(savedData);

    document.getElementById("schoolName").value = data.schoolName || "";

    document.getElementById("filledBy").value = data.filledBy || "";

    document.getElementById("date").value = data.date || "";

    document.querySelector(`input[name="gradeScope"][value="${data.gradeScope}"]`)?.checked = true;

    document.querySelector(`input[name="overload"][value="${data.overload}"]`)?.checked = true;

    document.querySelector(`input[name="ambiguous"][value="${data.ambiguous}"]`)?.checked = true;

    document.querySelector(`input[name="specialist"][value="${data.specialist}"]`)?.checked = true;

}
