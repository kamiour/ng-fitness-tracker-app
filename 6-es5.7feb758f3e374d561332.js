!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CKRj:function(t,i,a){"use strict";a.r(i),a.d(i,"TrainingModule",(function(){return ce}));var c=a("PCNd"),r=a("tyNb"),o=a("fXoL"),s=a("vEl1"),u=a("ofXK"),b=a("wZkO"),l=a("y8OW"),f=a("XiUz"),m=a("3Pt+"),g=a("Wp6s"),d=a("kmnG"),p=a("d3UM"),h=a("FKr1"),S=a("Xa2L"),v=a("bTqV");function y(e,t){if(1&e&&(o.Tb(0,"mat-option",11),o.Ac(1),o.Sb()),2&e){var n=t.$implicit;o.lc("value",n.id),o.Bb(1),o.Cc(" ",n.name," ")}}function x(e,t){if(1&e&&(o.Tb(0,"mat-form-field",8),o.Tb(1,"mat-label"),o.Ac(2,"Pick an exercise"),o.Sb(),o.Tb(3,"mat-select",9),o.yc(4,y,2,2,"mat-option",10),o.Sb(),o.Sb()),2&e){var n=o.fc();o.Bb(4),o.lc("ngForOf",n.exercises)}}function T(e,t){1&e&&o.Ob(0,"mat-spinner")}function w(e,t){if(1&e&&(o.Tb(0,"button",14),o.Ac(1," Start "),o.Sb()),2&e){o.fc(2);var n=o.qc(2);o.lc("disabled",n.invalid)}}function C(e,t){if(1&e){var n=o.Ub();o.Tb(0,"button",15),o.bc("click",(function(){return o.sc(n),o.fc(2).fetchExercises()})),o.Ac(1," Fetch again "),o.Sb()}}function A(e,t){if(1&e&&(o.Tb(0,"mat-card-actions",4),o.yc(1,w,2,1,"button",12),o.yc(2,C,2,0,"button",13),o.Sb()),2&e){var n=o.fc();o.Bb(1),o.lc("ngIf",n.exercises),o.Bb(1),o.lc("ngIf",!n.exercises)}}var k,O=((k=function(){function t(n,i){e(this,t),this.trainingService=n,this.uiService=i,this.isLoading=!1}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.loadingSub=this.uiService.loadingStateChanged.subscribe((function(t){e.isLoading=t})),this.exerciseSubscription=this.trainingService.exercisesChanged.subscribe((function(t){e.exercises=t})),this.fetchExercises()}},{key:"fetchExercises",value:function(){this.trainingService.cancelFbSubs(),this.trainingService.fetchAvailableExercises()}},{key:"onStartTraining",value:function(e){this.trainingService.startExercise(e.value.exercise)}},{key:"ngOnDestroy",value:function(){this.exerciseSubscription&&this.exerciseSubscription.unsubscribe(),this.loadingSub&&this.loadingSub.unsubscribe(),this.trainingService.cancelFbSubs()}}]),t}()).\u0275fac=function(e){return new(e||k)(o.Nb(s.a),o.Nb(l.a))},k.\u0275cmp=o.Hb({type:k,selectors:[["app-new-training"]],decls:10,vars:3,consts:[["fxLayout","","fxLayoutAlign","center",1,"new-training"],[3,"ngSubmit"],["f","ngForm"],["fxFlex","100%","fxFlex.gt-xs","400px"],["fxLayoutAlign","center"],["appearance","standard",4,"ngIf"],[4,"ngIf"],["fxLayoutAlign","center",4,"ngIf"],["appearance","standard"],["ngModel","","name","exercise","required",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["mat-raised-button","","type","submit","color","primary",3,"disabled",4,"ngIf"],["mat-raised-button","","type","button","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","type","submit","color","primary",3,"disabled"],["mat-raised-button","","type","button","color","primary",3,"click"]],template:function(e,t){if(1&e){var n=o.Ub();o.Tb(0,"section",0),o.Tb(1,"form",1,2),o.bc("ngSubmit",(function(){o.sc(n);var e=o.qc(2);return t.onStartTraining(e)})),o.Tb(3,"mat-card",3),o.Tb(4,"mat-card-title",4),o.Ac(5,"Time to start a workout"),o.Sb(),o.Tb(6,"mat-card-content",4),o.yc(7,x,5,1,"mat-form-field",5),o.yc(8,T,1,0,"mat-spinner",6),o.Sb(),o.yc(9,A,3,2,"mat-card-actions",7),o.Sb(),o.Sb(),o.Sb()}2&e&&(o.Bb(7),o.lc("ngIf",!t.isLoading&&t.exercises),o.Bb(1),o.lc("ngIf",t.isLoading),o.Bb(1),o.lc("ngIf",!t.isLoading))},directives:[f.c,f.b,m.s,m.m,m.n,g.a,f.a,g.e,g.c,u.m,d.c,d.g,p.a,m.l,m.o,m.q,u.l,h.n,S.c,g.b,v.a],styles:[".new-training[_ngcontent-%COMP%]{padding:20px}"]}),k),B=a("+0xr"),I=a("Dh3D"),D=a("M9IT"),L=a("qFsG");function E(e,t){1&e&&(o.Tb(0,"mat-header-cell",15),o.Ac(1,"Date"),o.Sb())}function F(e,t){if(1&e&&(o.Tb(0,"mat-cell"),o.Ac(1),o.gc(2,"date"),o.Sb()),2&e){var n=t.$implicit;o.Bb(1),o.Bc(o.hc(2,1,n.date.toDate()))}}function R(e,t){1&e&&(o.Tb(0,"mat-header-cell",15),o.Ac(1,"Name"),o.Sb())}function N(e,t){if(1&e&&(o.Tb(0,"mat-cell"),o.Ac(1),o.Sb()),2&e){var n=t.$implicit;o.Bb(1),o.Bc(n.name)}}function H(e,t){1&e&&(o.Tb(0,"mat-header-cell",15),o.Ac(1,"Calories"),o.Sb())}function q(e,t){if(1&e&&(o.Tb(0,"mat-cell"),o.Ac(1),o.gc(2,"number"),o.Sb()),2&e){var n=t.$implicit;o.Bb(1),o.Bc(o.ic(2,1,n.calories,"1.0-2"))}}function P(e,t){1&e&&(o.Tb(0,"mat-header-cell",15),o.Ac(1,"Duration"),o.Sb())}function z(e,t){if(1&e&&(o.Tb(0,"mat-cell"),o.Ac(1),o.gc(2,"number"),o.Sb()),2&e){var n=t.$implicit;o.Bb(1),o.Bc(o.ic(2,1,n.duration,"1.0-2"))}}function K(e,t){1&e&&(o.Tb(0,"mat-header-cell"),o.Ac(1,"State"),o.Sb())}function M(e,t){if(1&e&&(o.Tb(0,"mat-cell"),o.Ac(1),o.Sb()),2&e){var n=t.$implicit;o.Bb(1),o.Bc(n.state)}}function Q(e,t){1&e&&o.Ob(0,"mat-header-row")}function $(e,t){1&e&&o.Ob(0,"mat-row")}var j,G,U,X=function(){return[5,10,25,100]},J=((j=function(){function t(n){e(this,t),this.trainingService=n,this.displayedColumns=["date","name","duration","calories","state"],this.dataSource=new B.k}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.exChangedSubscription=this.trainingService.finishedExercisesChanged.subscribe((function(t){e.dataSource.data=t})),this.trainingService.fetchCompletedOrCancelledExercises()}},{key:"ngAfterViewInit",value:function(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}},{key:"doFilter",value:function(e){this.dataSource.filter=e.trim().toLocaleLowerCase()}},{key:"ngOnDestroy",value:function(){this.exChangedSubscription&&this.exChangedSubscription.unsubscribe(),this.trainingService.cancelFbSubs()}}]),t}()).\u0275fac=function(e){return new(e||j)(o.Nb(s.a))},j.\u0275cmp=o.Hb({type:j,selectors:[["app-past-trainings"]],viewQuery:function(e,t){var n;1&e&&(o.Ec(I.a,!0),o.Ec(D.a,!0)),2&e&&(o.pc(n=o.cc())&&(t.sort=n.first),o.pc(n=o.cc())&&(t.paginator=n.first))},decls:22,vars:6,consts:[["fxLayoutAlign","center center"],["appearance","standard","fxFlex","40%"],["matInput","","type","text","placeholder","Filter",3,"keyup"],["matSort","",3,"dataSource"],["matColumnDef","date"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","calories"],["matColumnDef","duration"],["matColumnDef","state"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["mat-sort-header",""]],template:function(e,t){1&e&&(o.Tb(0,"div",0),o.Tb(1,"mat-form-field",1),o.Tb(2,"input",2),o.bc("keyup",(function(e){return t.doFilter(e.target.value)})),o.Sb(),o.Sb(),o.Sb(),o.Tb(3,"mat-table",3),o.Rb(4,4),o.yc(5,E,2,0,"mat-header-cell",5),o.yc(6,F,3,3,"mat-cell",6),o.Qb(),o.Rb(7,7),o.yc(8,R,2,0,"mat-header-cell",5),o.yc(9,N,2,1,"mat-cell",6),o.Qb(),o.Rb(10,8),o.yc(11,H,2,0,"mat-header-cell",5),o.yc(12,q,3,4,"mat-cell",6),o.Qb(),o.Rb(13,9),o.yc(14,P,2,0,"mat-header-cell",5),o.yc(15,z,3,4,"mat-cell",6),o.Qb(),o.Rb(16,10),o.yc(17,K,2,0,"mat-header-cell",11),o.yc(18,M,2,1,"mat-cell",6),o.Qb(),o.yc(19,Q,1,0,"mat-header-row",12),o.yc(20,$,1,0,"mat-row",13),o.Sb(),o.Ob(21,"mat-paginator",14)),2&e&&(o.Bb(3),o.lc("dataSource",t.dataSource),o.Bb(16),o.lc("matHeaderRowDef",t.displayedColumns),o.Bb(1),o.lc("matRowDefColumns",t.displayedColumns),o.Bb(1),o.lc("pageSize",10)("pageSizeOptions",o.mc(5,X)))},directives:[f.b,d.c,f.a,L.b,B.j,I.a,B.c,B.e,B.b,B.g,B.i,D.a,B.d,I.b,B.a,B.f,B.h],pipes:[u.e,u.f],styles:[""]}),j),V=a("0IaG"),W=((U=function t(n){e(this,t),this.passedData=n}).\u0275fac=function(e){return new(e||U)(o.Nb(V.a))},U.\u0275cmp=o.Hb({type:U,selectors:[["app-stop-training"]],decls:9,vars:3,consts:[["mat-dialog-title",""],["mat-raised-button","",3,"mat-dialog-close"],["mat-raised-button","","color","accent",3,"mat-dialog-close"]],template:function(e,t){1&e&&(o.Tb(0,"h1",0),o.Ac(1,"Are you sure?"),o.Sb(),o.Tb(2,"mat-dialog-content"),o.Ac(3),o.Sb(),o.Tb(4,"mat-dialog-actions"),o.Tb(5,"button",1),o.Ac(6,"Yes"),o.Sb(),o.Tb(7,"button",2),o.Ac(8,"No"),o.Sb(),o.Sb()),2&e&&(o.Bb(3),o.Cc("You've already got ",t.passedData.progress,"%"),o.Bb(2),o.lc("mat-dialog-close",!0),o.Bb(2),o.lc("mat-dialog-close",!1))},directives:[V.g,V.e,V.c,v.a,V.d],encapsulation:2}),U),Y=((G=function(){function t(n,i){e(this,t),this.dialog=n,this.trainingService=i,this.progress=0}return n(t,[{key:"ngOnInit",value:function(){this.startOrResumeTimer()}},{key:"onStop",value:function(){var e=this;clearInterval(this.timer),this.dialog.open(W,{data:{progress:this.progress}}).afterClosed().subscribe((function(t){t?e.trainingService.cancelExercise(e.progress):e.startOrResumeTimer()}))}},{key:"startOrResumeTimer",value:function(){var e=this,t=this.trainingService.getRunningExercise().duration/100*1e3;this.timer=setInterval((function(){e.progress=e.progress+1,e.progress>=100&&(e.trainingService.completeExercise(),clearInterval(e.timer))}),t)}}]),t}()).\u0275fac=function(e){return new(e||G)(o.Nb(V.b),o.Nb(s.a))},G.\u0275cmp=o.Hb({type:G,selectors:[["app-current-training"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","15px",1,"current-training"],["mode","determinate",3,"value"],["mat-raised-button","","color","accent",3,"click"]],template:function(e,t){1&e&&(o.Tb(0,"section",0),o.Ob(1,"mat-progress-spinner",1),o.Tb(2,"h1"),o.Ac(3),o.Sb(),o.Tb(4,"p"),o.Ac(5,"Keep on going, you can do it!"),o.Sb(),o.Tb(6,"button",2),o.bc("click",(function(){return t.onStop()})),o.Ac(7,"Stop"),o.Sb(),o.Sb()),2&e&&(o.Bb(1),o.lc("value",t.progress),o.Bb(2),o.Cc("",t.progress,"%"))},directives:[f.c,f.b,f.d,S.a,v.a],styles:[".current-training[_ngcontent-%COMP%]{padding:20px}"]}),G);function _(e,t){1&e&&(o.Tb(0,"mat-tab-group"),o.Tb(1,"mat-tab",2),o.Ob(2,"app-new-training"),o.Sb(),o.Tb(3,"mat-tab",3),o.Ob(4,"app-past-trainings"),o.Sb(),o.Sb())}function Z(e,t){1&e&&o.Ob(0,"app-current-training")}var ee,te,ne,ie=[{path:"",component:(ee=function(){function t(n){e(this,t),this.trainingService=n,this.ongoingTraining=!1}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.exerciseSubscription=this.trainingService.exerciseChanged.subscribe((function(t){e.ongoingTraining=!!t}))}},{key:"ngOnDestroy",value:function(){this.exerciseSubscription&&this.exerciseSubscription.unsubscribe()}}]),t}(),ee.\u0275fac=function(e){return new(e||ee)(o.Nb(s.a))},ee.\u0275cmp=o.Hb({type:ee,selectors:[["app-training"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["ongoingTrainingBlock",""],["label","New Exercise"],["label","Past Exercises"]],template:function(e,t){if(1&e&&(o.yc(0,_,5,0,"mat-tab-group",0),o.yc(1,Z,1,0,"ng-template",null,1,o.zc)),2&e){var n=o.qc(2);o.lc("ngIf",!t.ongoingTraining)("ngIfElse",n)}},directives:[u.m,b.b,b.a,O,J,Y],styles:[""]}),ee)}],ae=((ne=function t(){e(this,t)}).\u0275mod=o.Lb({type:ne}),ne.\u0275inj=o.Kb({factory:function(e){return new(e||ne)},imports:[[r.c.forChild(ie)],r.c]}),ne),ce=((te=function t(){e(this,t)}).\u0275mod=o.Lb({type:te}),te.\u0275inj=o.Kb({factory:function(e){return new(e||te)},imports:[[c.a,ae]]}),te)}}])}();