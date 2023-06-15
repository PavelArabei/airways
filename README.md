1.Task: [airways](https://github.com/rolling-scopes-school/tasks/blob/0e38ef561d25d54462f452a43c8bccb3a6ebc45b/tasks/airways.md).
2. Screenshot:
   ![image](https://github.com/aleshkinpaul/airways/assets/86744568/179f4e4d-dcfb-4deb-a825-af942dec00ca)
3. Deploy: [airways-project](https://airways-project.netlify.app/)
4. Done 28.05.2023 / deadline 29.05.2023
5. Score: 690 / 700

### Page layout (150/150)

General Requirements:

- [x] The web app must be responsive, i.e., it should adapt to various screen sizes and resolutions, such as desktops,
  laptops, tablets, and smartphones.
- [x] The web app should follow the same style guide across all the pages, including the color scheme, typography, and
  visual elements.
- [x] All the forms should have client-side validation that prevents submission and shows invalid fields if any of the
  required data is missing. The validation rule should correspond to the expected data type (e.g. email, phone number,
  name, etc.)

Header:

- [x] The header should be fixed and visible at all times, even when scrolling down the page.
- [x] The logo should be a clickable link that takes the user to the home page.
- [x] The progress bar indicator. It’s visible if a booking is in progress. Indicates the current step.
- [x] The date format dropdown and currency dropdown that applies preference settings and will change the date or
  currency format accordingly across the entire application
- [x] The log-in button should trigger a modal or popup window that allows users to create a new account or log in using
  their existing credentials.
- [x] The log-in button is displayed only for an anonymous user
- [x] The user account button takes to the “User Account Page” and is displayed instead of the log-in button if a user
  is authenticated
- [x]  The shopping cart icon for authenticated users takes to the “Shopping Cart Page”

Content Container:

- [x] The content container is the dynamic part of the app that’s changing on router navigation and should contain the
  main content of the web page, such as flight search results, flight details, booking form, payment form, etc.

Footer:

- [x] Includes the copyright text and payment method logos
- [x] You can include a piece of brief information about developers (name, avatar, GitHub link) that were working on the
  project

### User authentication (40/50)

- [x] The app should provide a user registration flow that guides the user through the process of creating an account.
  The flow should include two tabs - "Login" and "Sign Up."


- Login tab:

- [x] The "Login" tab should allow users to sign in to their existing account by providing their email and password. In
  case of incorrect credentials, the app should alert the user about entering the wrong username or password.

- Sign Up tab:

- [x] The "Sign Up" tab should allow users to create a new account by providing their email, password, first name, last
  name, date of birth, gender, phone number, and citizenship.
- [ ] Users should also have the option to sign up using social networks which are not supposed to be a fully
  functioning OAuth solution: it could be used to pre-fill the registration
  form `Doesn't work for deploy - Completed with Google OAuth2 - After authorization with Google, the next step is to click on the Google authorization button. This will automatically populate the form fields with the user's name and email information.`
- [x] Form validation: The registration form should have validation rules in place to ensure that all required fields
  are filled in, the name field doesn't contain numbers, the email address is valid, and the phone number is in the
  correct format.
- [x] Acknowledgment of terms and conditions: The registration form should include a checkmark to indicate that the user
  acknowledges the terms and conditions. The submission is possible only after checking the checkbox.


- [x] Once a user has logged in or signed up, they should stay on the same page where they initiated the authentication
  process.

### Flight Search (Main) Page (100/100)

- [x] The entry point of the app. Available for anonymous users.


- The flight search form should include the following fields:

- [x] type of flight (one-way or round trip),
- [x] destination from (with autocomplete dropdown),
- [x] destination to (with autocomplete dropdown),
- [x] dates of flight to a destination and return flight date (using date picker),
- [x] amount of passengers dropdown with options for adults, children, and infants.

- [x] All the fields are required

- [x] The "switch" button changes the positions of the "destination from" and "destination to" fields.

- [x] The form should have client-side validation that prevents submission and shows invalid fields if any of the
  required data is missing.

- [x] Once a user filled in all the required fields and clicks the “Search” button, he’s taken to the “Flight Selection”
  page

### Flight Selection Page (150/150)

- [x] Available for anonymous users.
- [x] The Flight Selection Page is the second step of the booking process, following the Flight Search form.
- [x]  It should show the progress of booking and the current step
- [x] The page displays previously selected destinations, dates, flight types, and amount of passengers.


- [x] The "Edit" button should allow the user to modify their search criteria if needed in a quick way by showing a
  floating panel with the same fields as on the Flight Search Page.
- [x] Each flight section should be displayed in a separate container with a header that displays the flight
  destination.
- [x] The number of flights should represent the selected flight type: one-way or round trip
- [x] A calendar should be displayed for each flight section. It includes price as well
- [x] Dates in the past should be disabled by default.


- Each selected date should contain the following information:

- [x] Departure location, date, and time
- [x] Arrival location, date, and time
- [x] Flight duration
- [x] Flight number
- [x] Available seats
- [x] A flight could be direct and connected. In both cases, all the stops should be displayed.

- [x] Each selected date should be displayed with a color indicator that shows the availability of seats (green - more
  than half of available seats, orange - less than half of seats are available, red - less than 10 seats are available).

- [x] Once the user selects a date, they should click the "Select" button which confirms the current choice.

- [x] If the user selects a round-trip flight on the previous page, the same process should be followed for the return
  trip.

- [x]  Once the user has selected all the required flights (clicking the “Select” button), the "Continue" button should
  be enabled, allowing the user to proceed to the Booking Process Page.

- [x] The "Continue" button is disabled until the user selects all the flights

- [x] The "Back" button should allow the user to return to the Flight Search form with previously pre-filled data.

### Booking Process Page (100/100)

- [x] Available for authenticated users and only if flight data is provided from the previous step

- [x] The Booking Process Page is the second step of the booking process, following the Flight Selection Page.

- [x] It should show the progress of booking and the current step

- The page should list all previously selected passengers and provide the following input fields:

- [x] First name
- [x] Last name
- [x] Gender
- [x] Date of birth.
- [x] Baggage options (missing on designs, so the look and feel are fully up to you). Represents whether the checked-in
  baggage is included and how much. Otherwise, we assume that only cabin baggage is included. Checked-in baggage is
  unavailable for infants.

- [x] These fields should include appropriate validation to ensure that the entered data is accurate.

- Contact Information: The page should include input fields for:

- [x] country code
- [x] phone number
- [x] email of the user.

- [x] These fields should also include appropriate validation

- [x] The page should include two buttons, "Back" and "Continue". Clicking the "Back" button should take the user back
  to the previous page, with all the data preserved. Clicking the "Continue" button should take the user to the summary
  page with all the information provided.

### Summary Page (50/50)

- The Summary page is the final step before confirming the flight booking. It will display all the details entered by
  the user during the booking process, including:

- [x] Flight details: This section should display the flight number, departure and arrival times, and dates.
- [x] Passenger details: This section should show the passenger data as well as baggage options.
- [x] Payment details: This section should display the total cost of the booking, broken down by each component, such as
  the base fare, taxes, and any additional fees.


- The Summary page should also include the following elements:

- [x] Process indicator: A visual indicator should show the user which step of the booking process they are on and how
  many steps are remaining.
- [x] Buy Now button: This button should allow the user to confirm the booking and proceed to payment.
- [x] Add to Cart button: This button should allow the user to add the booking to their shopping cart and continue
  browsing the app. The user should be able to return to the cart at a later time to complete the booking.
- [x] Back button: This button should allow the user to return to the previous step in the booking process to make any
  necessary changes.

### Shopping Cart (User Account) Page (100/100)

These two pages are visually similar and represent either the added booking to a cart or already finished ones.

Shopping Cart page:

- [x] The Shopping Cart page should display a table with all previously added bookings that are awaiting payment.
- [x] The table should have the following columns: flight number, destination(s), flight type, departure and arrival
  date and time, passenger amount, and price.
- [x] Each row should have a checkbox on the left-hand side, which allows users to select multiple bookings for payment.
- [x] On each row, there’s the three-dot icon with a select menu that allows editing or deleting the booking. For
  editing a booking, take a user to the Booking Process Page with pre-filled data
- [x]  There should be a "Select All" checkbox at the top of the table, which allows users to select all the bookings in
  the cart with one click.
- [x] There should be a "Continue to Payment" button at the bottom of the page, which finishes the checkout process.

User Account page:

- [x] The User Account page should display a table with all the bookings made by the user.
- [x] The table should have the same columns as the Shopping Cart page.
- [x] Each row should have a clickable link that navigates the user to the Booking Summary page.
- [x] The Booking Summary page should display all the information about the booking, but without the option to modify or
  cancel the booking.
- [x] There should be a "Return to Account" button on the Booking Summary page, which takes the user back to the User
  Account page.

******

## Penalties

- [ ] The presence of errors and warnings in the console - 100 points

- [ ] The presence in the console of the results of the console.log execution - 50 points

- [ ] Making commits after the deadline:

    - \-30% for making commits within up to 3 days of the passed deadline
    - \-70% for making commits within up to 7 days of the passed deadline
