export const PROFILE = {
  name: "Hemanth Chowdary Kavula",
  title: "Data Engineer",
  subtitle: "1+ years developing, maintaining, and optimizing ETL/ELT pipelines",
  email: "hemanthkavula48@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/hemanthchowdarykavula",
    github: "https://github.com/hemanthkavula",
  },
  location: "New Jersey",
  phone: "+1 (856) 524-6050",
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { title: "Programming Languages", icon: "Code2", items: ["Python", "SQL", "Scala"] },
  { title: "Cloud Platforms", icon: "Cloud", items: ["AWS Glue", "Amazon EMR", "Amazon S3", "Amazon Redshift", "AWS Lambda", "AWS Kinesis"] },
  { title: "Big Data & Streaming", icon: "ChartPie", items: ["Apache Spark", "PySpark", "Apache Kafka", "Delta Lake", "Databricks"] },
  { title: "Databases & Data Warehousing", icon: "Brain", items: ["Snowflake", "PostgreSQL", "MySQL", "SQL Server", "Oracle"] },
  { title: "Data Integration & Orchestration", icon: "Layout", items: ["dbt", "Apache Airflow", "ETL/ELT Pipelines"] },
  { title: "Data Modeling & Quality", icon: "Sparkles", items: ["Dimensional Modeling", "Star Schema", "SCD Type 2", "Great Expectations", "Data Validation"] },
  { title: "DevOps & Analytics", icon: "Code2", items: ["Git", "Jenkins", "Terraform", "Docker", "Power BI", "Tableau"] },
];

export const EXPERIENCE = [
  {
    period: "Jan 2026 – Present",
    role: "Data Engineer",
    company: "Fidelity Investments",
    location: "Jersey City, NJ",
    highlights: [
      "Developed and maintained ETL/ELT pipelines using Python, SQL, PySpark, AWS Glue, and Amazon EMR, processing financial and trading datasets for downstream analytics and reporting.",
      "Built PySpark transformations to clean, filter, join, and aggregate raw data stored in Amazon S3 for analytical workloads.",
      "Supported near-real-time ingestion using Apache Kafka and AWS Kinesis to deliver trading events to downstream processing and monitoring systems.",
      "Developed Snowflake SQL queries and dbt models to transform source data into analytics-ready tables for financial reporting.",
      "Implemented automated data quality checks with Python, SQL, and Great Expectations for duplicates, missing values, and schema inconsistencies.",
      "Prepared and validated Delta Lake datasets using PySpark for financial analytics and downstream AI/ML applications, including risk analysis and anomaly detection.",
      "Monitored pipeline executions, investigated failures using logs and validation checks, and supported deployments through Git and Jenkins.",
    ],
  },
  {
    period: "May 2025 – Aug 2025",
    role: "Data Engineer Intern",
    company: "Mastercard",
    location: "San Francisco, CA",
    highlights: [
      "Developed Python and SQL scripts under engineering team guidance to extract, clean, and transform structured data for internal analytics and reporting.",
      "Assisted with ETL pipeline development, testing, and data loading, validating source-to-target transformations in relational databases.",
      "Developed SQL queries using joins, subqueries, aggregations, and filtering to extract, transform, and validate structured datasets.",
      "Performed data quality checks for missing values, duplicate records, and source-to-target inconsistencies.",
      "Supported AWS S3 processing and ETL troubleshooting, investigating loading issues and documenting workflows with data engineers.",
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

export const ABOUT_TEXT = `Hi, I'm Hemanth Chowdary Kavula, a Data Engineer with 1+ years of experience developing, maintaining, and optimizing ETL/ELT pipelines using Python, SQL, PySpark, and AWS.

I work with Apache Spark, AWS Glue, Amazon EMR, Amazon S3, Snowflake, and dbt to transform financial data into reliable datasets for analytics and reporting.

My focus includes data modeling, data quality validation, pipeline troubleshooting, and supporting near-real-time ingestion for risk analytics and downstream AI/ML applications.`;
