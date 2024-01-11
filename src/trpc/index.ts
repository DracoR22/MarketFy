import { authRouter } from "./routers/auth-router";
import { ProductRouter } from "./routers/product-router";
import { router } from "./trpc";

export const appRouter = router({
   auth: authRouter,
   products: ProductRouter
})

export type AppRouter = typeof appRouter