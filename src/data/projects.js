const projects = [
  {
    id: 1,
    title: "Quennect: General Queuing System for Ligao City Hall",
    subtitle: "Full Stack Web Application",
    description:
      "Removes the physical lines at Ligao City Hall by letting citizens take a queue number at a kiosk and wait for their number on a public monitor, with first-come, first-served and priority-based queuing. Frontdesk staff manage one live queue, and inter-office referrals no longer require citizens to walk over or re-queue. SMS notifications keep clients informed, while the built-in ARTA Client Satisfaction survey and analytics dashboards give city leadership real data on wait times, office performance, and service quality, with Excel/PDF exports. One system serves all 24 Citizen’s Charter offices.",
    context:
      "Done during my on-the-job training at Ligao City Hall. Offices relied on physical lines, and leadership had little data on wait times or service quality. We worked with City HR and other departments to find the queuing issues and turn them into requirements.",
    role:
      "Business Analyst and Full Stack Developer. I analyzed the queuing processes, documented requirements, built the interfaces and backend, ran test case sessions with end users and LGU stakeholders, and wrote the technical documentation.",
    decisions: [
      "Built one system shared by every department instead of separate tools per office, so there is a single source of data and consistent reporting.",
      "Made the kiosk login-free and kept it to minimal details (name, contact number, barangay) to keep it fast for citizens.",
      "Built the client satisfaction survey into the same platform so feedback and queue data are analyzed together.",
      "Used Pusher for real-time updates, with the option to switch to Laravel Reverb.",
      "Used token-based Laravel Sanctum access for login and signup",
      "Created Comprehensive technical documentation for the whole system.",
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "Semaphore SMS",
      "PostgreSQL",
    ],
    images: [
      "/images/projects/quennect.png",
      "/images/projects/quennect1.png",
      "/images/projects/quennect2.png",
      "/images/projects/quennect3.png",
      "/images/projects/quennect4.png",
      "/images/projects/quennect5.png",
    ],
    github: "https://github.com/V7igcv/Quennect",
    liveDemo: "",
  },
  {
    id: 2,
    title: "e-LegTas: GIS-Based Evacuation Management System for CDRRMO, Legazpi City, Albay",
    subtitle: "Full Stack Web Application",
    description:
      "Gives Legazpi City’s CDRRMO, CSWDO, camp managers, and barangay officials one shared, real-time view of evacuation operations, replacing paper records and fragmented coordination. Evacuees are registered digitally, evacuation centers are monitored on a live map, and standardized DROMIC reports are generated automatically, so decision-makers get accurate data faster and partner agencies get consistent reports without manual compiling. Citizens can check evacuation information from a mobile app, and role-based access keeps sensitive data secure.",
    context:
      "Legazpi City faces typhoons, floods, and volcanic eruptions, and its evacuation operations relied on paper-based recording and fragmented coordination among the CDRRMO, CSWDO, camp managers, and barangay officials. That caused delays, duplicate data, and inconsistent reports to partner agencies. Built as my capstone project for the Legazpi City CDRRMO.",
    role:
      "Project Manager and System/Business Analyst. I gathered requirements from CDRRMO and CSWDO, wrote the SRS and UML documentation, planned tasks and timelines, and led the team through development.",
    decisions: [
      "Used Rapid Application Development (RAD) so stakeholders could review working versions early and requirements could be refined as we went.",
      "Split the system into a web platform for authorities and a mobile app for citizens, since the two groups need different tools.",
      "Chose OpenStreetMap for geospatial visualization.",
      "Enforced role-based access so each agency only sees and does what its role requires.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "RAD",
    ],
    images: [
      "/images/projects/e-legtas1.png",
      "/images/projects/e-legtas2.png",
      "/images/projects/e-legtas3.png",
      "/images/projects/e-legtas4.png",
      "/images/projects/e-legtas5.png",
    ],
    github: "https://github.com/robby-deving/e-LegTas",
    liveDemo: "",
  },
  {
    id: 3,
    title: "Old Man and the Sea Learning Hub",
    subtitle: "Interactive Educational Web App",
    description:
      "Makes Ernest Hemingway’s life and work approachable for young learners through an underwater-themed platform. Instead of dense reading, students explore story summaries, author information, and character cards, then check what they learned with trivia and quizzes. Colorful visuals, rounded components, playful animations, and simple navigation keep it easy and fun for kids, and the responsive layout works across devices. Secure sign up, login, and password recovery let each learner have their own account.",
    context:
      "A school project built to showcase our skills as IT students. We collaborated as a team to design and build a complete, deployed web app around a literary topic.",
    role:
      "Frontend design and interfaces. I designed and built the user interface and created the digital artworks and icons that give the platform its look.",
    decisions: [
      "Created custom digital artworks and icons instead of using stock assets, so the visuals feel consistent and match the theme.",
      "Used rounded components, bright colors, and simplified navigation so young users can find their way without help.",
      "Broke the content into interactive learning cards and quizzes instead of long text, to keep learners engaged.",
      "Built a responsive layout so the app works on both desktop and mobile.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Supabase",
    ],
    images: [
      "/images/projects/old1.png",
      "/images/projects/old2.png",
      "/images/projects/old3.png",
      "/images/projects/old4.png",
      "/images/projects/old5.png",
    ],
    github: "https://github.com/meowfu0/old-man-and-the-sea",
    liveDemo: "https://old-man-and-the-sea.vercel.app/#landing",
  },
  {
    id: 4,
    title: "Elevate: Architectural Project Tracker",
    subtitle: "Full Stack Web Application",
    description:
      "Elevate is a web application that gives architectural teams one place to see where every project stands, so deadlines don’t slip through unnoticed. Projects are broken into phases with priority levels, and interactive Gantt charts let teams schedule, monitor, and adjust task timelines visually. Progress for each phase and project is computed automatically from completed tasks, so no one has to update percentages by hand. A real-time dashboard shows project status, active projects, upcoming deadlines, and overdue tasks at a glance.",
    context:
      "A personal project I built to further strengthen my programming skills, taking a complete application from planning to working features on my own.",
    role:
      "Frontend and backend developer. I designed and built the interface, the Gantt chart and dashboard views, and the backend logic and database.",
    decisions: [
      "Structured each project into phases and tasks, which fits how architectural work moves from initiation to completion.",
      "Computed progress automatically from completed tasks instead of manual entry, so the numbers stay accurate.",
      "Used interactive Gantt charts for scheduling and updates, so timelines can be adjusted directly where teams already look at them.",
      "Put overdue tasks and upcoming deadlines on the dashboard so risks are visible right away.",
      "Added priority levels so teams can focus on the most urgent projects first.",
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "Inertia.js",
      "PostgreSQL",
    ],
    images: [
      "/images/projects/elevate1.png",
      "/images/projects/elevate2.png",
      "/images/projects/elevate3.png",
    ],
    github: "https://github.com/V7igcv/Project_Tracker",
    liveDemo: "",
  },
];

export default projects;