import { Hono } from 'hono';

const app = new Hono();


app.get('/ws', (c) => {
  const [clientSocket, responseSocket] = new WebSocketPair() as [WebSocket, WebSocket];

  responseSocket.accept();

  // const sendData = () => {
  //   const randomValue1 = Math.floor(Math.random() * 100);  // For Chart 1
  //   const randomValue2 = Math.floor(Math.random() * 100);   // For Chart 2
  //   const randomValue3 = Math.floor(Math.random() * 15);  // For Chart 3
  //   const time = new Date().toLocaleTimeString();
  //   try {
  //     responseSocket.send(JSON.stringify({ chart: 'chart1', value: randomValue1, time }));
  //     setTimeout(() => {
  //       responseSocket.send(JSON.stringify({ chart: 'chart2', value: randomValue2, time }));
  //     }, 3000);  
  //     setTimeout(() => {
  //       responseSocket.send(JSON.stringify({ chart: 'chart3', value: randomValue3, time }));
  //     }, 5000);  
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }
  // };

  const sendData = () => {
    const randomValue1 = Math.floor(Math.random() * 100);  // For Chart 1
    const randomValue2 = Math.floor(Math.random() * 100);  // For Chart 2
    const randomValue3 = Math.floor(Math.random() * 15);   // For Chart 3
    
    const now = new Date();
    const time = now.toLocaleTimeString(); // Current time
    const date = now.toLocaleDateString(); // Current date
  
    try {
      responseSocket.send(JSON.stringify({ chart: 'chart1', value: randomValue1, time, date }));
      setTimeout(() => {
        responseSocket.send(JSON.stringify({ chart: 'chart2', value: randomValue2, time, date }));
      }, 3000);
      setTimeout(() => {
        responseSocket.send(JSON.stringify({ chart: 'chart3', value: randomValue3, time, date }));
      }, 5000);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const intervalId = setInterval(sendData, 2000);

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
