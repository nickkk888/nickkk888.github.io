// Example to handle the donation form submission and update the live counter
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Here you can handle the form submission, e.g., send the data to the server or a third-party service
    console.log('Form submitted');

    // Update the live counter - this is just a basic example
    const donationAmount = parseInt(e.target[2].value);
    const totalDonationsElement = document.getElementById('totalDonations');
    const currentTotal = parseInt(totalDonationsElement.textContent);
    totalDonationsElement.textContent = currentTotal + donationAmount;
});
