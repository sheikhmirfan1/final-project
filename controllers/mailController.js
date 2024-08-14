import transport from "../middleware/nodeMailer.js";

const sendEmail = async (req, res) => {
    const {subject,text,email} = req.body
   
   
  try {
      await transport.sendMail({
        from: email,
        to: "mohammad.irfan.sheikh@students.beaminstitute.org",
        subject:subject,
        text: `${text}  from : ${email}`,
      });
      res.json({ message: "Email sent successfully" });
  }

  catch(err){
   console.log("server error 🔴", err);
   res.status(500).json({ error: `${err.message} 🔴` });
  }
  
}

export {sendEmail}