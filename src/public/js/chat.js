const socket = io.connect('http://localhost:4000');

const output = document.getElementById('output'),
  handle = document.getElementById('handle'),
  message = document.getElementById('message'),
  btn = document.getElementById('send'),
  feedback = document.getElementById('feedback');

btn.addEventListener('click', () => {
  socket.emit('chat', { message: message.value, handle: handle.value });
});

socket.on('chat', data => {
  output.innerHTML += `<p><strong>${data.handle}</strong>: ${data.message}</p>`;
  feedback.innerHTML = '';
});

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
});

socket.on('typing', data => {
  feedback.innerHTML = `<p><em>${data} is typing ... </em></p>`;
});
