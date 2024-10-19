import { Hono } from 'hono';

const app = new Hono();

// WebSocket Endpoint
app.get('/ws', (c) => {
  const [clientSocket, responseSocket] = new WebSocketPair() as [WebSocket, WebSocket];

  responseSocket.accept();

  const sendData = setInterval(() => {
    const randomValue = Math.floor(Math.random() * 100);
    const time = new Date().toLocaleTimeString();
    try {
      responseSocket.send(JSON.stringify({ value: randomValue, time }));
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }, 2000);

  responseSocket.addEventListener('close', () => {
    clearInterval(sendData);
    console.log("WebSocket connection closed.");
  });

  clientSocket.addEventListener('error', (event) => {
    console.error("WebSocket error observed:", event);
  });

  return new Response(null, {
    status: 101,
    webSocket: clientSocket,
  });
});

// Additional endpoint for testing
app.get('/', (c) => {
  return c.json({
    message: "hii",
  });
});

export default {
  fetch: app.fetch,
};
