import nodemailer from "nodemailer"
import { WELCOME_EMAIL_TEMPLATE } from "./templates"


export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.NODEMAILER_EMAIL,
        pass:process.env.NODEMAILER_PASSWORD
    }
})

export const sendWelcomeEmail = async ({email,name,intro}:WelcomeEmailData)=>{ 
    const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace('{{name}}',name).replace('{{intro}}',intro);
    const mailOptions = {
        from:`"Signlist" <signlist@stock.pro>`,
        to:email,
        subject:"Welcome to Signlist - Your Investment Journey Begins Here!",
        text:`Thanks for joining Signlist`,
        html:htmlTemplate
    }   
    await transporter.sendMail(mailOptions);
}