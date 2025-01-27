import { inject } from "@angular/core";
import { AuthService } from "../services/app/auth";
import { RoutesService } from "../services/app/core";
export const TokenGuard = (route, state) => {
    const routesService = inject(RoutesService);
    const authService = inject(AuthService);
    if (authService.accessToken) {
        return true;
    }
    routesService.unauthenticated();
    return false;
};
//# sourceMappingURL=token.guard.js.map