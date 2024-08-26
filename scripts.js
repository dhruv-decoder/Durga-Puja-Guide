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
