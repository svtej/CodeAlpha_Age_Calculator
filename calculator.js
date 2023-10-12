function calculateAge() {
    // Get the value of the date of birth input field with ID "dob"
    var dobInput = document.getElementById('dob').value;

    // Create a JavaScript Date object from the DOB input
    var dob = new Date(dobInput);

    // Create a JavaScript Date object representing the current date
    var today = new Date();

    // Calculate the age by subtracting the birth year from the current year
    var age = today.getFullYear() - dob.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (today.getMonth() < dob.getMonth() || 
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    // Get the HTML element with the ID "result" and display the calculated age
    var resultElement = document.getElementById('result');
    resultElement.innerText = "Your age is " + age + " years.";
}
