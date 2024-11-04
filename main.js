async function fetchTickets() {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts'; // API endpoint to fetch ticket data.
    const ticketContainer = document.getElementById('ticketContainer'); // Container to display tickets.
    const errorMessage = document.getElementById('errorMessage'); // Element to display error messages.

    try { 
        // Fetch data from the API. Await pauses until the fetch promise is resolved.
        const response = await fetch(apiEndpoint); 
        if (!response.ok) {
            throw new Error('Failed to fetch tickets. Please try again later.');
        }

        // Parse response as JSON after successful fetch.
        const data = await response.json();

        // Check if data is empty and display an error if so.
        if (data.length === 0) { 
            throw new Error('No tickets available.');
        }

        // Render tickets if data is available.
        displayTickets(data);
    } catch (error) { 
        errorMessage.textContent = `Error: ${error.message}`; // Display error message in the UI.
    } finally {
        console.log('Fetch attempt completed!'); // Message to signal fetch process completion, useful for stopping loading indicators.
    }
}

function displayTickets(tickets) {
    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.innerHTML = ''; // Clear previous tickets.

    tickets.forEach(ticket => { 
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket'); // Style each ticket with a class.

        ticketElement.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p>Customer Name: User ${ticket.userId}</p>
            <p>Issue Description: ${ticket.title}</p> 
            <p>Details: ${ticket.body}</p>
        `;

        ticketContainer.appendChild(ticketElement); 
    });
}

// Start the fetch process to display tickets.
fetchTickets();

