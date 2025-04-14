---
title: "DJ Pose Estimation" 
imageUrls: 
  - "/images/dj-pose-estimation1.png"
githubUrl: "https://github.com/Masdaofdisasda/visual-analysis-project"
deploymentUrl: "https://masdaofdisasda.github.io/visual-analysis-project/"
summary: "Control a particle system with your body using pose estimation and WebGL."
---

**DJ Pose Estimation** is a real-time browser-based visualizer that uses **pose detection and classification** to control a live WebGL particle system. Built for DJs who want dynamic visuals behind them during a set — even without a dedicated team — the app reacts to arm and hand gestures captured from a webcam, driving changes in the particle visuals based on body movement.

The system uses **MediaPipe** for pose estimation and a **custom TensorFlow classifier** to recognize gestures. Each pose triggers different parameters in the particle shader, allowing for expressive visual control while performing.

## Key Features

- **Pose-Controlled Visuals**: Uses MediaPipe for pose estimation and a TensorFlow.js classifier to map DJ arm movements to live particle system changes.
- **Real-Time 1M+ Particle Simulation**: Runs smoothly at 120 FPS using WebGL2 framebuffers and curl-noise-driven motion.
- **Fully Browser-Based & Mobile-Friendly**: Built with React, TypeScript, and Three.js (via React Three Fiber), optimized for both desktop and mobile devices.

## Technologies Used

- **Languages**: TypeScript, Python, GLSL
- **Libraries**: TensorFlow.js, MediaPipe, React, React Three Fiber, WebGL2

## Development Highlights

This was a creative and technical challenge — from designing a **machine learning pipeline** in Python, to exporting the model and integrating it into a browser app using **TensorFlow.js**, to building and optimizing a **WebGL2 particle system** capable of running over a million particles interactively.

I also learned how to use **React Three Fiber** for custom shaders and render loops, and tackled some interesting performance bottlenecks by bypassing parts of React’s lifecycle and optimizing state updates to avoid slowing down the WebGL rendering.

Overall, it was a rewarding project that combined graphics, interaction, and ML in a playful way — and it runs smoothly on both laptops and phones.
