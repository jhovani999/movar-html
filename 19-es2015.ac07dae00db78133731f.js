(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{QCXl:function(t,e,c){"use strict";c.r(e),c.d(e,"TablesModule",(function(){return Nt}));var i=c("ofXK"),o=c("tyNb"),a=c("qFsG"),n=c("M9IT"),r=c("Dh3D"),s=c("+0xr"),l=c("lDzL"),m=c("fXoL"),d=c("3Pt+"),u=c("LvDl");let f=(()=>{class t{constructor(){this.form=new d.h({id:new d.e(null),nombre:new d.e("",d.x.required),apellido:new d.e("",d.x.required),telefono:new d.e("",d.x.required)})}initializeFormGroup(){this.form.setValue({id:null,nombre:"",apellido:"",telefono:""})}populateForm(t){this.form.setValue(u.omit({id:t.id_asesor,nombre:t.nombre,apellido:t.apellido,telefono:t.telefono}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=m.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=c("b8Af"),p=c("0IaG"),h=c("zkoq"),g=c("kmnG"),v=c("bTqV");let C=(()=>{class t{constructor(t,e,c){this.usersService=t,this.service=e,this.dialogRef=c}ngOnInit(){}onSubmit(){""!=this.service.form.value.nombre&&""!=this.service.form.value.apellido&&""!=this.service.form.value.telefono&&(this.usersService.sendMessage(this.service.form.value),this.service.form.reset(),this.service.initializeFormGroup(),this.onClose())}onClose(){this.service.form.reset(),this.service.initializeFormGroup(),this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(m.Vb(b.a),m.Vb(f),m.Vb(p.h))},t.\u0275cmp=m.Pb({type:t,selectors:[["app-employee"]],decls:25,vars:3,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"normal-form",3,"formGroup"],["cols","1","rowHeight","200px"],[1,"controles-container"],["type","hidden","formControlName","id"],["formControlName","nombre","matInput","","placeholder","Nombre*"],["formControlName","apellido","matInput","","placeholder","Apellido"],["formControlName","telefono","matInput","","placeholder","Tel\xe9fono*"],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(m.bc(0,"h2",0),m.Uc(1),m.ac(),m.bc(2,"mat-dialog-content",1),m.bc(3,"form",2),m.bc(4,"mat-grid-list",3),m.bc(5,"mat-grid-tile"),m.bc(6,"div",4),m.Wb(7,"input",5),m.bc(8,"mat-form-field"),m.Wb(9,"input",6),m.bc(10,"mat-error"),m.Uc(11,"This field is mandatory."),m.ac(),m.ac(),m.bc(12,"mat-form-field"),m.Wb(13,"input",7),m.bc(14,"mat-error"),m.Uc(15,"Invalid email address."),m.ac(),m.ac(),m.bc(16,"mat-form-field"),m.Wb(17,"input",8),m.bc(18,"mat-error"),m.Uc(19,"This field is mandatory."),m.ac(),m.ac(),m.ac(),m.ac(),m.ac(),m.ac(),m.ac(),m.bc(20,"mat-dialog-actions",9),m.bc(21,"button",10),m.Uc(22,"Cancel"),m.ac(),m.bc(23,"button",11),m.nc("click",(function(){return e.onSubmit()})),m.Uc(24),m.ac(),m.ac()),2&t&&(m.Fb(1),m.Vc(e.service.form.controls.id.value?"Modifica Asesor":"Nuevo Asesor"),m.Fb(2),m.xc("formGroup",e.service.form),m.Fb(21),m.Vc(e.service.form.controls.id.value?"Actualizar":"Registrar"))},directives:[p.i,p.f,d.z,d.q,d.i,h.a,h.c,d.b,d.p,d.g,g.c,a.b,g.b,p.c,v.b,p.d],styles:[""]}),t})();var x=c("dNgK");let _=(()=>{class t{constructor(t){this.snackBar=t,this.config={duration:3e3,horizontalPosition:"right",verticalPosition:"top"}}success(t){this.config.panelClass=["notification","success"],this.snackBar.open(t,"",this.config)}warn(t){this.config.panelClass=["notification","warn"],this.snackBar.open(t,"",this.config)}}return t.\u0275fac=function(e){return new(e||t)(m.jc(x.a))},t.\u0275prov=m.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=c("fqgk"),w=c("NFeN"),y=c("QibW"),O=c("znSr");function A(t,e){if(1&t){const t=m.cc();m.bc(0,"button",23),m.nc("click",(function(){return m.Lc(t),m.rc().onSearchClear()})),m.bc(1,"mat-icon"),m.Uc(2,"close"),m.ac(),m.ac()}}function M(t,e){1&t&&(m.bc(0,"mat-header-cell",24),m.Uc(1,"ID"),m.ac())}function P(t,e){if(1&t&&(m.bc(0,"mat-cell"),m.bc(1,"span",25),m.Uc(2,"ID:"),m.ac(),m.Uc(3),m.ac()),2&t){const t=e.$implicit;m.Fb(3),m.Wc(" ",t.id_asesor," ")}}function F(t,e){1&t&&(m.bc(0,"mat-header-cell",24),m.Uc(1,"Usuario"),m.ac())}function D(t,e){if(1&t&&(m.bc(0,"mat-cell"),m.bc(1,"span",25),m.Uc(2,"Usuario:"),m.ac(),m.Uc(3),m.ac()),2&t){const t=e.$implicit;m.Fb(3),m.Wc(" ",t.username," ")}}function U(t,e){1&t&&(m.bc(0,"mat-header-cell",24),m.Uc(1,"Nombre"),m.ac())}function k(t,e){if(1&t&&(m.bc(0,"mat-cell"),m.bc(1,"span",25),m.Uc(2,"Nombre:"),m.ac(),m.Uc(3),m.ac()),2&t){const t=e.$implicit;m.Fb(3),m.Wc(" ",t.nombre," ")}}function I(t,e){1&t&&(m.bc(0,"mat-header-cell",24),m.Uc(1,"Apellido"),m.ac())}function N(t,e){if(1&t&&(m.bc(0,"mat-cell"),m.bc(1,"span",25),m.Uc(2,"RUC:"),m.ac(),m.Uc(3),m.ac()),2&t){const t=e.$implicit;m.Fb(3),m.Wc(" ",t.apellido," ")}}function V(t,e){1&t&&(m.bc(0,"mat-header-cell",24),m.Uc(1,"Tel\xe9fono"),m.ac())}function z(t,e){if(1&t&&(m.bc(0,"mat-cell"),m.bc(1,"span",25),m.Uc(2,"Tel\xe9fono:"),m.ac(),m.Uc(3),m.ac()),2&t){const t=e.$implicit;m.Fb(3),m.Wc(" ",t.telefono," ")}}function R(t,e){1&t&&m.Wb(0,"mat-header-cell")}function W(t,e){if(1&t){const t=m.cc();m.bc(0,"mat-radio-button",29),m.nc("click",(function(){m.Lc(t);const e=m.rc().$implicit;return m.rc().compraFunction(e)})),m.Uc(1,"Seleccionar"),m.ac()}2&t&&m.xc("mat-dialog-close",!0)}const L=function(t){return["/asesores/aseclient",t]};function E(t,e){if(1&t){const t=m.cc();m.bc(0,"mat-cell"),m.bc(1,"button",26),m.nc("click",(function(){m.Lc(t);const c=e.$implicit;return m.rc().onEdit(c)})),m.bc(2,"mat-icon"),m.Uc(3,"edit"),m.ac(),m.ac(),m.bc(4,"button",27),m.bc(5,"mat-icon"),m.Uc(6,"group_add"),m.ac(),m.ac(),m.Sc(7,W,2,1,"mat-radio-button",28),m.ac()}if(2&t){const t=e.$implicit,c=m.rc();m.Fb(4),m.xc("routerLink",m.Dc(2,L,t.id_asesor)),m.Fb(3),m.xc("ngIf",c.showRadio)}}function q(t,e){1&t&&(m.bc(0,"mat-footer-cell",30),m.Uc(1," Loading data... "),m.ac())}function J(t,e){1&t&&(m.bc(0,"mat-footer-cell",30),m.Uc(1," No data. "),m.ac())}function T(t,e){1&t&&m.Wb(0,"mat-header-row")}function G(t,e){1&t&&m.Wb(0,"mat-row")}const Z=function(t){return{hide:t}};function Y(t,e){if(1&t&&m.Wb(0,"mat-footer-row",31),2&t){const t=m.rc();m.xc("ngClass",m.Dc(1,Z,null!=t.listData))}}function $(t,e){if(1&t&&m.Wb(0,"mat-footer-row",31),2&t){const t=m.rc();m.xc("ngClass",m.Dc(1,Z,!(null!=t.listData&&0==t.listData.data.length)))}}const j=function(){return["/asesores/aseclient"]},H=function(){return["loading"]},K=function(){return["noData"]},B=function(){return[5,10,25,100]};let X=(()=>{class t{constructor(t,e,c,i,o){this.ocultando=t,this.usersService=e,this.service=c,this.dialog=i,this.notificationService=o,this.showRadio=!0,this.displayedColumns=["id_asesor","username","nombre","apellido","telefono","actions"],this.projectsSubscription=this.usersService.getMessage().subscribe(t=>{t.id?(console.log("ACTUALIZAR"),this.updateCreate()):(console.log("REGISTRAR Asesor"),this.addCreate())}),this.ocultando.getClickEvent().subscribe(t=>{this.showRadio=!this.showRadio})}compraFunction(t){this.usersService.sendMessage(t)}ngOnInit(){this.showRadio=!this.showRadio,this.listarEmployee()}listarEmployee(){this.usersService.listarEmployee().subscribe(t=>{this.listData=new s.o(t.data),this.listData.sort=this.sort,this.listData.paginator=this.paginator,this.listData.filterPredicate=(t,e)=>this.displayedColumns.some(c=>{if(void 0!==t[c])return"actions"!=c&&-1!=t[c].toString().toLowerCase().indexOf(e)})})}addCreate(){}updateCreate(){null!=this.service.form.value.id&&this.usersService.updatetEmployee(this.service.form.value).subscribe(t=>{this.listarEmployee(),this.notificationService.success(JSON.parse(JSON.stringify(t)).message)})}onSearchClear(){this.searchKey="",this.applyFilter()}applyFilter(){this.listData.filter=this.searchKey.trim().toLowerCase()}onCreate(){this.service.initializeFormGroup();const t=new p.e;t.disableClose=!1,t.autoFocus=!0,t.width="350px",this.dialog.open(C,t)}onEdit(t){this.service.populateForm(t);const e=new p.e;e.disableClose=!1,e.autoFocus=!0,e.width="350px",this.dialog.open(C,e)}onDelete(t){confirm("Are you sure to delete this record ?")&&(this.usersService.deleteEmployee(t).subscribe(e=>{this.listData.filteredData.filter(e=>e.id!==t),this.listData=new s.o(this.listData.filteredData.filter(e=>e.id!==t)),this.listData.sort=this.sort,this.listData.paginator=this.paginator,this.listData.filterPredicate=(t,e)=>this.displayedColumns.some(c=>"actions"!=c&&-1!=t[c].toLowerCase().indexOf(e))}),this.notificationService.warn("! Deleted successfully"))}ngOnDestroy(){this.projectsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(m.Vb(S.a),m.Vb(b.a),m.Vb(f),m.Vb(p.b),m.Vb(_))},t.\u0275cmp=m.Pb({type:t,selectors:[["app-employee-list"]],viewQuery:function(t,e){var c;1&t&&(m.Zc(r.a,!0),m.Zc(n.a,!0)),2&t&&(m.Hc(c=m.oc())&&(e.sort=c.first),m.Hc(c=m.oc())&&(e.paginator=c.first))},decls:37,vars:14,consts:[[1,"search-div"],["mat-raised-button","",3,"routerLink"],["floatLabel","never",1,"search-form-field"],["matInput","","placeholder","Buscar","autocomplete","off",3,"ngModel","ngModelChange","keyup"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"table-responsive","mat-elevation-z8"],["matSort","",3,"dataSource"],["matColumnDef","id_asesor"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","username"],["matColumnDef","nombre"],["matColumnDef","apellido"],["matColumnDef","telefono"],["matColumnDef","actions"],[4,"matHeaderCellDef"],["matColumnDef","loading"],["colspan","6",4,"matFooterCellDef"],["matColumnDef","noData"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"ngClass",4,"matFooterRowDef"],["showFirstLastButtons","",3,"pageSizeOptions","pageSize"],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-sort-header",""],[1,"mobile-label"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","warn",3,"routerLink"],["value","1",3,"mat-dialog-close","click",4,"ngIf"],["value","1",3,"mat-dialog-close","click"],["colspan","6"],[3,"ngClass"]],template:function(t,e){1&t&&(m.bc(0,"div",0),m.bc(1,"button",1),m.bc(2,"mat-icon"),m.Uc(3,"add"),m.ac(),m.Uc(4,"Crear Asesor - Cliente "),m.ac(),m.bc(5,"mat-form-field",2),m.bc(6,"input",3),m.nc("ngModelChange",(function(t){return e.searchKey=t}))("keyup",(function(){return e.applyFilter()})),m.ac(),m.Sc(7,A,3,0,"button",4),m.ac(),m.ac(),m.bc(8,"div",5),m.bc(9,"mat-table",6),m.Zb(10,7),m.Sc(11,M,2,0,"mat-header-cell",8),m.Sc(12,P,4,1,"mat-cell",9),m.Yb(),m.Zb(13,10),m.Sc(14,F,2,0,"mat-header-cell",8),m.Sc(15,D,4,1,"mat-cell",9),m.Yb(),m.Zb(16,11),m.Sc(17,U,2,0,"mat-header-cell",8),m.Sc(18,k,4,1,"mat-cell",9),m.Yb(),m.Zb(19,12),m.Sc(20,I,2,0,"mat-header-cell",8),m.Sc(21,N,4,1,"mat-cell",9),m.Yb(),m.Zb(22,13),m.Sc(23,V,2,0,"mat-header-cell",8),m.Sc(24,z,4,1,"mat-cell",9),m.Yb(),m.Zb(25,14),m.Sc(26,R,1,0,"mat-header-cell",15),m.Sc(27,E,8,4,"mat-cell",9),m.Yb(),m.Zb(28,16),m.Sc(29,q,2,0,"mat-footer-cell",17),m.Yb(),m.Zb(30,18),m.Sc(31,J,2,0,"mat-footer-cell",17),m.Yb(),m.Sc(32,T,1,0,"mat-header-row",19),m.Sc(33,G,1,0,"mat-row",20),m.Sc(34,Y,1,3,"mat-footer-row",21),m.Sc(35,$,1,3,"mat-footer-row",21),m.ac(),m.Wb(36,"mat-paginator",22),m.ac()),2&t&&(m.Fb(1),m.xc("routerLink",m.Cc(10,j)),m.Fb(5),m.xc("ngModel",e.searchKey),m.Fb(1),m.xc("ngIf",e.searchKey),m.Fb(2),m.xc("dataSource",e.listData),m.Fb(23),m.xc("matHeaderRowDef",e.displayedColumns),m.Fb(1),m.xc("matRowDefColumns",e.displayedColumns),m.Fb(1),m.xc("matFooterRowDef",m.Cc(11,H)),m.Fb(1),m.xc("matFooterRowDef",m.Cc(12,K)),m.Fb(1),m.xc("pageSizeOptions",m.Cc(13,B))("pageSize",10))},directives:[v.b,o.h,w.a,g.c,a.b,d.b,d.p,d.s,i.n,s.n,r.a,s.c,s.i,s.b,s.e,s.k,s.m,s.g,n.a,g.g,s.h,r.b,s.a,y.a,p.d,s.d,s.j,s.l,s.f,O.a,i.l],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-height:500px;min-width:300px}.mat-table[_ngcontent-%COMP%]{overflow:auto;max-height:500px}.mobile-label[_ngcontent-%COMP%]{display:none}@media(max-width:600px){.mobile-label[_ngcontent-%COMP%]{width:80px;display:inline-block;font-weight:700}.mat-header-row[_ngcontent-%COMP%]{display:none}.mat-row[_ngcontent-%COMP%]{flex-direction:column;align-items:start;padding:8px 24px}mat-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type{padding-left:0}}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{margin-top:22px;flex:1;margin-left:25px;display:list-item!important;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-chip[_ngcontent-%COMP%]:not(.mat-basic-chip){display:flex;padding:8px 12px;border-radius:24px;font-size:13px;line-height:16px}"]}),t})(),Q=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Pb({type:t,selectors:[["app-employees"]],decls:2,vars:0,consts:[[1,"container"]],template:function(t,e){1&t&&(m.bc(0,"div",0),m.Wb(1,"app-employee-list"),m.ac())},directives:[X],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]}),t})();var tt=c("YsVr"),et=c("3Zzt"),ct=c("/ed5"),it=c("Wp6s"),ot=c("f0Cb"),at=c("XiUz");function nt(t,e){1&t&&(m.bc(0,"small",26),m.Uc(1," First * is required "),m.ac())}function rt(t,e){1&t&&(m.bc(0,"small",26),m.Uc(1," First * is required "),m.ac())}function st(t,e){1&t&&(m.bc(0,"small",26),m.Uc(1," First * is required "),m.ac())}function lt(t,e){if(1&t){const t=m.cc();m.bc(0,"button",27),m.nc("click",(function(){return m.Lc(t),m.rc().addToCart()})),m.bc(1,"mat-icon"),m.Uc(2,"add_task"),m.ac(),m.Uc(3," Agregar "),m.ac()}}function mt(t,e){if(1&t){const t=m.cc();m.bc(0,"button",27),m.nc("click",(function(){return m.Lc(t),m.rc().addToRegister()})),m.bc(1,"mat-icon"),m.Uc(2,"add_task"),m.ac(),m.Uc(3," Registrar "),m.ac()}}function dt(t,e){if(1&t){const t=m.cc();m.bc(0,"div",33),m.bc(1,"div",34),m.nc("click",(function(){m.Lc(t);const e=m.rc().index;return m.rc().removeFromCart(e)})),m.Uc(2,"X"),m.ac(),m.ac()}}function ut(t,e){if(1&t){const t=m.cc();m.bc(0,"div",33),m.bc(1,"div",34),m.nc("click",(function(){m.Lc(t);const e=m.rc().$implicit;return m.rc().removeCliente(e.id_ase_cli)})),m.Uc(2,"X"),m.ac(),m.ac()}}const ft=function(){return{"background-image":"url(https://i.pinimg.com/originals/83/c0/0f/83c00f59d66869aa22d3bd5f35e26c6d.png)"}};function bt(t,e){if(1&t&&(m.bc(0,"div",28),m.bc(1,"div",29),m.Wb(2,"div",30),m.ac(),m.bc(3,"div",29),m.bc(4,"div",31),m.Uc(5),m.ac(),m.ac(),m.bc(6,"div",29),m.bc(7,"div",31),m.Uc(8),m.ac(),m.ac(),m.bc(9,"div",29),m.bc(10,"div",31),m.Uc(11),m.ac(),m.ac(),m.bc(12,"div",29),m.bc(13,"div",31),m.Uc(14),m.ac(),m.ac(),m.bc(15,"div",29),m.bc(16,"div",31),m.Uc(17),m.ac(),m.ac(),m.Sc(18,dt,3,0,"div",32),m.Sc(19,ut,3,0,"div",32),m.ac()),2&t){const t=e.$implicit,c=m.rc();m.Fb(2),m.xc("ngStyle",m.Cc(8,ft)),m.Fb(3),m.Wc(" ",t.id_cliente," "),m.Fb(3),m.Wc(" ",t.razon_social," "),m.Fb(3),m.Wc(" ",t.ruc," "),m.Fb(3),m.Wc(" ",t.nombre_contacto," "),m.Fb(3),m.Wc(" ",t.telefono," "),m.Fb(1),m.xc("ngIf",!c.isAprob),m.Fb(1),m.xc("ngIf",c.isAprob)}}function pt(t,e){if(1&t){const t=m.cc();m.bc(0,"div",20),m.bc(1,"button",27),m.nc("click",(function(){return m.Lc(t),m.rc().SumitRegister()})),m.bc(2,"mat-icon"),m.Uc(3,"check_circle_outline"),m.ac(),m.Uc(4," Registrar "),m.ac(),m.ac()}}let ht=(()=>{class t{constructor(t,e,c,i,o,a,n,r){this.asesorServices=t,this.router=e,this.route=c,this.dialog=i,this.cartService=o,this.usersService=a,this.repartDateService=n,this.notificationService=r,this.showRadio=!0,this.isAprob=!1,this.show=!0,this.cartList=[],this.isArrays=[],this.addToCart=()=>{let t=!0;if(Number(this.formAsesor.value.id_cliente)>0&&""!=this.formAsesor.value.id_cliente&&null!=this.formAsesor.value.id_cliente){if(this.cartList.forEach((e,c)=>{e.id_cliente==this.formAsesor.value.id_cliente&&(this.notificationService.success("Ya existe el Cliente..!"),t=!1)}),t){const t=JSON.parse(JSON.stringify({id_cliente:this.formAsesor.value.id_cliente,razon_social:this.formAsesor.value.razon_social,ruc:this.formAsesor.value.ruc,nombre_contacto:this.formAsesor.value.nombre_contacto,telefono:this.formAsesor.value.telefono_cliente}));this.isArrays.push(t),this.cartList=this.isArrays,this.formAsesor.patchValue({id_cliente:null}),this.formAsesor.patchValue({razon_social:null}),this.formAsesor.patchValue({ruc:null}),this.formAsesor.patchValue({nombre_contacto:null}),this.formAsesor.patchValue({telefono_cliente:null})}}else this.notificationService.success("Agrege un Cliente..!")},this.removeFromCart=t=>{this.cartList.splice(t,1)},this.removeCliente=t=>{confirm("Esta seguro de Retirar al Cliente?")&&this.asesorServices.deleteAdviserClient(t).subscribe(t=>{this.notificationService.success(JSON.parse(JSON.stringify(t)).message),this.editAdviserClient(this.route.snapshot.params.id)})},this.projectsSubscription=this.repartDateService.getMessageClienteAdviser().subscribe(t=>{this.formAsesor.patchValue({id_cliente:t.id_cliente}),this.formAsesor.patchValue({razon_social:t.razon_social}),this.formAsesor.patchValue({ruc:t.ruc}),this.formAsesor.patchValue({nombre_contacto:t.nombre_contacto}),this.formAsesor.patchValue({telefono_cliente:t.telefono})})}ngOnInit(){this.myModel=!0,this.formAsesor=new d.h({nombre:new d.e(null,d.x.required),apellido:new d.e(null,d.x.required),telefono:new d.e(null,d.x.required),id_cliente:new d.e(""),razon_social:new d.e(""),ruc:new d.e(""),nombre_contacto:new d.e(""),telefono_cliente:new d.e("")}),this.route.snapshot.params.id&&(this.editAdviser(this.route.snapshot.params.id),this.editAdviserClient(this.route.snapshot.params.id),this.isAprob=!0)}editAdviser(t){this.asesorServices.editAdviser(t).subscribe(t=>{const e=JSON.parse(JSON.stringify(t)).data;this.formAsesor.get("nombre").setValue(e.nombre),this.formAsesor.get("apellido").setValue(e.apellido),this.formAsesor.get("telefono").setValue(e.telefono)})}editAdviserClient(t){this.asesorServices.editAdviserClient(t).subscribe(t=>{const e=JSON.parse(JSON.stringify(t));this.cartList=e.data})}getOpenModalCliente(){const t=new p.e;t.disableClose=!0,t.autoFocus=!0,t.width="60%",this.dialog.open(ct.a,t),this.usersService.sumitEmployee(!!this.showRadio)}SumitRegister(){if(this.formAsesor.valid)if(this.cartList.length>0){let t=[];this.cartList.forEach((e,c)=>{t.push(e.id_cliente)});const e=JSON.parse(JSON.stringify({nombre:this.formAsesor.value.nombre,apellido:this.formAsesor.value.apellido,telefono:this.formAsesor.value.telefono,id_cliente:t}));this.asesorServices.registerEmployee(e).subscribe(t=>{this.notificationService.success(JSON.parse(JSON.stringify(t)).message),this.router.navigate(["/asesores/mat-table"])})}else this.notificationService.success("Agrege un Cliente..!");else this.notificationService.success("Ingrese todos los Campos..!")}addToRegister(){let t=!0;if(""!=this.formAsesor.value.nombre&&""!=this.formAsesor.value.apellido&&this.formAsesor.value.telefono)if(""!=this.formAsesor.value.id_cliente&&null!=this.formAsesor.value.id_cliente){if(this.cartList.length>0&&this.cartList.forEach((e,c)=>{e.id_cliente==this.formAsesor.value.id_cliente?(this.notificationService.success("Ya existe el Cliente..!"),t=!1):t=!0}),t&&confirm("\xbfEst\xe1 seguro de asignar al cliente?")){const t=JSON.parse(JSON.stringify({id_asesor:this.route.snapshot.params.id,id_cliente:this.formAsesor.value.id_cliente}));this.asesorServices.registerAsesorCliente(t).subscribe(t=>{this.notificationService.success(JSON.parse(JSON.stringify(t)).message),this.formAsesor.patchValue({id_cliente:null}),this.formAsesor.patchValue({razon_social:null}),this.formAsesor.patchValue({ruc:null}),this.formAsesor.patchValue({nombre_contacto:null}),this.formAsesor.patchValue({telefono_cliente:null}),this.editAdviserClient(this.route.snapshot.params.id)})}}else this.notificationService.success("Agrege un Cliente..!");else this.notificationService.success("Ingrese todos los Campos..!")}ngOnDestroy(){this.projectsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(m.Vb(b.a),m.Vb(o.g),m.Vb(o.a),m.Vb(p.b),m.Vb(et.a),m.Vb(S.a),m.Vb(tt.a),m.Vb(_))},t.\u0275cmp=m.Pb({type:t,selectors:[["app-aseclient"]],decls:74,vars:8,consts:[[1,"p-0"],[3,"formGroup"],[1,""],[1,"card-title-text"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-xs","50",1,"pr-1"],[1,"pb-1"],[1,"full-width"],["matInput","","name","nombre","formControlName","nombre","placeholder","Nombre","value",""],["class","form-error-msg",4,"ngIf"],["matInput","","name","apellido","formControlName","apellido","placeholder","Apellido","value",""],["matInput","","name","telefono","formControlName","telefono","placeholder","Tel\xe9fono","value",""],["type","hidden","name","id_cliente","formControlName","id_cliente","value",""],["matInput","","name","razon_social","formControlName","razon_social","placeholder","Raz\xf3n Social","value","","readonly",""],["matInput","","name","ruc","formControlName","ruc","placeholder","DNI o RUC","value","","readonly",""],["matInput","","name","nombre_contacto","formControlName","nombre_contacto","placeholder","Nombre del Contacto","value","","readonly",""],["matInput","","name","telefono_cliente","formControlName","telefono_cliente","placeholder","Tel\xe9fono","value","","readonly",""],[1,"example-button-container"],["mat-fab","","color","primary","aria-label","Example icon button with a delete icon",3,"click"],[1,"cart-page-content"],[1,"cart-buttons","checkout-button"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],[1,"cart-item-header","cart-item-row"],[1,"cart-item-cell","cart-item-product"],["class","cart-item-row",4,"ngFor","ngForOf"],["class","cart-buttons checkout-button",4,"ngIf"],[1,"form-error-msg"],["mat-raised-button","","color","primary",3,"click"],[1,"cart-item-row"],[1,"cart-item-cell","cart-item-total"],[1,"cart-item-thumbnail",3,"ngStyle"],[1,"item-price"],["class","cart-item-cell cart-item-action",4,"ngIf"],[1,"cart-item-cell","cart-item-action"],[1,"item-remove",3,"click"]],template:function(t,e){1&t&&(m.bc(0,"mat-card",0),m.bc(1,"form",1),m.bc(2,"mat-card-title",2),m.bc(3,"div",3),m.Uc(4,"Datos del Asesor"),m.ac(),m.Wb(5,"mat-divider"),m.ac(),m.bc(6,"mat-card-content"),m.bc(7,"div",4),m.bc(8,"div",5),m.bc(9,"div",6),m.bc(10,"mat-form-field",7),m.Wb(11,"input",8),m.ac(),m.Sc(12,nt,2,0,"small",9),m.ac(),m.bc(13,"div",6),m.bc(14,"mat-form-field",7),m.Wb(15,"input",10),m.ac(),m.Sc(16,rt,2,0,"small",9),m.ac(),m.ac(),m.bc(17,"div",5),m.bc(18,"div",6),m.bc(19,"mat-form-field",7),m.Wb(20,"input",11),m.ac(),m.Sc(21,st,2,0,"small",9),m.ac(),m.ac(),m.ac(),m.ac(),m.bc(22,"mat-card-title",2),m.bc(23,"div",3),m.Uc(24,"Datos Cliente"),m.ac(),m.Wb(25,"mat-divider"),m.ac(),m.bc(26,"mat-card-content"),m.bc(27,"div",4),m.bc(28,"div",5),m.Wb(29,"input",12),m.bc(30,"div",6),m.bc(31,"mat-form-field",7),m.Wb(32,"input",13),m.ac(),m.ac(),m.bc(33,"div",6),m.bc(34,"mat-form-field",7),m.Wb(35,"input",14),m.ac(),m.ac(),m.ac(),m.bc(36,"div",5),m.bc(37,"div",6),m.bc(38,"mat-form-field",7),m.Wb(39,"input",15),m.ac(),m.ac(),m.bc(40,"div",6),m.bc(41,"mat-form-field",7),m.Wb(42,"input",16),m.ac(),m.ac(),m.ac(),m.ac(),m.bc(43,"div",17),m.bc(44,"button",18),m.nc("click",(function(){return e.getOpenModalCliente()})),m.bc(45,"mat-icon"),m.Uc(46,"search"),m.ac(),m.ac(),m.ac(),m.ac(),m.bc(47,"mat-card-content"),m.bc(48,"div",19),m.bc(49,"div",20),m.Sc(50,lt,4,0,"button",21),m.Sc(51,mt,4,0,"button",21),m.ac(),m.bc(52,"div",22),m.bc(53,"div",23),m.Wb(54,"span"),m.ac(),m.bc(55,"div",23),m.bc(56,"span"),m.Uc(57,"ID"),m.ac(),m.ac(),m.bc(58,"div",23),m.bc(59,"span"),m.Uc(60,"Nombre"),m.ac(),m.ac(),m.bc(61,"div",23),m.bc(62,"span"),m.Uc(63,"ruc"),m.ac(),m.ac(),m.bc(64,"div",23),m.bc(65,"span"),m.Uc(66,"DIRECCI\xd3N"),m.ac(),m.ac(),m.bc(67,"div",23),m.bc(68,"span"),m.Uc(69,"TEL\xc9FONO"),m.ac(),m.ac(),m.bc(70,"div",23),m.Wb(71,"span"),m.ac(),m.ac(),m.Sc(72,bt,20,9,"div",24),m.Sc(73,pt,5,0,"div",25),m.ac(),m.ac(),m.ac(),m.ac()),2&t&&(m.Fb(1),m.xc("formGroup",e.formAsesor),m.Fb(11),m.xc("ngIf",e.formAsesor.controls.nombre.hasError("required")&&e.formAsesor.controls.nombre.touched),m.Fb(4),m.xc("ngIf",e.formAsesor.controls.apellido.hasError("required")&&e.formAsesor.controls.apellido.touched),m.Fb(5),m.xc("ngIf",e.formAsesor.controls.telefono.hasError("required")&&e.formAsesor.controls.telefono.touched),m.Fb(29),m.xc("ngIf",!e.isAprob),m.Fb(1),m.xc("ngIf",e.isAprob),m.Fb(21),m.xc("ngForOf",e.cartList),m.Fb(1),m.xc("ngIf",!e.isAprob))},directives:[it.a,d.z,d.q,d.i,it.e,ot.a,it.c,at.c,at.a,g.c,a.b,d.b,d.p,d.g,i.n,v.b,w.a,i.m,O.c,i.o],styles:["mat-form-field[_ngcontent-%COMP%]{margin-right:12px}.cart-page-container[_ngcontent-%COMP%]{max-width:1140px;text-align:center;padding:0 30px;margin:auto}.cart-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;font-family:Playfair Display;margin:80px 0}.cart-page-content[_ngcontent-%COMP%]{max-width:940px;margin:30px 70px;background-color:#fff}.cart-item-cell[_ngcontent-%COMP%]{width:100%}.cart-item-row[_ngcontent-%COMP%], .cart-total[_ngcontent-%COMP%]{border-bottom:1px solid #e4e4e4}.cart-item-header[_ngcontent-%COMP%]   .cart-item-cell[_ngcontent-%COMP%]:first-of-type{text-align:left}.cart-item-header[_ngcontent-%COMP%]   .cart-item-cell[_ngcontent-%COMP%]{text-transform:uppercase;font-size:12px;letter-spacing:.15em;color:#9f9f9f;text-align:right}.cart-item-thumbnail[_ngcontent-%COMP%]{float:left;width:60px;height:60px;margin-right:15px;vertical-align:middle;background-position:50% 50%;background-repeat:no-repeat;background-size:cover}.cart-item-info[_ngcontent-%COMP%]{float:left}.cart-item-brand[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-size:12px;letter-spacing:.05em;color:#9f9f9f}.cart-item-brand[_ngcontent-%COMP%], .cart-item-title[_ngcontent-%COMP%]{text-transform:uppercase;text-align:left}.cart-item-title[_ngcontent-%COMP%]{color:#1d1d20;max-width:100%;letter-spacing:.1em}.item-price[_ngcontent-%COMP%]{color:#9f9f9f;font-size:16px;font-family:Playfair Display}.item-remove[_ngcontent-%COMP%]{font-size:30px;color:#9f9f9f;cursor:pointer}.item-remove[_ngcontent-%COMP%]:hover{color:#000}.cart-total[_ngcontent-%COMP%]{text-transform:uppercase;color:#9f9f9f;letter-spacing:2px;margin:0}.cart-total-row[_ngcontent-%COMP%]{line-height:30px}.cart-total-label[_ngcontent-%COMP%]{text-align:left}.cart-total-value[_ngcontent-%COMP%]{text-align:right}.cart-total-price[_ngcontent-%COMP%]{color:#000}.cart-buttons[_ngcontent-%COMP%]{padding:20px 0}.continue-shopping[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase;color:#000;float:left}.checkout-button[_ngcontent-%COMP%]{text-align:end;margin-bottom:20px}@media screen and (min-width:768px){.cart-item-row[_ngcontent-%COMP%]{display:table;width:100%;border-collapse:separate;border-spacing:0 30px;box-sizing:border-box;table-layout:fixed}.cart-item-product[_ngcontent-%COMP%]{width:320%;text-align:left}.cart-item-cell[_ngcontent-%COMP%]{display:table-cell;vertical-align:top;text-align:right}}@media screen and (max-width:820px){.cart-page-content[_ngcontent-%COMP%]{margin:0}.cart-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:30px 0}.cart-item-header[_ngcontent-%COMP%]{display:none}.cart-item-product[_ngcontent-%COMP%]{width:100%;float:left;margin-left:0;padding-bottom:15px}.cart-item-quantity[_ngcontent-%COMP%]{width:80%;float:left;padding-bottom:15px;text-align:left}.cart-item-action[_ngcontent-%COMP%], .cart-item-total[_ngcontent-%COMP%]{text-align:right}.cart-total-label[_ngcontent-%COMP%]{float:left}.continue-shopping[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:none}.checkout-button[_ngcontent-%COMP%]{float:none;margin:20px 0 0}}"]}),t})();const gt=[{path:"",children:[{path:"mat-table",component:Q},{path:"aseclient",component:ht,data:{title:"Form Asesor",breadcrumb:"Form Asesor"}},{path:"aseclient/:id",component:ht,data:{title:"Edit Asesor",breadcrumb:"Edit Asesor"}}]}];var vt=c("tk/3"),Ct=c("bSwM"),xt=c("iadO"),_t=c("d3UM"),St=c("/t3+"),wt=c("A5z7"),yt=c("FKr1");let Ot=(()=>{class t{}return t.\u0275mod=m.Tb({type:t}),t.\u0275inj=m.Sb({factory:function(e){return new(e||t)},imports:[[wt.c,i.c,St.b,h.b,g.e,a.c,y.c,_t.b,Ct.b,xt.c,yt.n,v.c,x.b,s.p,w.b,n.b,r.c,p.g,it.d],wt.c,i.c,St.b,h.b,g.e,a.c,y.c,_t.b,Ct.b,xt.c,yt.n,v.c,x.b,s.p,w.b,n.b,r.c,p.g,it.d]}),t})();var At=c("MutI"),Mt=c("bv9b"),Pt=c("xHqg"),Ft=c("YUcS"),Dt=c("CzEO"),Ut=c("7pIB"),kt=c("2Z0n"),It=c("AExG");let Nt=(()=>{class t{}return t.\u0275mod=m.Tb({type:t}),t.\u0275inj=m.Sb({factory:function(e){return new(e||t)},providers:[{provide:p.h,useValue:{}},f,b.a,i.e,S.a,kt.a,It.a,et.a,tt.a],imports:[[At.b,Mt.b,Pt.d,Ft.a,Dt.a,Ut.a,h.b,Ot,vt.d,d.v,d.k,i.c,a.c,n.b,r.c,s.p,l.a,o.k.forChild(gt)]]}),t})()}}]);