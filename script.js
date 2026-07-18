// ===============================
// PAGE 1 - SCHOOL POLICY & IDENTITY
// ===============================
alert("script loaded");
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

// =========================================
// PAGE 2 - SUBJECT ROSTER
// =========================================

// Save Page 2 data and go to Page 3

const nextPage2 = document.getElementById("nextPage2");

if (nextPage2) {

    nextPage2.addEventListener("click", () => {

        const pageTwoData = {

            engUp: document.getElementById("engUp").value,
            engJs: document.getElementById("engJs").value,
            engDouble: document.getElementById("engDouble").checked,

            kisUp: document.getElementById("kisUp").value,
            kisJs: document.getElementById("kisJs").value,
            kisDouble: document.getElementById("kisDouble").checked,

            mathUp: document.getElementById("mathUp").value,
            mathJs: document.getElementById("mathJs").value,
            mathDouble: document.getElementById("mathDouble").checked,

            creUp: document.getElementById("creUp").value,
            creJs: document.getElementById("creJs").value,
            creDouble: document.getElementById("creDouble").checked,

            sciUp: document.getElementById("sciUp").value,
            sciDouble: document.getElementById("sciDouble").checked,

            intSciJs: document.getElementById("intSciJs").value,
            intDouble: document.getElementById("intDouble").checked,

            agrUp: document.getElementById("agrUp").value,
            agrJs: document.getElementById("agrJs").value,
            agrDouble: document.getElementById("agrDouble").checked,

            sstUp: document.getElementById("sstUp").value,
            sstJs: document.getElementById("sstJs").value,
            sstDouble: document.getElementById("sstDouble").checked,

            casUp: document.getElementById("casUp").value,
            casJs: document.getElementById("casJs").value,
            casDouble: document.getElementById("casDouble").checked,

            preJs: document.getElementById("preJs").value,
            preDouble: document.getElementById("preDouble").checked,

            ppiUp: document.getElementById("ppiUp").value,
            ppiJs: document.getElementById("ppiJs").value,
            ppiDouble: document.getElementById("ppiDouble").checked,

            extra1: document.getElementById("extra1").value,
            extra1Up: document.getElementById("extra1Up").value,
            extra1Js: document.getElementById("extra1Js").value,

            extra2: document.getElementById("extra2").value,
            extra2Up: document.getElementById("extra2Up").value,
            extra2Js: document.getElementById("extra2Js").value,

            extra3: document.getElementById("extra3").value,
            extra3Up: document.getElementById("extra3Up").value,
            extra3Js: document.getElementById("extra3Js").value

        };

        localStorage.setItem(
            "pageTwoData",
            JSON.stringify(pageTwoData)
        );

        window.location.href = "page3.html";

    });

}



// =========================================
// BACK BUTTON
// =========================================

const backBtn = document.getElementById("backBtn");

if (backBtn) {

    backBtn.addEventListener("click", () => {

        window.location.href = "index.html";

    });

}



// =========================================
// LOAD PAGE TWO DATA
// =========================================

window.addEventListener("DOMContentLoaded", () => {

    const saved = localStorage.getItem("pageTwoData");

    if (!saved) return;

    const data = JSON.parse(saved);

    Object.keys(data).forEach(key => {

        const element = document.getElementById(key);

        if (!element) return;

        if (element.type === "checkbox") {

            element.checked = data[key];

        } else {

            element.value = data[key];

        }

    });

});
