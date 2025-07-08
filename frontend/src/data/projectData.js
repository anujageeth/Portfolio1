// Import project images from assets folder
import labMSImage from '../assets/myProjects/LabMS.jpg';
import blogSiteLogo from '../assets/myProjects/BlogSite1Logo2.png';
import weatherAIImage from '../assets/myProjects/WeatherAI.png';
import devOpsImage from '../assets/myProjects/DevOps.png';
import telCoImage from '../assets/myProjects/TelCo.png';
import web3TasksImage from '../assets/myProjects/Web3Tasks.jpg';

export const projectsData = [
    {
        id: 1,
        title: "Lab Management System",
        description: "A web-based Management System developed to manage laboratory equipment, bookings, users and reports.",
        longDescription: "This system aims to simplify the laboratories and related procedures of the Department of Electrical and Information Engineering. The main goal of this project is to manage the inventory of the department. Also, there are more features to generate inventory reports, manage users, equipment check-in and check-out and laboratory booking.",
        image: labMSImage, // Using local image
        technologies: ["React", "Node.js", "Express", "MongoDB", "CSS", "EmailJS", "FireStore"],
        features: [
            "🔐 Role-Based Access Control",
            "📦 Equipment Management with CRUD operations",
            "⚠️ Low Stock Alerts for inventory control",
            "📅 Lab Booking System with availability checking",
            "📊 Report Generation & Export",
            "🔍 Search and Filter Equipment",
            "🔔 Notification System, including Telegram Bot integration",
            "🧭 Responsive UI with Side Navigation",
            "📁 User Authentication & Session Management"
        ],
        link: "https://github.com/anujageeth/LabMS3",
        demoLink: ""
    },
    {
        id: 2,
        title: "Modern Blogging Platform",
        description: "A full-featured blogging platform built with the MERN stack offering a complete social blogging experience.",
        longDescription: "A comprehensive e-commerce solution built using the MERN stack (MongoDB, Express, React, Node.js). This platform features user authentication, product browsing with filtering and search functionality, shopping cart management, secure checkout with Stripe integration, and an admin dashboard for inventory and order management. The application is fully responsive and follows modern web development best practices including state management with Redux and secure API endpoints.",
        image: blogSiteLogo, // Using local image
        technologies: ["React", "Node.js", "Express", "MongoDB", "CSS", "Google OAuth", "Cloudinary", "TextGears"],
        features: [
            "🔐 Authentication",
            "• Email/Password login system",
            "• Google OAuth integration (auto-imports profile picture)",
            "• Secure password management",
            "✍️ Post Management",
            "• Rich text editor (bold, italic, underline, images)",
            "• AI-powered content improvement suggestions",
            "• Create, edit, delete posts",
            "• Responsive post display",
            "💬 Social Features",
            "• Like and comment system",
            "• Subscribe to other users",
            "• Notification system for:",
            "• Likes/comments on your posts",
            "• New posts from subscribed users",
            "🔍 Advanced Search",
            "• Search posts by title/content",
            "• Search users",
            "• Date range filtering",
            "• Profile-specific searching",
            "👤 User Profiles",
            "• View user stats (posts, subscribers)",
            "• Edit profile (name, bio, picture, password)",
            "• Visit others' profiles with one click",
            "🎨 Modern UI/UX",
            "• Fully responsive design",
            "• Clean, intuitive interface",
            "• Optimized for all devices"
        ],
        link: "https://github.com/anujageeth/BlogSite1",
        demoLink: "https://blog-site1-beta.vercel.app/"
    },
    {
        id: 3,
        title: "Web3 Tasks Platform",
        description: "A full-stack decentralized platform that redefines how blockchain communities engage with users through gamified tasks and rewards.",
        longDescription: "A comprehensive Web3 Tasks Platform to bridge the gap between traditional web applications and blockchain technology. The platform features secure Web3 wallet authentication, multi-platform social integrations, and a sophisticated task management system with point tracking. Built with modern technologies like Next.js, Node.js, and integrated with multiple blockchain networks, this platform demonstrates advanced understanding of Web3 architecture, secure authentication patterns, and real-time communication systems.",
        image: web3TasksImage,
        technologies: ["Next.js", "Node.js", "Web3", "MetaMask", "WalletConnect", "JWT", "OAuth", "WebSockets", "Tailwind CSS", "Framer Motion", "Aceternity UI", "MongoDB"],
        features: [
            "🔐 Web3 Authentication",
            "• MetaMask integration with secure wallet connection",
            "• WalletConnect support for mobile wallets", 
            "• SIWE (Sign-In with Ethereum) implementation (EIP-4361)",
            "• JWT authentication with secure cookies and refresh tokens",
            "🌐 Multi-Platform Integration",
            "• Twitter API integration for social tasks",
            "• Discord bot integration and verification",
            "• Telegram API for community engagement",
            "• Google OAuth for additional authentication",
            "📋 Task Management System",
            "• Custom event and task creation system",
            "• Point tracking and reward mechanisms",
            "• Real-time task updates via WebSockets",
            "• Scalable backend API architecture",
            "🎨 Modern UI/UX",
            "• Mobile-responsive design with Tailwind CSS",
            "• Aceternity UI components for enhanced aesthetics",
            "• Smooth animations with Framer Motion",
            "• Intuitive interface for Web3 beginners and power users",
            "⚡ Advanced Features",
            "• Multi-chain blockchain support",
            "• Rate limiting and OAuth flow management",
            "• Secure cookie-based session management",
            "• Real-time communication and updates",
            "🚀 Future Roadmap",
            "• On-chain token/NFT rewards system",
            "• DAO-based task creation governance",
            "• React Native mobile application",
            "• Analytics dashboard for project managers",
            "• Additional platform integrations (TikTok, Reddit, LinkedIn)"
        ],
        link: "https://github.com/anujageeth/Portfolio1",
        demoLink: "https://cryptoken-tasks.vercel.app"
    },
    {
        id: 4,
        title: "Weather Prediction AI",
        description: "This project implements a Long Short-Term Memory (LSTM) deep learning model to predict daily mean temperature.",
        longDescription: "The goal of this project is to forecast the mean temperature at 2 meters using past weather data. The dataset includes various meteorological parameters such as precipitation, wind speed, daylight hours, sunrise/sunset times, and more. The entire machine learning pipeline is implemented from scratch in Python using TensorFlow/Keras for model building and pandas, NumPy, matplotlib, and seaborn for data analysis and visualization.",
        image: weatherAIImage, // Using local image
        technologies: ["Python", "Pandas", "Numpy", "Seaborn", "Matplotlib", "TensorFlow", "Keras"],
        features: [
            "🔍 Exploratory Data Analysis (EDA)",
            "🧹 Missing value handling and outlier detection",
            "🛠️ Feature engineering (including daylight hours and cyclical seasonal features)",
            "📈 Time-series sequencing for LSTM input",
            "🧠 2-layer LSTM model with dropout for regularization",
            "📊 Evaluation using MSE, RMSE, MAE, R²",
            "📉 Visualizations for training history and actual vs predicted results"
        ],
        link: "https://github.com/anujageeth/WeatherPrediction1",
        demoLink: ""
    },
    {
        id: 5,
        title: "DevOps Project",
        description: "A Social Media Web Application while integrating key DevOps practices and tools",
        longDescription: "This project is implemented to build a Social Media Web Application while integrating key DevOps practices and tools such as Docker, Jenkins, Terraform, Ansible, and AWS. The goal is not only to develop the application but also to demonstrate an end-to-end DevOps pipeline for deployment and delivery.",
        image: devOpsImage, // Using local image
        technologies: ["Docker", "Jenkins", "AWS", "Terraform", "Ansible", "React", "Node.js", "MongoDB"],
        features: [
            "🛠 Pipeline Steps:",
            "• Jenkins watches for changes in the main branch on GitHub.",
            "• On change:",
            "-- Installs dependencies with npm install (for both frontend and backend).",
            "-- Builds the frontend using npm run build.",
            "• Builds Docker images for frontend and backend using their respective Dockerfile.",
            "• Uses docker-compose.yml to manage services (e.g., MongoDB).",
            "• Pushes images to Docker Hub.",
            "🔄 Jenkins Pipeline Stages",
            "✅ Stage 1: Checkout Code",
            "• Pulls the latest code from GitHub repository.",
            "🧱 Stage 2: Build Frontend",
            "• Installs frontend dependencies.",
            "• Builds production-ready React frontend (npm run build).",
            "🧱 Stage 3: Build Backend",
            "• Installs backend dependencies (npm install).",
            "🐋 Stage 4: Dockerize and Push Frontend",
            "• Builds Docker image for frontend.",
            "• Pushes it to Docker Hub.",
            "🐋 Stage 5: Dockerize and Push Backend",
            "• Builds Docker image for backend.",
            "• Pushes it to Docker Hub."
        ],
        link: "https://github.com/anujageeth/DevOps1",
        demoLink: ""
    },
    {
        id: 6,
        title: "Telecom Customer Churn Prediction",
        description: "Machine learning model to predict customer churn for telecom companies.",
        longDescription: "This project uses machine learning to predict which customers are likely to cancel their telecom service subscription. By analyzing customer data including usage patterns, billing information, customer service interactions, and demographics, the model identifies patterns that precede customer churn. The solution includes data preprocessing, feature engineering, model selection (comparing Random Forest, XGBoost, and Neural Networks), hyperparameter tuning, and a web dashboard for visualizing predictions and customer segments.",
        image: telCoImage, // Using local image
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Flask", "React", "Plotly"],
        features: [
            "📊 Comprehensive EDA with customer behavior insights",
            "🧮 Feature engineering including RFM analysis",
            "⚖️ Handling class imbalance with SMOTE",
            "🔎 Model comparison and selection (RF, XGB, NN)",
            "📈 Feature importance and SHAP value analysis",
            "💰 Business impact calculation & ROI estimation",
            "🖥️ Interactive dashboard with customer risk scores",
            "📱 Responsive design for multiple device types"
        ],
        link: "https://github.com/anujageeth/telecom-churn",
        demoLink: ""
    }
];

export default projectsData;