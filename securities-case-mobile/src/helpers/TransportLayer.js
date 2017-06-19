import SockJS from 'sockjs-client';
import { Stomp } from 'stompjs/lib/stomp.js';

const BASE_URL = 'http://localhost:8080';

async function fetchInstruments() {
  return fetch(`${BASE_URL}/instruments`).then(data => data.json());
}

function initializeSocket(callback) {
  const socket = new SockJS(`${BASE_URL}/stomp`);
  const stompClient = Stomp.over(socket);

  stompClient.connect({}, function(frame) {
    stompClient.subscribe('/topic/update', function(data) {
      const message = JSON.parse(data.body);
      callback(message);
    });
  });
}

export default { fetchInstruments, initializeSocket };
