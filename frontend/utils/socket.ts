import { toast } from "react-toastify";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL; 
const socket = new WebSocket(`${URL}/ws`);

socket.addEventListener("open", () => {
    console.log("Connected to WebSocket server");
    toast.success("Connected to WebSocket server");
});

socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    // console.log("Message from server:", message);
});

socket.addEventListener("error", (error) => {
    console.error("WebSocket connection error:", error);
    toast.error(`WebSocket connection error: ${error}`);
});

socket.addEventListener("close", (event) => {
    console.log("WebSocket connection closed:", event);
    toast.info("WebSocket connection closed.");
});

export default socket;
