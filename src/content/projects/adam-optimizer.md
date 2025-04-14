---
title: "ADAM Light Optimization"
imageUrls:
  - "../images/quake1.png"
  - "../images/quake2.png"
  - "../images/quake3.png"
---
**Adam Light Optimization** was my Bachelor's thesis project, developed on top of a differentiable rendering framework built by my advisor. The core goal was to **optimize light placement** in a 3D scene to improve illumination in targeted areas — solving an inverse rendering problem.

I designed and implemented an algorithm that dynamically switches between **Adam** and **L-BFGS** optimizers to stabilize the light placement process. The system smartly decides where additional lights would be most effective, and iteratively places them while avoiding large jumps in the loss function. It also includes a pruning phase that merges or removes unnecessary light sources to reduce complexity and improve performance.

## What I Did
- Designed an optimizer that balances fast convergence (Adam) with global smoothing (L-BFGS)
- Improved lighting quality by guiding the optimizer toward regions with low illumination
- Implemented automatic light merging/removal to simplify results without hurting accuracy
- Achieved better results (on average) than my advisor’s baseline optimizer

This project taught me a lot about **optimization in graphics**, including how small changes to solver strategy can significantly improve stability and visual output in rendering tasks.
