export const projects = [
  {
    number: "01",
    monogram: "SM.",
    name: "AI Smart Mirror",
    category: "EMBEDDED SYSTEMS · COMPUTER VISION",
    period: "OCT 2022 — APR 2023",
    description:
      "Built a multimodal smart-mirror interface on Raspberry Pi 3B+, combining facial recognition, voice commands, and gesture-based controls.",
    highlights: [
      "Achieved 92% facial-recognition accuracy.",
      "Integrated live weather and news feeds into a personalized dashboard.",
      "Implemented sub-second response latency and an ambient-light-adaptive display algorithm that reduced power consumption by 35%.",
    ],
    stack: ["Python", "Raspberry Pi 3B+", "OpenCV", "React", "Node.js"],
    href: "",
    linkLabel: "",
  },
  {
    number: "02",
    monogram: "DF.",
    name: "Deepfake Detection System",
    category: "DEEP LEARNING · COMPUTER VISION",
    period: "JUN 2025 — DEC 2025",
    description:
      "Developed a deep-learning application that classifies uploaded videos as real or fake using face detection, feature extraction, and classification.",
    highlights: [
      "Used MTCNN for face detection and Xception to extract facial features from video frames.",
      "Applied an SVM classifier to extracted features and majority voting for the final video prediction.",
      "Built a Tkinter desktop GUI for video uploads and detection results.",
    ],
    stack: ["Python", "TensorFlow / Keras", "OpenCV", "Scikit-learn", "MTCNN", "Xception", "Tkinter"],
    href: "https://github.com/Shashank-V21/Deepfake-detection",
    linkLabel: "View repository",
  },
  {
    number: "03",
    monogram: "PV.",
    name: "Price Vision AI",
    category: "AI-POWERED PRODUCT DISCOVERY",
    period: "JUN 2025 — DEC 2025",
    description:
      "Developed an AI-powered product discovery and price-comparison system that uses an uploaded product image to identify items and compare offers across e-commerce platforms.",
    highlights: [
      "The research design describes CLIP/BLIP-based product recognition and product-information normalization.",
      "The proposed comparison workflow considers price, delivery time, and seller rating using a multi-criteria scoring approach.",
      "The research paper describes a FastAPI backend, Playwright-based data collection, React frontend, and Redis/PostgreSQL data management.",
    ],
    stack: ["Python", "FastAPI", "CLIP / BLIP", "Playwright", "React", "Redis", "PostgreSQL"],
    href: "",
    linkLabel: "",
  },
];
