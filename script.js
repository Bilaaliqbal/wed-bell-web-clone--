document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const venueSelect = document.getElementById('venue');

    // Add event listener to form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const venue = venueSelect.value;
        const date = document.getElementById('date').value;
        const guests = document.getElementById('guests').value;

        if (name && email && phone && venue && date && guests) {
            alert(`Thank you, ${name}! Your booking for the ${venue} on ${date} has been received.`);
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Add click event listeners to all "Book Now" buttons
    document.querySelectorAll('.book-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            const selectedVenue = this.getAttribute('data-venue');
            venueSelect.value = selectedVenue.toLowerCase().replace(' ', '-');
            window.scrollTo({
                top: document.querySelector('.booking-form').offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
