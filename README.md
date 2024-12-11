
## Anothers language for this documentation
To access the PT-BR version of this document [click here](https://github.com/jamersonnascimento/computer_shop-crud-node/blob/main/LEIA-ME.md)
# API CRUD Documentation (ORM)
This document will cover everything you need to know for using the CRUD API.

# Hello! Welcome! 👋

## 🚀 About Me

Hello, I'm Jamerson Nascimento, and I'm a technology enthusiast. I live in Camaragibe, and I'm currently a full-stack student in programming.

## 🛠 Skills
Sequelize, Node.js, Express, Javascript, HTML, CSS (learning)

# 1. Overview

- **Project Name:** Computer Shop API
- **Description:** CRUD API using Sequelize with the PostgreSQL database
- **Archteture:** MVC
- **Author:** Jamerson Nascimento
- **Creation Date:** 09/30/2023
- **Version:** 1.03

# 2. Introduction

Welcome to the documentation of the CRUD API (Create, Read, Update, Delete) created for a computer shop. This API was developed with the aim of providing a set of endpoints that allow efficient management of data related to our system.

The CRUD API is a fundamental part of the computer shop's ecosystem. It offers a set of operations for creating, reading, updating, and deleting information, allowing users to interact with our resources in an intuitive and simplified way.

Our API is designed with a focus on simplicity and ease of use. It is a powerful tool for developers, providing a quick and effective way to manage data. Additionally, it offers a solid and flexible structure for integrating our resources into your own applications.

# 3. What Do I Need to Use the API?

### Hardware Requirements:

For the server with the following minimum specifications:

- Processor: Dual-core, 2.0 GHz or higher.
- RAM: 4 GB or higher.
- Disk Space: 20 GB of free space.
- Internet Connection: Broadband connection for accessing external services (if applicable).
- Input Devices: Keyboard and mouse (for server administration).

### Software Requirements:

- **Operating System:**
  - Linux (Ubuntu 18.04 LTS or later) or
  - Windows Server (version 2016 or later).

- **Web Server:**
  - Apache HTTP Server (version 2.4) or
  - Nginx (version 1.18) for serving the API.

- **Database:**
  - PostgreSQL (version 12) or
  - MySQL (version 8.0).

- **Node.js:**
  - Node.js (version 14.x) to run the API application.

- **Packages and Dependencies:**
  - Express (Node.js framework).
  - Sequelize (ORM).
  - Other application-specific libraries and modules.
 
# 4. Technologies Used

1. **Node.js**: It is the JavaScript runtime platform that allows server-side development of web applications. It is widely used for web applications and RESTful APIs due to its efficiency and scalability.

2. **Express.js**: It is a web framework for Node.js that simplifies web application and API development. It offers features for creating routes, handling HTTP requests, and managing middleware.

3. **JavaScript**: The primary programming language for both server-side and client-side development in modern web projects.

4. **Sequelize**: A Node.js library that is an Object-Relational Mapping (ORM) for relational databases. It facilitates interaction with SQL databases like MySQL, PostgreSQL, or SQLite by mapping JavaScript objects to database tables.

5. **Git**: A widely used version control system for tracking changes in source code and collaborating on software projects.

6. **GitHub**: A source code hosting platform that allows storage, collaboration, and management of Git-based projects.

These are the main technologies and tools used in the project based on the provided directory structure. It's important to note that the choice of technologies may vary depending on the specific project requirements and the preferences of the development team. Node.js and Express.js are a common choice for web application development due to their efficiency and popularity in the developer community.

# 5. Installation and Configuration

Below, you'll find detailed instructions on how to install and configure the project in a local environment.

1. **Clone the Repository:**

   First, clone the project repository to your local machine using the following Git command:

   ```
   git clone https://github.com/jamersonnascimento/computer_shop-crud-node.git
   ```

2. **Access the Project Folder:**

   Navigate to the project folder using the command:

   ```
   cd repository-name
   ```

   Note: You can choose any directory path and name you prefer.

3. **Install Dependencies:**

   Use Node.js and npm (Node.js package manager) to install the necessary project dependencies. Run the following command in the project's root directory:

   ```
   npm install
   ```

4. **Configure the Database:**

   Configure the database credentials in the corresponding configuration file. This typically involves editing the `config/db.config.js` file, depending on your project's structure.

5. **Start the Application:**

   With all dependencies installed and the database configured, you can start the application using the following command:

   ```
   npm start
   ```

   Note: Remember to create the script inside the `package.json` file using the syntax:

   ```
   "scripts": {
     "start": "node server.js"
   }
   ```

6. **Access the Application:**

   After a successful startup, you can access the application in your web browser, typically at `http://localhost:8080` or another port specified in the configuration, using Postman (or any other API testing software).

   That's it! The project is now installed and configured in your local environment.

   Be sure to refer to the [Configuration](#configuration) section for additional details on adjusting project-specific settings if necessary.

# 6. Usage (will be implemented later!)

# 7. Features

* **Automation:** The CRUD API automates database query insertion.
* **Record Creation:** Easily and quickly create new records in our databases.
* **Data Retrieval:** Retrieve specific information based on defined criteria.
* **Record Updating:** Update details of existing records as needed.
* **Data Deletion:** Remove records that are no longer needed.
* **Data Validation:** The API can include validations to ensure that entered data meets established criteria. This helps maintain data integrity.
* **Security:** You can implement authentication and authorization in your API to ensure that only authorized users can access or modify data. This protects against unauthorized access.
* **Integration Ease:** A well-designed CRUD API can be easily integrated into other applications, allowing data to be shared between different systems.
* **Scalability:** As your application grows, the CRUD API can be scaled to handle a large volume of data and user requests.
* **Efficiency:** Simplifies data management operations, saving time and resources. Users can interact with the system more effectively and productively.
* **Data History:** You can implement logging or auditing features that record changes made to records, tracking who made the changes and when.

# 8. Directory Structure

```
computer_shop/ [root folder]
│
├── app/
│       ├── controllers/
│       │ ├── address.controller.js
│       │ ├── buy_sell.controller.js
│       │ ├── client.controller.js
│       │ ├── employer.controller.js
│       │ └── person.controller.js
│       │
│       ├── models/
│       │ ├── index.js
│       │ ├── address.model.js
│       │ ├── buy_sell.model.js
│       │ ├── client.model.js
│       │ ├── employer.model.js
│       │ └── person.model.js
│       │
│       ├── routes/
│       │ ├── address.routes.js
│       │ ├── buy_sell.routes.js
│       │ ├── client.routes.js
│       │ ├── employer.routes.js
│       │ └── person.routes.js
│       │
│       ├── config/
│       │ └── db.config.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── 
```

In this example:

- **`computer_shop/`**: The root folder of the project.

- **`app/`**: Contains folders with application source code.

  - **`controllers/`**: This folder contains controllers for each main entity of the application. Each file, such as `address.controller.js` or `client.controller.js`, handles business logic related to these entities.

  - **`models/`**: This folder is used to define data models representing the application's entities. The `index.js` file typically configures and associates the models

 with the database, while individual files, such as `address.model.js` and `client.model.js`, define the attributes and relationships of the entities.

  - **`routes/`**: Application routes are defined here. Each file, such as `address.routes.js` or `client.routes.js`, specifies routes related to a specific entity and the controllers to be called when these routes are accessed.

  - **`config/`**: Typically contains application-specific configurations, such as database configurations. The `db.config.js` file likely contains database connection information.

- **`.gitignore`**: This file specifies the files and directories that should be ignored by the Git version control system. This usually includes temporary or sensitive files that should not be tracked.

- **`package.json`**: It is the Node.js manifest file that lists the project's dependencies and other information, such as execution scripts.

- **`package-lock.json`**: This file is automatically generated and contains detailed information about the versions of project dependencies, ensuring consistent installation across different environments.

- **`README.md`**: Typically, this is a documentation file that provides information about the project, such as installation, configuration, and usage instructions.

- **`server.js`**: This is the entry point of the application. It typically configures the web server and starts the application.

This directory structure follows a typical organization of Node.js projects with Express.js, where source code is divided into controllers, models, and routes for better modularity and maintenance. Additionally, configuration files and the manifest file are used to configure the application and manage dependencies.

# 9. Contribution

Your interest in contributing to the project is very welcome. Follow the guidelines below to open issues or send pull requests:

#### Opening Issues

1. **Check Existing Issues**: Before opening a new issue, check if the issue has already been reported. If you find a similar issue, you can add a comment to provide additional information.

2. **Describe in Detail**: When opening an issue, provide a clear and detailed description of the problem encountered. Include reproducible steps, error messages, and information about the environment in which the problem occurs (operating system, Node.js version, etc.).

3. **Labels**: Use appropriate labels to categorize the issue. For example, you can add labels like "bug" for technical issues, "enhancement" for improvement suggestions, or "documentation" for documentation-related issues.

#### Sending Pull Requests

If you want to contribute code to the project, follow these steps when sending pull requests:

1. **Fork the Repository**: Fork the repository to your own GitHub account.

2. **Clone the Forked Repository**: Clone your fork of the repository to your local development environment.

   ```bash
   git clone https://github.com/your-username/your-fork.git
   ```

3. **Create a Branch**: Create a branch for your contribution and give it a descriptive name.

   ```bash
   git checkout -b your-branch-name
   ```

4. **Make Changes**: Make the necessary code changes. Ensure you follow the existing code conventions and standards in the project.

5. **Test Changes**: Be sure to test your changes locally to ensure there are no issues.

6. **Commit and Push**: Commit your changes and push them to your forked repository.

   ```bash
   git add .
   git commit -m "Brief description of changes"
   git push origin your-branch-name
   ```

7. **Pull Request**: On GitHub, go to the original repository and click "New Pull Request." Select your branch as the source branch and describe your changes clearly and concisely.

8. **Review and Discussion**: Other contributors will review your changes and may provide feedback or request modifications. Be open to constructive discussions and be willing to make necessary changes.

9. **Merge**: After review and approval, a project maintainer will merge your changes into the main branch.

Please remember that it's important to follow the project's specific contribution guidelines if they exist. This is a general process for contributing to open-source projects, but each project may have its own rules and conventions.

Thank you for considering contributing to the project! Your contributions help improve software quality and benefit the entire developer community.

# 10. License

**MIT License**:
  - Allows anyone to use, modify, and distribute the code, even in commercial projects, as long as the license notice is included in the resulting software. This is a permissive license.
  Read the `LICENSE.md` file for more information.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# 11. Contact

If you have any feedback, please let us know at jameswebbinformatica@gmail.com

# 12. Acknowledgments

We would like to express our sincere gratitude to all individuals who have contributed to and supported this project over time. Your ideas, feedback, and efforts have been invaluable to the success of this endeavor. We want to give special mention to Professor Luis Henrique, whose guidance and assistance were essential in creating this API.

We appreciate all our contributors, community developers, and everyone who tested and provided feedback. Your commitment and enthusiasm were essential in making this project what it is today.

Thank you all for being part of this journey with us!
```

If you need further assistance or have any questions, feel free to ask!


