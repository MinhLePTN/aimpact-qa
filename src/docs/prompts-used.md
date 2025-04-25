# 🗂️ Create Folder Structure

```
Please create a new folder named `docs` in the root of the project. Do not create any files inside it for now.
```

---

## 📁 Subfolders in `docs/` Folder

```
I am working on a project and need to create some test documentation. Please place them inside a `docs/` folder in my project. @docs

Create the following subfolders inside `docs/`:
1. test-plan
2. test-suite
3. requirement

Do not create any files inside these folders.
```

---

# 🧪 Test Plan Document

```
Please create a detailed test plan for the "User Login" functionality (follow folder requirement) and save it as a new file inside the `docs/test-plan/` folder. @test-plan

The test plan should include the following sections:
1. Test Plan ID & Title
2. Objective
3. Scope (what is in and out of scope)
4. Test Items (e.g., login fields, buttons, backend auth)
5. Test Types (manual, automation, regression, etc.)
6. Tools to Be Used (Playwright)
7. Roles and Responsibilities
8. Entry & Exit Criteria
9. Test Deliverables
10. Schedule/Timeline (sprint, start date, end date, effort)
11. Risks and Mitigation

The output file should be named `login-test-plan.md` and placed under `docs/test-plan/`.
Use Markdown formatting.
```

---

# 📋 Test Suite Document

```
Please create a detailed test suite for the "User Login" functionality, and save it as .docx in the `docs/test-suite/` folder.

The test suite should include the following sections:
1. Test Suite ID and Title
2. Module or Feature: "User Login"
3. Objective
4. Checklist
5. Test Environment such as browser and operating system
6. Test Data Requirements
7. Execution Type: Manual or Automated
8. Pass or Fail Criteria

Name the file using the format: {{ID}}-test-suite-{{function}}.  
Make sure it is saved under `docs/test-suite/`.  
Do not use Markdown formatting.
```

---

# ✅ Test Case Documents

```
Please create 5 detailed test case documents for the "User Login" functionality.

- Follow the structure and references from the requirement document in `docs/requirement/` and the test suite in `docs/test-suite/login-test-suite.docx`.
- Save each test case as a Word document (.docx) inside `docs/test-suite/test-case/`.
- Use a formal file naming convention, e.g., TC01-Login-Test-Case.docx.

Each test case document should include:
1. Test Case ID
2. Title
3. Objective
4. Preconditions
5. Test Steps
6. Expected Results
7. Test Data
8. Priority (High, Medium, Low)
9. Execution Type (Manual or Automated)
10. Reference to Requirement and Test Suite
11. Status (Not Executed, Pass, Fail)

Focus only on the login flow. Do not include unrelated features or modules.
```

---

# 🧪 Automation Test

```
Please help me set up the initial file and folder structure to start writing automation tests for the "User Login" feature.

- First, read the package.json file to detect which testing framework is being used
- Based on the detected framework, generate a recommended file and folder structure to organize the test code.
- Follow the test case document located in `docs/test-suite/test-case/TC01-Login-Test-Case.docx`.
- Create only the initial automation structure and sample test file for login, without writing the full test logic yet.

Requirements:
- Include a base folder for tests
- Include sample config or support files if needed
- Place all automation code outside the `docs/` folder

Do not overwrite existing files. Create only new folders and files required to start automation.
```

---

# 📘 Rewrite README.md

```
Please help me rewrite the existing README.md file for this project.

Objectives:
- Make it professional, clear, and easy to follow.
- Restructure the content with the following sections:
  1. Project Title
  2. Overview or Introduction
  3. Folder Structure (with brief explanations)
  4. Tech Stack and Frameworks (read from package.json)
  5. Installation Instructions
  6. How to Run the App
  7. How to Run Tests
  8. How to Contribute (if open source)

Additional Notes:
- Use clean markdown formatting
- Keep sections short and informative
- Fix or reword any unclear or repetitive content from the original

Please output the improved README content directly into the README.md file in the root directory.
```

---

# 🔒 Gitignore .env

```
Please update the .gitignore file in the root directory to ensure that any .env files are ignored by Git.

Include the following patterns if they are not already listed:
- .env
- .env.local
- .env.development
- .env.test
- .env.production

Avoid adding duplicates. Do not remove existing ignore rules.
```

# Format prompts-used.md file :)

Please update prompts-used.md file by using clear section headers and consistent Markdown style
