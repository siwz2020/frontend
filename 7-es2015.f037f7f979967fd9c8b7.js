(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{AkKA:function(t,e,c){"use strict";c.r(e),c.d(e,"TicketsModule",(function(){return w}));var i=c("bTqV"),r=c("Wp6s"),a=c("qFsG"),n=c("ofXK"),o=c("tyNb"),s=c("IzEk"),b=c("fXoL"),u=c("AytR"),l=c("tk/3");let p=(()=>{class t{constructor(t){this.httpClient=t,this.TICKET_URL=u.a+"/trips/findOneTrip"}searchForTrip(t){return this.httpClient.get(this.TICKET_URL+"?code="+t)}}return t.\u0275fac=function(e){return new(e||t)(b.Tb(l.a))},t.\u0275prov=b.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=c("3Pt+"),h=c("kmnG"),m=c("kWLz"),O=c("7EHt");function P(t,e){if(1&t&&(b.Pb(0,"mat-accordion"),b.Pb(1,"mat-expansion-panel"),b.Pb(2,"mat-expansion-panel-header"),b.Pb(3,"mat-panel-title"),b.tc(4),b.Ob(),b.Ob(),b.Pb(5,"ul",2),b.Pb(6,"li",3),b.tc(7,"Z: "),b.Pb(8,"b"),b.tc(9),b.Ob(),b.Ob(),b.Pb(10,"li",3),b.tc(11,"Wylot: "),b.Pb(12,"b"),b.tc(13),b.Pb(14,"sup"),b.tc(15),b.Ob(),b.Ob(),b.Ob(),b.Pb(16,"li",3),b.tc(17,"Do: "),b.Pb(18,"b"),b.tc(19),b.Ob(),b.Ob(),b.Pb(20,"li",3),b.tc(21,"Przylot: "),b.Pb(22,"b"),b.tc(23),b.Pb(24,"sup"),b.tc(25),b.Ob(),b.Ob(),b.Ob(),b.Pb(26,"li",3),b.tc(27,"Linia lotnicza: "),b.Pb(28,"b"),b.tc(29),b.Ob(),b.Ob(),b.Pb(30,"li",3),b.tc(31,"Nr miejsca: "),b.Pb(32,"b"),b.tc(33),b.Ob(),b.Ob(),b.Pb(34,"li",3),b.tc(35,"Cena biletu: "),b.Pb(36,"b"),b.tc(37),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()),2&t){const t=e.$implicit,c=e.index,i=b.ac();b.Ab(4),b.xc("Lot nr. ",i.ticket.arraysTicket[c].flightDto.id,", miejsce ",i.ticket.arraysTicket[c].seatNumber,", ",t.srcPlace,""),b.Ab(5),b.uc(t.srcPlace),b.Ab(4),b.wc("",t.departureDate,", ",t.departureTime,""),b.Ab(2),b.uc(t.departureTimezone),b.Ab(4),b.uc(t.dstPlace),b.Ab(4),b.wc("",t.arrivalDate,", ",t.arrivalTime,""),b.Ab(2),b.uc(t.arrivalTimezone),b.Ab(4),b.uc(t.airline),b.Ab(4),b.uc(i.ticket.arraysTicket[c].seatNumber),b.Ab(4),b.uc(i.ticket.arraysTicket[c].totalPrice)}}let k=(()=>{class t{constructor(t){this.viewDataService=t}ngOnChanges(){this.mapTicketToViewData()}mapTicketToViewData(){this.viewData=this.viewDataService.toViewData(this.ticket)}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(m.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-ticket"]],inputs:{ticket:"ticket"},features:[b.yb],decls:8,vars:3,consts:[[1,"title"],[4,"ngFor","ngForOf"],[1,"interFlightWrapper"],[1,"interFlightRow"]],template:function(t,e){1&t&&(b.Pb(0,"mat-card"),b.Pb(1,"mat-card-header"),b.Pb(2,"div",0),b.tc(3,"Lista bilet\xf3w"),b.Ob(),b.Ob(),b.Pb(4,"mat-card-subtitle"),b.tc(5),b.Ob(),b.Pb(6,"mat-card-content"),b.rc(7,P,38,14,"mat-accordion",1),b.Ob(),b.Ob()),2&t&&(b.Ab(5),b.wc(" Data rezerwacji: ",e.ticket.purchaseDate,", ",e.ticket.purchaseTime," "),b.Ab(2),b.fc("ngForOf",e.viewData.flights))},directives:[r.a,r.d,r.f,r.c,n.j,O.a,O.c,O.d,O.e],styles:[".mat-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(i){font-family:Source Code Pro,monospace!important}.mat-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:1.5rem}.mat-card-subtitle[_ngcontent-%COMP%]{margin:1vh 4vw;font-size:1.1rem}.mat-card-content[_ngcontent-%COMP%]{margin:0 5vw}.mat-expansion-panel[_ngcontent-%COMP%]{margin:1vh 0}"]}),t})();function f(t,e){if(1&t&&b.Lb(0,"app-ticket",5),2&t){const t=b.ac();b.fc("ticket",t.ticket)}}const g=function(){return{standalone:!0}},T=[{path:"",component:(()=>{class t{constructor(t,e){this.ticketHttp=t,this.route=e,this.tripCodeSearchQuery=""}ngOnInit(){this.subscribeToRouteParams()}onSearch(){this.fetchTrip()}shouldDisplayTicketDetails(){return this.isTicketFound}fetchTrip(){this.ticketHttp.searchForTrip(this.tripCodeSearchQuery).pipe(Object(s.a)(1)).subscribe(this.onFoundTicket(),this.onFailedFetchedTicket())}subscribeToRouteParams(){this.route.queryParams.pipe(Object(s.a)(1)).subscribe(this.searchForReservedTripBasedOnQueryParams())}searchForReservedTripBasedOnQueryParams(){return t=>{this.extractTripCodeFromUrl(t),this.tripCodeSearchQuery&&this.fetchTrip()}}extractTripCodeFromUrl(t){var e;this.tripCodeSearchQuery=null!==(e=t.code)&&void 0!==e?e:""}onFoundTicket(){return t=>{console.log("received ticket: ",t),this.ticket=t,this.onSuccessfullyFetchedTicket()}}onFailedFetchedTicket(){return t=>{console.error(t),this.manageFlagOnFailure()}}manageFlagOnFailure(){this.isTicketFound=!1}onSuccessfullyFetchedTicket(){this.isTicketFound=!0}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(p),b.Kb(o.a))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-tickets"]],decls:12,vars:5,consts:[[1,"search-input-wrapper"],[1,"search-code-input"],["matInput","","type","text",3,"ngModel","ngModelOptions","ngModelChange"],["mat-button","","color","primary","type","submit",3,"disabled","click"],[3,"ticket",4,"ngIf"],[3,"ticket"]],template:function(t,e){1&t&&(b.Pb(0,"mat-card",0),b.Pb(1,"form"),b.Pb(2,"mat-card-title"),b.tc(3,"Podaj kod zarezerwowanej podr\xf3\u017cy lotniczej:"),b.Ob(),b.Pb(4,"mat-form-field",1),b.Pb(5,"mat-label"),b.tc(6,"kod podr\xf3\u017cy"),b.Ob(),b.Pb(7,"input",2),b.Wb("ngModelChange",(function(t){return e.tripCodeSearchQuery=t})),b.Ob(),b.Ob(),b.Pb(8,"mat-card-actions"),b.Pb(9,"button",3),b.Wb("click",(function(){return e.onSearch()})),b.tc(10,"Szukaj "),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.rc(11,f,1,1,"app-ticket",4)),2&t&&(b.Ab(7),b.fc("ngModel",e.tripCodeSearchQuery)("ngModelOptions",b.gc(4,g)),b.Ab(2),b.fc("disabled",!e.tripCodeSearchQuery.length),b.Ab(2),b.fc("ngIf",e.shouldDisplayTicketDetails()))},directives:[r.a,d.v,d.o,d.p,r.g,h.b,h.e,a.b,d.c,d.n,d.q,r.b,i.a,n.k,k],styles:[".search-input-wrapper[_ngcontent-%COMP%]{display:relative;width:50%;margin:0 auto}.search-code-input[_ngcontent-%COMP%]{width:80%}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},imports:[[o.e.forChild(T)],o.e]}),t})(),w=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},imports:[[n.c,y,d.j,a.c,r.e,i.b,O.b]]}),t})()}}]);