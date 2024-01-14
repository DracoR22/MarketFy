"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var auth_router_1 = require("./routers/auth-router");
var payment_router_1 = require("./routers/payment-router");
var product_router_1 = require("./routers/product-router");
var trpc_1 = require("./trpc");
exports.appRouter = (0, trpc_1.router)({
    auth: auth_router_1.authRouter,
    products: product_router_1.ProductRouter,
    payment: payment_router_1.paymentRouter
});
