# Cypress E2E Automation - AutomationExercise.com

This project contains automated end-to-end test cases using Cypress for [https://automationexercise.com](https://automationexercise.com).

---

## ✅ Test Cases Covered

### 🔹 Test Case 1: Register User
- Navigate to the homepage
- Click on 'Signup / Login'
- Enter name and email
- Fill account details and address
- Verify account is created
- Verify 'Logged in as' username
- Delete account and verify

### 🔹 Test Case 2: Login User with Correct Email and Password
- Navigate to the homepage
- Click on 'Signup / Login'
- Enter valid credentials from fixture
- Verify 'Logged in as' username
- Delete account and verify

### 🔹 Test Case 3: Login User with Incorrect Email and/or Password
- Navigate to the homepage
- Click on 'Signup / Login'
- Enter incorrect credentials
- Verify error message: `"Your email or password is incorrect!"`

### 🔹 Test Case 4: Logout User
- Navigate to the homepage
- Log in with valid credentials
- Click on 'Logout'
- Verify redirection to login page

---


## 📦 Installation

```bash
npm install
```
🚀 Run Tests
Open Cypress Test Runner (GUI)
```bash
npx cypress open
```
Run Tests in Headless Mode
```bash
npx cypress run
```


💡 Notes
- Test data is stored in cypress/fixtures/user.json
- Uses Page Object Model for clean and maintainable code


🛠️ Dependencies
- Cypress
- Node.js (v14+ recommended)


📄 License
- This project is for educational/testing purposes only.



