// Import necessary modules
import fastify from 'fastify';
import cors from '@fastify/cors'
import emailRoute from './routes/email';

// Create a Fastify instance
const app = fastify();

// Register the CORS plugin
app.register(cors, { 
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Forwarded-For', 'X-Forwarded-Host', 'X-Forwarded-Proto', 'X-Request-With'],
  })

// Define a route
app.get('/', async (request, reply) => {
  return "Hello World!";
});

app.register(emailRoute);

// Run the server
const start = async () => {
  try {
    await app.listen(3001);
    console.log('Server is running on http://localhost:3001');
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

// Start the server
start();
