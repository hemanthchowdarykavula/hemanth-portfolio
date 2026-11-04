export const PROFILE = {
  name: "Hemanth Chowdary Kavula",
  title: "Data Engineer",
  subtitle: "2+ years developing and maintaining ETL/ELT pipelines",
  email: "hemanthchowdarykavula10@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/hemanthchowdarykavula",
    github: "https://github.com/hemanthchowdarykavula",
  },
  location: "New Jersey",
  phone: "+1 (856) 524-6050",
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { title: "Programming Languages", icon: "Code2", items: ["Python", "SQL", "Scala", "Java"] },
  { title: "Cloud Platforms", icon: "Cloud", items: ["AWS S3", "AWS Glue", "Amazon EMR", "Amazon Redshift", "AWS Lambda", "AWS Kinesis"] },
  { title: "Big Data & Streaming", icon: "ChartPie", items: ["Apache Spark", "PySpark", "Spark SQL", "Apache Kafka", "Delta Lake", "Databricks"] },
  { title: "Databases & Data Warehousing", icon: "Brain", items: ["Snowflake", "PostgreSQL", "MySQL", "SQL Server", "Oracle"] },
  { title: "Data Integration & Orchestration", icon: "Layout", items: ["dbt", "Apache Airflow", "ETL/ELT Pipelines", "Data Ingestion"] },
  { title: "Data Modeling & Quality", icon: "Sparkles", items: ["Dimensional Modeling", "Star Schema", "SCD Type 2", "Great Expectations", "Data Validation", "Data Reconciliation"] },
  { title: "DevOps & Analytics", icon: "Code2", items: ["Git", "Jenkins", "Terraform", "Docker", "Power BI", "Tableau"] },
  { title: "Python Data Libraries", icon: "Brain", items: ["Pandas", "Scikit-learn"] },
];

export const EXPERIENCE = [
  {
    period: "Jan 2026 – Present",
    role: "Data Engineer",
    company: "Fidelity Investments",
    location: "Jersey City, NJ",
    highlights: [
      "Developed and maintained ETL/ELT pipelines using Python, SQL, PySpark, AWS Glue, and Amazon EMR to process financial and trading datasets for downstream analytics and reporting.",
      "Engineered PySpark transformations to cleanse, filter, join, and aggregate raw data stored in Amazon S3, producing structured datasets for analytical workloads.",
      "Supported near-real-time data ingestion using Apache Kafka and AWS Kinesis, enabling trading event data delivery to downstream processing and monitoring systems.",
      "Developed Snowflake SQL transformations and dbt models to convert financial source data into structured, analytics-ready datasets supporting reporting and downstream analysis.",
      "Implemented automated validation checks using Python, SQL, and Great Expectations to detect duplicates, missing values, and schema inconsistencies before downstream data loading.",
      "Prepared and validated Delta Lake datasets using PySpark, supporting financial analytics and downstream AI/ML applications, including risk analysis and anomaly detection.",
      "Monitored ETL pipeline executions, investigated processing failures through log analysis and validation checks, and supported code deployments using Git and Jenkins.",
      "Optimized SQL queries and PySpark transformations by refining join strategies, applying predicate filtering, and adjusting workflows to improve ETL processing efficiency.",
    ],
  },
  {
    period: "May 2025 – Sep 2025",
    role: "Data Engineer Intern",
    company: "Mastercard",
    location: "San Francisco, CA",
    highlights: [
      "Developed Python and SQL scripts under engineering team guidance to extract, clean, and transform structured datasets for internal analytics and reporting.",
      "Assisted with ETL pipeline development, testing, and data loading, validating source-to-target transformations across relational databases.",
      "Developed SQL queries using JOINs, subqueries, aggregations, and filtering to support data extraction, reporting, and transformation validation.",
      "Performed SQL-based source-to-target reconciliation to identify missing records, duplicates, and data discrepancies, documenting validation findings for the engineering team.",
      "Supported AWS S3 data processing and ETL troubleshooting, collaborating with engineers to investigate data loading issues and document pipeline workflows.",
    ],
  },
  {
    period: "Apr 2023 – Nov 2023",
    role: "Junior Developer Intern",
    company: "Arshil Digital Private Limited",
    location: "Hyderabad, India",
    highlights: [
      "Assisted in developing and maintaining software applications using Python and SQL, supporting application functionality and data processing tasks.",
      "Developed SQL queries using joins, subqueries, filtering, and aggregations to retrieve, update, and validate relational data.",
      "Created Python scripts for file processing, data cleaning, and basic validation to support routine development activities.",
      "Supported application debugging and unit testing by investigating issues, implementing small code changes, and validating fixes under senior developer guidance.",
      "Collaborated with developers to document changes, maintain source code using Git, and support application development workflows.",
    ],
  },
];

export const EDUCATION = [
  { period: "Jan 2024 – Dec 2025", role: "Master of Science in Computer Science - Rowan University", details: "Glassboro, NJ" },
];

export const CERTIFICATIONS = [
  { title: "SQL (Advanced) Skill Certification — HackerRank", date: "May 2025", skills: ["Advanced SQL"], link: "certificates/sql_advanced%20certificate.pdf" },
  { title: "AWS Academy Cloud Foundations — AWS Academy", date: "Feb 2022", skills: ["AWS Fundamentals"], link: "certificates/aws_cloud_foundations.pdf" },
  { title: "Foundations: Data, Data, Everywhere — Google / Coursera", date: "Nov 2025", skills: ["Data Analytics"], link: "certificates/Coursera_Data_Analytics_Foundations.pdf" },
];

export const ABOUT_TEXT = `Data Engineer with 2+ years of experience developing and maintaining ETL/ELT pipelines using Python, SQL, PySpark, and AWS. Hands-on experience with AWS Glue, Amazon EMR, Amazon S3, Snowflake, dbt, and Apache Spark for data ingestion, transformation, and analytics-ready datasets.

Skilled in dimensional modeling, SQL optimization, automated data quality validation, and production troubleshooting, with exposure to Kafka and Kinesis streaming.

Experienced in supporting reliable data delivery for financial reporting, risk analytics, and downstream AI/ML applications.`;

export const PROJECTS = [
  {
    title: "Customer Lifetime Value (CLV) & Churn Prediction",
    impactLine: "Customer analytics, data warehousing, and predictive modeling.",
    description: "Designed a MySQL star schema data warehouse and developed SQL-based RFM segmentation and predictive models.",
    impact: [
      "Designed a MySQL star schema with transaction fact and customer, product, and date dimension tables; developed CTE and window-function transformations for RFM segmentation and feature engineering.",
      "Developed Python CLV and churn models using Pandas, BG/NBD, Gamma-Gamma, and Logistic Regression; generated 6- and 12-month CLV estimates and evaluated churn predictions using ROC-AUC, precision, and recall.",
    ],
    tech: ["Python", "MySQL", "SQL", "Pandas", "Scikit-learn", "BG/NBD", "Gamma-Gamma"],
    links: { github: "https://github.com/hemanthchowdarykavula/E-commerce-Customer-Lifetime-Value-CLV-Churn-Analysis" },
  },
  {
    title: "Pizza Sales Analysis",
    impactLine: "Advanced SQL analysis of sales and revenue trends.",
    description: "Explored pizza sales transactions across four normalized MySQL tables.",
    impact: [
      "Developed 14 SQL queries using JOINs, CTEs, subqueries, aggregations, and window functions to analyze sales transactions and revenue performance.",
      "Applied SUM OVER and DENSE_RANK to calculate cumulative revenue, identify top-performing pizzas by category, and analyze peak ordering hours and sales trends.",
    ],
    tech: ["MySQL", "SQL", "CTEs", "Window Functions", "Relational Data Modeling"],
    links: { github: "https://github.com/hemanthchowdarykavula/pizza-sales-sql-analysis" },
  },
  {
    title: "Personal Portfolio Website",
    impactLine: "Responsive portfolio for data engineering work.",
    description: "Developed and deployed a responsive portfolio website using React, Vite, Tailwind CSS, and Netlify.",
    impact: [
      "Developed and deployed a responsive portfolio website using React, Vite, Tailwind CSS, and Netlify to showcase technical projects, certifications, and professional experience.",
    ],
    tech: ["React.js", "JavaScript", "Vite", "Tailwind CSS", "GitHub", "Netlify"],
    links: { github: "https://github.com/hemanthchowdarykavula/hemanth-portfolio", demo: "https://hemanthkavula.com/" },
  },
];

export const PUBLICATIONS = [
  {
    title: "Age and Gender Prediction using Gated Residual Attention Network",
    publisher: "IEEE",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/10169205",
  },
];
