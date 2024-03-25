"use strict";
// email.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../controllers/email");
const emailRoute = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.post('/send-email', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, email, inquiry, message } = request.body;
            const result = yield (0, email_1.sendEmail)(name, email, inquiry, message);
            if (result.success) {
                return { success: true, message: 'Email sent successfully' };
            }
            else {
                reply.code(500).send({ success: false, message: 'Error sending email' });
            }
        }
        catch (error) {
            console.error('Error processing email request:', error);
            reply.code(500).send({ success: false, message: 'Internal server error' });
        }
    }));
});
exports.default = emailRoute;
