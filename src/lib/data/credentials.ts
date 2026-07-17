export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  note?: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    id: "nwu",
    degree: "BSc in Information Technology",
    institution: "North-West University",
    location: "South Africa",
    status: "Final Year",
    note: "Planning to pursue Honours after graduation.",
  },
];

export type CertificationEntry = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  credentialUrl?: string;
};

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    id: "oci-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "Jan 2026",
    expires: "Jan 2028",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E63369D17919D6C74510EA8A6D4BF3F5B1398C2782219C1C8D7EFEAB747F6C5D",
  },
  {
    id: "hackerrank-swe",
    title: "Software Engineer Certificate",
    issuer: "HackerRank",
    issued: "Mar 2026",
    credentialId: "05DE8E8AACCF",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/05de8e8aaccf",
  },
  {
    id: "cisco-junior-cyber",
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco",
    issued: "Jan 2026",
    credentialUrl: "https://www.credly.com/badges/71c10563-f66a-4f70-859a-dc62b7b5c5a1/linked_in_profile",
  },
  {
    id: "cisco-networking-basics",
    title: "Networking Basics",
    issuer: "Cisco",
    issued: "Jan 2026",
    credentialUrl: "https://www.credly.com/badges/457ac10f-6e93-4db5-94e0-d8a3f32954c1/linked_in_profile",
  },
  {
    id: "scrum-basics",
    title: "Registered Scrum Basics™",
    issuer: "Agile Education by Scrum Inc.™",
    issued: "Dec 2025",
    credentialId: "RSB-5456501",
    credentialUrl: "https://s3.amazonaws.com/scruminc-certs/RSB-5456501",
  },
  {
    id: "alison-scrum-po",
    title: "Scrum Product Owner Training",
    issuer: "Alison",
    issued: "Aug 2025",
    credentialId: "3368-30810635",
    credentialUrl: "https://alison.com/certification/check/b65584d604",
  },
  {
    id: "hackerrank-swe-intern",
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    issued: "Aug 2025",
    credentialId: "8d15ad42a091",
    credentialUrl: "https://www.hackerrank.com/certificates/8d15ad42a091",
  },
  {
    id: "hackerrank-react",
    title: "Frontend Developer (React) Certificate",
    issuer: "HackerRank",
    issued: "Aug 2025",
    credentialId: "a3c483f3dd4a",
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/a3c483f3dd4a",
  },
  {
    id: "aws-genai",
    title: "AWS Educate — Introduction to Generative AI",
    issuer: "Amazon Web Services",
    issued: "Jul 2025",
    credentialUrl: "https://www.credly.com/badges/6e9bf4b7-3e76-4178-bbe6-3ca24efc7367/linked_in_profile",
  },
  {
    id: "forage-standard-bank",
    title: "Software Engineering Job Simulation — Standard Bank",
    issuer: "Forage",
    issued: "May 2025",
    credentialId: "bMCJkh6XzdxNxGdiw",
    // NOTE: Forage's link is a signed S3 URL and may expire — replace if it stops working
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/kkKXfgG5FckTX8Toc/8Mgcdiuo2mfSRCfjc_kkKXfgG5FckTX8Toc_cYmTMugTjeon2oZyC_1746651380316_completion_certificate.pdf",
  },
  {
    id: "deloitte-readiness",
    title: "Real-world Readiness",
    issuer: "Deloitte",
    issued: "May 2025",
    // No stable public credential link available
  },
  {
    id: "ibm-cyber-fundamentals",
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    issued: "Feb 2025",
    credentialUrl: "https://www.credly.com/badges/b15f20b7-821b-432e-8f06-a55b73da5279/linked_in_profile",
  },
  {
    id: "alison-iso27001",
    title: "ISO/IEC 27001 — Dynamics of Information Security Management System (ISMS)",
    issuer: "Alison",
    issued: "Feb 2025",
    credentialId: "2251-30810635",
    credentialUrl: "https://alison.com/certification/check/2a34863216",
  },
  {
    id: "chongqing-cyber",
    title: "Cyber Security Training",
    issuer: "Chongqing Polytechnic University of Electronic Technology",
    issued: "Dec 2024",
    // No stable public credential link available
  },
  {
    id: "alison-cyber-threats",
    title: "Cyber Security: Understand Threats and Prevent Attacks",
    issuer: "Alison",
    issued: "Jul 2023",
    credentialId: "5177-30810635",
    credentialUrl: "https://alison.com/certification/check/694f2cec28",
  },
];

export const LINKEDIN_CERTIFICATIONS_URL =
  "https://www.linkedin.com/in/tebatso-s-239676272/details/certifications/";