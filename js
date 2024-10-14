document.getElementById('startChat').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('profile').classList.add('hidden');
        document.getElementById('chat').classList.remove('hidden');
        document.getElementById('messages').innerHTML += `<p><strong>${username}</strong> has joined the chat!</p>`;
    } else {
        alert("Please enter your name!");
    }
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message) {
        const username = document.getElementById('username').value;
        document.getElementById('messages').innerHTML += `<p><strong>${username}:</strong> ${message}</p>`;
        messageInput.value = '';
        document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
    }
});
