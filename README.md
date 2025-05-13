## This is a simple Node project as part of a training program

## Usage Instructions
1. Hello World
-node hello-world.js
2. HTTP Server
-node server.js
(Access at: http://localhost:3000)
4. File Operations
-node file-ops.js
(Creates welcome.txt and reads hello.txt)
5. Password Generator
-node password-generator.js
-Generates a random password with:

-length: 10,  
-	numbers: true,
-	symbols: true, 
-	uppercase: true,
-	lowercase: true,
-	
5. Email Sender
-node email-sender.js
-Sends test email using configured credentials
-Email Transport Configuration

{
  service: 'gmail',    // Email service provider
  auth: {
    user: process.env.EMAIL_USER,  // From .env.example
    pass: process.env.EMAIL_PASS   // From .env.example
  }
}

•	For Gmail, you can use an App Password instead of your main password


