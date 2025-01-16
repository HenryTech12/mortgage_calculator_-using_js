Mortgage Repayment Calculator

Overview

This project is a Mortgage Calculator designed to calculate monthly repayments using real-time data fetched from an API. It serves as a front-end application for practicing:

Form handling

API integration

Client-side validation

Dynamic DOM updates



---

Features

Real-Time API Integration

Fetches live interest rates or financial data from a third-party API.


User-Friendly Input Form

Input fields for:

Mortgage Amount

Mortgage Term (in years)

Interest Rate (with an option to auto-fetch using the API)



Repayment Options

Repayment: Calculates payments including both interest and principal.

Interest Only: Calculates payments based only on interest.


Dynamic Results Display

Displays calculations dynamically, updating results in real time.


Accessible & Responsive Design

Optimized for all devices and built with accessibility in mind.



---

Technologies Used

HTML5: For semantic structure.

CSS3: For styling and responsive layout.

JavaScript: For DOM manipulation, form handling, and API interaction.

Real-Time API: To fetch dynamic interest rate data.



---

Setup Instructions

1. API Key Configuration

Replace the placeholder key and endpoint in script.js with your actual API details:

const key = 'YOUR_API_KEY';
const url = 'https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=3000000&interest_rate=5.25&duration_years=25';



2. Run the Application

Open index.html in any modern web browser.



3. Input Details

Enter:

Mortgage Amount

Mortgage Term

Interest Rate (or auto-fetch from the API).


Select the repayment type and click Calculate Repayments.



4. View Results

The calculated repayment details will appear dynamically at the bottom of the page.





---

Installation Requirements

Obtain an API key from the third-party API provider.


---
