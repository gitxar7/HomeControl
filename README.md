<div align="center">

# HomeControl - Smart Home Automation System

![HomeControl Logo](HomeControlApp/assets/icon-text.png)

**A full-stack IoT home automation system with cross-platform mobile app, REST API backend, and ESP32 integration**

[![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)](https://expo.dev/)
[![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)](https://www.arduino.cc/)
[![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)](https://hibernate.org/)
[![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

</div>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Mobile App](#mobile-app)
- [Backend API](#backend-api)
- [IoT Integration](#iot-integration)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Overview

HomeControl is a comprehensive IoT-based home automation system that demonstrates proficiency in full-stack development, mobile app development, IoT programming, and system architecture. The project showcases integration between mobile applications, web services, databases, and hardware devices.

**Key Highlights:**

- Cross-platform mobile app built with React Native & Expo
- RESTful API backend with Java servlets and Hibernate ORM
- ESP32-based IoT device control via WiFi
- Real-time device status tracking and history logging
- Modern UI/UX with gradient designs and smooth animations

## Features

### Mobile Application

- **Secure Authentication** - Login system with password visibility toggle
- **Device Control Interface** - Intuitive controls for smart home devices
- **Real-time Status Updates** - Live device status monitoring
- **History Tracking** - Complete log of device state changes
- **Responsive Design** - Optimized for both iOS and Android platforms

### Backend Services

- **RESTful API** - Clean API endpoints for device management
- **Database Integration** - Hibernate ORM with MySQL database
- **Session Management** - Secure user session handling
- **Device Status Logging** - Comprehensive activity tracking
- **JSON Response Format** - Standardized API responses

### IoT Hardware Control

- **WiFi Connectivity** - ESP32-based device networking
- **Real-time Control** - Instant device response via HTTP requests
- **Multi-device Support** - Control multiple connected devices
- **Status Feedback** - Device state confirmation and reporting

## Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    JDBC    ┌─────────────────┐
│                 │    Requests     │                 │ Hibernate  │                 │
│  React Native   │◄───────────────►│  Java Servlet   │◄──────────►│   MySQL DB      │
│   Mobile App    │                 │    Backend      │            │                 │
│                 │                 │                 │            │                 │
└─────────────────┘                 └─────────────────┘            └─────────────────┘
                                              │
                                              │ HTTP Requests
                                              ▼
                                    ┌─────────────────┐
                                    │                 │
                                    │   ESP32 IoT     │
                                    │    Devices      │
                                    │                 │
                                    └─────────────────┘
```

## Tech Stack

### Frontend (Mobile App)

- **React Native** - Cross-platform mobile development
- **Expo** - Development platform and build tools
- **Expo Router** - File-based navigation system
- **Vector Icons** - FontAwesome icon library
- **Linear Gradient** - Modern UI styling
- **FlashList** - High-performance lists

### Backend (API Server)

- **Java** - Core programming language
- **Servlet API** - HTTP request handling
- **Hibernate ORM** - Database abstraction layer
- **MySQL** - Relational database management
- **Gson** - JSON serialization/deserialization
- **Apache Ant** - Build automation

### IoT Hardware

- **ESP32** - WiFi-enabled microcontroller
- **Arduino IDE** - Development environment
- **C/C++** - Embedded programming language

### Development Tools

- **NetBeans IDE** - Java development environment
- **VS Code** - Code editing and debugging
- **Git** - Version control system

## Mobile App

The mobile application provides an intuitive interface for controlling smart home devices:

### Key Components:

- **Authentication Screen** (`index.js`) - Secure login with animated UI
- **Home Dashboard** (`home.js`) - Device overview and quick controls
- **Device Controls** (`controls.js`) - Detailed device management interface

### Features:

- Secure pin-based authentication with visibility toggle
- Beautiful gradient UI with smooth animations
- Real-time device status updates
- Responsive design for all screen sizes
- Fast navigation with Expo Router

## Backend API

RESTful API built with Java servlets providing comprehensive device management:

### Endpoints:

- `POST /LogIn` - User authentication
- `GET /SaveStatus` - Update device status
- `GET /LoadHistory` - Retrieve device history
- `GET /Test` - API health check

### Database Schema:

```sql
-- Core entities with relationships
Device (id, name)
Status (id, name)
History (id, device_id, status_id, datetime)
User (id, username, pin)
```

### Features:

- Session-based authentication
- Comprehensive activity logging
- Real-time status updates
- Structured JSON responses
- Error handling and validation

## IoT Integration

ESP32-based hardware control system:

### Capabilities:

- WiFi connectivity for remote control
- Real-time HTTP request processing
- GPIO pin control for connected devices
- Support for lights, switches, and other appliances
- Bi-directional communication with backend

### Hardware Setup:

```cpp
Pin 12: Light Control 1
Pin 13: Light Control 2
WiFi: Network connectivity
HTTP Server: Port 80
```

## Getting Started

### Prerequisites

- Node.js and npm/yarn
- Expo CLI
- Java JDK 8+
- MySQL Server
- Arduino IDE
- ESP32 development board

### Quick Setup

#### 1. Mobile App Setup

```bash
cd HomeControlApp
npm install
npm start
```

#### 2. Backend Setup

```bash
cd HomeControlBackEnd
# Configure database connection in hibernate.cfg.xml
# Deploy to Java application server (Tomcat/GlassFish)
ant build
```

#### 3. IoT Device Setup

```cpp
// Update WiFi credentials in home_control.ino
WiFi.begin("YOUR_WIFI_SSID", "YOUR_PASSWORD");
// Upload to ESP32 via Arduino IDE
```

#### 4. Database Configuration

```sql
CREATE DATABASE homecontrol;
-- Run SQL scripts for table creation
-- Update hibernate.cfg.xml with your credentials
```

### Configuration

Update the following configuration files:

- `HomeControlApp/app/home.js` - Backend API URL
- `HomeControlBackEnd/src/java/hibernate.cfg.xml` - Database connection
- `HomeControlIOT/home_control.ino` - WiFi credentials

## Screenshots

<div align="center">

|                              Login Screen                              |                            Home Dashboard                            |                               Device Controls                                |
| :--------------------------------------------------------------------: | :------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| ![Login](https://via.placeholder.com/200x400/005BEA/FFFFFF?text=Login) | ![Home](https://via.placeholder.com/200x400/00C6FB/FFFFFF?text=Home) | ![Controls](https://via.placeholder.com/200x400/448AFF/FFFFFF?text=Controls) |

</div>

## Project Highlights

This project demonstrates:

### **System Architecture Skills**

- Full-stack application design
- RESTful API architecture
- Database design and optimization
- IoT device integration

### **Technical Proficiency**

- Cross-platform mobile development
- Java enterprise application development
- Embedded systems programming
- Database management and ORM

### **UI/UX Design**

- Modern mobile interface design
- Responsive layouts and animations
- User experience optimization
- Accessibility considerations

### **Development Practices**

- Version control with Git
- Modular code organization
- Error handling and validation
- Documentation and commenting

## Future Enhancements

- [ ] Push notifications for device status changes
- [ ] Analytics dashboard with usage statistics
- [ ] Room-based device grouping
- [ ] Scheduled device automation
- [ ] Advanced user roles and permissions
- [ ] Widget support for quick controls
- [ ] Web dashboard interface
- [ ] Support for additional IoT protocols

## Contributing

This project is part of my portfolio demonstrating full-stack development capabilities. While primarily for showcase purposes, suggestions and feedback are welcome!

## Contact

For questions about this project or collaboration opportunities:

**Developer:** Abdur Rahman Hanas

- Email: nxt.genar7@gamil.com
- GitHub: [gitxar7](https://github.com/gitxar7)

---

<div align="center">

**If you found this project interesting, please give it a star!**

_Built with passion to showcase full-stack development skills_

</div>
