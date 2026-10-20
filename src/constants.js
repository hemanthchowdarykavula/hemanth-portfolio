export const PROFILE = {
  name: "Hemanth Chowdary Kavula",
  title: "Data Engineer",
  subtitle: "1+ years developing and supporting AWS data pipelines",
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
  { title: "Cloud Platforms", icon: "Cloud", items: ["AWS Glue", "Amazon EMR", "Amazon S3", "Amazon Redshift", "AWS Lambda", "Amazon Kinesis"] },
  { title: "Big Data & Streaming", icon: "ChartPie", items: ["Apache Spark", "PySpark", "Databricks", "Apache Kafka", "Delta Lake"] },
  { title: "Databases & Data Warehousing", icon: "Brain", items: ["Snowflake", "PostgreSQL", "MySQL", "SQL Server", "Oracle"] },
  { title: "ETL & Orchestration", icon: "Layout", items: ["ETL/ELT", "Apache Airflow", "dbt"] },
  { title: "Data Modeling", icon: "ChartPie", items: ["Dimensional Modeling", "Star Schema", "SCD Type 2"] },
  { title: "Data Quality", icon: "Sparkles", items: ["SQL Validation", "Data Cleaning", "Great Expectations"] },
  { title: "DevOps & Version Control", icon: "Code2", items: ["Git", "Jenkins", "Terraform", "Docker"] },
  { title: "Data Visualization", icon: "Layout", items: ["Power BI", "Tableau"] },
];

export const EXPERIENCE = [
  {
    period: "Jan 2026 – Present",
    role: "Data Engineer",
    company: "Fidelity Investments",
    location: "Jersey City, NJ",
    highlights: [
      "Developed and maintained ETL/ELT pipelines with Python, SQL, PySpark, AWS Glue, and Amazon EMR for trading and financial datasets.",
      "Transformed data stored in Amazon S3 using Spark and PySpark, including joins, aggregations, filtering, and cleaning.",
      "Supported near-real-time ingestion with Kafka and Amazon Kinesis for downstream trading applications.",
      "Built Snowflake SQL queries and dbt models for structured financial reporting datasets.",
      "Validated data with Python, SQL, and Great Expectations and prepared Delta Lake datasets for analytics and downstream AI/ML applications.",
      "Monitored pipeline runs, investigated failures, and supported code deployments through Git and Jenkins.",
    ],
  },
  {
    period: "May 2025 – Aug 2025",
    role: "Data Engineer Intern",
    company: "Mastercard",
    location: "San Francisco, CA",
    highlights: [
      "Developed Python and SQL scripts to extract, clean, and transform data for internal analytics and reporting.",
      "Assisted with ETL workflow development and testing, including loading into relational databases.",
      "Wrote SQL queries with joins, aggregations, subqueries, and filtering to support reporting.",
      "Performed data quality checks for missing values, duplicate records, and source-to-target inconsistencies.",
      "Supported Amazon S3 processing, ETL troubleshooting, and technical documentation.",
    ],
  },
];

export const EDUCATION = [
  { period: "Jan 2024 – Dec 2025", role: "Master of Science in Computer Science - Rowan University", details: "Glassboro, NJ" },
];

export const CERTIFICATIONS = [
  { title: "SQL (Advanced) Skill Certification — HackerRank", date: "May 2025", skills: ["Advanced SQL"], link: "certificates/sql_advanced%20certificate.pdf" },
  { title: "AWS Academy Cloud Foundations — AWS Academy", date: "Feb 2022", skills: ["AWS Fundamentals"], link: "certificates/aws_cloud_foundations.pdf" },
  { title: "Data Analytics Foundations — Google / Coursera", date: "Nov 2025", skills: ["Data Analytics Foundations"], link: "certificates/Coursera_Data_Analytics_Foundations.pdf" },
];

export const ABOUT_TEXT = `Hi, I'm Hemanth Chowdary Kavula, a Data Engineer with 1+ years of experience developing and supporting AWS-based ETL/ELT pipelines.

I use Python, SQL, PySpark, AWS Glue, Amazon S3, Snowflake, and dbt to prepare, transform, and validate financial data for analytics and reporting.

My focus is on improving data quality, troubleshooting pipeline issues, and supporting reliable batch and near-real-time data processing.`;
