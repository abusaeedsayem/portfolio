// Versatile Professional Portfolio Data for Abu Saeed Mohammad Sayem
// Sourced from Official Resume, NYS Application Form #S1000, LinkedIn Profile, and NYS 55-b Eligibility Letter.
// Exclusively features 100% US-based employment history & professional development.

export const personalInfo = {
  name: "Abu Saeed Mohammad Sayem",
  displayName: "Abu Saeed Sayem",
  aliases: ["Abu Saeed Sayem", "Abu Saeed Muhammad Sayem"],
  title: "Operations, Records & Administrative Specialist",
  subTitle: "Certified NYS HELPS / 55-b Eligible Candidate",
  location: "Schenectady, NY (Capital District)",
  fullAddress: "1275 Gerling Street, Apt 8C3, Schenectady, NY 12308",
  county: "Schenectady County",
  email: "asaeedmsayem@gmail.com",
  phone: "(518) 707-8201",
  availability: "Open to NYS Civil Service (HELPS & 55-b), Federal & Private Sector Roles",
  civilServiceStatus: "Officially Certified NYS 55-b Eligible Candidate (NYS Civil Service Law Section 55-b) & NYS HELPS Applicant. Official NYS 55-b Letter of Eligibility available directly upon request.",
  desiredPositions: "Operations Specialist / Administrative Support / Office Assistant / Clerical / Program Aide / QA Specialist (Salary Grade 09 to 18 & Private Equivalents)",
  desiredLocations: ["Schenectady", "Albany", "Saratoga", "Rensselaer", "Remote / Hybrid"],
  workAuthorization: "Legally authorized to work in the US (No visa sponsorship required)",
  totalUsExperienceMonths: 65, // 5+ Years Cumulative US Work Experience
  bioShort: "Detail-oriented operations, records management, and QA administrative specialist with over 5 years of US work experience spanning federal facilities, private tech manufacturing, and digital research platforms.",
  bioLong: [
    "I am an accomplished operations and administrative specialist with over 5 years of US-based work experience in high-volume database data entry, records management, strict SOP compliance, and quality assurance across public and private sector environments.",
    "Holding an International Diploma in Computer Studies (Business System Development, NCC Education UK) and a Master of Business Administration (MBA in Finance, Asian University of Bangladesh), I combine technical system literacy, financial analysis skills, and high-precision document workflow execution.",
    "While officially certified under the NYS 55-b Program and actively interested in NYS HELPS civil service positions, I am equally versatile and open to Federal Government opportunities and private sector corporate & tech operations roles across the Capital Region and beyond."
  ],
  resumeUrl: "/resume.pdf",
  eligibilityRequestEmail: "mailto:asaeedmsayem@gmail.com?subject=Request%20for%20NYS%2055-b%20Eligibility%20Letter",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/abusaeedsayem",
    github: "https://github.com",
    twitter: "https://twitter.com",
    email: "mailto:asaeedmsayem@gmail.com"
  },
  stats: [
    { label: "US Work Experience", value: "5+ Years" },
    { label: "NYS Civil Service Status", value: "55-b Certified" },
    { label: "Target Salary Grades", value: "SG 09 - 18" },
    { label: "Language Fluency", value: "Bilingual (4)" }
  ]
};

export const typewriterRoles = [
  "Operations & Administrative Specialist",
  "NYS HELPS & 55-b Eligible Candidate",
  "Records Management & Keyboarding Pro",
  "Quality Assurance & Systems Specialist",
  "Open to State, Federal & Private Sector Roles"
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "operations", label: "Operations & Compliance" },
  { id: "productivity", label: "Office & Google Suites" },
  { id: "qa_systems", label: "QA & Business Systems" },
  { id: "languages_ai", label: "Languages & AI Workflows" }
];

export const skills = [
  // Operations & Compliance
  { name: "Operations Administration & Support", level: 98, category: "operations", icon: "ShieldCheck" },
  { name: "High-Volume Data Entry & Keyboarding", level: 96, category: "operations", icon: "FileCode" },
  { name: "Database Maintenance & Records Keeping", level: 96, category: "operations", icon: "Database" },
  { name: "Digital Record Archiving & Confidentiality", level: 99, category: "operations", icon: "Lock" },
  { name: "Workflow Standardization & SOP Compliance", level: 95, category: "operations", icon: "Layout" },

  // Productivity
  { name: "Microsoft Excel (Test Logs, Charts, Graphs)", level: 94, category: "productivity", icon: "Table" },
  { name: "Microsoft Word & Document Formatting", level: 96, category: "productivity", icon: "FileText" },
  { name: "Google Workspace (Docs, Sheets, Drive)", level: 95, category: "productivity", icon: "Cloud" },
  { name: "Microsoft Outlook & Calendar Systems", level: 92, category: "productivity", icon: "Calendar" },

  // QA & Business Systems
  { name: "Quality Assurance & Web App Testing", level: 90, category: "qa_systems", icon: "CheckCircle2" },
  { name: "Quality Control Metrics Tracking", level: 94, category: "qa_systems", icon: "Zap" },
  { name: "Business System Development", level: 90, category: "qa_systems", icon: "Layers" },
  { name: "Inventory & Raw Material Tracking", level: 92, category: "qa_systems", icon: "Box" },

  // Languages & AI Workflows
  { name: "English & Bengali (Native/Bilingual)", level: 100, category: "languages_ai", icon: "Globe" },
  { name: "Hindi & Urdu (Proficient)", level: 85, category: "languages_ai", icon: "Globe" },
  { name: "Content Lifecycle Management & AI Synthesis", level: 94, category: "languages_ai", icon: "Sparkles" },
  { name: "SEO Auditing Pipelines & Script Editing", level: 92, category: "languages_ai", icon: "Brain" }
];

export const projectCategories = [
  { id: "all", label: "All Case Studies" },
  { id: "public_sector", label: "Public Sector & Federal" },
  { id: "private_sector", label: "Private Industry & Tech" },
  { id: "ai_digital", label: "Digital Platform Operations" }
];

export const projects = [
  {
    id: "usps-records-operations",
    title: "High-Volume Official Records & Federal Mail Routing Operations",
    category: "public_sector",
    tagline: "Federal facility operations, database data entry, time-sensitive mail routing, and document prep under federal SOPs.",
    description: "Executed high-volume mail processing, database data entry, records keeping, document layout verification, and customer service at the USPS Albany facility (30 Karner Rd) while maintaining strict federal privacy guidelines and SOP compliance.",
    featured: true,
    imageColor: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
    tags: ["Federal Public Sector", "USPS Albany", "Database Data Entry", "Records Keeping", "Data Privacy"],
    githubUrl: "",
    liveUrl: personalInfo.socialLinks.linkedin,
    metrics: ["1 Yr 11 Mos PSE + 2 Mos MHA", "100% Privacy Adherence", "SDO Supervised"],
    architecture: [
      "Continuous database data entry, editing, and organizing digital database contents.",
      "Strict layout accuracy and compliance for official correspondence.",
      "Cross-functional administrative support under Distribution Operations supervisors."
    ]
  },
  {
    id: "plug-power-qc-logs",
    title: "Technical Quality Control & Renewable Energy Manufacturing System",
    category: "private_sector",
    tagline: "Coordinated workflows in a regulated manufacturing environment with daily test spreadsheets and inventory tracking.",
    description: "Served as Production Technician at Plug Power Inc. (Latham, NY). Monitored manufacturing workflows adhering strictly to corporate SOPs. Prepared daily logs, technical test spreadsheets, status charts, graphs, and raw material inventory tracking for engineering units.",
    featured: true,
    imageColor: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    tags: ["Private Industry", "Plug Power Inc.", "Excel Test Spreadsheets", "Quality Control", "Inventory Logs"],
    githubUrl: "",
    liveUrl: personalInfo.socialLinks.linkedin,
    metrics: ["11 Months US Experience", "Raw Material Tracking", "Corporate Safety SOPs"],
    architecture: [
      "Structured data logs tracking technical test parameters and material inventories.",
      "Automated summary charts and graphs for executive engineering reviews.",
      "Strict compliance with corporate safety and manufacturing guidelines."
    ]
  },
  {
    id: "cleer-security-qa",
    title: "Web Application Quality Assurance & Testing Operations",
    category: "private_sector",
    tagline: "Documented technical issues, tracked resolutions, and performed QA web application testing under strict procedures.",
    description: "Served as Quality Assurance Engineer at CLEER Security, LLC (Aventura/Miami, FL). Supported web application testing under strict procedures, maintaining organized project records, tracking bug resolutions, and documenting technical issues.",
    featured: true,
    imageColor: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    tags: ["Private Tech", "CLEER Security", "QA Testing", "Technical Issue Logs", "Project Records"],
    githubUrl: "",
    liveUrl: personalInfo.socialLinks.linkedin,
    metrics: ["3 Months US Experience", "Bug Resolution Logs", "Head of Eng Supervised"],
    architecture: [
      "Structured testing procedures for web application features and issue tracking.",
      "Detailed project record keeping and cross-functional resolution verification."
    ]
  },
  {
    id: "digital-platform-operations",
    title: "Digital Platform Operations & Content Lifecycle Infrastructure",
    category: "ai_digital",
    tagline: "Operations management, database maintenance, SEO auditing pipelines, and digital record archiving.",
    description: "Manages digital platform operations, database maintenance, and technical publishing workflows as a self-employed operator in Schenectady, NY (June 2024 – Present). Implemented workflow standardization, content lifecycle management pipelines, automated SEO auditing, and digital record archiving across online platforms.",
    featured: false,
    imageColor: "linear-gradient(135deg, #f05a28 0%, #ff7d52 100%)",
    tags: ["Database Maintenance", "Content Lifecycle Management", "SEO Auditing Pipelines", "Digital Record Archiving", "Workflow Standardization"],
    githubUrl: "",
    liveUrl: personalInfo.socialLinks.linkedin,
    metrics: ["2 Yrs 3 Mos US Experience", "Workflow Standardization", "Digital Record Archiving"],
    architecture: [
      "Database maintenance and digital record archiving across structured online platforms.",
      "Automated SEO auditing pipelines and content lifecycle management procedures.",
      "Workflow standardization for technical publishing infrastructure and editorial schedules."
    ]
  }
];

// EXCLUSIVELY US-BASED WORK EXPERIENCE (Strictly 100% US Jobs)
export const experience = [
  {
    id: "exp-0",
    role: "Operations & Digital Platform Administrator",
    company: "Self-Employed (Digital Operations)",
    period: "June 2024 – Present (2 years 3 months)",
    location: "Schenectady, NY, United States",
    type: "Work",
    description: "Manage end-to-end digital publishing operations, database maintenance, and technical content workflows in Schenectady, NY. Execute content lifecycle management, SEO auditing pipelines, and digital record archiving while adhering to standardized publishing schedules.",
    achievements: [
      "Implemented workflow standardization and content lifecycle management pipelines across multi-channel digital publishing platforms.",
      "Executed routine database maintenance, digital record archiving, and automated SEO auditing pipelines to optimize system performance.",
      "Utilized advanced AI research tools and data synthesis for technical documentation and publishing infrastructure.",
      "Open to permanent public sector (NYS HELPS / 55-b, Federal) and private sector operations roles."
    ],
    technologies: ["Database Maintenance", "Content Lifecycle Management", "SEO Auditing Pipelines", "Digital Record Archiving", "Workflow Standardization"]
  },
  {
    id: "exp-1",
    role: "PSE Mail Processing Clerk",
    company: "United States Postal Service (USPS)",
    period: "September 2022 – July 2024 (1 year 11 months)",
    location: "Albany, NY, United States (40 hrs/week)",
    type: "Work",
    description: "Processed transactions and routed exceptionally high volumes of time-sensitive official correspondence, packages, and mail within a secure, structured federal facility (30 Karner Rd). Supervised by Hirohito Chakma (SDO).",
    achievements: [
      "Performed continuous database data entry and records keeping tasks, editing and organizing digital database contents to streamline records workflows.",
      "Executed daily high-volume keyboarding and document preparation tasks, ensuring complete layout accuracy and federal compliance.",
      "Maintained records with meticulous attention to detail while enforcing strict data privacy protocols and absolute confidentiality guidelines.",
      "Delivered essential cross-functional administrative support, assisted customers, resolved challenges, and compiled operational data to meet strict distribution deadlines."
    ],
    technologies: ["Database Data Entry", "Records Keeping", "Federal Public Sector", "SOP Compliance", "Data Privacy"]
  },
  {
    id: "exp-2",
    role: "Mail Handler Assistant",
    company: "United States Postal Service (USPS)",
    period: "August 2022 – September 2022 (2 months)",
    location: "Albany, NY, United States (30 Karner Rd)",
    type: "Work",
    description: "Handled mailroom tasks, sorting, packaging, and organizing incoming and outgoing mail flows while maintaining strict privacy and security guidelines. Reassigned to PSE Mail Processing Clerk position.",
    achievements: [
      "Managed mailroom sorting and volume packaging under tight federal windows.",
      "Reassigned to PSE Mail Processing Clerk position due to strong performance."
    ],
    technologies: ["Mailroom Operations", "Sorting & Packaging", "Security Guidelines"]
  },
  {
    id: "exp-3",
    role: "Quality Assurance Engineer",
    company: "CLEER Security, LLC",
    period: "February 2022 – April 2022 (3 months)",
    location: "Aventura / Miami, FL, United States",
    type: "Work",
    description: "Documented technical issues, maintained organized project records, tracked resolutions, and supported web application testing under strict procedures. Supervised by Eric Crowe (Head of Engineering).",
    achievements: [
      "Executed web application testing protocols and maintained organized project documentation.",
      "Tracked technical bug resolutions and coordinated with engineering lead."
    ],
    technologies: ["QA Web Testing", "Private Tech Sector", "Technical Issue Logs", "Project Records", "Bug Tracking"]
  },
  {
    id: "exp-4",
    role: "Production Technician",
    company: "Plug Power Inc.",
    period: "March 2021 – January 2022 (11 months)",
    location: "Latham, NY, United States (40 hrs/week)",
    type: "Work",
    description: "Coordinated workflows within a highly regulated technical manufacturing environment adhering strictly to corporate safety guidelines and standard operating procedures (SOPs). Supervised by Adam Cornett (Supervisor of Operations).",
    achievements: [
      "Completed detailed documentation tasks, maintaining records, verifying quality control metrics, and preparing daily data logs, technical test spreadsheets, charts, graphs, and tables.",
      "Managed and maintained records for independent operational platforms, compiling information from thorough data research to systematically generate structured status reports.",
      "Provided cross-functional administrative support to engineering and production units, tracking raw material inventories and balancing competing production deadlines."
    ],
    technologies: ["Quality Control", "Private Industry", "Excel Test Spreadsheets", "SOP Compliance", "Inventory Tracking"]
  },
  {
    id: "exp-5",
    role: "Certified NYS 55-b & NYS HELPS Applicant",
    company: "New York State Department of Civil Service",
    period: "Issue Date: June 10, 2026 – June 10, 2029",
    location: "New York State",
    type: "Certification",
    description: "Officially certified under the Governor's Program to Hire Individuals with Disabilities (NYS Civil Service Law Section 55-b) and applicant for NYS HELPS non-competitive civil service appointments.",
    achievements: [
      "Qualified for NYS entry/mid-level administrative, clerical, and operations specialist roles (Salary Grade 09 to 18).",
      "Preferred locations: Schenectady, Albany, Saratoga, and Rensselaer counties.",
      "Official NYS 55-b Letter of Eligibility available directly upon request."
    ],
    technologies: ["NYS Civil Service Law 55-b", "NYS HELPS Program", "Public Sector Eligibility"]
  },
  {
    id: "exp-6",
    role: "Master of Business Administration (MBA)",
    company: "Asian University of Bangladesh",
    period: "Graduation Year: 2009",
    location: "Dhaka, Bangladesh",
    type: "Education",
    description: "Completed graduate degree program with concentration in Finance. Advanced study in financial management, operational strategy, and organizational decision-making.",
    achievements: [
      "Concentration: Finance (Completed Graduate Program).",
      "Comprehensive training in financial analysis, managerial accounting, and operational business strategy."
    ],
    technologies: ["MBA Finance", "Financial Analysis", "Managerial Accounting", "Operational Strategy"]
  },
  {
    id: "exp-7",
    role: "International Diploma in Computer Studies",
    company: "NCC Education",
    period: "Graduation Year: 2002",
    location: "United Kingdom",
    type: "Education",
    description: "Completed vocational diploma program with concentration in Business System Development. Focused on software fundamentals, computer systems, and database logic.",
    achievements: [
      "Concentration: Business System Development (Completed Diploma Program).",
      "Built core expertise in database concepts, systems analysis, and business software design."
    ],
    technologies: ["Business System Development", "Computer Systems", "Database Logic", "Systems Analysis"]
  }
];

export const certifications = [
  {
    name: "NYS 55-b/c Program Letter of Eligibility",
    issuer: "New York State Department of Civil Service",
    status: "Official NYS 55-b Letter of Eligibility available directly upon request."
  },
  {
    name: "ChatGPT Masterclass: The Guide to AI & Prompt Engineering",
    issuer: "AI & Prompt Engineering Certification",
    status: "Completed & Verified"
  },
  {
    name: "SEO Training: Get Free Traffic to Your Website With SEO",
    issuer: "Digital Marketing & SEO Certification",
    status: "Completed & Verified"
  },
  {
    name: "Writing Formal Business Letters and Emails",
    issuer: "Professional Communications Certification",
    status: "Completed & Verified"
  }
];

export const professionalReferences = [
  {
    name: "Hirohito Chakma",
    title: "Supervisor of Distribution Operations (SDO)",
    company: "United States Postal Service (USPS)",
    location: "Albany, NY 12288",
    relationship: "Former Direct Supervisor",
    contactInfo: "Available Upon Request"
  },
  {
    name: "Adam Cornett",
    title: "Operations Lead / Supervisor of Operations",
    company: "Plug Power Inc.",
    location: "Latham, NY 12110",
    relationship: "Former Operations Supervisor",
    contactInfo: "Available Upon Request"
  }
];
