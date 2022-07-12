var socket = io.connect('http://localhost:5000');


//Query Dom

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// Emit event
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
    message.value = ""
});

message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value)
})

//Listen to events

socket.on('chat', (data)=> {
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + ' : ' + '</strong>' + data.message +'</p>'
})

socket.on('typing', (data)=> {
    feedback.innerHTML = '<p>'+ data + ' is typing ' + '</p>'
})