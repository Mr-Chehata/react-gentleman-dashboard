First of all, thank you for showing interest to become a part of NCQ. We wish you best of luck for the test. Please read the entire document carefully before you start writing code.

# How to send your code?

* Fork the Gitlab repository into your own **private** personal repository in **Gitlab**
* Push your code into a new branch with the following name:
  * firstname_lastname
  * Please use snake case format
* Invite oumayma.ltaief@ncq-devstudio.com as **Maintainer**:
  * Open the following menu menu: **Project information > Members**
  * Click on **Invite members** button
  * Add oumayma.ltaief@ncq-devstudio.com email and set role as **Maintainer**
* Create a new pull request and set **@oumayma.ltaief1** as Reviewer

# Coding Assignment
We want you to create a React application that replies to the following notes. You should use:
- React v17
- React hooks (No class components)
- Redux (Redux toolkit / Thunk are nice to have)
- [PrimeReact library v8](https://www.primefaces.org/primereact/setup) along with [Primeflex library v3.2.0](https://www.primefaces.org/primeflex/setup) CSS utility library to make the pages look nice.


### API
You do not need to create any API. Using [json-server](https://www.npmjs.com/package/json-server) NPM package installed globally in your local environment with **db.json** provided file, API will be available on your machine by simple command `json-server --watch db.json`\
Make sure to not change the db.json file content.
- To get list employees, use GET http://localhost:3000/employees
- To get an employee's details, use GET http://localhost:3000/employees/{employeeId}
- To get list projects, use GET http://localhost:3000/projects

### List of Employees
- Page route should be `/employees` and it should be the default route.
- On this page show:
  - Employee name
  - Email
  - Gender
  - Age (not the date of birth)
  - Recrutement date
  - Position
  - Score of the employee.
- To show the score, you should create **a custom component**: an employee score is a number out of 100. A score is displayed as a [rating](https://www.primefaces.org/primereact/rating) of its score out of 10 (in mode readonly).\
Example: If an employee has 76 as score then 7 out of 10 stars should be displayed as rating.
- Show the list in a [card](https://www.primefaces.org/primereact/card) format rather than a simple list. Card should be **a custom component** with input parameters.
- At the top of employees list area add an [input text](https://www.primefaces.org/primereact/inputtext) to filter by employee's name.

### Employees statistics area
- At the top of employees page display a statistic area (it should be **a custom component**). It should provide these informations:
  - How many employees do we have?
  - How many male employees do we have?
  - How many female employees do we have?
  - How many teams do we have? 
  - Who's the employee of the year? (the employee of the year is the employee that has the highest score)
  - Who's the last employee who was hired?
- Each information should be displayed in a special div of 3 [column grid](https://www.primefaces.org/primeflex/gridsystem).

### Employee details
- A click on an employee card should display employee details in a dedicated page with route `/employees/{employeeId}` with the following related data:
  - Employee name
  - Email
  - Position
  - Team
  - Seniority in the company: for how many years an employee has worked for the company
  - List of projects that he/she occupies
- All these data should be displayed via the [card](https://www.primefaces.org/primereact/card) based custom component.

# Assessment Criteria
- Code quality of the React Code.
- Code quality of the HTML and CSS.
- Unit tests code coverage.
- Look and feel of the statistics area and pages.
