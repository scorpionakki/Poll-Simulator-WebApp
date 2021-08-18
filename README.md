# Poll Simulator Web Application
A React Web-App that simulates election for SBG(Student Body Governance) at the institute using ReactJS, Redux, HTML, CSS.

![image](https://user-images.githubusercontent.com/25850434/129945446-0ef519e5-899f-4fbb-b125-8617d6f9f832.png)

## Functional Requirements
* A student can become Candidate using their Name and ID.
* Same student cannot nominate themselves twice.
* While voting, the student needs to provide their Student ID.
* A student can't cast their vote twice.
* Admin can view the result of the Elections.

## Folder Structure
![image](https://user-images.githubusercontent.com/25850434/129947966-2b5d3e78-f035-46bf-9ec8-3bf5df44c6e1.png)
* store.js carries the main store/state of the application where data will be stored and accessed.
* action/ folder will contain actions that will be dispatched to the reducers carrying the data.
* reducer/ folder will receive the data to be added/modified based on the action dispatched.
* model/ folder will represent the core information that the application is being used to access and manipulate.
* view/folder will represent the views to display UIs.
* App.js handles the routing part.
* index.js wraps the whole app with store.

## Pages
### Main Screen
* This page will welcome you to the application.
![image](https://user-images.githubusercontent.com/25850434/129948271-49f707ca-1c7c-4fa3-917e-1b59737f8ea0.png)

### Become Candidate Screen
* This page will help you register yourself as candidate for the elections.
![image](https://user-images.githubusercontent.com/25850434/129948859-daa9db1b-4d44-4330-ae52-91878420375a.png)

* Validation such as candidate can't re-register themselves for the election.
![image](https://user-images.githubusercontent.com/25850434/129948780-9a7732d6-33b3-4bbe-a6ae-7d64cdcef3f9.png)


### Cast Vote
* This page will help you cast your vote for the selected candidate.
![image](https://user-images.githubusercontent.com/25850434/129948641-93f8bfa3-4328-466a-8711-2ac7dfb92976.png)

* Validation such as voter can't re-vote
![image](https://user-images.githubusercontent.com/25850434/129948958-b0dace8f-3000-400a-8280-d70bb0967280.png)

### Election Results
* This page will let you know results.
![image](https://user-images.githubusercontent.com/25850434/129949071-6fd27e3f-743e-44f7-80da-27c55bb9ee85.png)

