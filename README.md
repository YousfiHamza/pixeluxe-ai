# Pixeluxe • AI-Powered Image Enhancement Platform

![Pixeluxe Logo](/assets/logo.png)

<p align="center">
  <img src="/assets/logo.png" />
</p>

## 🖼️ Overview

**Pixeluxe** is an **AI-driven SaaS platform** that offers a suite of advanced image enhancement services, including background removal, object recoloring, generative fill, and image restoration. Designed for **designers, photographers, and creatives**, Pixeluxe empowers users to transform visuals with precision and creativity. The platform leverages modern technologies to deliver a seamless user experience and ensure high performance.

![React](https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=blue)
![Next](https://img.shields.io/badge/-NextJs-black?style=for-the-badge&logo=next.js&color=a0a0a0)
![Tailwind](https://img.shields.io/badge/-tailwind-black?style=for-the-badge&logo=tailwindcss&color=36d2fd)
![Mongoose](https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=127237)
![Clerk](https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=a1a1d1)
![Stripe](https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=purple)

🌐[Live Demo](https://pixeluxe-ai.yousfi.dev)

---

## 📜 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## ✨ Features

- **AI-Powered Background Removal**: Automatically remove backgrounds from images with precision.
- **Object Recoloring**: Change the color of objects within images effortlessly.
- **Generative Fill**: Use AI to intelligently fill missing or undesired areas in images.
- **Image Restoration**: Restore old or damaged images to their original quality.
- **User Authentication**: Secure login and account management with Clerk.
- **Payment Processing**: Stripe integration for purchasing additional credits.
- **Seamless User Experience**: Fast, responsive, and visually appealing UI built with Tailwind CSS and Shadcn components.

---

## 🛠️ Technologies Used

- **Frontend**:

  - **Next.js** with **TypeScript**
  - **Tailwind CSS** for styling
  - **Shadcn** for UI components

- **Backend**:

  - **MongoDB** for data storage
  - **Clerk** for authentication

- **DevOps**:

  - **Vercel** for deployment
  - **GitHub** for version control

- **Payment Processing**:
  - **Stripe** integration

---

## 🚀 Installation

To run Pixeluxe locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YousfiHamza/pixeluxe-ai
   ```
2. **Navigate to the project directory**:
   ```bash
   cd pixeluxe-ai
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a `.env.local` file** and add your environment variables:
   ```plaintext
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
   CLERK_WEBHOOK_SECRET=
   MONGODB_URI=
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   NEXT_PUBLIC_SERVER_URL=
   ```
5. **Run the development server**:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Contributing

We welcome contributions! To get started:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. **Make your changes**.
4. **Submit a pull request**.

---

## 📧 Contact

For any questions, feel free to reach out:

- **LinkedIn**: [Hamza Yousfi](https://www.linkedin.com/in/yousfihamza)
- **Portfolio**: [hamza.yousfi.dev](https://hamza.yousfi.dev)
- **Email**: [hamza@yousfi.dev](mailto:hamza@yousfi.dev)
