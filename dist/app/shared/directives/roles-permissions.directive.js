import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
let RolesPermissionsDirective = class RolesPermissionsDirective {
    constructor(templateRef, viewContainerRef, authService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.authService = authService;
        this.permissions = [];
        this.roles = [];
        this.currentPermissions = [];
        this.currentRoles = [];
        this.auth = this.authService.auth;
        this.permissions = this.authService.permissions;
        this.roles = this.authService.roles;
    }
    ngOnInit() {
    }
    set appRolesPermissions(val) {
        this.currentRoles = val.filter(element => element.startsWith('role:'));
        this.currentPermissions = val.filter(element => element.startsWith('permission:'));
        this.updateView();
    }
    updateView() {
        this.viewContainerRef.clear();
        if (this.checkRole() && (this.checkPermission() || this.checkRolePermission())) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
    checkRole() {
        let role = null;
        let hasRole = false;
        if (!this.currentRoles.length) {
            return true;
        }
        if (this.roles) {
            for (const currentRole of this.currentRoles) {
                role = this.roles.find(role => {
                    const splitCurrentRole = currentRole.split(':')[1];
                    const splitCurrentRoles = splitCurrentRole.split('|');
                    for (const splitRole of splitCurrentRoles) {
                        hasRole = (role.name?.toLowerCase() === splitRole?.toLowerCase());
                        if (hasRole) {
                            break;
                        }
                    }
                    return hasRole;
                });
                if (role) {
                    return true;
                }
            }
        }
        return false;
    }
    checkPermission() {
        let permission = null;
        let hasPermission = false;
        if (!this.currentPermissions.length) {
            return true;
        }
        if (this.permissions) {
            for (const currentPermission of this.currentPermissions) {
                permission = this.permissions.find(permission => {
                    const splitCurrentPermission = currentPermission.split(':')[1];
                    const splitCurrentPermissions = splitCurrentPermission.split('|');
                    for (const splitPermission of splitCurrentPermissions) {
                        hasPermission = (permission.name?.toLowerCase() === splitPermission?.toLowerCase());
                        if (hasPermission) {
                            break;
                        }
                    }
                    return hasPermission;
                });
                if (permission) {
                    return true;
                }
            }
        }
        return false;
    }
    checkRolePermission() {
        let permission = null;
        let hasPermission = false;
        if (!this.currentPermissions.length) {
            return true;
        }
        if (this.roles) {
            for (const role of this.roles) {
                for (const currentPermission of this.currentPermissions) {
                    if (role.permissions) {
                        permission = role.permissions.find(permission => {
                            const splitCurrentPermission = currentPermission.split(':')[1];
                            const splitCurrentPermissions = splitCurrentPermission.split('|');
                            for (const splitPermission of splitCurrentPermissions) {
                                hasPermission = (permission.name?.toLowerCase() === splitPermission?.toLowerCase());
                                if (hasPermission) {
                                    break;
                                }
                            }
                            return hasPermission;
                        });
                        if (permission) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
};
__decorate([
    Input()
], RolesPermissionsDirective.prototype, "appRolesPermissions", null);
RolesPermissionsDirective = __decorate([
    Directive({
        selector: '[appRolesPermissions]'
    })
], RolesPermissionsDirective);
export { RolesPermissionsDirective };
//# sourceMappingURL=roles-permissions.directive.js.map