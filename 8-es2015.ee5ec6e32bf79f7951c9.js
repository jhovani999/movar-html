(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/ed5":function(t,e,c){"use strict";c.d(e,"a",(function(){return B}));var a=c("kyf+"),i=c("fXoL"),o=c("dNgK");let n=(()=>{class t{constructor(t){this.snackBar=t,this.config={duration:3e3,horizontalPosition:"right",verticalPosition:"top"}}success(t){this.config.panelClass=["notification","success"],this.snackBar.open(t,"",this.config)}warn(t){this.config.panelClass=["notification","warn"],this.snackBar.open(t,"",this.config)}}return t.\u0275fac=function(e){return new(e||t)(i.jc(o.a))},t.\u0275prov=i.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var r=c("2Z0n"),s=c("0IaG"),l=c("3Pt+"),m=c("zkoq"),f=c("kmnG"),u=c("qFsG"),d=c("bTqV");let b=(()=>{class t{constructor(t,e,c,a){this.usersService=t,this.service=e,this.notificationService=c,this.dialogRef=a}ngOnInit(){}onSubmit(){this.service.form.valid?(this.usersService.sendMessageCliente(this.service.form.value),this.dialogRef.close()):this.notificationService.success("Existe Campos Vacios..!")}onClose(){this.service.form.reset(),this.service.initializeFormGroup(),this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(i.Vb(r.a),i.Vb(a.a),i.Vb(n),i.Vb(s.h))},t.\u0275cmp=i.Pb({type:t,selectors:[["app-employee"]],decls:37,vars:3,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"normal-form",3,"formGroup"],["cols","1","rowHeight","450px"],[1,"controles-container"],["type","hidden","formControlName","id"],["appearance","fill"],["type","number","formControlName","ruc","matInput","","placeholder","RUC*","maxlength","11","oninput","if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"],["formControlName","razon_social","matInput","","placeholder","Raz\xf3n social*"],["formControlName","nombre_contacto","matInput","","placeholder","Contacto*"],["formControlName","cargo_contacto","matInput","","placeholder","Cargo*"],["formControlName","email","matInput","","placeholder","email *"],["type","number","formControlName","telefono","matInput","","placeholder","Tel\xe9fono*","maxlength","15","oninput","if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(i.bc(0,"h2",0),i.Uc(1),i.ac(),i.bc(2,"mat-dialog-content",1),i.bc(3,"form",2),i.bc(4,"mat-grid-list",3),i.bc(5,"mat-grid-tile"),i.bc(6,"div",4),i.Wb(7,"input",5),i.bc(8,"mat-form-field",6),i.Wb(9,"input",7),i.bc(10,"mat-error"),i.Uc(11,"This field is mandatory."),i.ac(),i.ac(),i.bc(12,"mat-form-field",6),i.Wb(13,"input",8),i.bc(14,"mat-error"),i.Uc(15,"This field is mandatory."),i.ac(),i.ac(),i.bc(16,"mat-form-field",6),i.Wb(17,"input",9),i.bc(18,"mat-error"),i.Uc(19,"This field is mandatory."),i.ac(),i.ac(),i.bc(20,"mat-form-field",6),i.Wb(21,"input",10),i.bc(22,"mat-error"),i.Uc(23,"This field is mandatory."),i.ac(),i.ac(),i.bc(24,"mat-form-field",6),i.Wb(25,"input",11),i.bc(26,"mat-error"),i.Uc(27,"This field is mandatory."),i.ac(),i.ac(),i.bc(28,"mat-form-field",6),i.Wb(29,"input",12),i.bc(30,"mat-error"),i.Uc(31,"This field is mandatory."),i.ac(),i.ac(),i.ac(),i.ac(),i.ac(),i.ac(),i.ac(),i.bc(32,"mat-dialog-actions",13),i.bc(33,"button",14),i.Uc(34,"Cancel"),i.ac(),i.bc(35,"button",15),i.nc("click",(function(){return e.onSubmit()})),i.Uc(36),i.ac(),i.ac()),2&t&&(i.Fb(1),i.Vc(e.service.form.controls.id.value?"Modificar cliente":"Nuevo cliente"),i.Fb(2),i.xc("formGroup",e.service.form),i.Fb(33),i.Vc(e.service.form.controls.id.value?"Actualizar":"Registrar"))},directives:[s.i,s.f,l.z,l.q,l.i,m.a,m.c,l.b,l.p,l.g,f.c,l.u,u.b,l.l,f.b,s.c,d.b,s.d],styles:[""]}),t})();var h=c("M9IT"),p=c("+0xr"),g=c("Dh3D"),C=c("YsVr"),v=c("fqgk"),S=c("NFeN"),w=c("ofXK"),y=c("QibW");function x(t,e){if(1&t){const t=i.cc();i.bc(0,"button",26),i.nc("click",(function(){return i.Lc(t),i.rc().onSearchClear()})),i.bc(1,"mat-icon"),i.Uc(2,"close"),i.ac(),i.ac()}}function D(t,e){1&t&&(i.bc(0,"mat-header-cell",27),i.Uc(1,"Usuario"),i.ac())}function U(t,e){if(1&t&&(i.bc(0,"mat-cell"),i.bc(1,"span",28),i.Uc(2,"Usuario:"),i.ac(),i.Uc(3),i.ac()),2&t){const t=e.$implicit;i.Fb(3),i.Wc(" ",t.username," ")}}function _(t,e){1&t&&(i.bc(0,"mat-header-cell",27),i.Uc(1,"RUC"),i.ac())}function F(t,e){if(1&t&&(i.bc(0,"mat-cell"),i.bc(1,"span",28),i.Uc(2,"RUC:"),i.ac(),i.Uc(3),i.ac()),2&t){const t=e.$implicit;i.Fb(3),i.Wc(" ",t.ruc," ")}}function R(t,e){1&t&&(i.bc(0,"mat-header-cell",27),i.Uc(1,"Raz\xf3n Social"),i.ac())}function k(t,e){if(1&t&&(i.bc(0,"mat-cell"),i.bc(1,"span",28),i.Uc(2,"Raz\xf3n Social:"),i.ac(),i.Uc(3),i.ac()),2&t){const t=e.$implicit;i.Fb(3),i.Wc(" ",t.razon_social," ")}}function O(t,e){1&t&&(i.bc(0,"mat-header-cell",27),i.Uc(1,"Nombre Contacto"),i.ac())}function z(t,e){if(1&t&&(i.bc(0,"mat-cell"),i.bc(1,"span",28),i.Uc(2,"Nombre Contacto:"),i.ac(),i.Uc(3),i.ac()),2&t){const t=e.$implicit;i.Fb(3),i.Wc(" ",t.nombre_contacto," ")}}function I(t,e){1&t&&(i.bc(0,"mat-header-cell",27),i.Uc(1,"Cargo Contacto"),i.ac())}function M(t,e){if(1&t&&(i.bc(0,"mat-cell"),i.bc(1,"span",28),i.Uc(2,"Cargo Contacto:"),i.ac(),i.Uc(3),i.ac()),2&t){const t=e.$implicit;i.Fb(3),i.Wc(" ",t.cargo_contacto," ")}}function N(t,e){1&t&&(i.bc(0,"mat-header-cell",27),i.Uc(1,"Tel\xe9fono"),i.ac())}function P(t,e){if(1&t&&(i.bc(0,"mat-cell"),i.bc(1,"span",28),i.Uc(2,"Tel\xe9fono:"),i.ac(),i.Uc(3),i.ac()),2&t){const t=e.$implicit;i.Fb(3),i.Wc(" ",t.telefono," ")}}function W(t,e){1&t&&(i.bc(0,"mat-header-cell",27),i.Uc(1,"Email"),i.ac())}function V(t,e){if(1&t&&(i.bc(0,"mat-cell"),i.bc(1,"span",28),i.Uc(2,"Email:"),i.ac(),i.Uc(3),i.ac()),2&t){const t=e.$implicit;i.Fb(3),i.Wc(" ",t.email," ")}}function L(t,e){1&t&&i.Wb(0,"mat-header-cell")}function E(t,e){if(1&t){const t=i.cc();i.bc(0,"mat-radio-button",32),i.nc("click",(function(){i.Lc(t);const e=i.rc().$implicit;return i.rc().selectDatos(e)})),i.Uc(1,"Seleccionar"),i.ac()}2&t&&i.xc("mat-dialog-close",!0)}function Z(t,e){if(1&t){const t=i.cc();i.bc(0,"mat-cell",29),i.bc(1,"button",30),i.nc("click",(function(){i.Lc(t);const c=e.$implicit;return i.rc().onEdit(c)})),i.bc(2,"mat-icon"),i.Uc(3,"edit"),i.ac(),i.ac(),i.Sc(4,E,2,1,"mat-radio-button",31),i.ac()}if(2&t){const t=i.rc();i.Fb(4),i.xc("ngIf",t.showRadio)}}function T(t,e){1&t&&(i.bc(0,"mat-footer-cell",33),i.Uc(1," Loading data... "),i.ac())}function q(t,e){1&t&&(i.bc(0,"mat-footer-cell",33),i.Uc(1," No data. "),i.ac())}function G(t,e){1&t&&i.Wb(0,"mat-header-row")}function Y(t,e){1&t&&i.Wb(0,"mat-row")}const J=function(t){return{hide:t}};function $(t,e){if(1&t&&i.Wb(0,"mat-footer-row",34),2&t){const t=i.rc();i.xc("ngClass",i.Dc(1,J,null!=t.listData))}}function A(t,e){if(1&t&&i.Wb(0,"mat-footer-row",34),2&t){const t=i.rc();i.xc("ngClass",i.Dc(1,J,!(null!=t.listData&&0==t.listData.data.length)))}}const H=function(){return["loading"]},K=function(){return["noData"]},j=function(){return[5,10,25,100]};let B=(()=>{class t{constructor(t,e,c,a,i,o,n){this.ocultando=t,this.usersService=e,this.adviserService=c,this.service=a,this.dialog=i,this.notificationService=o,this.dialogRef=n,this.showRadio=!0,this.displayedColumns=["username","ruc","razon_social","nombre_contacto","telefono","email","actions"],this.myObjArray=[],this.projectsSubscription=this.usersService.getMessageCliente().subscribe(t=>{t.id?(console.log("ACTUALIZAR"),this.updateCreate()):(console.log("REGISTRAR cliente"),this.addCreate())}),this.ocultando.getClickEvent().subscribe(t=>{this.showRadio=!this.showRadio})}selectDatos(t){this.adviserService.sendMessageClienteAdviser(t)}onClose(){this.service.form.reset(),this.service.initializeFormGroup(),this.dialogRef.close()}ngOnInit(){this.showRadio=!this.showRadio,this.service.form.reset(),this.service.initializeFormGroup(),this.listarEmployee()}listarEmployee(){this.usersService.listarEmployee(parseInt(window.localStorage.getItem("USER_ID"))).subscribe(t=>{this.listData=new p.o(t.data),this.listData.sort=this.sort;const e={active:"id_cliente",direction:"desc"};this.sort.active=e.active,this.sort.direction=e.direction,this.sort.sortChange.emit(e),this.listData.paginator=this.paginator,this.listData.filterPredicate=(t,e)=>this.displayedColumns.some(c=>{if(void 0!==t[c])return"actions"!=c&&-1!=t[c].toString().toLowerCase().indexOf(e)})})}addCreate(){this.usersService.registerEmployee(this.service.form.value).subscribe(t=>{t?(this.listarEmployee(),this.notificationService.success(JSON.parse(JSON.stringify(t)).message)):this.notificationService.success(JSON.parse(JSON.stringify(t)).message)},t=>{this.notificationService.success(JSON.parse(JSON.stringify(t.error)).message)})}updateCreate(){null!==this.service.form.value.id_cliente&&this.usersService.updatetEmployee(this.service.form.value).subscribe(t=>{this.listarEmployee(),this.notificationService.success(JSON.parse(JSON.stringify(t)).message)})}onSearchClear(){this.searchKey="",this.applyFilter()}applyFilter(){this.listData.filter=this.searchKey.trim().toLowerCase()}onCreate(){this.service.initializeFormGroup();const t=new s.e;t.disableClose=!1,t.autoFocus=!0,t.width="350px",this.dialog.open(b,t)}onEdit(t){this.service.populateForm(t);const e=new s.e;e.disableClose=!1,e.autoFocus=!0,e.width="350px",this.dialog.open(b,e)}onDelete(t){confirm("Are you sure to delete this record ?")&&(this.usersService.deleteEmployee(t).subscribe(e=>{this.listData.filteredData.filter(e=>e.id!==t),this.listData=new p.o(this.listData.filteredData.filter(e=>e.id!==t)),this.listData.sort=this.sort,this.listData.paginator=this.paginator,this.listData.filterPredicate=(t,e)=>this.displayedColumns.some(c=>"actions"!=c&&-1!=t[c].toLowerCase().indexOf(e))}),this.notificationService.warn("! Deleted successfully"))}ngOnDestroy(){this.projectsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Vb(v.a),i.Vb(r.a),i.Vb(C.a),i.Vb(a.a),i.Vb(s.b),i.Vb(n),i.Vb(s.h))},t.\u0275cmp=i.Pb({type:t,selectors:[["app-employee-list"]],viewQuery:function(t,e){var c;1&t&&(i.Zc(g.a,!0),i.Zc(h.a,!0)),2&t&&(i.Hc(c=i.oc())&&(e.sort=c.first),i.Hc(c=i.oc())&&(e.paginator=c.first))},decls:43,vars:12,consts:[[1,"search-div"],["mat-raised-button","",3,"click"],["floatLabel","never",1,"search-form-field"],["matInput","","placeholder","Buscar","autocomplete","off",3,"ngModel","ngModelChange","keyup"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"table-responsive","mat-elevation-z8"],["matSort","",3,"dataSource"],["matColumnDef","username"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","ruc"],["matColumnDef","razon_social"],["matColumnDef","nombre_contacto"],["matColumnDef","cargo_contacto"],["matColumnDef","telefono"],["matColumnDef","email"],["matColumnDef","actions"],[4,"matHeaderCellDef"],["style","display: flex !important;",4,"matCellDef"],["matColumnDef","loading"],["colspan","10",4,"matFooterCellDef"],["matColumnDef","noData"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"ngClass",4,"matFooterRowDef"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-sort-header",""],[1,"mobile-label"],[2,"display","flex !important"],["mat-icon-button","",3,"click"],["value","1",3,"mat-dialog-close","click",4,"ngIf"],["value","1",3,"mat-dialog-close","click"],["colspan","10"],[3,"ngClass"]],template:function(t,e){1&t&&(i.bc(0,"div",0),i.bc(1,"button",1),i.nc("click",(function(){return e.onCreate()})),i.bc(2,"mat-icon"),i.Uc(3,"add"),i.ac(),i.Uc(4,"Crear "),i.ac(),i.bc(5,"mat-form-field",2),i.bc(6,"input",3),i.nc("ngModelChange",(function(t){return e.searchKey=t}))("keyup",(function(){return e.applyFilter()})),i.ac(),i.Sc(7,x,3,0,"button",4),i.ac(),i.ac(),i.bc(8,"div",5),i.bc(9,"mat-table",6),i.Zb(10,7),i.Sc(11,D,2,0,"mat-header-cell",8),i.Sc(12,U,4,1,"mat-cell",9),i.Yb(),i.Zb(13,10),i.Sc(14,_,2,0,"mat-header-cell",8),i.Sc(15,F,4,1,"mat-cell",9),i.Yb(),i.Zb(16,11),i.Sc(17,R,2,0,"mat-header-cell",8),i.Sc(18,k,4,1,"mat-cell",9),i.Yb(),i.Zb(19,12),i.Sc(20,O,2,0,"mat-header-cell",8),i.Sc(21,z,4,1,"mat-cell",9),i.Yb(),i.Zb(22,13),i.Sc(23,I,2,0,"mat-header-cell",8),i.Sc(24,M,4,1,"mat-cell",9),i.Yb(),i.Zb(25,14),i.Sc(26,N,2,0,"mat-header-cell",8),i.Sc(27,P,4,1,"mat-cell",9),i.Yb(),i.Zb(28,15),i.Sc(29,W,2,0,"mat-header-cell",8),i.Sc(30,V,4,1,"mat-cell",9),i.Yb(),i.Zb(31,16),i.Sc(32,L,1,0,"mat-header-cell",17),i.Sc(33,Z,5,1,"mat-cell",18),i.Yb(),i.Zb(34,19),i.Sc(35,T,2,0,"mat-footer-cell",20),i.Yb(),i.Zb(36,21),i.Sc(37,q,2,0,"mat-footer-cell",20),i.Yb(),i.Sc(38,G,1,0,"mat-header-row",22),i.Sc(39,Y,1,0,"mat-row",23),i.Sc(40,$,1,3,"mat-footer-row",24),i.Sc(41,A,1,3,"mat-footer-row",24),i.ac(),i.Wb(42,"mat-paginator",25),i.ac()),2&t&&(i.Fb(6),i.xc("ngModel",e.searchKey),i.Fb(1),i.xc("ngIf",e.searchKey),i.Fb(2),i.xc("dataSource",e.listData),i.Fb(29),i.xc("matHeaderRowDef",e.displayedColumns),i.Fb(1),i.xc("matRowDefColumns",e.displayedColumns),i.Fb(1),i.xc("matFooterRowDef",i.Cc(9,H)),i.Fb(1),i.xc("matFooterRowDef",i.Cc(10,K)),i.Fb(1),i.xc("pageSizeOptions",i.Cc(11,j))("pageSize",10))},directives:[d.b,S.a,f.c,u.b,l.b,l.p,l.s,w.n,p.n,g.a,p.c,p.i,p.b,p.e,p.k,p.m,p.g,h.a,f.g,p.h,g.b,p.a,y.a,s.d,p.d,p.j,p.l,p.f,w.l],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:500px;min-width:300px}.mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:500px}.mobile-label[_ngcontent-%COMP%]{display:none}@media(max-width:600px){.mobile-label[_ngcontent-%COMP%]{width:80px;display:inline-block;font-weight:700}.mat-header-row[_ngcontent-%COMP%]{display:none}.mat-row[_ngcontent-%COMP%]{flex-direction:column;align-items:start;padding:8px 24px}mat-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{margin-top:22px;flex:1;margin-left:25px;display:list-item!important;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-chip[_ngcontent-%COMP%]:not(.mat-basic-chip){display:flex;padding:8px 12px;border-radius:24px;font-size:13px;line-height:16px}"]}),t})()},"kyf+":function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var a=c("3Pt+"),i=c("LvDl"),o=c("fXoL");let n=(()=>{class t{constructor(){this.form=new a.h({id:new a.e(null),ruc:new a.e("",a.x.required),razon_social:new a.e("",a.x.required),nombre_contacto:new a.e("",a.x.required),cargo_contacto:new a.e("",a.x.required),telefono:new a.e("",a.x.required),email:new a.e("",a.x.required)})}initializeFormGroup(){this.form.setValue({id:null,ruc:"",razon_social:"",nombre_contacto:"",cargo_contacto:"",telefono:"",email:""})}populateForm(t){this.form.setValue(i.omit({id:t.id_cliente,ruc:t.ruc,razon_social:t.razon_social,nombre_contacto:t.nombre_contacto,cargo_contacto:t.cargo_contacto,telefono:t.telefono,email:t.email}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);