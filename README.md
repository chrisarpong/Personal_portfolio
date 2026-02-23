# Christian Sarpong – Fullstack Developer Portfolio

![Portfolio Preview](./public/vite.svg)  
*Note: Replace `vite.svg` above with an actual screenshot of the portfolio.*

Welcome to the source repository for my personal developer portfolio! This project is a modern, high-performance web application designed to showcase my engineering capabilities, curated case studies, and professional experience.

## 🌌 The Inspiration: Driven by Antigravity

This version of my portfolio was heavily inspired and built in collaboration with **Antigravity** (Google DeepMind's Advanced Agentic AI). The goal was to move beyond the traditional "flat" developer portfolio and architect an experience that feels *engineered, premium, and alive*. 

Together with Antigravity, we evolved a standard React application into a **Cyber Glassmorphism** masterpiece, focusing heavily on:
*   **Aesthetic Depth:** Deep cyber gradients (Navy, Cyan, Purple) overlaid with heavy frosted glass (`backdrop-filter`) panels to create a 3D-layered "edge-lit" UI effect.
*   **Micro-Interactions:** Physics-based spring animations (`framer-motion`), magnetic hover buttons, and a custom magnetic cursor that smoothly interacts with DOM elements.
*   **Web Ecosystems:** Replacing 2D SVGs with a real-time, interactive WebGL 3D Canvas (`react-three-fiber` + `three.js`) rotating directly in the Hero viewport.

## 🛠 Tech Stack

The architecture is built for speed, SEO, and extreme visual fidelity.

**Frontend:**
*   **Framework:** React 19 + Vite
*   **Styling:** Custom CSS with Glassmorphism utilities & native CSS variables.
*   **Animations:** `framer-motion` (springs, scroll-reveals)
*   **3D Graphics:** `three.js`, `@react-three/fiber`, `@react-three/drei`
*   **Icons:** `lucide-react`
*   **SEO:** `react-helmet-async` (Dynamic Title, OpenGraph, Twitter Cards)
*   **UI Components:** Custom `react-modal` implementations

**Backend:**
*   **Server:** Express.js (Node.js)
*   **Email Delivery:** Resend API
*   **Security:** `dotenv`, `cors`

## 🚀 Key Features

*   **Interactive 3D Hero:** A `CyberOrb` component that distorts natively using shaders on the GPU.
*   **Case Study System:** Elaborate `ProjectModal.jsx` popups detailing Architecture, Problems, and Results for every projected featured in the Selected Works.
*   **Serverless-Style Contact Form:** A functional Contact form hooked to an Express backend that utilizes the Resend API to securely deliver emails directly to my inbox.
*   **Bespoke Interactions:** A custom global cursor that acts "magnetically" toward interactive links and custom physics-based scroll-reveals.
*   **Downloadable CV Setup:** Direct frontend route to securely download my resume.

## 💻 Running Locally

To run this application, you will need to boot both the Vite frontend server and the Express backend server.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/chrisarpong/Personal_portfolio.git
    cd Personal_portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables (`.env`)**
    You need to create a `.env` file in the root directory and provide your **Resend** API keys to test the email functionality.
    ```env
    RESEND_API_KEY=re_your_api_key_here
    CONTACT_EMAIL=your_email@example.com
    ```

4.  **Start the Development Servers:**
    Because of our `concurrently` setup in `package.json`, one command launches both the frontend and backend:
    ```bash
    npm run dev
    ```
    *   **Frontend:** `http://localhost:5173`
    *   **Backend (Express):** `http://localhost:3001`

## 👤 Author

**Christian Sarpong** 
> *Fullstack Developer*

Connect with me on [LinkedIn](#) or follow me on [X (Twitter)](#). 

---
*Built with React, Vite, Three.js, and Antigravity AI.*
