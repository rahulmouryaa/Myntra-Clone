# Myntra Clone 🛍️

## Project Overview

This **Myntra Clone** is a fully responsive fashion e-commerce web application inspired by [Myntra.com](https://www.myntra.com/). It allows users to browse trending fashion items, view product details, and manage their shopping cart. The project uses **React.js** with **Redux Toolkit** for state management and fetches data dynamically from a mock backend via **API calls**.

---

## 🔗 Live Demo

🚀 [Click here to view the live project](https://your-live-link.netlify.app) *(Replace with your Netlify link)*

---

## 🚀 Features

- **Home Page**
  - Displays a list of fashion items using API.
  - Responsive and scrollable layout.

- **Product Listing**
  - Fetches items from backend (items.json via Express/Node).
  - Loads spinner while fetching.

- **Cart Page**
  - Add items to cart.
  - View and remove items from the cart.
  - View price summary (via `BagSummary.jsx`).

- **Reusable Components**
  - Header, Footer, Loader, HomeItem, BagItem etc.

- **State Management**
  - Integrated with Redux Toolkit for managing cart and fetched data.

- **Loading Spinner**
  - Shows a loader while the data is being fetched.

---

## 🛠️ Tech Stack

**Frontend**  
- React.js  
- Redux Toolkit  
- JavaScript  
- HTML & CSS Modules

**Backend**  
- Node.js + Express (mock API using `items.json`)

**Tools**  
- Netlify (Deployment)  
- VS Code  
- Git & GitHub

---

---

## 🧑‍💻 Installation

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/rahulmouryaa/myntra-clone.git
cd myntra-clone

## 2. Install Frontend Dependencies 
cd myntra-react-clone
npm install
npm start

## 3. Run Backend (Mock API)
cd ../actual-backend
npm install
node app.js

## 📸 Screenshots
![Home Page](link-to-home-screenshot)
![Product Listing](link-to-listing-screenshot)
![Cart Page](link-to-cart-screenshot)



