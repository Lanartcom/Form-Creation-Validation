// Step 1: Initialized the async function
async function fetchUserData() {
    // Step 2: Defined the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Selected the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data using try-catch
        const response = await fetch(apiUrl);

        // Step 5: Converted the response to JSON
        const users = await response.json();

        // Step 6: Cleared the "Loading user data..." message
        dataContainer.innerHTML = '';

        // Step 7: Created a <ul> element
        const userList = document.createElement('ul');

        // Step 8: Looped through the users and create <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 9: Appended the user list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 10: Handled Error
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 11: Invoked fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
