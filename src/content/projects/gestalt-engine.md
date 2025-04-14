---
title: "Gestalt Engine"        # Display title
imageUrls:                    # Paths to screenshots or previews
  - "/images/gestalt-1.png"
youtubeUrl: "https://youtu.be/iXu6OPWCCoE?si=5wyJmrGU0yFYz6Wh"                # (Optional) YouTube embed URL
githubUrl: "https://github.com/Masdaofdisasda/GestaltEngine"                 # (Optional) GitHub repo URL
deploymentUrl: "https://www.cg.tuwien.ac.at/sites/default/files/hall_of_fame/10042/executable2-gestalt.zip"
summary: "A modern game engine."  # (Optional)
---
**Gestalt Engine** is a fully custom game engine built from scratch in **C++ and Vulkan**, developed as a personal playground for experimenting with real-time graphics, engine architecture, and performance optimization. Designed around modern rendering techniques, it supports real-time physically based rendering, mesh/task shading, a custom **frame graph system**, and a simple editor for live scene interaction.

The engine is capable of loading and rendering complex **glTF scenes**, including support for ray-traced shadows, image-based lighting, and volumetric fog. It also integrates audio, physics, and a **modular ECS**.

This project was also used as the foundation for a real-time rendering demo created during a university course, which was awarded **second place** in the final showcase.

## Key Features

- **Modern Vulkan Rendering Pipeline**: Task and mesh shaders, descriptor buffers, GPU culling (frustum + meshlet), ray-traced shadows, and HDR post-processing.
- **Custom Frame Graph & ECS**: Designed a full render graph system with automatic resource synchronization, and implemented a fully custom entity-component system.
- **Advanced Effects & Editor Integration**: Includes SSAO, LUT-based color grading, fog slope-based volumetric lighting, compute-based lighting passes, and a workable editor UI.

## Technologies Used

- **Languages**: C++, GLSL, HLSL, Python
- **Graphics APIs**: Vulkan 1.3
- **Build Tools**: CMake, CPM
- **Tools & Integrations**: Blender, ImGui, Jolt Physics, SDL2, VMA, Tracy, RenderDoc

## Development Highlights

Gestalt Engine started as a way for me to explore **best practices in engine design**, graphics abstraction, and Vulkan’s lower-level control. Along the way, I:
- Built a reusable C++ framework for cross-platform development with **clean module separation**
- Learned to debug shader, buffers, textures, and resource synchronization issues using **RenderDoc** and **Nsight**
- Refactored multiple subsystems with **testability, CI integration, and runtime debugging** in mind
- Created a base for exploring **new rendering techniques**, like RestirGI and clustered lighting in future iterations
