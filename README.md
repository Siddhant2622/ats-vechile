# 🚗 ATS Operations Management System

> **Centralized digital platform for government-authorized vehicle fitness testing stations (ATS).**  
> Vehicle Fitness Testing · Workforce Management · AI/OCR Automation · WhatsApp Cloud API · Statutory Reporting

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Web%20%2B%20PWA-blue.svg)](#)
[![Status](https://img.shields.io/badge/Status-Fully%20Functional%20Prototype-success.svg)](#)

---

## 📌 Project Overview

The **Automated Testing Station (ATS) Management System** is a unified operational platform designed for government-authorized vehicle fitness testing facilities. Rather than relying on fragmented CRM, attendance, and spreadsheet tools, this system unifies testing bay operations, workforce tracking, AI-powered plate recognition, tamper-proof reporting, and official customer communication.

### 🌟 Key Capabilities
- **🚗 Vehicle Booking & Queue:** Register incoming vehicles, allocate testing bays, and track real-time queue states (`Scheduled` → `In Progress` → `Completed`).
- **👑 Role-Based Access Control (RBAC):** Distinct dashboards and isolated queues for Super Admin, Station Manager, Reception, Brake Operator, Light Operator, Speed Operator, and HR.
- **⚙️ Multi-Bay Test Workflows:** Record machine readings for Roller Brake Testers (kN force & imbalance), Optical Headlamp Aligners, Speedometer Dynamometers, and Suspension Benches.
- **🤖 AI Camera & ANPR / OCR:** Real-time number plate extraction (Indian standard formats e.g., `MP 04 AB 1234`) with 98.6% confidence scoring and automatic booking matching.
- **📍 GPS Mobile Attendance & Geofencing:** Station geofence verification (200m radius), Punch In/Out, late tracking, and daily EOD shift submission.
- **💰 Workforce Payroll & Payslips:** Attendance calculation, overtime incentives, deductions, and one-click printable salary payslips.
- **📄 Tamper-Proof Statutory Reports:** Formal inspection certificates featuring official ATS Station Codes (`ATS-MP-BPL-004`), operator stamps, and cryptographic verification hashes.
- **🎖️ Fitness Certificate & Expiry Tracking:** Tracks legal certificate validity with automated reminder intervals (30, 15, 7, and 1 day before expiry).
- **💬 Official WhatsApp Business Cloud API:** Automated customer alerts for appointment confirmations, test completions, and urgent renewal alerts with live delivery status (`✓✓`).

---

## 📂 Repository Structure

```
├── ats-app/                 # Fully functional Operations Web Application
│   └── index.html           # Single-page enterprise ATS application with LocalStorage
├── ats-website/             # Marketing & client presentation landing page
│   └── index.html           # Showcase landing page with live dashboard preview
├── server.js                # Lightweight Node.js local web server
├── ATS_Management_System_SRS.md # Complete 10-section Software Requirements Specification
└── README.md                # Project documentation & setup instructions
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+) or any static HTTP web server

### 1. Clone the Repository
```bash
git clone https://github.com/Siddhant2622/ats-vechile.git
cd ats-vechile
```

### 2. Start the Local Server
```bash
node server.js
```

### 3. Open in Browser
- **Showcase Landing Page:** [http://localhost:5000](http://localhost:5000)
- **Live Operations Web App:** [http://localhost:5000/ats-app/index.html](http://localhost:5000/ats-app/index.html) *(or [http://localhost:5000/app](http://localhost:5000/app))*

*(You can also directly double-click `ats-app/index.html` or `ats-website/index.html` to run them locally without a server.)*

---

## 📖 Specifications & Documentation

The complete **Software Requirements Specification (SRS)** is available in [ATS_Management_System_SRS.md](./ATS_Management_System_SRS.md). It details:
1. Project Overview & Boundaries
2. User Roles & Access Control Matrix
3. Detailed Functional Modules (1 through 8)
4. End-to-End Operational Workflow Diagrams
5. Non-Functional Requirements & Data Integrity Rules
6. Suggested Technical Architecture (PostgreSQL, Node.js, React, S3, Meta API)
7. Initial Development Scope & Exclusions
8. Statutory Compliance & Integration Guidelines
9. Client Clarification Checklist (6 open items)
10. Recommended 6-Phase Implementation Approach & Vehicle-Centric Data Model

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3 (Modern Dark Theme), JavaScript (ES6+), Plus Jakarta Sans |
| **Storage & State** | Browser `localStorage` with seed datasets & persistence |
| **Server** | Node.js native HTTP server (`server.js`) |
| **Integrations** | Browser Geolocation API (Geofencing), Simulated Meta WhatsApp Cloud API, AI OCR Scanner |
| **Architecture** | Progressive Web App (PWA) compatible, Mobile-first responsive |

---

## 📄 License
This project is licensed under the MIT License.

