---
title: "Greed"
imageUrls:
  - "/images/greed1.jpg"
  - "/images/greed2.jpg"
  - "/images/greed3.jpg"
youtubeUrl: "https://youtu.be/l_ucd9Kc4S4?si=CWjVK7NQRkRJ5tw3"
githubUrl: "https://github.com/Masdaofdisasda/cgue22-greed"
deploymentUrl: "https://github.com/Masdaofdisasda/cgue22-greed/releases/download/release/greed_1.0.0.zip"
---
**Greed** is a fast-paced 3D platformer built from scratch in **C++** using **modern OpenGL 4.6**. Developed as a team of two for a university computer graphics course, the game won **first place in the TU Wien Computer Graphics Hall of Fame**.

In *Greed*, players race to collect as much gold as possible while escaping a rising lava flood inside a mine. But the more gold you carry, the slower you move — forcing you to balance risk and reward on your climb to survival.

This project was a deep dive into real-time graphics programming, where I implemented a full rendering pipeline and built gameplay, visual effects, and performance systems from the ground up.

## Technical Highlights
- **Modern OpenGL 4.6 with AZDO**: Used bindless textures and multidraw indirect for performance.
- **Physically Based Rendering (PBR)**: Implemented a custom shading pipeline with image-based lighting.
- **Shadow Mapping with PCF**: Soft shadows with percentage-closer filtering.
- **HDR Rendering with Bloom**: Tone mapping and LUT-based color grading for cinematic visuals.
- **SSAO + Volumetric Lighting**: Used screen-space ray marching and atmospheric scattering for depth and atmosphere.
- **GPU Particle System**: Real-time effects for flowing lava.
- **Frustum Culling**: Efficient rendering using mesh visibility checks on the GPU.
- **KTX Texture Pipeline**: Efficient texture compression and streaming.

## What I Learned
- Built a deep understanding of **rendering pipelines** and **asset integration**.
- Gained hands-on experience with **GPU optimization**, data driven structures like **SoA**, and render engine design.

Greed is one of the most ambitious projects I’ve worked on — combining gameplay, graphics, physics and audio in a fully custom game engine.
