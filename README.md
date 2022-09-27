# Getting Started

Misely is a mobile app that connects new mothers with interviewed, background-checked and top-rated professionals to make postpartum period enjoyable.

To checkout the current features of this app, please jump to the 'Functionality/Directions' section. 

**Please note that this project is for proof-of-concept and the scope of the project is heavily focused on the front-end side, although dynamic data is retried from an express server. The app only focuses on the 'housework' service. Authentication, actual booking process (back-end (i.e. payment service)) and chat functions are not implemented.**

This project was made using the following tech stack:
Front-End:
•	React.js
•	React-router-dom
•	Axios
•	react-date-range
Back-end:
•	Node.js
•	Express.js
•	cors
•	dotenv
•	nodemon


In order to successfully run this application, both of the following repositories are required for front-end and back-end, respectively:
1) dkrj45/chris-lee-misely at https://github.com/dkrj45/chris-lee-misely.git
2) dkrj45/chris-lee-misely-server at https://github.com/dkrj45/chris-lee-misely-server.git

## Setting Up

Please follow the instructions below to properly set up the repositories.

### Installing Dependencies

The aforementioned repositories do not include node_modules folder that contains all the dependencies.
Please open each of the repositories and enter the following command line to install all dependencies: 'npm i'

### Creating .env files

Both repositories require .env files in order to properly operate.

For the front-end repository, create a .env file with the following code: 'REACT_APP_URL = "http://localhost:8080'

For the back-end repository, create another .env file with the following code: 'PORT = "8080"'

### Launching the application

The application is ready to be launched now.

Go to the server repository and enter the following command line to launch the server: 'node index'
Then, go to the front-end repo and enter the following command line: 'npm start'

The application should open in a browser.


## Functionality/Directions

When the application loads, you are first greeted by the 'welcome page'. You may start by clicking anywhere on the page.

Once clicked, you are landed on the 'landing page', where you may swipe through different images to learn more about Misely, or travel straight to the 'sign up page' or 'log in page'.

On the 'sign up page', you can make an account by filling in the crendentials or use your own Apple, Google or Facebook account to log in. You can also choose to go back to the 'landing page'.

Similarly, on the 'login page', you can use the account that you made on the 'sign up page' or use other aforementioned services to log in. You can also choose to go back to the 'landing page'.

Once logged in, the 'home page' will render. This page will have access to various services. Feel free to browse the page. Notice that 'Housework' section on the header is already selected, since this is our scope for this project.
You may click on 'Laura Smith' under the providers section to checkout her profile or visit other pages through the navigation footer on the bottom. Please note that 'Groups' tab is not functional at the moment. Similarly, 'Groups', 'Classes' and 'Useful Information' sections on this page are not accessible, due to scope.

Clicking on the 'Providers tab' renders a new page, where you can browser through different providers. Please note that only 'Laura Smith' is functional at the moment.

Clicking on the 'Bookings tab' renders a new page, where you can check the services that the user has booked previously, or ones that are coming up. Clicking on 'Laura Smith' will render the details of the booking that the user made with her.

Clicking on the 'messages' tab will lead you to the 'messages page' where you can view different conversations the user has had with providers. Try clicking on 'Laura Smith' to chat with her.

To start booking, try clicking on 'Laura Smith' from the 'home page' or the 'providers page'. On the profile page, you can checkout various informaiton about her such as hourly rate, experience and ratings. Click on the 'check availability' button on the very bottom to start the appointment and move to the 'availability page'.

On the availability page, you may select the date range of the service that you wish to book. Once selected click 'select dates' button to go to the 'request page'.

On the request page, you can select detailed options for the service and also leave messages to the provider. Once finished, click the button on the very bottom to go to 'payment page'.

The 'payment page' is where you can check the price details of the appointment and pay for the service. When you click on 'request to book' button on the very bottom, you will be moved to the confirmation page, where you can travel back to 'home page' or view the summerized details of the booking that you just made.



