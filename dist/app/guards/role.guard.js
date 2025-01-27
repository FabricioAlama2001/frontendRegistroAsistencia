import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/app/auth";
export const RoleGuard = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    console.log(route.url);
    if (!authService.auth) {
        router.navigate(['/common/403']);
        return false;
    }
    const authRole = authService.role;
    if (authRole) {
        for (const role of route.data['roles']) {
            if (role.toUpperCase() === authRole.code.toUpperCase())
                return true;
        }
    }
    router.navigate(['/common/403']);
    return false;
};
//# sourceMappingURL=role.guard.js.map