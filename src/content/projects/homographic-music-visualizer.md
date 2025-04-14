---
title: "Music Visualizer"        # Display title
imageUrls:                    # Paths to screenshots or previews
  - "/images/music-visualizer-1.png"
  - "/images/music-visualizer-2.gif"
youtubeUrl: ""                # (Optional) YouTube embed URL
githubUrl: "https://github.com/Masdaofdisasda/homographic-music-visualizer"                 # (Optional) GitHub repo URL
deploymentUrl: "https://masdaofdisasda.github.io/homographic-music-visualizer/" # (Optional) Deployment URL
summary: "Visualizes music using WebGL."  # (Optional)
---
**Music Visualizer** is a browser-based WebGL application that reacts to microphone input and turns sound into animated, colorful visuals. Originally created for a house party setup with a glass wall and a projector, the tool lets users generate and customize abstract shapes that respond to music in real time.

## Key Features

- **Real-Time Audio-Reactive Visuals**: Shapes change color, saturation, and glow based on frequency bands (lows, mids, highs) and beat detection.
- **Shape Deformation & Placement**: Users can create and deform squares or custom shapes and position them along screen edges to align with physical window frames or spaces.
- **Mobile-Friendly Web App**: The entire visualizer runs efficiently in-browser and supports both laptops and mobile devices — no install needed.

## Technologies Used

- **Languages**: JavaScript, GLSL
- **Libraries**: WebGL, HTML5 Audio API
- **Tools**: Browser microphone access, custom shader logic

## Development Highlights

This project taught me how to work with **live microphone input** and transform audio data into meaningful visual output. I created simple GLSL shaders to animate color and glow based on real-time FFT analysis. It was also a fun UX challenge to design controls for **shape placement**, **sensitivity tuning**, and **beat pacing (BPM limiter)**, all within a clean browser interface.

I was especially surprised by how accessible WebGL and browser audio APIs made this — allowing the project to run smoothly on **mobile browsers and projection setups**. The visualizer has since been used at a few house parties, which is a win in itself!
