// function generateItinerary() {
//     const day = document.getElementById('day').value;
//     const location = document.getElementById('location').value;
//     const itineraryContent = document.getElementById('itineraryContent');

//     fetch('pandal_data.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (!data[day] || !data[day][location]) {
//                 throw new Error('Data for the selected day and location is not available.');
//             }

//             const selectedItinerary = data[day][location];
//             let itineraryHTML = "<ul>";

//             selectedItinerary.forEach(place => {
//                 itineraryHTML += `<li>${place}</li>`;
//             });

//             itineraryHTML += "</ul>";
//             itineraryContent.innerHTML = itineraryHTML;
//         })
//         .catch(error => {
//             console.error('Fetch error:', error);
//             itineraryContent.innerHTML = `<p>Sorry, we couldn't generate the itinerary. Error: ${error.message}</p>`;
//         });
// }


function generateItinerary() {
    const day = document.getElementById('day').value;
    const location = document.getElementById('location').value;
    const itineraryContent = document.getElementById('itineraryContent');

    fetch('pandal_data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!data[day] || !data[day][location]) {
                throw new Error('Data for the selected day and location is not available.');
            }

            const selectedItinerary = data[day][location];
            let itineraryHTML = "<ul>";

            selectedItinerary.forEach(place => {
                itineraryHTML += `<li>${place}</li>`;
            });

            itineraryHTML += "</ul>";
            itineraryContent.innerHTML = itineraryHTML;
        })
        .catch(error => {
            console.error('Fetch error:', error);
            itineraryContent.innerHTML = `<p>Sorry, we couldn't generate the itinerary. Error: ${error.message}</p>`;
        });
}


//countdown
// Countdown Timer Script
const targetDate = new Date("October 10, 2024 00:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Calculate time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result in interactive UI format
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // If the countdown is over
    if (difference < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Durga Puja Has Arrived!";
    }
}, 1000);
