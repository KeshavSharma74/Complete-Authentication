// export const EMAIL_VERIFY_TEMPLATE = `
// <!DOCTYPE html>
// <html xmlns="http://www.w3.org/1999/xhtml">
// <head>
//   <title>Verify Your Email</title>
//   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
//   <style>
//     body {
//       margin: 0;
//       padding: 0;
//       font-family: 'Poppins', sans-serif;
//       background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
//     }
//     .container {
//       max-width: 600px;
//       margin: 40px auto;
//       background: #ffffff;
//       border-radius: 16px;
//       overflow: hidden;
//       box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
//     }
//     .header {
//       background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%);
//       padding: 30px 20px;
//       text-align: center;
//     }
//     .logo {
//       color: white;
//       font-size: 24px;
//       font-weight: 700;
//       letter-spacing: 1px;
//     }
//     .content {
//       padding: 40px 30px;
//       color: #334155;
//     }
//     h1 {
//       color: #1e293b;
//       font-weight: 700;
//       margin-top: 0;
//       font-size: 26px;
//     }
//     .otp-container {
//       background: #f8fafc;
//       border-radius: 12px;
//       padding: 20px;
//       text-align: center;
//       margin: 25px 0;
//       border: 1px dashed #cbd5e1;
//     }
//     .otp-code {
//       font-size: 42px;
//       font-weight: 700;
//       letter-spacing: 8px;
//       color: #4F46E5;
//       margin: 10px 0;
//     }
//     .highlight {
//       color: #4F46E5;
//       font-weight: 600;
//     }
//     .footer {
//       padding: 20px;
//       text-align: center;
//       font-size: 12px;
//       color: #64748b;
//       background: #f1f5f9;
//     }
//     .note {
//       background: #fffbeb;
//       border-left: 4px solid #F59E0B;
//       padding: 12px 15px;
//       border-radius: 4px;
//       margin: 25px 0;
//       font-size: 14px;
//     }
//     @media (max-width: 480px) {
//       .container {
//         margin: 20px;
//       }
//       .content {
//         padding: 30px 20px;
//       }
//       .otp-code {
//         font-size: 32px;
//         letter-spacing: 5px;
//       }
//     }
//   </style>
// </head>
// <body>
//   <table width="100%" cellspacing="0" cellpadding="0">
//     <tr>
//       <td align="center">
//         <div class="container">
//           <div class="header">
//             <div class="logo">APP NAME</div>
//           </div>
          
//           <div class="content">
//             <h1>Verify Your Email Address</h1>
//             <p>Welcome to our community! To complete your registration for the account:</p>
//             <p class="highlight">{{email}}</p>
//             <p>please enter this verification code:</p>
            
//             <div class="otp-container">
//               <div class="otp-code">{{otp}}</div>
//               <p style="margin-bottom:0;">Verification Code</p>
//             </div>
            
//             <div class="note">
//               <strong>Important:</strong> This code will expire in 24 hours. Please verify your email soon.
//             </div>
            
//             <p>If you didn't request this, please ignore this email or contact our support team.</p>
//           </div>
          
//           <div class="footer">
//             <p>&copy; 2025 App Name. All rights reserved.</p>
//             <p>123 Business Ave, Suite 100, San Francisco, CA 94107</p>
//           </div>
//         </div>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
// `;

// export const PASSWORD_RESET_TEMPLATE = `

// <!DOCTYPE html>
// <html xmlns="http://www.w3.org/1999/xhtml">

// <head>
//   <title>Password Reset</title>
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
//   <style type="text/css">
//     body {
//       margin: 0;
//       padding: 0;
//       font-family: 'Open Sans', sans-serif;
//       background: #E5E5E5;
//     }

//     table, td {
//       border-collapse: collapse;
//     }

//     .container {
//       width: 100%;
//       max-width: 500px;
//       margin: 70px 0px;
//       background-color: #ffffff;
//     }

//     .main-content {
//       padding: 48px 30px 40px;
//       color: #000000;
//     }

//     .button {
//       width: 100%;
//       background: #22D172;
//       text-decoration: none;
//       display: inline-block;
//       padding: 10px 0;
//       color: #fff;
//       font-size: 14px;
//       text-align: center;
//       font-weight: bold;
//       border-radius: 7px;
//     }

//     @media only screen and (max-width: 480px) {
//       .container {
//         width: 80% !important;
//       }

//       .button {
//         width: 50% !important;
//       }
//     }
//   </style>
// </head>

// <body>
//   <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
//     <tbody>
//       <tr>
//         <td valign="top" align="center">
//           <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
//             <tbody>
//               <tr>
//                 <td class="main-content">
//                   <table width="100%" cellspacing="0" cellpadding="0" border="0">
//                     <tbody>
//                       <tr>
//                         <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
//                           Forgot your password?
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
//                           We received a password reset request for your account: <span style="color: #4C83EE;">{{email}}</span>.
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%; font-weight: 700;">
//                           Use the OTP below to reset the password.
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 24px;">
//                           <p class="button" >{{otp}}</p>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
//                           The password reset otp is only valid for the next 15 minutes.
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </body>
// </html>
// `

// Welcome Email Template
export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Welcome to Our Platform</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px 0;
      line-height: 1.6;
    }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }
    
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
      opacity: 0.3;
    }
    
    .logo {
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
      width: 80px;
      height: 80px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      position: relative;
      z-index: 1;
    }
    
    .logo::before {
      content: '🎉';
      font-size: 32px;
    }
    
    .header h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }
    
    .header p {
      color: rgba(255,255,255,0.9);
      font-size: 16px;
      font-weight: 300;
      position: relative;
      z-index: 1;
    }
    
    .content {
      padding: 50px 40px;
      background: #ffffff;
    }
    
    .greeting {
      font-size: 24px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .message {
      font-size: 16px;
      color: #4a5568;
      margin-bottom: 30px;
      text-align: center;
      line-height: 1.8;
    }
    
    .email-highlight {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 600;
    }
    
    .features {
      background: #f8fafc;
      border-radius: 16px;
      padding: 30px;
      margin: 30px 0;
      border: 1px solid #e2e8f0;
    }
    
    .features h3 {
      color: #1a1a1a;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .feature-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    
    .feature-icon {
      width: 24px;
      height: 24px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .feature-text {
      color: #4a5568;
      font-size: 14px;
      font-weight: 500;
    }
    
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      text-decoration: none;
      padding: 16px 32px;
      border-radius: 12px;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      margin: 20px auto;
      display: block;
      max-width: 200px;
      transition: all 0.3s ease;
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
    }
    
    .footer {
      background: #f8fafc;
      padding: 30px 40px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
      border-top: 1px solid #e2e8f0;
    }
    
    .footer p {
      margin-bottom: 10px;
    }
    
    .social-links {
      margin-top: 20px;
    }
    
    .social-links a {
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      text-decoration: none;
      margin: 0 8px;
      line-height: 40px;
      font-size: 16px;
      transition: all 0.3s ease;
    }
    
    .social-links a:hover {
      transform: translateY(-2px);
    }
    
    @media only screen and (max-width: 600px) {
      .email-container {
        margin: 0 10px;
        border-radius: 16px;
      }
      
      .header {
        padding: 30px 20px;
      }
      
      .content {
        padding: 40px 25px;
      }
      
      .footer {
        padding: 25px 20px;
      }
      
      .greeting {
        font-size: 20px;
      }
      
      .header h1 {
        font-size: 24px;
      }
      
      .feature-list {
        gap: 10px;
      }
      
      .feature-item {
        padding: 10px 12px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo"></div>
      <h1>Welcome to Our Platform! 🎉</h1>
      <p>Your journey to amazing experiences starts here</p>
    </div>
    
    <div class="content">
      <div class="greeting">Hello {{name}}! 👋</div>
      
      <div class="message">
        We're thrilled to have you join our community! Your account has been successfully created with the email address <span class="email-highlight">{{email}}</span>.
      </div>
      
      <div class="features">
        <h3>What you can do now:</h3>
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <div class="feature-text">Access all premium features</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔒</div>
            <div class="feature-text">Secure and encrypted data</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎯</div>
            <div class="feature-text">Personalized experience</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🚀</div>
            <div class="feature-text">Lightning-fast performance</div>
          </div>
        </div>
      </div>
      
      <a href="#" class="cta-button">Get Started</a>
      
      <div class="message">
        If you have any questions or need assistance, our support team is here to help. Welcome aboard! 🚀
      </div>
    </div>
    
    <div class="footer">
      <p>Thank you for choosing our platform</p>
      <p>&copy; 2025 KeshavTechSolutions. All rights reserved.</p>
      <div class="social-links">
        <a href="#">📧</a>
        <a href="#">🐦</a>
        <a href="#">💼</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

// Email Verification Template
export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Verify Your Email</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px 0;
      line-height: 1.6;
    }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }
    
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
      opacity: 0.3;
    }
    
    .logo {
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
      width: 80px;
      height: 80px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      position: relative;
      z-index: 1;
    }
    
    .logo::before {
      content: '🔐';
      font-size: 32px;
    }
    
    .header h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }
    
    .header p {
      color: rgba(255,255,255,0.9);
      font-size: 16px;
      font-weight: 300;
      position: relative;
      z-index: 1;
    }
    
    .content {
      padding: 50px 40px;
      background: #ffffff;
      text-align: center;
    }
    
    .verification-message {
      font-size: 18px;
      color: #4a5568;
      margin-bottom: 30px;
      line-height: 1.8;
    }
    
    .email-highlight {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 600;
    }
    
    .otp-container {
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      border-radius: 20px;
      padding: 40px 30px;
      margin: 30px 0;
      border: 2px solid #e2e8f0;
      position: relative;
      overflow: hidden;
    }
    
    .otp-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 40%, rgba(102, 126, 234, 0.05) 50%, transparent 60%);
      animation: shine 3s infinite;
    }
    
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .otp-label {
      font-size: 16px;
      color: #6b7280;
      margin-bottom: 20px;
      font-weight: 500;
    }
    
    .otp-code {
      font-size: 36px;
      font-weight: 700;
      color: #1a1a1a;
      letter-spacing: 8px;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
      z-index: 1;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .otp-validity {
      font-size: 14px;
      color: #ef4444;
      font-weight: 500;
      background: rgba(239, 68, 68, 0.1);
      padding: 8px 16px;
      border-radius: 20px;
      display: inline-block;
      position: relative;
      z-index: 1;
    }
    
    .security-notice {
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 16px;
      padding: 20px;
      margin: 30px 0;
      display: flex;
      align-items: center;
      gap: 12px;
      text-align: left;
    }
    
    .security-icon {
      font-size: 24px;
      flex-shrink: 0;
    }
    
    .security-text {
      color: #92400e;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.6;
    }
    
    .footer {
      background: #f8fafc;
      padding: 30px 40px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
      border-top: 1px solid #e2e8f0;
    }
    
    .footer p {
      margin-bottom: 10px;
    }
    
    @media only screen and (max-width: 600px) {
      .email-container {
        margin: 0 10px;
        border-radius: 16px;
      }
      
      .header {
        padding: 30px 20px;
      }
      
      .content {
        padding: 40px 25px;
      }
      
      .footer {
        padding: 25px 20px;
      }
      
      .header h1 {
        font-size: 24px;
      }
      
      .verification-message {
        font-size: 16px;
      }
      
      .otp-code {
        font-size: 28px;
        letter-spacing: 6px;
      }
      
      .otp-container {
        padding: 30px 20px;
        margin: 20px 0;
      }
      
      .security-notice {
        flex-direction: column;
        text-align: center;
        gap: 8px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo"></div>
      <h1>Verify Your Email</h1>
      <p>Almost there! Let's verify your account</p>
    </div>
    
    <div class="content">
      <div class="verification-message">
        We need to verify your email address <span class="email-highlight">{{email}}</span> to complete your account setup.
      </div>
      
      <div class="otp-container">
        <div class="otp-label">Your verification code:</div>
        <div class="otp-code">{{otp}}</div>
        <div class="otp-validity">⏰ Valid for 24 hours</div>
      </div>
      
      <div class="security-notice">
        <div class="security-icon">🛡️</div>
        <div class="security-text">
          <strong>Security Tip:</strong> Never share this code with anyone. We'll never ask for your verification code via phone or email.
        </div>
      </div>
    </div>
    
    <div class="footer">
      <p>If you didn't request this verification, please ignore this email.</p>
      <p>&copy; 2025 KeshavTechSolutions. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

// Password Reset Template
export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Reset Your Password</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px 0;
      line-height: 1.6;
    }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }
    
    .header {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></svg>');
      opacity: 0.3;
    }
    
    .logo {
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
      width: 80px;
      height: 80px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      position: relative;
      z-index: 1;
    }
    
    .logo::before {
      content: '🔑';
      font-size: 32px;
    }
    
    .header h1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }
    
    .header p {
      color: rgba(255,255,255,0.9);
      font-size: 16px;
      font-weight: 300;
      position: relative;
      z-index: 1;
    }
    
    .content {
      padding: 50px 40px;
      background: #ffffff;
      text-align: center;
    }
    
    .reset-message {
      font-size: 18px;
      color: #4a5568;
      margin-bottom: 30px;
      line-height: 1.8;
    }
    
    .email-highlight {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 600;
    }
    
    .otp-container {
      background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
      border-radius: 20px;
      padding: 40px 30px;
      margin: 30px 0;
      border: 2px solid #fecaca;
      position: relative;
      overflow: hidden;
    }
    
    .otp-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent 40%, rgba(239, 68, 68, 0.05) 50%, transparent 60%);
      animation: shine 3s infinite;
    }
    
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .otp-label {
      font-size: 16px;
      color: #6b7280;
      margin-bottom: 20px;
      font-weight: 500;
    }
    
    .otp-code {
      font-size: 36px;
      font-weight: 700;
      color: #1a1a1a;
      letter-spacing: 8px;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
      z-index: 1;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .otp-validity {
      font-size: 14px;
      color: #ef4444;
      font-weight: 500;
      background: rgba(239, 68, 68, 0.1);
      padding: 8px 16px;
      border-radius: 20px;
      display: inline-block;
      position: relative;
      z-index: 1;
    }
    
    .security-notice {
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 16px;
      padding: 20px;
      margin: 30px 0;
      display: flex;
      align-items: center;
      gap: 12px;
      text-align: left;
    }
    
    .security-icon {
      font-size: 24px;
      flex-shrink: 0;
    }
    
    .security-text {
      color: #92400e;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.6;
    }
    
    .footer {
      background: #f8fafc;
      padding: 30px 40px;
      text-align: center;
      color: #6b7280;
      font-size: 14px;
      border-top: 1px solid #e2e8f0;
    }
    
    .footer p {
      margin-bottom: 10px;
    }
    
    @media only screen and (max-width: 600px) {
      .email-container {
        margin: 0 10px;
        border-radius: 16px;
      }
      
      .header {
        padding: 30px 20px;
      }
      
      .content {
        padding: 40px 25px;
      }
      
      .footer {
        padding: 25px 20px;
      }
      
      .header h1 {
        font-size: 24px;
      }
      
      .reset-message {
        font-size: 16px;
      }
      
      .otp-code {
        font-size: 28px;
        letter-spacing: 6px;
      }
      
      .otp-container {
        padding: 30px 20px;
        margin: 20px 0;
      }
      
      .security-notice {
        flex-direction: column;
        text-align: center;
        gap: 8px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo"></div>
      <h1>Reset Your Password</h1>
      <p>Don't worry, we'll help you get back in</p>
    </div>
    
    <div class="content">
      <div class="reset-message">
        We received a password reset request for your account <span class="email-highlight">{{email}}</span>. Use the code below to reset your password.
      </div>
      
      <div class="otp-container">
        <div class="otp-label">Your password reset code:</div>
        <div class="otp-code">{{otp}}</div>
        <div class="otp-validity">⏰ Valid for 15 minutes</div>
      </div>
      
      <div class="security-notice">
        <div class="security-icon">🛡️</div>
        <div class="security-text">
          <strong>Security Alert:</strong> If you didn't request this password reset, please ignore this email and consider changing your password immediately.
        </div>
      </div>
    </div>
    
    <div class="footer">
      <p>This password reset link will expire in 15 minutes for security reasons.</p>
      <p>&copy; 2025 KeshavTechSolutions. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;