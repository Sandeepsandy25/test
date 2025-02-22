document.addEventListener("DOMContentLoaded", function () {
    const gradeMapping = {
        "O": 10,
        "A+": 9,
        "A": 8,
        "B+": 7,
        "B": 6,
        "C": 5,
        "D": 5,
        "F": 0
    };

    const resultDisplay = document.createElement("p");
    resultDisplay.id = "cgpa-result";
    document.querySelector("button[type='submit']").insertAdjacentElement("beforebegin", resultDisplay);

    document.querySelector("button[type='submit']").addEventListener("click", function (event) {
        event.preventDefault();
        
        const selects = document.querySelectorAll("select");
        let totalPoints = 0;
        let totalCredits = 0;

        selects.forEach((select, index) => {
            let grade = select.value;
            let gradePoint = gradeMapping[grade];
            let weight = 1;

            if (index < 5) {
                weight = 3;
            } else if (index < 7) {
                weight = 2;
            }
            
            totalPoints += gradePoint * weight;
            totalCredits += weight;
        });
        
        let cgpa = totalPoints / totalCredits;
        document.getElementById("cgpa-result").textContent = "Your CGPA is: " + cgpa.toFixed(2);
    });
});
