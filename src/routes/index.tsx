import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const signed = true;

    return (
        <>
            {signed ? <AppRoutes /> : <AuthRoutes />}
        </>
    )
}