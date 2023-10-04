document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulating form submission and updating the live counter
    const donationAmount = parseInt(e.target[2].value);
    const totalDonationsElement = document.getElementById('totalDonations');
    const currentTotal = parseInt(totalDonationsElement.textContent);
    const newTotal = currentTotal + donationAmount;
    totalDonationsElement.textContent = newTotal;

    // Updating the car fill effect based on the total donations
    const maxDonation = 100000; // The fundraising goal
    const fillPercentage = Math.min((newTotal / maxDonation) * 100, 100); // Calculate the fill percentage, maxing out at 100%
    document.getElementById('fillEffect').style.width = `${fillPercentage}%`;
});
