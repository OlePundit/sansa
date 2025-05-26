<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Account Deletion Request - Salama Smart Safe</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      max-width: 800px;
      margin: auto;
      background-color: #ffffff;
      color: #333;
    }

    h1 {
      color: #004466;
    }

    form {
      background-color: #f9f9f9;
      padding: 25px;
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 6px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      margin-top: 20px;
      padding: 12px 20px;
      background-color: #004466;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #006699;
    }

    .info-box {
      background-color: #e7f3f8;
      border-left: 4px solid #2196F3;
      padding: 10px 15px;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h1>Request Account Deletion – Salama Smart Safe</h1>

  <p>We value your privacy and control over your personal data. If you would like to delete your account associated with the <strong>Salama Smart Safe</strong> app (developed by <strong>[Your Developer Name]</strong>), please complete the form below.</p>

  <div class="info-box">
    <strong>What gets deleted:</strong><br>
    - Your account and profile data<br>
    - Contact and identity details<br>
    - Crime and panic alert history<br>
    - Location logs and device associations
  </div>

  <div class="info-box">
    <strong>What may be retained (temporarily):</strong><br>
    - Legal or emergency reports (retained for up to 90 days)<br>
    - Audit or abuse prevention data, where required by law
  </div>

  <div class="info-box">
    <strong>How to request deletion:</strong><br>
    Fill out the form below with the email/phone used in the app. Our team will confirm the request within 7 working days.
  </div>

    <form method="POST" action="https://formsubmit.co/info@sansadigital.com">
    <label for="fullName">Full Name</label>
    <input type="text" id="fullName" name="Full Name" required>

    <label for="email">Email Address (used in the app)</label>
    <input type="email" id="email" name="Email" required>

    <label for="phone">Phone Number (used in the app)</label>
    <input type="tel" id="phone" name="Phone Number">

    <label for="reason">Reason for deletion (optional)</label>
    <textarea id="reason" name="Reason" rows="4" placeholder="Tell us why you're deleting your account (optional)"></textarea>

    <button type="submit">Submit Deletion Request</button>
  </form>

  <p style="margin-top: 40px; font-size: 0.9em; color: #666;">
    If you have any questions, contact us at <a href="mailto:your-email@example.com">your-email@example.com</a>.
  </p>

</body>
</html>
