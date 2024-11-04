
// Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts'; // API endpoint to fetch ticket data.
    const ticketContainer = document.getElementById('ticketContainer'); // HTML container to display the tickets.
    const errorMessage = document.getElementById('errorMessage'); // HTML element to show any error messages.

    try { 
        // Fetching data from the API. Await pauses the function until the fetch promise is resolved.
        const response = await fetch(apiEndpoint); 
        // Check if the HTTP response is not OK (e.g., 404 or 500), then throw an error to handle it in the catch block.
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }
        // Parse the response as JSON data after the fetch is successful.
        const data = await response.json();

        // If the returned data is an empty array, throw an error to indicate no tickets are available.
        if (data.length === 0) { 
            throw new Error('No tickets available');
        }

        // If there are tickets, call the displayTickets function to render them on the page.
        displayTickets(data);
    } catch (error) { 
        // Handle any errors that occurred during the fetch or data handling.
        errorMessage.textContent = `Error: ${error.message}`; // Display the error message in the HTML element.
    }
}


// Task 3: Display Tickets Dynamically on the Page

function displayTickets(tickets) {
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.innerHTML = ''; // Clear previous content in the ticket container.

    // Loop through each ticket in the tickets array to create and display ticket elements.
    tickets.forEach(ticket => { 
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket'); // Add 'ticket' class to the new div for styling.

        // Set up the HTML structure for each ticket, displaying ID, customer name, issue description, and details.
        ticketElement.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p>Customer Name: User ${ticket.userId}</p>
            <p>Issue Description: ${ticket.title}</p> 
            <p>Details: ${ticket.body}</p>
        `;

        // Append the ticket element to the main ticket container in the DOM.
        ticketContainer.appendChild(ticketElement); 
    });
}

// Call fetchTickets to start fetching and displaying tickets.
fetchTickets();
