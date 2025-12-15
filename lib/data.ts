export type ProjectCategory = "software" | "mechanical" | "product";

export type Project = {
  id: string | number;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  category: ProjectCategory;
  link: string; 
  videoUrl?: string;
  imageUrl: string;
};

export const projects: Project[] = [
  // --- SOFTWARE / GAMES ---
  {
    id: 1,
    title: "Amir Shooter (FPS)",
    description: "A high-fidelity First/Third Person Shooter. Features complex AI Behavior Trees (Hearing/Sight perception), Ragdoll Physics, Stealth mechanics, and multiplayer replication.",
    role: "Lead Developer",
    techStack: ["C++", "Unreal Engine", "AI Logic", "Networking"],
    category: "software",
    link: "https://github.com/Hama-amir/AmirShooter", 
    videoUrl: "https://youtu.be/1LXyap7kwFU",
    imageUrl: "/amir-shooter.jpg"
  },
  {
    id: 2,
    title: "Building Escape",
    description: "First-person physics puzzle game. Implemented 'Grab' mechanics, pressure-plate triggers, and cinematic cutscenes using C++ class inheritance and engine macros.",
    role: "Developer",
    techStack: ["C++", "Unreal Engine", "Physics Engine", "Game Design"],
    category: "software",
    link: "https://github.com/Hama-amir/Building_Escape",
    videoUrl: "https://youtu.be/1LXyap7kwFU",
    imageUrl: "/building-escape.jpg"
  },
  {
    id: 3,
    title: "TankStars",
    description: "Strategic artillery combat game. Engineered projectile trajectory systems, enemy turret AI, and a progressive difficulty system spanning 5 levels.",
    role: "Developer",
    techStack: ["C++", "Unreal Engine", "UI/UX", "Math Logic"],
    category: "software",
    link: "https://github.com/Hama-amir/TanksStars",
    videoUrl: "https://youtu.be/1LXyap7kwFU",
    imageUrl: "/tankstars.jpg"
  },
  {
    id: 4,
    title: "Intelligent Tic-Tac-Toe Robot",
    description: "EV3 robot running 550+ lines of C-based firmware. Uses Minimax-style logic and sensor arrays (Color/Gyro) to obstruct players and execute winning strategies.",
    role: "Embedded Developer",
    techStack: ["RobotC", "C", "Embedded Systems", "Sensors"],
    category: "software",
    link: "#",
    videoUrl: "https://youtu.be/mg4vxZDxa6Y",
    imageUrl: "/tictactoe-robot.jpg"
  },

  // --- MECHANICAL / SYSTEMS ---
  {
    id: 5,
    title: "Autonomous 6-DOF Stewart Platform",
    description: "Parallel manipulator capable of balancing a ball on a plate using PID control loops and Computer Vision for real-time trajectory tracking.",
    role: "Systems Engineer",
    techStack: ["C++", "Computer Vision", "PID Control", "Mechatronics"],
    category: "mechanical",
    link: "https://git.uwaterloo.ca/e3jeevak/mte-380",
    imageUrl: "/stewart-platform.jpg"
  },
  {
    id: 6,
    title: "Midnight Sun Solar Rayce Team",
    description: "Designed 25+ assemblies for a solar EV. Managed interior module integration and FEA analysis for lightweighting, contributing to an automotive-grade platform.",
    role: "Mechanical Designer",
    techStack: ["SolidWorks", "FEA", "Automotive Design", "Subsystem Integration"],
    category: "mechanical",
    link: "https://www.uwmidsun.com/", 
    // No local asset yet – fall back to gradient placeholder in ProjectCard
    imageUrl: "" 
  },
  {
    id: 7,
    title: "Precision Bike Assembly",
    description: "Complex CAD assembly featuring 10+ custom parts. Utilized 'Up to Surface' extrudes, interference detection, and molding simulations.",
    role: "Design Engineer",
    techStack: ["SolidWorks", "FEA", "GD&T", "Molding"],
    category: "mechanical",
    link: "#",
    imageUrl: "/bike-assembly.jpg"
  },

  // --- PRODUCT / DATA ---
  {
    id: 8,
    title: "IoT Event People Counter",
    description: "Real-time attendance tracking device designed to optimize venue capacity management. Features data pipelines for analytics and automated reporting.",
    role: "Product Lead",
    techStack: ["Python", "IoT", "Data Analytics", "Product Strategy"],
    category: "product",
    link: "#", 
    imageUrl: "" 
  },
  {
    id: 9, // Next available ID
    title: "AI Property Value Estimator",
    description: "Machine Learning model built to address the housing crisis by predicting property values. Features a Random Forest Regressor trained on real estate data and an interactive Streamlit dashboard.",
    role: "ML Engineer",
    techStack: ["Python", "Scikit-Learn", "Streamlit", "Pandas"],
    category: "product",
    link: "",
    videoUrl: "https://youtu.be/2mWKPFSg4NI",
    imageUrl: "/housing-ml.jpg"
  },
];

// --- PROFESSIONAL WORK EXPERIENCE (Home Page) ---
export const workExperience = [
  {
    id: 1,
    role: "Technical Program Manager Intern",
    company: "FluidAI Medical",
    location: "Kitchener, ON",
    dates: "Jan 2025 - Present",
    descriptionPoints: [
      "Leading cross-functional R&D to deploy LLM-powered device platforms, reducing deployment setup time by 30%.",
      "Automating end-to-end device health checks (Python/Databricks) while acting as Scrum Master for a 9-member team.",
      "Coordinating delivery of RESTful APIs and front-end features, decreasing product cycle time by 10%."
    ],
    skills: ["LLMOps", "Docker", "Scrum Leadership", "Python"]
  },
  {
    id: 2,
    role: "Product Manager Intern",
    company: "UWaterloo CCaRT Lab",
    location: "Waterloo, ON",
    dates: "Sep 2024 - Dec 2024",
    descriptionPoints: [
      "Led end-to-end assembly of a clinical research prototype, combining mechanical and electronic subsystems for commercialization.",
      "Managed BOM and component sourcing, coordinating cross-functional teams to resolve bottlenecks.",
      "Designed precise CAD components (SolidWorks) meeting strict regulatory clinical standards."
    ],
    skills: ["Product Strategy", "SolidWorks", "Clinical Regulations", "NPI"]
  },
  {
    id: 3,
    role: "R&D Hardware Engineer Intern",
    company: "Virtek Vision International",
    location: "Waterloo, ON",
    dates: "Jan 2024 - Apr 2024",
    descriptionPoints: [
      "Trained an AI model with 2,800+ annotations on CVAT and built scalable Docker pipelines.",
      "Designed 3D-printed QA jigs (0.001\" tolerance) and authored SOPs for laser sensor calibration.",
      "Automated QA testing via PowerShell scripts, increasing regression efficiency by 15%."
    ],
    skills: ["AI Training", "CVAT", "Docker", "Rapid Prototyping"]
  },
  {
    id: 4,
    role: "Systems Quality Assurance Intern",
    company: "Virtek Vision International",
    location: "Waterloo, ON",
    dates: "May 2023 - Aug 2023",
    descriptionPoints: [
      "Scripted PowerShell automation tools that increased team daily efficiency by 15%.",
      "Executed 400+ QA test cases and identified 100+ defects, raising 35 critical blocking defects.",
      "Analyzed and isolated customer issues to provide solutions that resolved complaints."
    ],
    skills: ["PowerShell", "QA Automation", "Debugging"]
  },
  {
    id: 5,
    role: "Quality Engineering Intern",
    company: "Ontario Drive & Gear",
    location: "New Hamburg, ON",
    dates: "Sep 2022 - Dec 2022",
    descriptionPoints: [
      "Reduced scrap costs by $30,000 (annualized) by optimizing inspection workflows and addressing nonconforming parts.",
      "Increased production floor efficiency by 15% through layout reorganization.",
      "Inspected parts using CMM machines and gear analyzers."
    ],
    skills: ["CMM", "Process Optimization", "Data Analysis", "Manufacturing"]
  },
  {
    id: 6,
    role: "Telecommunications Engineer Co-op",
    company: "WAJDA GROUP",
    location: "Kuwait",
    dates: "Jan 2022 - Apr 2022",
    descriptionPoints: [
      "Troubleshot connectivity issues with 5G fiber cables across 32+ sites.",
      "Designated locations for 94 GMU antennas on AutoCAD layouts for new mall infrastructure.",
      "Composed 6 comprehensive audit reports and presented project plans."
    ],
    skills: ["Telecommunications", "AutoCAD", "Network Infrastructure"]
  }
];

// --- LEADERSHIP & EXTRACURRICULAR EXPERIENCE ---
export const leadershipExperience = [
  {
    id: 1,
    role: "Founder & Project Manager",
    company: "TaqwaCon Convention",
    location: "Waterloo, ON",
    dates: "Jan 2023 - Present",
    link: "https://www.taqwacon.com",
    descriptionPoints: [
      "Founded and led a 700+ attendee convention, generating $30K revenue (17% profit)[cite: 93, 95].",
      "Managed a 120+ person cross-functional team using Gantt charts, risk registers, and stakeholder cadences.",
      "Delivered a custom ticketing & analytics platform, enabling 40K+ users and $9K online sales."
    ],
    skills: ["Entrepreneurship", "P&L Management", "Team Leadership", "Product Strategy"]
  },
  {
    id: 2,
    role: "President",
    company: "UW Muslim Students' Association",
    location: "Waterloo, ON",
    dates: "May 2024 - Aug 2024", // Adjusted based on typical terms; verify this date!
    link: "https://uwmsa.com", // Assuming this URL, or remove if unknown
    descriptionPoints: [
      "Led a community of 3,000+ members and managed a 40-person executive team, overseeing all operational and strategic initiatives.",
      "Spearheaded the first inter-MSA Soccer tournament and international speaker series, significantly expanding campus engagement.",
      "Secured $5,000+ in funding for professional media infrastructure and launched the first branded merchandise line.",
      "Advocated for student safety by implementing new incident reporting mechanisms and liaising with university administration."
    ],
    skills: ["Executive Leadership", "Crisis Management", "Public Speaking", "Strategic Planning"]
  },
  {
    id: 3,
    role: "Mechanical Designer",
    company: "Midnight Sun Solar Rayce Team",
    location: "Waterloo, ON",
    dates: "Jul 2021 - Aug 2022",
    link: "https://www.uwmidsun.com/",
    descriptionPoints: [
      "Designed 25+ assemblies and FEA-analyzed lightweight components for a solar-powered EV.",
      "Built vehicle interior modules, balancing lightweighting requirements with manufacturing constraints.",
      "Contributed to automotive-grade subsystem integration in a high-efficiency vehicle platform."
    ],
    skills: ["SolidWorks", "FEA", "Automotive Design", "Teamwork"]
  },
  {
    id: 4,
    role: "Independent Game Developer",
    company: "Self-Employed",
    location: "Remote",
    dates: "Sep 2020 - Mar 2021",
    descriptionPoints: [
      "Developed 5+ Unreal Engine/C++ projects featuring AI Behavior Trees and Multiplayer mechanics.",
      "Self-managed development timelines for multiple titles including 'TankStars' and 'Amir Shooter'.",
      "Implemented complex systems: Ragdoll Physics, Stealth Status, and Interactive Menus."
    ],
    skills: ["C++", "Unreal Engine", "Self-Management", "Game Design"]
  }
];

export const skills = {
  languages: ["C++", "Python", "SQL", "MatLab", "RobotC", "PowerShell"],
  tools: ["Unreal Engine", "Databricks", "Docker", "Git/GitHub", "Jira", "Confluence"],
  engineering: ["SolidWorks", "AutoCAD", "FEA", "GD&T", "Control Systems"],
  product: ["Agile/Scrum", "KPI Tracking", "Risk Mitigation", "Product Strategy", "Excel (Data Analysis)"]
};
