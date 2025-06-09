
# PU HORSE RIDING

A dynamic and user-friendly web application designed to showcase horse riding services, allowing visitors to explore offerings, view a gallery, check pricing, read testimonials, and easily get in touch via a contact form.

## 📌 Overview

PU HORSE RIDING is a modern web application built to provide information about horse riding activities and services. It features a responsive design and intuitive navigation, making it easy for potential clients to learn about the facility, see what's offered, and initiate contact. The contact form on the website directly sends inquiries to a designated business email, ensuring efficient communication.

## ✨ Features

  * **Home Page**: An inviting and informative landing page that introduces visitors to the world of horse riding at "PU HORSE RIDING."
  * **Gallery**: A dedicated section to display captivating images of horses, riders, and the riding environment, offering a visual insight into the experience.
  * **Pricing**: Clear and concise details on different horse riding packages, lessons, or services available, helping users make informed decisions.
  * **Contact Form**: A straightforward form allowing users to send messages and inquiries directly from the website. These messages are sent to a pre-configured business email address.
  * **Testimonials**: A section showcasing positive feedback and experiences from satisfied clients, building trust and credibility.
  * **Responsive Design**: The website is designed to provide an optimal viewing and interaction experience across a wide range of devices (desktops, tablets, and mobile phones).
  * **Smooth Navigation**: An easy-to-use navigation bar provides quick access to all major sections of the website.

## 🚀 Technologies Used

  * **Frontend**:
      * **React.js**: For building the user interface.
      * **Vite**: As a fast build tool for the React application.
      * **HTML5**: Structure of the web pages.
      * **CSS3**: Styling the application for a modern look and feel.
  * **Backend (for email sending)**:
      * Node.js (likely, given the `npm install` context)
      * A library for sending emails (e.g., Nodemailer)

## 🔧 Installation & Setup

To get this project up and running on your local machine, follow these steps:

1.  **Clone the Repository**:

    ```bash
    git clone https://github.com/sampath26082004/Horse-Riding-Website.git
    cd Horse-Riding-Website
    ```

2.  **Install Dependencies**:
    Navigate to the project root and install all required Node.js packages.

    ```bash
    npm install
    # or if you use Yarn
    yarn install
    ```

3.  **Setup Environment Variables (for email functionality)**:
    Create a `.env` file in the root directory of your project. This file will contain your email service credentials necessary for the contact form to send messages. Replace the placeholder values with your actual details.

    ```dotenv
   
    #  if using a direct Node.js backend with Nodemailer:
    # MAIL_HOST=smtp.your-email-provider.com
    # MAIL_PORT=587 # Or 465 for SSL
    # MAIL_USER=your_business_email@example.com
    # MAIL_PASS=your_email_password
    # RECEIVING_EMAIL=your_business_email@example.com
    ```


4.  **Start the Development Server**:
    Launch the application in development mode.

    ```bash
    npm run dev
    # or if you use Yarn
    yarn dev
    ```

5.  **Open in Browser**:
    Your application will typically be accessible at `http://localhost:5173` (or another port specified by Vite in your console).

## 💡 Future Enhancements

  * **Online Booking System**: Implement functionality for users to schedule and book horse riding sessions directly through the website.
  * **User Accounts**: Allow returning users to create accounts to manage their bookings, preferences, or view riding history.
  * **Blog/News Section**: Add a section for articles, news, or updates related to horse riding or the facility.
  * **Payment Gateway Integration**: Integrate secure online payment options for session bookings.
  * **Admin Dashboard**: Develop a backend dashboard for managing inquiries, bookings, and website content more efficiently.

# PU HORSE RIDING

## 📸 Screenshots

| Home Page | Contact Page | Email Inquiry |
| :---: | :---: | :---: |
| ![PU Horse Riding Home Page](![Screenshot 2025-06-09 101450](https://github.com/user-attachments/assets/72212a56-992f-443a-9900-bf54ae5e305f)
| ![PU Horse Riding Contact Page](![Screenshot 2025-06-09 101809](https://github.com/user-attachments/assets/ae6b3c9b-8993-420d-9e92-b4b80a25f1b6)
| ![Email Inquiry Screenshot](![Screenshot 2025-06-09 101900](https://github.com/user-attachments/assets/35a7b4c6-3ddf-401d-9177-9dbd484975ad)
|
