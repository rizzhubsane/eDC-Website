import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import preloaderGif from "@assets/preloader.gif";

const mountApp = () => {
  const rootEl = document.getElementById("root")!;
  createRoot(rootEl).render(<App />);
};

// Check if preloader has been shown before
const hasSeenPreloader = localStorage.getItem('preloader-shown');

// For testing: uncomment the line below to reset preloader
localStorage.removeItem('preloader-shown');

if (hasSeenPreloader) {
  // Skip preloader and mount app directly
  console.log('Preloader already shown, mounting app directly');
  mountApp();
} else {
  console.log('First visit - showing preloader');
  // Show preloader for first-time visitors
  const overlay = document.createElement("div");
  overlay.setAttribute("data-preloader-overlay", "");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "2147483647";
  overlay.style.background = "var(--background, #0b0b0b)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";

  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  const img = document.createElement("img");
  img.src = preloaderGif;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.objectPosition = "center";
  img.style.backgroundColor = "black";
  img.style.cursor = "default";

  overlay.appendChild(img);
  document.body.appendChild(overlay);

  const cleanupAndMount = () => {
    try {
      overlay.remove();
    } catch {}
    document.body.style.overflow = previousOverflow;
    // Mark preloader as shown
    localStorage.setItem('preloader-shown', 'true');
    mountApp();
  };

  // For GIF, we'll use a timeout to dismiss after a reasonable duration
  // You can adjust this timeout based on your GIF's length
  setTimeout(cleanupAndMount, 3500); // 5 seconds - adjust as needed

  img.addEventListener("load", () => {
    // GIF loaded successfully
  });
}
