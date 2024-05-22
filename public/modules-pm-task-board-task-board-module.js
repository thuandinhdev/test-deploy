(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pm-task-board-task-board-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/task-board/pages/task-board/task-board.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/task-board/pages/task-board/task-board.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card pl-2 pr-2 pb-2\">\r\n                <!-- Card header -->\r\n                <div class=\"card-header pl-0 pr-0\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-3 p-0\">\r\n                                <h4 class=\"main-title mt-2 text-left\"><span>{{'task_boards.title' | translate }}</span></h4>\r\n                            </div>\r\n                            <div class=\"col-sm-9 p-0\">\r\n                                <div class=\"card-buttons d-lg-flex float-lg-right\">\r\n                                    <div class=\"mr-md-1 mt-lg-0 mt-2\">\r\n                                        <ng-select [searchable]=\"true\" [items]=\"projects\" [selectOnTab]=\"true\" (change)=\"getTaskForTaskBoard($event?.id, filter)\" bindLabel=\"project_name\" bindValue=\"id\" labelForId=\"project_id\" [(ngModel)]=\"project_id\" placeholder=\"{{'common.placeholders.placeholder1' | translate}}\">\r\n                                            <ng-template ng-option-tmp let-item=\"item\">\r\n                                                {{item.project_name}}\r\n                                            </ng-template>\r\n                                        </ng-select>\r\n                                    </div>\r\n                                    <div class=\"mr-1 mt-lg-0 mt-2 float-left tab-filter\">\r\n                                        <div class=\"btn-group\">\r\n                                            <label class=\"btn btn-secondary\" [(ngModel)]=\"filter\" (click)=\"getTaskForTaskBoard(project_id, filter)\" btnRadio=\"all\" tabindex=\"0\" role=\"button\">{{'common.status.all' | translate}}</label>\r\n                                            <label class=\"btn btn-secondary\" [(ngModel)]=\"filter\" (click)=\"getTaskForTaskBoard(project_id, filter)\" btnRadio=\"my\" tabindex=\"0\" role=\"button\">{{'common.status.my' | translate}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"float-right mt-lg-0 mt-2\">\r\n                                        <a [routerLink]=\"['/tasks']\" class=\"btn btn-create mb-0 mr-1\" tooltip=\"{{'common.switch_to_list' | translate}}\"><i class=\"fa fa-list\"></i><span>{{'common.list' | translate}}</span></a>\r\n                                        <a [routerLink]=\"['/tasks/create']\" class=\"btn btn-create mb-0\" *ngxPermissionsOnly=\"['admin', 'super_admin', 'tasks_create']\" tooltip=\"{{'common.create' | translate}}\"><i class=\"fa fa-plus\"></i></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Card body -->\r\n                <div class=\"card-body\">\r\n                    <div class=\"row mb-4 taskboard\">\r\n                        <div class=\"col-md-6 col-lg-6 col-xl-4 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-list mr-1\"></i> {{'task_boards.headings.head1' | translate }}</h4>\r\n                            <p class=\"ml-2 small\"><i class=\"fa fa-hand-o-up\"></i> {{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div cdkDropList #openList=\"cdkDropList\" [cdkDropListData]=\"openTasks\" [cdkDropListConnectedTo]=\"[inprogressList, completedList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\r\n                                    <ul class=\"pl-0 open\">\r\n                                        <li class=\"card\" *ngFor=\"let task of openTasks | orderBy: 'order'\" cdkDrag>\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/tasks/detail', task.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"text-info\">{{task.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"priority.id == task.priority\" class=\"{{priority.class}} pull-right\">{{priority.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{task.name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{task.task_start_date | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"taskboard-time\" *ngIf=\"task.estimated_hours\">\r\n                                                                <i class=\"fa fa-clock-o\"></i>&nbsp;{{task.estimated_hours}}&nbsp;h\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"task.assign_user == null; else elseBlock\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock>\r\n                                                                    <a [routerLink]=\"['/users/profile', task.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" tooltip=\"{{task.assign_user.firstname}} {{task.assign_user.lastname}}\" placement=\"top\">\r\n                                                                        <img *ngIf=\"task.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                        <img *ngIf=\"!task.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 col-xl-4 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-trending-up mr-1\"></i> {{'task_boards.headings.head2' | translate }}</h4>\r\n                            <p class=\"ml-2 small\"><i class=\"fa fa-hand-o-up\"></i> {{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div cdkDropList #inprogressList=\"cdkDropList\" [cdkDropListData]=\"inprogressTasks\" [cdkDropListConnectedTo]=\"[openList, completedList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\r\n                                    <ul class=\"pl-0 in-progress\">\r\n                                        <li class=\"card\" *ngFor=\"let task of inprogressTasks | orderBy: 'order'\" cdkDrag>\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/tasks/detail', task.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"text-info\">{{task.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"priority.id == task.priority\" class=\"{{priority.class}} pull-right\">{{priority.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{task.name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{task.task_end_date | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"taskboard-time\" *ngIf=\"task.estimated_hours\">\r\n                                                                <i class=\"fa fa-clock-o\"></i>&nbsp;{{task.estimated_hours}}&nbsp;h\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"task.assign_user == null; else elseBlock2\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock2>\r\n                                                                    <a [routerLink]=\"['/users/profile', task.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" tooltip=\"{{task.assign_user.firstname}} {{task.assign_user.lastname}}\" placement=\"top\">\r\n                                                                        <img *ngIf=\"task.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                        <img *ngIf=\"!task.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-lg-6 col-xl-4 col-12\">\r\n                            <h4 class=\"ml-2 mt-2 text-bold-500\"><i class=\"ft-thumbs-up mr-1\"></i> {{'task_boards.headings.head3' | translate }}</h4>\r\n                            <p class=\"ml-2 small\"><i class=\"fa fa-hand-o-up\"></i> {{'kanban_board.budges.budges1' | translate }}</p>\r\n                            <div class=\"drag-container\">\r\n                                <div cdkDropList #completedList=\"cdkDropList\" [cdkDropListData]=\"completedTasks\" [cdkDropListConnectedTo]=\"[openList, inprogressList]\" class=\"item-list\" (cdkDropListDropped)=\"drop($event)\">\r\n                                    <ul class=\"pl-0 completed\">\r\n                                        <li class=\"card\" *ngFor=\"let task of completedTasks | orderBy: 'order'\" cdkDrag>\r\n                                            <div class=\"card-box\">\r\n                                                <div class=\"row\">\r\n                                                    <h6 class=\"col-12 card-text\">\r\n                                                        <a [routerLink]=\"['/tasks/detail', task.id]\" tooltip=\"{{'common.view' | translate}}\" class=\"text-info\">{{task.generated_id}}</a>\r\n                                                        <ng-container *ngFor=\"let priority of ('tasks.priorities' | translate)\">\r\n                                                            <div class=\"budges-status d-inline\">\r\n                                                                <span *ngIf=\"priority.id == task.priority\" class=\"{{priority.class}} pull-right\">{{priority.label | strToFirstLetter}}</span>\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                        <br>{{task.name}}\r\n                                                    </h6>\r\n                                                </div>\r\n                                                <div class=\"row mt-2\">\r\n                                                    <div class=\"col-12\">\r\n                                                        <div class=\"taskboard-foot d-flex justify-content-between\">\r\n                                                            <div class=\"taskboard-date\">\r\n                                                                <i class=\"fa fa-calendar-o\"></i>&nbsp;{{task.task_end_date | dateTimeFormatFilter: loginUser.settings.date_format}}\r\n                                                            </div>\r\n                                                            <div class=\"taskboard-time\" *ngIf=\"task.estimated_hours\">\r\n                                                                <i class=\"fa fa-clock-o\"></i>&nbsp;{{task.estimated_hours}}&nbsp;h\r\n                                                            </div>\r\n                                                            <div class=\"people-lists\">\r\n                                                                <ng-container *ngIf=\"task.assign_user == null; else elseBlock3\">\r\n                                                                    <a href=\"javascript:void(0);\" class=\"btn btn-profile-danger rounded-circle text-dark\" placement=\"top\" tooltip=\"{{'common.unassigned' | translate}}\">\r\n                                                                        <img src=\"../assets/img/unassign.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                    </a>\r\n                                                                </ng-container>\r\n                                                                <ng-template #elseBlock3>\r\n                                                                    <a [routerLink]=\"['/users/profile', task.assign_user.id]\" class=\"btn rounded-circle text-dark btn-profile-danger\" tooltip=\"{{task.assign_user.firstname}} {{task.assign_user.lastname}}\" placement=\"top\">\r\n                                                                        <img *ngIf=\"task.assign_user.avatar\" src=\"{{apiUrl}}/uploads/profile/{{task.assign_user.avatar}}\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                        <img *ngIf=\"!task.assign_user.avatar\" src=\"../assets/img/profile_small.jpg\" class=\"img-sm rounded-circle\" alt=\"Profile\" />\r\n                                                                    </a>\r\n                                                                </ng-template>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/project.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/project.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/projects");
    };
    ProjectService.prototype.getMyProjects = function () {
        return this.http.get(this.apiUrl + "/api/projects/my");
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id);
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/getbyid/" + id);
    };
    ProjectService.prototype.create = function (project) {
        return this.http.post(this.apiUrl + "/api/projects", project);
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/" + project.id, project);
    };
    ProjectService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/projects/delete/" + id, params);
    };
    ProjectService.prototype.updateNotes = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/notes/" + project.id, project);
    };
    ProjectService.prototype.changeStatus = function (project) {
        return this.http.post(this.apiUrl + "/api/projects/" + project.ids + "/change-status", { "status": project.status });
    };
    ProjectService.prototype.getReleasePlanner = function () {
        return this.http.get(this.apiUrl + "/api/projects/release-planner");
    };
    ProjectService.prototype.getProject = function () {
        return this.http.get(this.apiUrl + "/api/projects/projectmembers", {});
    };
    ProjectService.prototype.getProjectPermission = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id + "/permission", {});
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/modules/pm/task-board/pages/task-board/task-board.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pm/task-board/pages/task-board/task-board.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-heading {\n  padding: 5px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.drag-container {\n  width: 600px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #E9ECEF;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.item-list {\n  min-height: 60px;\n  border-radius: 4px;\n  display: block;\n}\n\n.item-box {\n  padding: 8px 10px;\n  border: solid 1px #ccc;\n  margin-bottom: 5px;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  border-radius: 20px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 20px 20px;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.item-list.cdk-drop-list-dragging .item-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wbS90YXNrLWJvYXJkL3BhZ2VzL3Rhc2stYm9hcmQvQzpcXE1BTVBcXGh0ZG9jc1xcdGVzdC1hbmd1bGFyL3NyY1xcYXBwXFxtb2R1bGVzXFxwbVxcdGFzay1ib2FyZFxccGFnZXNcXHRhc2stYm9hcmRcXHRhc2stYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcG0vdGFzay1ib2FyZC9wYWdlcy90YXNrLWJvYXJkL3Rhc2stYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxzQkFBQTtNQUFBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BtL3Rhc2stYm9hcmQvcGFnZXMvdGFzay1ib2FyZC90YXNrLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZHJhZy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUVDRUY7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pdGVtLWxpc3Qge1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaXRlbS1ib3gge1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuaXRlbS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG4iLCIuc2VjdGlvbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kcmFnLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMjVweCAyNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXRlbS1saXN0IHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW0tYm94IHtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMjBweCAyMHB4O1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4uaXRlbS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW0tYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pm/task-board/pages/task-board/task-board.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pm/task-board/pages/task-board/task-board.component.ts ***!
  \********************************************************************************/
/*! exports provided: TaskBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardComponent", function() { return TaskBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../environments/environment */ "./src/environments/environment.ts");










var TaskBoardComponent = /** @class */ (function () {
    function TaskBoardComponent(translate, ngxRolesService, toastr, taskService, projectService, authenticationService) {
        var _this = this;
        this.translate = translate;
        this.ngxRolesService = ngxRolesService;
        this.toastr = toastr;
        this.taskService = taskService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.filter = "my";
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    TaskBoardComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    TaskBoardComponent.prototype.getCheckPermission = function (task) {
        var role = this.ngxRolesService.getRole('admin');
        if ((role && role.name == 'admin') || this.loginUser.is_super_admin) {
            return true;
        }
        else if (task.assign_to == this.loginUser.id || task.created_by == this.loginUser.id) {
            return true;
        }
        else {
            return false;
        }
    };
    TaskBoardComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getMyProjects().subscribe(function (data) {
            _this.projects = data;
            _this.getTaskForTaskBoard();
        });
    };
    TaskBoardComponent.prototype.getTasks = function (project) {
        if (project) {
            this.getTaskForTaskBoard(project.id);
        }
    };
    TaskBoardComponent.prototype.getTaskForTaskBoard = function (projectId, filter) {
        var _this = this;
        if (projectId === void 0) { projectId = null; }
        if (filter === void 0) { filter = "my"; }
        var params = {};
        if (projectId == null) {
            params = {
                'filter': filter
            };
        }
        else {
            params = {
                'project_id': projectId,
                'filter': filter
            };
        }
        this.project_id = projectId;
        this.filter = filter;
        this.openTasks = [];
        this.inprogressTasks = [];
        this.completedTasks = [];
        this.taskService.getTaskForTaskBoard(params).subscribe(function (data) {
            _this.tasks = data;
            _this.setTasks();
        });
    };
    TaskBoardComponent.prototype.setTasks = function () {
        if (this.tasks) {
            for (var iRow in this.tasks) {
                if (this.tasks[iRow].status == 1) {
                    this.openTasks.push(this.tasks[iRow]);
                }
                if (this.tasks[iRow].status == 2 || this.tasks[iRow].status == 3 || this.tasks[iRow].status == 4) {
                    this.inprogressTasks.push(this.tasks[iRow]);
                }
                if (this.tasks[iRow].status == 6 || this.tasks[iRow].status == 5) {
                    this.completedTasks.push(this.tasks[iRow]);
                }
            }
        }
    };
    TaskBoardComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        var statusTask = [{
                status: 1,
                list: this.converToArray(this.openTasks)
            },
            {
                status: 2,
                list: this.converToArray(this.inprogressTasks)
            },
            {
                status: 6,
                list: this.converToArray(this.completedTasks)
            }];
        this.updateStatusList(statusTask);
    };
    TaskBoardComponent.prototype.updateStatusList = function (task) {
        // if(this.getCheckPermission(task)) {
        var _this = this;
        // } else {
        // 	this.toastr.error(this.translate.instant('common.error_messages.message1'), this.translate.instant('common.errors_keys.key1'));
        // }
        this.taskService.updateStatusList(task).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('tasks.messages.status'), _this.translate.instant('tasks.title'));
            _this.getTaskForTaskBoard(_this.project_id, _this.filter);
        });
    };
    TaskBoardComponent.prototype.converToArray = function (list) {
        var status_list = [];
        list.forEach(function (element) {
            status_list.push(parseInt(element.id));
        });
        return status_list;
    };
    TaskBoardComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxRolesService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    TaskBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-board',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pm/task-board/pages/task-board/task-board.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-board.component.scss */ "./src/app/modules/pm/task-board/pages/task-board/task-board.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxRolesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], TaskBoardComponent);
    return TaskBoardComponent;
}());



/***/ }),

/***/ "./src/app/modules/pm/task-board/task-board-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pm/task-board/task-board-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TaskBoardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardRoutingModule", function() { return TaskBoardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_task_board_task_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/task-board/task-board.component */ "./src/app/modules/pm/task-board/pages/task-board/task-board.component.ts");





var routes = [
    {
        path: '',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsGuard"]],
        component: _pages_task_board_task_board_component__WEBPACK_IMPORTED_MODULE_4__["TaskBoardComponent"],
        data: {
            permissions: {
                only: ['admin', 'super_admin', 'tasks_view']
            }
        }
    }
];
var TaskBoardRoutingModule = /** @class */ (function () {
    function TaskBoardRoutingModule() {
    }
    TaskBoardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TaskBoardRoutingModule);
    return TaskBoardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/pm/task-board/task-board.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pm/task-board/task-board.module.ts ***!
  \************************************************************/
/*! exports provided: TaskBoardModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardModule", function() { return TaskBoardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _task_board_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task-board-routing.module */ "./src/app/modules/pm/task-board/task-board-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_task_board_task_board_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/task-board/task-board.component */ "./src/app/modules/pm/task-board/pages/task-board/task-board.component.ts");















var TaskBoardModule = /** @class */ (function () {
    function TaskBoardModule() {
    }
    TaskBoardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_task_board_task_board_component__WEBPACK_IMPORTED_MODULE_14__["TaskBoardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _task_board_routing_module__WEBPACK_IMPORTED_MODULE_12__["TaskBoardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__["OrderModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            ],
            entryComponents: []
        })
    ], TaskBoardModule);
    return TaskBoardModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ })

}]);
//# sourceMappingURL=modules-pm-task-board-task-board-module.js.map