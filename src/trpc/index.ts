import { authRouter } from "./routers/auth-router";
import { paymentRouter } from "./routers/payment-router";
import { ProductRouter } from "./routers/product-router";
import { router } from "./trpc";

export const appRouter = router({
   auth: authRouter,
   products: ProductRouter,
   payment: paymentRouter
})

export type AppRouter = typeof appRouter