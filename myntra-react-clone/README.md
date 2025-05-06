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

## 📁 Folder Structure

Myntra_Clone/
├── actual-backend/
│ ├── data/
│ │ ├── items.js
│ ├── items.json
│ └── app.js
├── myntra-react-clone/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── BagItem.jsx
│ │ │ ├── BagSummary.jsx
│ │ │ ├── fetchItems.jsx
│ │ │ ├── Footer.jsx
│ │ │ ├── Header.jsx
│ │ │ ├── HomeItem.jsx
│ │ │ ├── LoadingSpinner.jsx
│ │ ├── routes/
│ │ ├── store/
│ │ ├── App.css
│ │ ├── index.css
│ │ ├── App.js
│ │ └── index.js


---

## 🧑‍💻 Installation

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/rahulmouryaa/myntra-clone.git
cd myntra-clone

2. Install Frontend Dependencies
cd myntra-react-clone
npm install
npm start

3. Run Backend (Mock API)
cd ../actual-backend
npm install
node app.js

![Home Page]![image](https://github.com/user-attachments/assets/90c319fa-360f-464c-992f-8e502019df42)

![Product Listing][Cart Page]![image](https://github.com/user-attachments/assets/1ef58b78-bc00-4418-8a59-5349d6677b13)
![image](https://github.com/user-attachments/assets/c627e700-8ad4-41ef-91eb-d0d56e10e925)


✍️ Author
Rahul Mourya
GitHub | LinkedIn


Let me know if you’d like help generating screenshots or want a badge version with GitHub stars, forks, etc.

