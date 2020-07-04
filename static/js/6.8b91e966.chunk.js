(this["webpackJsonpproperty-investment-calculator"]=this["webpackJsonpproperty-investment-calculator"]||[]).push([[6],{33:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"}),l=function(e){return n.format(e)}},34:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return s})),t.d(a,"c",(function(){return r}));var n=t(38),l=t(35),c=function(e){var a=new n.a(parseFloat(e.mortgageFee));return new n.b(parseFloat(e.mortgageAmount),!1,0,parseFloat(e.initialMortgageRate),[a])},s=function(e){var a=c(e),t=e.annualPayments.map((function(e){return new n.c(parseFloat(e.amount),"yearly")})),l=new n.e(parseFloat(e.rentalIncome),parseFloat(e.lettingFee));return new n.d(e.name,[a],t,[l])},r=function(e){var a=Object(l.calculate)(parseFloat(e.price),l.propertyTypes.RESIDENTIAL,l.countries.ENGLAND,l.buyerTypes.INVESTOR).tax,t=e.acquisitionFees.map((function(e){return new n.a(parseFloat(e.amount))}));return t.push(new n.a(a)),new n.f(parseFloat(e.price),t)}},48:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(0),c=t.n(l),s=t(33),r=t(39),i=t(44),o=t(34);a.default=function(e){var a=e.formData,m=Object(l.useState)(""),u=Object(n.a)(m,2),f=u[0],p=u[1],d=Object(o.c)(a),b=Object(o.a)(a),E=Object(o.b)(a),h=d.calculateTotalCosts()+parseFloat(a.refurbCost)+parseFloat(a.refurbLoanCosts)+b.totalOneOffCosts,N=parseFloat(a.mortgageAmount),v=h-N,y=E.calculateMonthlyProfit(),g=d.fees.reduce((function(e,a){return e+a.amount}),0)+b.fees.reduce((function(e,a){return e+a.amount}),0),O=Object(l.useState)("".concat(E.name," is a property that should be able to generate ").concat(Math.round(100*y*12/v),"% yearly return on an amount of ").concat(Object(s.a)(v)," left in the deal.\nWith a price of ").concat(Object(s.a)(parseFloat(a.price)),", fees of ").concat(Object(s.a)(g)," and refurbishment costs of ").concat(Object(s.a)(parseFloat(a.refurbCost)+parseFloat(a.refurbLoanCosts)),", the total amount of money required is ").concat(Object(s.a)(h),". The property has an estimated refurbished value of ").concat(Object(s.a)(a.estimatedFinalValue),".\nA 75% LTV mortgage of ").concat(Object(s.a)(N)," would mean ").concat(Object(s.a)(v)," is left in the deal.\nMonthly profit after fees and costs should be ").concat(Object(s.a)(y),"; leading to a yearly ROI of ").concat(Math.round(100*y*12/v),"%.")),F=Object(n.a)(O,2),j=F[0],w=F[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"section pt-5"},c.a.createElement("div",{className:"container"},c.a.createElement("header",null,c.a.createElement("h1",{className:"title is-1"},"Generate Investor Pack")),c.a.createElement("p",{className:"mb-4"},"Upload your logo and write a blurb about the property in order to generate a PDF to hand out to potential investors."),c.a.createElement("div",{className:"box"},c.a.createElement("h2",{className:"title is-3"},"Generate Investor Pack"),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"file is-info"},c.a.createElement("label",{className:"file-label"},c.a.createElement("input",{className:"file-input",type:"file",name:"resume",onChange:function(e){p(URL.createObjectURL(e.target.files[0]))}}),c.a.createElement("span",{className:"file-cta"},c.a.createElement("span",{className:"file-icon"},c.a.createElement(r.a,{icon:i.a})),c.a.createElement("span",{className:"file-label"},"Upload your logo\u2026"))))),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control"},c.a.createElement("textarea",{className:"textarea",placeholder:"Property Blurb",value:j,onChange:function(e){w(e.target.value)}})))),c.a.createElement("div",{className:"box"},c.a.createElement("div",{id:"pdf-container",className:"section"},f&&c.a.createElement("img",{src:f,style:{maxWidth:"100%",maxHeight:"90px",margin:"10px auto",display:"block"},alt:"logo"}),c.a.createElement("div",{className:"tile is-ancestor"},c.a.createElement("div",{className:"tile is-vertical is-parent is-size-5 is-8"},c.a.createElement("div",{className:"tile is-vertical"},c.a.createElement("h2",{className:"title"},E.name),j.split("\n").map((function(e,a){return c.a.createElement("p",{key:a},e)})))),c.a.createElement("div",{className:"tile is-parent is-vertical"},c.a.createElement("div",{className:"tile is-child notification is-primary is-light"},c.a.createElement("h2",{className:"title"},"Required Money"),c.a.createElement("p",{className:"subtitle"},Object(s.a)(h))),c.a.createElement("div",{className:"tile is-child notification is-warning"},c.a.createElement("h2",{className:"title"},"Final Value"),c.a.createElement("p",{className:"subtitle"},Object(s.a)(a.estimatedFinalValue))),c.a.createElement("div",{className:"tile is-child notification is-info"},c.a.createElement("h2",{className:"title"},"Profit"),c.a.createElement("p",{className:"subtitle"},Object(s.a)(parseFloat(a.estimatedFinalValue)-h))),c.a.createElement("div",{className:"tile is-child notification is-danger"},c.a.createElement("h2",{className:"title"},"Mortgage Amount"),c.a.createElement("p",{className:"subtitle"},Object(s.a)(N))),c.a.createElement("div",{className:"tile is-child notification is-info is-light"},c.a.createElement("h2",{className:"title"},v>0?"Money Left In Deal":"Money Pulled Out"),c.a.createElement("p",{className:"subtitle"},Object(s.a)(Math.abs(v)))),c.a.createElement("div",{className:"tile is-child notification is-primary"},c.a.createElement("h2",{className:"title"},"Monthly Cashflow"),c.a.createElement("p",{className:"subtitle"},Object(s.a)(y))),c.a.createElement("div",{className:"tile is-child notification is-success"},c.a.createElement("h2",{className:"title"},"Yearly ROI"),c.a.createElement("p",{className:"subtitle"},v>0?Math.round(100*y*12/v):"Infinite","%")))))),c.a.createElement("button",{onClick:function(){var e=document.getElementById("pdf-container");t.e(7).then(t.t.bind(null,45,7)).then((function(a){a.default(e,{})}))},className:"button is-primary"},"Download PDF"))))}}}]);
//# sourceMappingURL=6.8b91e966.chunk.js.map