import nodemailer from 'nodemailer';

export const sendEmail = async (name: string, email: string, inquiry: string, message: string): Promise<{ success: boolean, message: string }> => {
  try {
    // Configure nodemailer with your email provider's settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'moxcontactmes@gmail.com', // Your email address
        pass: 'auwk rkpw dcfb bfdu',    // Your email password or app-specific password
      },
    });

    // Define the email options
    await transporter.sendMail({
      from: `"${name} 👻" <${email}>`, // Sender's email address with name and emoji
      to: 'uyb777@gmail.com',           // Recipient's email address (hardcoded for your example)
      subject: 'Contact Form Submission', // Subject line
      text: `Name: ${name}\nEmail: ${email}\n Inquiry: ${inquiry}\nMessage: ${message}`, // Plain text body
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p> <strong>Inquiry:</strong> ${inquiry}</p><p> <strong>Message:</strong> ${message}</p>`, // HTML body
    });

    // Send the email

    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error sending email' };
  }
};
