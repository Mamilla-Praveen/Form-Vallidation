# Form-Vallidation

# Form Validation Project
This project demonstrates a complete client-side form validation system using HTML, CSS, and JavaScript. It ensures that users provide valid input before the form is successfully submitted.

# 📁 Project Structure


├── index.html        → HTML form layout
├── style.css         → CSS for styling form and validation states
├── script.js         → JavaScript form validation logic
└── file.html         → Redirected to this page when form submitted
|__ README.md         → Project documentation

# 🧾 Features
✅ Real-time validation while typing
✅ Submission blocked until all fields are valid
✅ Custom error messages
✅ Visual feedback with red/green border highlights
✅ Terms & Conditions checkbox validation
✅ Fully responsive form layout

# 💡 Technologies Used

HTML: For form structure and input fields

CSS: For styling form elements, success/error states

JavaScript: For validation logic and form control

# 📦 Form Fields & Validations
# Field	Validation Rules
Username -->	Required, minimum 3 characters
Email	   -->  Required, must match standard email format
Password -->	Required, minimum 8 characters
Confirm Password -->	Must match the password field
Terms Checkbox	-->   Must be checked to allow submission

# 🔐 JavaScript Validation Logic
Adds event listeners on keyup for live validation

Uses regex for email format checking

Displays error messages using <small> tags

Applies CSS classes: .error for invalid, .success for valid

Blocks form submission using e.preventDefault() if validation fails

Submits the form programmatically using form.submit() only when all checks pass

# 🎨 CSS Styling
Inputs turn green on valid input (.success)

Inputs turn red on error (.error)

Error messages appear under the respective input fields

Clean and modern look using minimal styling

# 🧪 How to Run
Clone/download the repository

Open index.html in any browser

Try submitting the form with invalid/empty inputs

Fix errors based on feedback and resubmit

Observe console message: "submitted" if all inputs are valid

