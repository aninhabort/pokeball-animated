# Pokeball Animated – Three.js

A simple 3D scene displaying an **animated Pokéball** created with **Three.js**.  
Focus of the project: learning and practicing WebGL/Three.js fundamentals (scene, camera, rendering, lights, and materials).

---

## ✨ Demo

> Add here a live preview link (e.g., Netlify/Vercel) or a short GIF of the animation.

---

## 🧱 Technologies

- [Three.js](https://threejs.org/)  
- JavaScript (ES6+)
- HTML5, CSS3

---

## 🔧 How to run locally

### Option A — using a simple server/extension
1. Clone the repository:
   ```bash
   git clone https://github.com/aninhabort/pokeball-animated.git
   cd pokeball-animated
```

2. Open the folder in your editor and **serve** the `index.html` with:

   * **Live Server** extension (VS Code), or
   * A simple static server:

     ```bash
     npx http-server .
     # or
     npx serve .
     ```
3. Access the address shown in the terminal (usually `http://localhost:3000` or `http://127.0.0.1:8080`).

> Note: for security reasons, ES modules or texture loading require a **server**. Opening the `index.html` directly may not work.

### Option B — if using a build tool (e.g., Vite)

> If the project uses Vite/Parcel/etc., include the scripts in `package.json` and run:

```bash
npm install
npm run dev
```

---

## 🧠 Concepts practiced

* Scene (`THREE.Scene`), camera (`THREE.PerspectiveCamera`), and renderer (`THREE.WebGLRenderer`)
* Basic lighting for volume and highlights
* Materials (reflection/gloss) for the Pokéball look
* **Animation loop** with `requestAnimationFrame`

---

## 🗂️ Suggested structure

```
pokeball-animated/
├─ index.html
├─ src/
│  ├─ main.js        # scene, camera, renderer, animation loop
│  ├─ pokeball.js    # meshes and grouping of the Pokéball
│  └─ utils.js       # helpers (resize, orbit controls, etc.) - optional
├─ assets/           # textures/HDREs (if used)
└─ styles/
   └─ style.css
```

---

## 🕹️ Controls (if applicable)

* The Pokéball rotates automatically in the scene.

* With the mouse or trackpad, you can:

   * Orbit around the Pokéball in any direction

   * Zoom in/out to explore closer details

This is enabled with OrbitControls combined with a custom animation loop.

---

## 📈 Next steps / Roadmap

* Add shadows and more realistic lights (Directional/SpotLight with `castShadow`)
* Apply textures/normal maps for details
* Use HDRI for global lighting (IBL)
* Add interactivity (hover/click) with `Raycaster`
* Improve mobile performance

---

## 🧪 Development tips

* Always update `renderer.setSize()` and `camera.aspect` on window resize
* Use `Clock` or `deltaTime` in the loop for smooth animations
* Prefer **groups** (`THREE.Group`) to rotate/move Pokéball parts

---

## 🙌 Credits

* **Three.js** – main library for web 3D rendering
* Pokéball is part of the **Pokémon** universe (Nintendo/Game Freak).
  This project is **educational** and not for commercial use.

---

## 👩‍💻 Author

Made by **Ana Carolina (aninhabort)**.
Contributions, issues, and suggestions are welcome!
