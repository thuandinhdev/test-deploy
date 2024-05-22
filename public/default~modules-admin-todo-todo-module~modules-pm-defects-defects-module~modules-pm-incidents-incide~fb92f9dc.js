(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-admin-todo-todo-module~modules-pm-defects-defects-module~modules-pm-incidents-incide~fb92f9dc"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>&nbsp;{{'todos.title' | translate}}</h2>\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form class=\"form\" [formGroup]=\"createTodoForm\" (ngSubmit)=\"onSubmit()\">\r\n\t<div class=\"modal-body\">\r\n\t\t<div class=\"form-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"description\">{{'todos.create.fields.description' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\r\n\t\t\t\t\t\t<textarea type=\"text\" placeholder=\"{{'todos.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" id=\"description\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.description.errors }\"></textarea>\r\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.description.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.required\">{{'todos.create.error_messages.message1' | translate}}</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.minlength\">{{'todos.create.error_messages.message2' | translate}}</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.maxlength\">{{'todos.create.error_messages.message3' | translate}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"due_date\">{{'todos.create.fields.due_date' | translate}}</label>\r\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" [minDate]=\"minDate\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'todos.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.due_date.errors }\" />\r\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.due_date.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div>{{'todos.create.error_messages.message5' | translate}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\r\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.create' | translate}}</button>\r\n\t</div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n\t<h2 class=\"modal-title font-weight-normal\"><i class=\"fa fa-list-ul\" aria-hidden=\"true\"></i>&nbsp;{{'todos.title' | translate}}</h2>\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n<form class=\"form\" [formGroup]=\"editTodoForm\" (ngSubmit)=\"onSubmit()\">\r\n\t<div class=\"modal-body\">\r\n\t\t<div class=\"form-body\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"description\">{{'todos.create.fields.description' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\r\n\t\t\t\t\t\t<textarea type=\"text\" placeholder=\"{{'todos.create.placeholders.placeholder1' | translate}}\" class=\"form-control\" id=\"description\" formControlName=\"description\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.description.errors }\"></textarea>\r\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.description.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.required\">{{'todos.create.error_messages.message1' | translate}}</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.minlength\">{{'todos.create.error_messages.message2' | translate}}</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.description.errors.maxlength\">{{'todos.create.error_messages.message3' | translate}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"due_date\">{{'todos.create.fields.due_date' | translate}}</label>\r\n\t\t\t\t\t\t<div class=\"position-relative has-icon-left\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" #dp=\"bsDatepicker\" bsDatepicker [bsConfig]=\"datepickerConfig\" formControlName=\"due_date\" id=\"due_date\" placeholder=\"{{'todos.create.placeholders.placeholder3' | translate}}\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.due_date.errors }\" />\r\n\t\t\t\t\t\t\t<div class=\"form-control-position\"><i class=\"ft-calendar\"></i></div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.due_date.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"todoControl.due_date.errors.required\">{{'todos.create.error_messages.message5' | translate}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\">\r\n\t\t\t\t\t\t<label for=\"status\">{{'todos.create.fields.status' | translate}}<span class=\"text-danger\">&nbsp;*</span></label>\r\n\t\t\t\t\t\t<ng-select [items]=\"('todos.status' | translate)\"\r\n\t\t\t\t\t\t\tbindLabel=\"label\"\r\n\t\t\t\t\t\t\tbindValue=\"id\"\r\n\t\t\t\t\t\t\t[multiple]=\"false\"\r\n\t\t\t\t\t\t\tformControlName=\"status\"\r\n\t\t\t\t\t\t\tplaceholder=\"{{'todos.create.placeholders.placeholder2' | translate}}\"\r\n\t\t\t\t\t\t\t[searchable]=\"true\" [ngClass]=\"{ 'is-invalid': isFormSubmitted && todoControl.status.errors }\">\r\n\t\t\t\t\t\t\t<ng-template ng-option-tmp let-item=\"item\">{{item.label}}</ng-template>\r\n\t\t\t\t\t\t</ng-select>\r\n\t\t\t\t\t\t<div *ngIf=\"isFormSubmitted && todoControl.status.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"todoControl.status.errors.required\">{{'todos.create.error_messages.message4' | translate}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t<button type=\"button\" class=\"btn btn-cancel mb-0\" (click)=\"onCancel()\">{{'common.close' | translate}}</button>\r\n\t\t<button type=\"submit\" class=\"btn btn-submit mb-0\">{{'common.update' | translate}}</button>\r\n\t</div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"isPageloaded\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card bg-transparent\">\r\n\t\t\t<div class=\"card-header p-0\">\r\n\t\t\t\t<h4 class=\"sub-title mt-2\"><span>{{'todos.title' | translate}}</span></h4>\r\n\t\t\t\t<button class=\"btn btn-create mr-2 mb-0\" tooltip=\"{{'common.create' | translate}}\" (click)=\"openTodoCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_create']\">\r\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-content pt-1\" *ngIf=\"todos.open.length > 0\">\r\n\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t<div class=\"drag-container\">\r\n\t\t\t\t\t\t<div cdkDropList #pendingList=\"cdkDropList\" [cdkDropListData]=\"todos.open\" [cdkDropListConnectedTo]=\"[doneList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\r\n\t\t\t\t\t\t\t<div class=\"item-box\" *ngFor=\"let item of todos.open\" cdkDrag>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"checkbox-container checkbox-container-custom  p-1 mb-1 mt-0 mr-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-control\" name=\"status\" id=\"status{{item.id}}\" (change)=\"changeStatus(item, 2)\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"checkbox-checkmark\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'description'\" [fieldValue]=\"item.description\" [elementFor]=\"'todos.inline_edit.description' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveTodosDetail(item, 'description', $event);\"></inline-edit-textarea>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'due_date'\" [fieldValue]=\"item.due_date\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" [format]=\"loginUser.settings.date_format\" (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\"></inline-edit-date>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"isPageloaded\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card pl-2 pr-2\">\r\n\t\t\t\t<div class=\"card-header pl-0 pr-0 border-bottom\">\r\n\t\t\t\t\t<h4 class=\"main-title mb-0 mt-2\"><span>{{'todos.title' | translate}}</span></h4>\r\n\t\t\t\t\t<button class=\"btn btn-create mb-0\" (click)=\"openTodoCreateModal()\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_create']\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-content pt-3 pb-3\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"drag-container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"section-heading\">{{'common.status.open' | translate}}</div>\r\n\t\t\t\t\t\t\t\t\t<div cdkDropList #pendingList=\"cdkDropList\" [cdkDropListData]=\"todos.open\" [cdkDropListConnectedTo]=\"[doneList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-box\" *ngFor=\"let item of todos.open\" cdkDrag>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'description'\" [fieldValue]=\"item.description\" [elementFor]=\"'todos.inline_edit.description' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveTodosDetail(item, 'description', $event);\"></inline-edit-textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.due_date\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.due_date | dateTimeFormatFilter: loginUser.settings.date_format }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-4 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'due_date'\" [fieldValue]=\"item.due_date\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" [format]=\"loginUser.settings.date_format\" (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\"></inline-edit-date>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 actions-dropdown text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-1\" aria-controls=\"dropdown-basic-1\"><i class=\"fa fa-ellipsis-v\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-1\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_delete']\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  (click)=\"deleteTodo(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<div class=\"drag-container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"section-heading\">{{'common.status.completed' | translate}}</div>\r\n\t\t\t\t\t\t\t\t\t<div cdkDropList #doneList=\"cdkDropList\" [cdkDropListData]=\"todos.completed\" [cdkDropListConnectedTo]=\"[pendingList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-box\" *ngFor=\"let item of todos.completed\" cdkDrag>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-textarea [name]=\"'description'\" [fieldValue]=\"item.description\" [elementFor]=\"'todos.inline_edit.description' | translate\" [isRequired]=\"'true'\" (updateValue)=\"saveTodosDetail(item, 'description', $event);\"></inline-edit-textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.due_date\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ item.due_date | dateTimeFormatFilter: loginUser.settings.date_format }}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-md-5 text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<inline-edit-date [name]=\"'due_date'\" [fieldValue]=\"item.due_date\" [elementFor]=\"'todos.inline_edit.due_date' | translate\" [isRequired]=\"'true'\" [datepickerConfigs]=\"datepickerConfigs\" [format]=\"loginUser.settings.date_format\" (updateValue)=\"saveTodosDetail(item, 'due_date', $event);\"></inline-edit-date>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-2 actions-dropdown text-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" dropdown>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button dropdownToggle class=\"dropdown-toggle btn-action\" type=\"button\" id=\"button-basic-2\" aria-controls=\"dropdown-basic-2\"><i class=\"fa fa-ellipsis-v\"></i></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"dropdown-basic-2\" *dropdownMenu class=\"dropdown-menu animated fadeIn\" role=\"menu\" aria-labelledby=\"button-basic-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_edit']\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"openTodoEditModal(item)\" class=\"dropdown-item btn btn-edit btn-raised\" tooltip=\"{{'common.edit' | translate}}\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li role=\"menuitem\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'todos_delete']\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a  (click)=\"deleteTodo(item.id)\" class=\"dropdown-item btn btn-delete btn-raised\" tooltip=\"{{'common.delete' | translate}}\"><i class=\"fa fa-trash-o\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/todo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/todo.service.ts ***!
  \***********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TodoService.prototype.getAllTodos = function (params) {
        return this.http.post(this.apiUrl + "/api/todos/list", params);
    };
    TodoService.prototype.changeTodosStatus = function (todos) {
        return this.http.post(this.apiUrl + "/api/todos/update-list", todos);
    };
    TodoService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/todos");
    };
    TodoService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/todos/" + id);
    };
    TodoService.prototype.create = function (todo) {
        return this.http.post(this.apiUrl + "/api/todos", todo);
    };
    TodoService.prototype.update = function (todo) {
        return this.http.put(this.apiUrl + "/api/todos/" + todo.id, todo);
    };
    TodoService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/todos/" + id);
    };
    TodoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9jb21wb25lbnRzL2NyZWF0ZS10b2RvLW1vZGFsL2NyZWF0ZS10b2RvLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateTodoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoModalComponent", function() { return CreateTodoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");











var CreateTodoModalComponent = /** @class */ (function () {
    function CreateTodoModalComponent(translate, datepipe, bsModalRef, formBuilder, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.datepipe = datepipe;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_8__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    CreateTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.minDate = new Date();
        this.loadForms();
    };
    CreateTodoModalComponent.prototype.loadForms = function () {
        this.createTodoForm = this.formBuilder.group({
            description: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]],
            due_date: [null],
            module_id: [this.todoParams.module_id],
            module_related_id: [this.todoParams.module_related_id]
        });
    };
    Object.defineProperty(CreateTodoModalComponent.prototype, "todoControl", {
        get: function () { return this.createTodoForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.createTodoForm.invalid) {
            return;
        }
        this.createTodoForm.value.due_date = this.datepipe.transform(this.createTodoForm.value.due_date, 'yyyy-MM-dd');
        this.todoService.create(this.createTodoForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.create'), _this.translate.instant('todos.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    CreateTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    CreateTodoModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateTodoModalComponent.prototype, "todoParams", void 0);
    CreateTodoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-todo-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-todo-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-todo-modal.component.scss */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], CreateTodoModalComponent);
    return CreateTodoModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9jb21wb25lbnRzL2VkaXQtdG9kby1tb2RhbC9lZGl0LXRvZG8tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditTodoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoModalComponent", function() { return EditTodoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/helpers/admin.helper */ "./src/app/core/helpers/admin.helper.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");











var EditTodoModalComponent = /** @class */ (function () {
    function EditTodoModalComponent(translate, bsModalRef, formBuilder, toastr, userService, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.userService = userService;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isFormSubmitted = false;
        this.users = [];
        this.assignMembers = [];
        this.datepickerConfig = _core_helpers_admin_helper__WEBPACK_IMPORTED_MODULE_7__["datepickerConfig"];
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
        this.datepickerConfig.dateInputFormat = this.loginUser.settings.date_format;
    }
    EditTodoModalComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.loadForms();
    };
    EditTodoModalComponent.prototype.loadForms = function () {
        if (this.todo.due_date) {
            this.todo.due_date = new Date(this.todo.due_date);
        }
        this.editTodoForm = this.formBuilder.group({
            id: [this.todo.id],
            description: [this.todo.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]],
            status: [this.todo.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            due_date: [this.todo.due_date],
            module_id: [this.todo.module_id],
            module_related_id: [this.todo.module_related_id]
        });
    };
    Object.defineProperty(EditTodoModalComponent.prototype, "todoControl", {
        get: function () { return this.editTodoForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditTodoModalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.editTodoForm.invalid) {
            return;
        }
        this.todoService.update(this.editTodoForm.value)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.event.emit({ data: true });
            _this.onCancel();
        }, function (error) {
            _this.onCancel();
        });
    };
    EditTodoModalComponent.prototype.onCancel = function () {
        this.onClose.next(false);
        this.bsModalRef.hide();
    };
    EditTodoModalComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    EditTodoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-todo-modal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-todo-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-todo-modal.component.scss */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], EditTodoModalComponent);
    return EditTodoModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".checkbox-container-custom {\n  padding-left: 0 !important;\n}\n\n.section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  max-width: 100%;\n  vertical-align: top;\n  padding: 10px 0;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 30px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 8px;\n}\n\n.item-box:hover {\n  box-shadow: 0 6px 0px 0 rgba(0, 0, 0, 0.01), 0 15px 32px 0 rgba(0, 0, 0, 0.06);\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi90b2RvL3BhZ2VzL3RvZG8tZGV0YWlsL0M6XFxNQU1QXFxodGRvY3NcXHRlc3QtYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXHRvZG9cXHBhZ2VzXFx0b2RvLWRldGFpbFxcdG9kby1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9wYWdlcy90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VEOztBREFBO0VBRUMsZUFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VEOztBREFBO0VBQ0MsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dEOztBREZDO0VBQ0MsOEVBQUE7QUNJRjs7QUREQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLG1CQUFBO0FDRUQ7O0FEQUE7RUFDQyxVQUFBO0FDR0Q7O0FEREE7RUFDQyxzREFBQTtBQ0lEOztBREZBO0VBQ0Msc0RBQUE7QUNLRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9wYWdlcy90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveC1jb250YWluZXItY3VzdG9tIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4uc2VjdGlvbi1oZWFkaW5nIHtcclxuXHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRyYWctY29udGFpbmVyIHtcclxuXHQvLyB3aWR0aDogNjYwcHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLml0ZW0tbGlzdCB7XHJcblx0bWluLWhlaWdodDogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLml0ZW0tYm94IHtcclxuXHRwYWRkaW5nOiA4cHggMTBweDtcclxuXHRib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRjdXJzb3I6IG1vdmU7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHQmOmhvdmVyIHtcclxuXHRcdGJveC1zaGFkb3c6IDAgNnB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMTVweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHR9XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuXHQwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG5cdDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbi5pdGVtLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuaXRlbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iLCIuY2hlY2tib3gtY29udGFpbmVyLWN1c3RvbSB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWxpc3Qge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaXRlbS1ib3gge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IG1vdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pdGVtLWJveDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4wMSksIDAgMTVweCAzMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLml0ZW0tbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5pdGVtLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");













var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(translate, ngxRolesService, modalService, http, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.isPageloaded = false;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn"
        };
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': this.module_id,
            'module_related_id': this.module_related_id
        };
        this.getTodos();
    };
    TodoDetailComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoDetailComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos(this.todoParams)
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) { });
    };
    TodoDetailComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
        }, function (error) { });
    };
    TodoDetailComponent.prototype.changeStatus = function (todo, status) {
        var _this = this;
        todo.status = status;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.openTodoCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todoParams: this.todoParams
            }
        };
        this.modalRef = this.modalService.show(_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_11__["CreateTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.openTodoEditModal = function (todo) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todo: todo
            }
        };
        this.modalRef = this.modalService.show(_components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__["EditTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoDetailComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.todoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('todos.messages.delete'), _this.translate.instant('todos.title'));
                    _this.getTodos();
                });
            }
        });
    };
    TodoDetailComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoDetailComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TodoDetailComponent.prototype, "module_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TodoDetailComponent.prototype, "module_related_id", void 0);
    TodoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo-detail.component.scss */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_9__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo/todo.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo/todo.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  width: 600px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #E9ECEF;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 60px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 20px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  border-radius: 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi90b2RvL3BhZ2VzL3RvZG8vQzpcXE1BTVBcXGh0ZG9jc1xcdGVzdC1hbmd1bGFyL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcdG9kb1xccGFnZXNcXHRvZG9cXHRvZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9wYWdlcy90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NEOztBRENBO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VEOztBREFBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHRDs7QUREQTtFQUNDLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxzQkFBQTtNQUFBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNJRDs7QURGQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLG1CQUFBO0FDR0Q7O0FEREE7RUFDQyxVQUFBO0FDSUQ7O0FERkE7RUFDQyxzREFBQTtBQ0tEOztBREhBO0VBQ0Msc0RBQUE7QUNNRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vdG9kby9wYWdlcy90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1oZWFkaW5nIHtcclxuXHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRyYWctY29udGFpbmVyIHtcclxuXHR3aWR0aDogNjAwcHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMCAyNXB4IDI1cHggMDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGO1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5pdGVtLWxpc3Qge1xyXG5cdG1pbi1oZWlnaHQ6IDYwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5pdGVtLWJveCB7XHJcblx0cGFkZGluZzogOHB4IDEwcHg7XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Y3Vyc29yOiBtb3ZlO1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcblx0MCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuXHQwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuIiwiLnNlY3Rpb24taGVhZGluZyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZHJhZy1jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUVDRUY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pdGVtLWJveCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogbW92ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLml0ZW0tbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5pdGVtLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/todo/pages/todo/todo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/todo/pages/todo/todo.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/todo.service */ "./src/app/core/services/todo.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");














var TodoComponent = /** @class */ (function () {
    function TodoComponent(translate, ngxRolesService, modalService, http, toastr, todoService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.modalService = modalService;
        this.http = http;
        this.toastr = toastr;
        this.todoService = todoService;
        this.authenticationService = authenticationService;
        this.datepickerConfigs = { dateInputFormat: 'YYYY-MM-DD' };
        this.isPageloaded = false;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.todoParams = {
            'length': 10,
            'module_id': 6,
            'module_related_id': 0
        };
        this.getTodos();
    };
    TodoComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.changeTodosStatus();
    };
    TodoComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getAllTodos({ 'length': 10 })
            .subscribe(function (data) {
            _this.todos = data;
            _this.isPageloaded = true;
        }, function (error) { });
    };
    TodoComponent.prototype.changeTodosStatus = function () {
        var _this = this;
        this.todoService.changeTodosStatus(this.todos)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.status'), _this.translate.instant('todos.title'));
            _this.getTodos();
        }, function (error) { });
    };
    TodoComponent.prototype.openTodoCreateModal = function () {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todoParams: this.todoParams
            }
        };
        this.modalRef = this.modalService.show(_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_12__["CreateTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoComponent.prototype.openTodoEditModal = function (todo) {
        var _this = this;
        var modalConfigs = {
            animated: true,
            keyboard: true,
            backdrop: true,
            ignoreBackdropClick: false,
            class: "inmodal modal-dialog-centered modal-md animated fadeIn",
            initialState: {
                todo: todo
            }
        };
        this.modalRef = this.modalService.show(_components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_13__["EditTodoModalComponent"], modalConfigs);
        this.modalRef.content.event.subscribe(function (data) {
            _this.getTodos();
        });
    };
    TodoComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: this.translate.instant('common.swal.title'),
            text: this.translate.instant('common.swal.text'),
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: this.translate.instant('common.swal.confirmButtonText'),
            cancelButtonText: this.translate.instant('common.swal.cancelButtonText')
        }).then(function (result) {
            if (result.value) {
                _this.todoService.delete(id)
                    .subscribe(function (data) {
                    _this.toastr.success(_this.translate.instant('todos.messages.delete'), _this.translate.instant('todos.title'));
                    _this.getTodos();
                });
            }
        });
    };
    TodoComponent.prototype.saveTodosDetail = function (todo, index, value) {
        var _this = this;
        todo[index] = value;
        this.todoService.update(todo)
            .subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('todos.messages.update'), _this.translate.instant('todos.title'));
            _this.getTodos();
        });
    };
    TodoComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"] }
    ]; };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/todo/pages/todo/todo.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./todo.component.scss */ "./src/app/modules/admin/todo/pages/todo/todo.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxRolesService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _core_services_todo_service__WEBPACK_IMPORTED_MODULE_10__["TodoService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/todo-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/todo/todo-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TodoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRoutingModule", function() { return TodoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/modules/admin/todo/pages/todo/todo.component.ts");
/* harmony import */ var _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/todo-detail/todo-detail.component */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts");






var routes = [
    {
        path: '',
        component: _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]
    },
    {
        path: 'detail',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__["TodoDetailComponent"],
        data: {
            breadcrumbs: {
                text: "common.detail",
                icon: "fa fa-product-hunt",
                show: true,
                isHome: true
            }
        }
    },
];
var TodoRoutingModule = /** @class */ (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/todo/todo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/todo/todo.module.ts ***!
  \***************************************************/
/*! exports provided: TodoModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/fesm2015/ngx-export-as.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/modules/admin/todo/todo-routing.module.ts");
/* harmony import */ var _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/todo/todo.component */ "./src/app/modules/admin/todo/pages/todo/todo.component.ts");
/* harmony import */ var _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/create-todo-modal/create-todo-modal.component */ "./src/app/modules/admin/todo/components/create-todo-modal/create-todo-modal.component.ts");
/* harmony import */ var _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/edit-todo-modal/edit-todo-modal.component */ "./src/app/modules/admin/todo/components/edit-todo-modal/edit-todo-modal.component.ts");
/* harmony import */ var _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/todo-detail/todo-detail.component */ "./src/app/modules/admin/todo/pages/todo-detail/todo-detail.component.ts");



















var TodoModule = /** @class */ (function () {
    function TodoModule() {
    }
    TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_todo_todo_component__WEBPACK_IMPORTED_MODULE_15__["TodoComponent"],
                _components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTodoModalComponent"],
                _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTodoModalComponent"],
                _pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__["TodoDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _todo_routing_module__WEBPACK_IMPORTED_MODULE_14__["TodoRoutingModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                ngx_export_as__WEBPACK_IMPORTED_MODULE_6__["ExportAsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["DatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            exports: [_pages_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_18__["TodoDetailComponent"]],
            entryComponents: [_components_create_todo_modal_create_todo_modal_component__WEBPACK_IMPORTED_MODULE_16__["CreateTodoModalComponent"], _components_edit_todo_modal_edit_todo_modal_component__WEBPACK_IMPORTED_MODULE_17__["EditTodoModalComponent"]]
        })
    ], TodoModule);
    return TodoModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=default~modules-admin-todo-todo-module~modules-pm-defects-defects-module~modules-pm-incidents-incide~fb92f9dc.js.map