import nodemailer from "nodemailer";

export default async function emailAPI(req, res) {
  const { name, email, message } = req.body;

  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nodiinchiacchierino@gmail.com",
      pass: "xaloktlelehvdxip",
    },
  });

  const mailOpt = {
    from: email,
    to: "nodiinchiacchierino@gmail.com",
    subject: `Nuovo messaggio`,
    message:message,
  };

  try {
    await transporter.sendMail(mailOpt, (error, info) => {
      if (error) {
        console.log("error!!!" + error);
      } else {
        console.log("Inviata" + info.messageId);
        console.log("Nome: "+ message)
      }
    });
  } catch (error) {
    console.log(error);
  }
}
