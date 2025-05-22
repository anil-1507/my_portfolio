# Portfolio Website with Google Sheets Integration

This is a modern portfolio website built with React, Tailwind CSS, and Framer Motion. The contact form data is stored in a Google Sheet for easy management.

## Features


- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Interactive UI elements
- Contact form with Google Sheets integration
- Modern and professional design

## Setup Instructions

### 1. Google Sheets Setup

1. Create a new Google Sheet or use the existing one: [Portfolio Contact Form](https://docs.google.com/spreadsheets/d/1XcelVz_F5uVmR5Beza0cM3Sngql5aLcUe7BCaEVYe6I/edit?usp=sharing)
2. Make sure the first row has headers: `name`, `email`, `message`, `timestamp`
3. Create a Google Cloud Project and enable the Google Sheets API
4. Create a service account and download the credentials JSON file
5. Share your Google Sheet with the service account email (with editor permissions)

### 2. Environment Variables

Update the `.env` file with your Google Sheets credentials:

```
PORT=5000
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY="your_private_key"
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
# Start the frontend
npm run dev

# Start the backend server (in a separate terminal)
npm run server
```

## How It Works

1. When a user submits the contact form, the data is sent to the Express backend
2. The backend connects to Google Sheets using the service account credentials
3. The form data is added as a new row in the Google Sheet
4. The user receives a success message

## Customization

- Update the portfolio content in the respective component files
- Modify the styling in the CSS files
- Add or remove sections as needed

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Express.js
- Google Sheets API
