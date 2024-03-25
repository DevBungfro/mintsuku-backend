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
// Import necessary modules
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const email_1 = __importDefault(require("./routes/email"));
// Create a Fastify instance
const app = (0, fastify_1.default)();
// Register the CORS plugin
app.register(cors_1.default, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Forwarded-For', 'X-Forwarded-Host', 'X-Forwarded-Proto', 'X-Request-With'],
});
// Define a route
app.get('/', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return "Hello World!";
}));
app.register(email_1.default);
// Run the server
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app.listen(3001);
        console.log('Server is running on http://localhost:3001');
    }
    catch (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
});
// Start the server
start();
