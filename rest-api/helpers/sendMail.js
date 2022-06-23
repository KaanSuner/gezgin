import nodemailer from "nodemailer";
import { google } from "googleapis";
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
import dotenv from "dotenv";
dotenv.config();

const { G_CLIENT_ID, G_CLIENT_SECRET, G_REFRESH_TOKEN, ADMIN_EMAIL } =
  process.env;

const oauth2client = new OAuth2(
  G_CLIENT_ID,
  G_CLIENT_SECRET,
  G_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

export const sendEmailRegister = (to, url, text) => {
   oauth2client.setCredentials({
    refresh_token: G_REFRESH_TOKEN,
  });
  
  const accessToken = oauth2client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: ADMIN_EMAIL,
      clientId: G_CLIENT_ID,
      clientSecret: G_CLIENT_SECRET,
      refreshToken: G_REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: ADMIN_EMAIL,
    to: to,
    subject: "HESABINI AKTİF ET",
    html: `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
    <title>Passioncorners | Account Activation</title>
    <style>
      body {
        background-color: #333333;
        height: 100vh;
        font-family: "Roboto", sans-serif;
        color: #fff;
        position: relative;
        text-align: center;
      }
      .container {
        max-width: 700px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
      .wrapper {
        padding: 0 15px;
      }
      .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }
      span {
        color: #42a72b;
      }
      button {
        padding: 1em 6em;
        border-radius: 5px;
        border: 0;
        background-color: #42a72b;
        transition: all 0.3s ease-in;
        cursor: pointer;
        color:white;
      }
      button:hover {
        background-color: hsl(45, 70%, 51%);
        transition: all 0.3s ease-in;
      }
      .spacing {
        margin-top: 5rem;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="wrapper">
        <div class="card">
          <span>Gezgine Hoşgeldin !</span> 
          <p>Lütfen aşağıdaki butondan email adresini doğrula.</p>
          <a href=${url}><button>${text}</button></a>
          <p class="spacing">
            Eğer buton doğru çalışmıyorsa aşağıdaki linkten şansını deneybilirsin 👇🏻
          </p>
          <div>${url}</div>
        </div>
      </div>
    </div>
  </body>
</html>
  `,
  };

   smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) return { err };
    return info;
  });
};

export const sendEmailReset = (to, url, text) => {
  oauth2client.setCredentials({
   refresh_token: G_REFRESH_TOKEN,
 });
 
 const accessToken = oauth2client.getAccessToken();
 const smtpTransport = nodemailer.createTransport({
   service: "gmail",
   auth: {
     type: "OAuth2",
     user: ADMIN_EMAIL,
     clientId: G_CLIENT_ID,
     clientSecret: G_CLIENT_SECRET,
     refreshToken: G_REFRESH_TOKEN,
     accessToken,
   },
 });

 const mailOptions = {
   from: ADMIN_EMAIL,
   to: to,
   subject: "Parola sıfırlama",
   html: `
 <html lang="en">
 <head>
   <meta charset="UTF-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
     rel="stylesheet"
   />
   <title>Passioncorners | Account Activation</title>
   <style>
     body {
       background-color: #333333;
       height: 100vh;
       font-family: "Roboto", sans-serif;
       color: #fff;
       position: relative;
       text-align: center;
     }
     .container {
       max-width: 700px;
       width: 100%;
       height: 100%;
       margin: 0 auto;
     }
     .wrapper {
       padding: 0 15px;
     }
     .card {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       width: 100%;
     }
     span {
       color: #42a72b;
     }
     button {
       padding: 1em 6em;
       border-radius: 5px;
       border: 0;
       background-color: #42a72b;
       transition: all 0.3s ease-in;
       cursor: pointer;
       color:white;
     }
     button:hover {
       background-color: hsl(45, 70%, 51%);
       transition: all 0.3s ease-in;
     }
     .spacing {
       margin-top: 5rem;
     }
   </style>
 </head>
 <body>
   <div class="container">
     <div class="wrapper">
       <div class="card">
         <span>Gezgin parolanı sıfırla !</span> 
         <p>Lütfen aşağıdaki butondan parolanı sıfırla.</p>
         <a href=${url}><button>${text}</button></a>
         <p class="spacing">
           Eğer buton doğru çalışmıyorsa aşağıdaki linkten şansını deneybilirsin 👇🏻
         </p>
         <div>${url}</div>
       </div>
     </div>
   </div>
 </body>
</html>
 `,
 };

  smtpTransport.sendMail(mailOptions, (err, info) => {
   if (err) return { err };
   return info;
 });
};



