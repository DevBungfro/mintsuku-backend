// email.ts

import { FastifyInstance } from 'fastify';
import { sendEmail } from '../controllers/email';

interface RequestBody {
    name: string;
    email: string;
    inquiry: string;
    message: string;
  }
  

const emailRoute = async (fastify: FastifyInstance) => {
  fastify.post('/send-email', async (request, reply) => {
    try {
      const { name, email, inquiry, message } = request.body as RequestBody;

      const result = await sendEmail(name, email, inquiry, message);

      if (result.success) {
        return { success: true, message: 'Email sent successfully' };
      } else {
        reply.code(500).send({ success: false, message: 'Error sending email' });
      }
    } catch (error) {
      console.error('Error processing email request:', error);
      reply.code(500).send({ success: false, message: 'Internal server error' });
    }
  });
};

export default emailRoute;
