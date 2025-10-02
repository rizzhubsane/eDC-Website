import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import preloaderVideo from "@assets/preloader.mov";

const mountApp = () => {
  const rootEl = document.getElementById("root")!;
  createRoot(rootEl).render(<App />);
};

// Create a fullscreen blocking video that must finish before mounting the app
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

const video = document.createElement("video");
video.src = preloaderVideo;
video.autoplay = true;
video.muted = true;
video.playsInline = true as any;
video.setAttribute("playsinline", "");
video.setAttribute("webkit-playsinline", "");
video.setAttribute("muted", "");
video.preload = "auto";
video.controls = false;
video.style.width = "100%";
video.style.height = "100%";
video.style.objectFit = "cover";
video.style.objectPosition = "center";
video.style.backgroundColor = "black";
video.style.cursor = "default";

overlay.appendChild(video);
document.body.appendChild(overlay);

const cleanupAndMount = () => {
  try {
    overlay.remove();
  } catch {}
  document.body.style.overflow = previousOverflow;
  mountApp();
};

video.addEventListener("ended", cleanupAndMount, { once: true });

video.addEventListener("loadeddata", () => {
  if (video.paused) {
    video.play().catch(() => {
      // Autoplay blocked; we'll reveal a manual play button.
      showStartButton();
    });
  }
});

// Manual Play button (only if autoplay is blocked)
const startBtn = document.createElement("button");
startBtn.textContent = "Play";
startBtn.style.position = "absolute";
startBtn.style.top = "50%";
startBtn.style.left = "50%";
startBtn.style.transform = "translate(-50%, -50%)";
startBtn.style.background = "rgba(255,255,255,0.92)";
startBtn.style.color = "black";
startBtn.style.fontWeight = "700";
startBtn.style.fontSize = "18px";
startBtn.style.padding = "12px 20px";
startBtn.style.borderRadius = "9999px";
startBtn.style.border = "0";
startBtn.style.cursor = "pointer";
startBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
startBtn.style.display = "none";
startBtn.style.zIndex = "2147483648";
overlay.appendChild(startBtn);

const showStartButton = () => {
  startBtn.style.display = "inline-block";
};

startBtn.addEventListener("click", () => {
  video.play().then(() => {
    startBtn.style.display = "none";
  }).catch(() => {
    // If still blocked, keep the button visible
  });
});

video.addEventListener("playing", () => {
  // Hide button as soon as playback starts
  startBtn.style.display = "none";
});
