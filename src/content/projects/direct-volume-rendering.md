---
title: 'Direct Volume Rendering'
imageUrls:
  - './images/raycast1.png'
  - './images/raycast2.png'
  - './images/raycast3.png'
githubUrl: 'https://github.com/YourUser/Vis1_Direct_Volume_Rendering_2022W'
---

As part of a university visualization course, I developed a **Direct Volume Rendering** tool using **Three.js** and **WebGL**, aimed at enabling real-time 3D texture visualization directly in the browser. This project allows users to switch between two advanced rendering techniques—**First-Hit Compositing** and **Maximum Intensity Projection (MIP)**—providing an interactive and educational experience for exploring volumetric data.

## Key Features

- **First-Hit Compositing**: Implements a rendering technique that calculates the first intersection of the view ray with a high-density value in the volume, incorporating adjustable ISO values and physically-based lighting to enhance the realism of the rendered image.
- **Maximum Intensity Projection (MIP)**: Offers an alternative rendering mode where the highest density value along the view ray is visualized, creating a clear and distinct representation of the most intense structures within the volume.
- **Interactive Visualization**: Users can easily switch between the two rendering techniques, allowing them to explore and compare different visualizations of the same data.
- **3D Texture Rendering**: Capable of rendering complex 3D textures directly in the browser, providing a smooth and responsive user experience.

## Collaboration and Tool Integration

- **Charts with D3.js**: A friend collaborated on the project by integrating D3.js to add charts, providing additional data visualization features that complement the volume rendering.
- **WebGL and Three.js**: Leveraged WebGL for low-level graphics rendering and Three.js for higher-level abstractions, ensuring efficient and optimized rendering in the browser.

This project demonstrates my ability to implement complex graphics techniques in a web environment, combining advanced rendering algorithms with user-friendly interactivity. It also showcases my collaboration skills, working alongside others to integrate additional features that enhance the overall functionality and utility of the tool.