import { Hono } from 'hono';

const app = new Hono();

app.get('/ws', (c) => {
  const [clientSocket, responseSocket] = new WebSocketPair() as [WebSocket, WebSocket];

  responseSocket.accept();
  
  const sendData = () => {
    const randomValue1 = Math.floor(Math.random() * 100);  // For Chart 1
    const randomValue2 = Math.floor(Math.random() * 100);  // For Chart 2
    const randomValue3 = Math.floor(Math.random() * 15);   // For Chart 3
    const randomValue4 = Math.floor(Math.random() * 50);   // For Chart 4
    const randomValue5a = Math.floor(Math.random() * 100);   // For Chart 5a
    const randomValue5b = Math.floor(Math.random() * 100);   // For Chart 5b
    const randomValue5c = Math.floor(Math.random() * 100);   // For Chart 5c
    const randomValue5d = Math.floor(Math.random() * 100);   // For Chart 5d
    
    const now = new Date();
    const time = now.toLocaleTimeString(); // Current time
    const date = now.toLocaleDateString(); // Current date
  
    try {
      responseSocket.send(JSON.stringify({ 
        chart: 'chart1',
        value: randomValue1,
        time,
        date
      }));
      responseSocket.send(JSON.stringify({
        chart: 'chart4',
        value: randomValue4,
        time,
        date
      }))
      responseSocket.send(JSON.stringify({
        chart: 'chart5a',
        value: randomValue5a,
        time,
        date
      }))
      responseSocket.send(JSON.stringify({
        chart: 'chart5d',
        value: randomValue5d,
        time,
        date
      }))
      setTimeout(() => {
        responseSocket.send(JSON.stringify({
          chart: 'chart5b',
          value: randomValue5b,
          time,
          date
        }))
        responseSocket.send(JSON.stringify({ 
          chart: 'chart2',
          value: randomValue2,
          time,
          date 
        }));
      }, 3000);
      setTimeout(() => {
        responseSocket.send(JSON.stringify({
          chart: 'chart5c',
          value: randomValue5c,
          time,
          date
        }))
        responseSocket.send(JSON.stringify({ 
          chart: 'chart3',
          value: randomValue3,
          time,
          date 
        }));
      }, 5000);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const intervalId = setInterval(sendData, 1000);

  responseSocket.addEventListener('close', () => {
    clearInterval(intervalId);  
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

app.get('/', (c) => {
  return c.json({
    message: "hii! This backend is maded by Irshad for GDSC Project",
  });
});

export default {
  fetch: app.fetch,
};
