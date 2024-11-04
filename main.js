
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

