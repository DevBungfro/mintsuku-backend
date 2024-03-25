"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (name, email, inquiry, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Configure nodemailer with your email provider's settings
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'moxcontactmes@gmail.com', // Your email address
                pass: 'auwk rkpw dcfb bfdu', // Your email password or app-specific password
            },
        });
        // Define the email options
        yield transporter.sendMail({
            from: `"${name} 👻" <${email}>`, // Sender's email address with name and emoji
            to: 'uyb777@gmail.com', // Recipient's email address (hardcoded for your example)
            subject: 'Contact Form Submission', // Subject line
            text: `Name: ${name}\nEmail: ${email}\n Inquiry: ${inquiry}\nMessage: ${message}`, // Plain text body
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p> <strong>Inquiry:</strong> ${inquiry}</p><p> <strong>Message:</strong> ${message}</p>`, // HTML body
        });
        // Send the email
        return { success: true, message: 'Email sent successfully' };
    }
    catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Error sending email' };
    }
});
exports.sendEmail = sendEmail;
