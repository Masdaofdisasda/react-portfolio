---
title: 'Direct Volume Rendering'
imageUrls:
  - './images/raycast1.png'
  - './images/raycast2.png'
  - './images/raycast3.png'
githubUrl: 'https://github.com/Masdaofdisasda/Vis1_Direct_Volume_Rendering_2022W'
---
As part of a university course on visualization, I developed a **WebGL-based volume renderer** that runs interactively in the browser. The tool supports **First-Hit Compositing** and **Maximum Intensity Projection (MIP)** — two common techniques for visualizing 3D medical or scientific datasets.

This was my first deep dive into **ray marching**, view-projection matrix math, and WebGL graphics beyond rasterization. I also built a basic UI for navigating the volume and helped integrate **D3-based histograms** for data analysis.

## What I Did
- Implemented **ray marching shaders** in WebGL for both MIP and First-Hit Compositing
- Built an interactive UI for **dataset exploration** and rendering mode switching
- Collaborated on **data visualization** overlays (histograms) using D3.js

This project taught me the fundamentals of **volumetric rendering**, how ray traversal differs from raster pipelines, and gave me hands-on experience with **shader programming in a real-time browser environment**.
