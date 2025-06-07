---
title: "Flight Path Visualization"        # Display title
imageUrls:                    # Paths to screenshots or previews
  - "/images/flight-vis-2.png"
githubUrl: "https://github.com/eliasfuericht/Atmospheric-Edge-Path-Bundling"  
deploymentUrl: "https://eliasfuericht.github.io/Atmospheric-Edge-Path-Bundling/"
summary: "A visualization of flight data using edge-path bundling on a globe."
---

**Flight Path Visualization** is a WebGL-based application that displays global air traffic routes as arcs on a 3D globe. The project visualizes real-world flight data, showing connections between airports worldwide. To reduce visual clutter, we implemented **edge bundling** using a state-of-the-art technique based on path heuristics and shortest path optimization.
The result is an interactive and decluttered visual exploration of massive transportation data — all running in the browser in real time.

## Key Features

- **Interactive 3D Globe**: Renders global flight paths as curved arcs on a globe using a WebGL renderer.
- **Edge Bundling**: Implemented an advanced algorithm from recent visualization research to group similar routes and reduce visual noise.
- **Background Threading with Web Workers**: Offloaded computationally heavy edge-bundling logic into Web Workers to maintain smooth interactivity.

## Technologies Used

- **Languages**: TypeScript, GLSL
- **Libraries**: WebGL, Globe.gl
- **Tools**: Web Workers

## Development Highlights

One of the core challenges was visual clutter: thousands of overlapping lines made the map unreadable, especially over dense regions like Europe. We solved this by implementing an **edge bundling algorithm from academic literature**.

We also had to process large datasets efficiently in the browser. After running into memory and UI blocking issues, I refactored the algorithm into a **fully functional and parallelizable implementation using Web Workers**. This improved responsiveness when users changed parameters, and kept the UI from freezing under load.

This project gave me hands-on experience in translating **academic research** into real-time, user-facing visualizations.
