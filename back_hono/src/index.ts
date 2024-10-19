import { Hono } from 'hono';

const app = new Hono();

// WebSocket Endpoint
app.get('/ws', (c) => {
  const [clientSocket, responseSocket] = new WebSocketPair() as [WebSocket, WebSocket];

  responseSocket.accept();

  // Function to send data at different intervals
  const sendData = () => {
    const randomValue1 = Math.floor(Math.random() * 100);  // For Chart 1
    const randomValue2 = Math.floor(Math.random() * 100);   // For Chart 2
    const randomValue3 = Math.floor(Math.random() * 15);  // For Chart 3
    const time = new Date().toLocaleTimeString();

    // Send different data for each chart with unique identifiers
    try {
      responseSocket.send(JSON.stringify({ chart: 'chart1', value: randomValue1, time }));
      setTimeout(() => {
        responseSocket.send(JSON.stringify({ chart: 'chart2', value: randomValue2, time }));
      }, 3000);  // Chart 2 updates every 3 seconds
      setTimeout(() => {
        responseSocket.send(JSON.stringify({ chart: 'chart3', value: randomValue3, time }));
      }, 5000);  // Chart 3 updates every 5 seconds
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  // Send data every 2 seconds (or adjust as needed)
  const intervalId = setInterval(sendData, 2000);

  responseSocket.addEventListener('close', () => {
    clearInterval(intervalId);  // Stop sending data when socket is closed
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
