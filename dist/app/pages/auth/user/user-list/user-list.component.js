import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
import { BreadcrumbEnum, SeverityButtonActionEnum, IconButtonActionEnum, IdButtonActionEnum, LabelButtonActionEnum, TableEnum } from "../../../../shared/enums";
import { debounceTime } from "rxjs";
let UserListComponent = class UserListComponent {
    constructor(authService, coreService, breadcrumbService, messageService, router, usersHttpService) {
        this.authService = authService;
        this.coreService = coreService;
        this.breadcrumbService = breadcrumbService;
        this.messageService = messageService;
        this.router = router;
        this.usersHttpService = usersHttpService;
        this.PrimeIcons = PrimeIcons;
        this.IconButtonActionEnum = IconButtonActionEnum;
        this.SeverityButtonActionEnum = SeverityButtonActionEnum;
        this.LabelButtonActionEnum = LabelButtonActionEnum;
        this.BreadcrumbEnum = BreadcrumbEnum;
        this.buttonActions = this.buildButtonActions;
        this.isButtonActions = false;
        this.columns = this.buildColumns;
        this.search = new FormControl('');
        this.selectedItems = [];
        this.items = [];
        this.TableEnum = TableEnum;
        this.breadcrumbService.setItems([{ label: BreadcrumbEnum.USERS }]);
        this.paginator = this.coreService.paginator;
        this.search.valueChanges.pipe(debounceTime(500)).subscribe(value => {
            this.findUsers();
        });
    }
    ngOnInit() {
        this.findUsers();
    }
    findUsers(page = 0) {
        this.usersHttpService.findUsers(page, this.search.value)
            .subscribe((response) => {
            this.paginator = response.pagination;
            this.items = response.data;
        });
    }
    get buildColumns() {
        return [
            { field: 'username', header: 'Usuario' },
            { field: 'lastname', header: 'Apellidos' },
            { field: 'name', header: 'Nombres' },
            { field: 'email', header: 'Correo' },
            { field: 'roles', header: 'Roles' },
            { field: 'suspendedAt', header: 'Estado' }
        ];
    }
    /** Button Actions**/
    get buildButtonActions() {
        return [
            {
                id: IdButtonActionEnum.UPDATE,
                label: LabelButtonActionEnum.UPDATE,
                icon: IconButtonActionEnum.UPDATE,
                command: () => {
                    if (this.selectedItem?.id)
                        this.redirectEditForm(this.selectedItem.id);
                },
            },
            {
                id: IdButtonActionEnum.DELETE,
                label: LabelButtonActionEnum.DELETE,
                icon: IconButtonActionEnum.DELETE,
                command: () => {
                    if (this.selectedItem?.id)
                        this.remove(this.selectedItem.id);
                },
            },
            {
                id: IdButtonActionEnum.SUSPEND,
                label: LabelButtonActionEnum.SUSPEND,
                icon: IconButtonActionEnum.SUSPEND,
                command: () => {
                    if (this.selectedItem?.id)
                        this.suspend(this.selectedItem.id);
                },
            },
            {
                id: IdButtonActionEnum.REACTIVATE,
                label: LabelButtonActionEnum.REACTIVATE,
                icon: IconButtonActionEnum.REACTIVATE,
                command: () => {
                    if (this.selectedItem?.id)
                        this.reactivate(this.selectedItem.id);
                },
            },
        ];
    }
    redirectCreateForm() {
        this.router.navigate(['/admin/users', 'new']);
    }
    redirectEditForm(id) {
        this.router.navigate(['/admin/users', id]);
    }
    remove(id) {
        // this.messageService.questionDelete()
        //   .then((result) => {
        //     if (result.isConfirmed) {
        //       this.usersHttpService.remove(id).subscribe((user) => {
        //         this.items = this.items.filter(item => item.id !== user.id);
        //         this.paginator.totalItems--;
        //       });
        //     }
        //   });
    }
    removeAll() {
        // this.messageService.questionDelete().then((result) => {
        //   if (result.isConfirmed) {
        //     this.usersHttpService.removeAll(this.selectedItems).subscribe((users) => {
        //       this.selectedItems.forEach(userDeleted => {
        //         this.items = this.items.filter(user => user.id !== userDeleted.id);
        //         this.paginator.totalItems--;
        //       });
        //       this.selectedItems = [];
        //     });
        //   }
        // });
    }
    suspend(id) {
        this.usersHttpService.suspend(id).subscribe(user => {
            const index = this.items.findIndex(user => user.id === id);
            this.items[index] = user;
        });
    }
    reactivate(id) {
        this.usersHttpService.reactivate(id).subscribe(user => {
            const index = this.items.findIndex(user => user.id === id);
            this.items[index] = user;
        });
    }
    validateButtonActions(item) {
        this.buttonActions = this.buildButtonActions;
        if (item.suspendedAt) {
            this.buttonActions.splice(this.buttonActions.findIndex(actionButton => actionButton.id === IdButtonActionEnum.SUSPEND), 1);
        }
        if (!item.suspendedAt) {
            this.buttonActions.splice(this.buttonActions.findIndex(actionButton => actionButton.id === IdButtonActionEnum.REACTIVATE), 1);
        }
    }
    paginate(event) {
        this.findUsers(event.page);
    }
    selectItem(item) {
        this.isButtonActions = true;
        this.selectedItem = item;
        this.validateButtonActions(item);
    }
};
UserListComponent = __decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: ['./user-list.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], UserListComponent);
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map