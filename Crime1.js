document.getElementById('crimeReportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;
    const evidence = document.getElementById('evidence').files[0];

    // Perform basic validation
    if (!location || !date || !time) {
        alert("Please fill in all required fields.");
        return;
    }

    // Simulate a successful report submission
    alert("Crime reported successfully!");
    
    // Reset the form
    this.reset();
});