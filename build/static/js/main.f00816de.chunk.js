(this.webpackJsonpmygento=this.webpackJsonpmygento||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n(10),s=n.n(i),l=(n(18),n(19),n(4)),r=n(5),o=n(3),d=n(7),h=n(6),u=(n(20),function(e){var t=e.value,n=e.onChange,c=e.children,i=e.required;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkbox",className:"checkBox",onChange:function(e){n()},checked:t,value:"a1",required:i}),c]})}),j=(n(21),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,c=e.placeholder,i=e.type,s=void 0===i?"text":i,l=e.onChange,r=e.name,o=e.required;return Object(a.jsxs)("div",{className:"inputContainer",children:[Object(a.jsxs)("label",{children:[" ",t," "]}),Object(a.jsx)("input",{className:"common form-control",onChange:function(e){l(e.target.value)},type:s,placeholder:c,value:n,name:r,required:o})]})}}]),n}(c.Component)),b=(n(22),function(e){return Object(a.jsxs)("div",{className:"RadioButton",children:[Object(a.jsx)("input",{id:e.id,onChange:e.changed,value:e.value,type:"radio",checked:e.isSelected,name:e.name,required:e.required}),Object(a.jsx)("label",{htmlFor:e.id,children:e.label})]})}),m=(n(23),function(e){var t=e.active,n=e.closeModal,c=e.children;return t?Object(a.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return n(!1)},children:Object(a.jsx)("div",{className:t?"modal_content active":"modal_content",onClick:function(e){return e.stopPropagation()},children:c})}):null}),v=function(e){var t=e.active,n=e.closeModal,c=e.name;return Object(a.jsxs)(m,{active:t,closeModal:n,children:[Object(a.jsxs)("h2",{children:["\u0421\u043f\u0430\u0441\u0438\u0431\u043e, ",c,"!"]}),Object(a.jsx)("p",{children:"\u041c\u044b \u0441\u043a\u043e\u0440\u043e \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438"}),Object(a.jsx)("button",{onClick:function(){return n(!0)},type:"button",className:"btn btn-primary",children:"\u041f\u043e\u043d\u044f\u0442\u043d\u043e"})]})},O=(n(24),function(e){var t=e.active,n=e.closeModal;return Object(a.jsx)(m,{active:t,closeModal:n,children:Object(a.jsxs)("div",{className:"privacyModalContent",children:[Object(a.jsxs)("div",{className:"policyBlock",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{className:"policyHeader",children:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return n(!0)},type:"button",className:"btn",children:Object(a.jsx)("p",{children:"\u2716"})})})]}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("span",{children:"1.\u041e\u0431\u0449\u0438\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"privacyTextContent",children:"\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u0424\u0435\u0434\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u043e\u043d\u0430 \u043e\u0442 27.07.2006. \u2116152-\u04243 \xab\u041e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445\xbb \u0438 \u043e\u043f\u0440\u043e\u0434\u0435\u043b\u044f\u0435\u0442 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043c\u0435\u0440\u044b \u043f\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u0435 \u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u044b\u043c \u0418\u0432\u0430\u043d\u043e\u043c \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447\u0435\u043c (\u0434\u0430\u043b\u0435\u0435- \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440). 1.1.\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u0442\u0430\u0432\u0438\u0442 \u0441\u0432\u043e\u0435\u0439 \u0432\u0430\u0436\u043d\u0435\u0439\u0448\u0435\u0439 \u0446\u0435\u043b\u044c\u044e \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0435\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432 \u0438 \u0441\u0432\u043e\u0431\u043e\u0434 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0435\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0437\u0430\u0449\u0438\u0442\u044b \u043f\u0440\u0430\u0432 \u043d\u0430 \u043d\u0435\u043f\u0440\u0438\u043a\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0447\u0430\u0441\u0442\u043d\u043e\u0439 \u0436\u0438\u0437\u043d\u0438, \u043b\u0438\u0447\u043d\u0443\u044e \u0438 \u0441\u0435\u043c\u0435\u0439\u043d\u0443\u044e \u0442\u0430\u0439\u043d\u0443; 1.2.\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0434\u0430\u043b\u0435\u0435 - \u041f\u043e\u043b\u0438\u0442\u0438\u043a) \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430. 1.1.\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u0442\u0430\u0432\u0438\u0442 \u0441\u0432\u043e\u0435\u0439 \u0432\u0430\u0436\u043d\u0435\u0439\u0448\u0435\u0439 \u0446\u0435\u043b\u044c\u044e \u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0435\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u043e\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432 \u0438 \u0441\u0432\u043e\u0431\u043e\u0434 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0435\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0437\u0430\u0449\u0438\u0442\u044b \u043f\u0440\u0430\u0432 \u043d\u0430 \u043d\u0435\u043f\u0440\u0438\u043a\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0447\u0430\u0441\u0442\u043d\u043e\u0439 \u0436\u0438\u0437\u043d\u0438, \u043b\u0438\u0447\u043d\u0443\u044e \u0438 \u0441\u0435\u043c\u0435\u0439\u043d\u0443\u044e \u0442\u0430\u0439\u043d\u0443; 1.2.\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 \u0432 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0434\u0430\u043b\u0435\u0435 - \u041f\u043e\u043b\u0438\u0442\u0438\u043a) \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430."})]}),Object(a.jsx)("button",{onClick:function(){return n(!0)},type:"button",className:"btnI btn-primary",children:"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d"})]})})}),x=n(8),p=n(12),f=(n(27),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var c,i=e.props;return Object(l.a)(this,n),(c=t.call(this,{props:i})).checkFiles=function(){return c.props.arrWithFiles.map((function(e){return Object(a.jsxs)("div",{className:"styledChecFiles",children:[Object(a.jsx)("li",{children:e.path},e.path),Object(a.jsx)("button",{onClick:function(){return c.props.deleteResume(!0)},type:"button",className:"btnResume",children:"\u2716"})]})}))},c}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.onChange,c=t.arrWithFiles,i=t.deleteResume;return Object(a.jsx)(p.a,{onDrop:n,arrWithFiles:c,deleteResume:i,children:function(t){var n=t.getRootProps,i=t.getInputProps;return Object(a.jsxs)("section",{className:"dropzoneContainer",children:[0===c.length&&Object(a.jsxs)("div",Object(x.a)(Object(x.a)({},n({className:"dropzone"})),{},{children:[Object(a.jsx)("input",Object(x.a)({},i())),Object(a.jsx)("div",{className:"plus",children:"+"}),Object(a.jsx)("div",{className:"loading",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0440\u0435\u0437\u044e\u043c\u0435"}),Object(a.jsx)("div",{})]})),Object(a.jsx)("aside",{children:c.length>0&&Object(a.jsx)("div",{className:"renderFiles",children:e.checkFiles()})})]})}})}}]),n}(c.Component)),y=(n(28),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).radioChangeHandler=function(e){a.setState({sex:e.target.value})},a.onPrivacyCheck=function(e){a.setState((function(e){return{isPrivacyChecked:!e.isPrivacyChecked}}))},a.deleteResume=function(){a.setState({files:[]})},a.state={name:"",surname:"",email:"",cv:"",sex:"",githubUrl:"",isPrivacyChecked:!1,isModalActive:!1,isPrivacyModalActive:!1,files:[]},a.onNameChange=a.onNameChange.bind(Object(o.a)(a)),a.onSurnameChange=a.onSurnameChange.bind(Object(o.a)(a)),a.onEmailChange=a.onEmailChange.bind(Object(o.a)(a)),a.onGithubChange=a.onGithubChange.bind(Object(o.a)(a)),a.onSexChange=a.radioChangeHandler.bind(Object(o.a)(a)),a.onSubmit=a.onSubmit.bind(Object(o.a)(a)),a.onPrivacyCheck=a.onPrivacyCheck.bind(Object(o.a)(a)),a.closeModal=a.closeModal.bind(Object(o.a)(a)),a.setPrivacyModal=a.setPrivacyModal.bind(Object(o.a)(a)),a.closePrivacyModal=a.closePrivacyModal.bind(Object(o.a)(a)),a.onDropZone=a.onDropZone.bind(Object(o.a)(a)),a.deleteResume=a.deleteResume.bind(Object(o.a)(a)),a}return Object(r.a)(n,[{key:"onNameChange",value:function(e){this.setState({name:e})}},{key:"onSurnameChange",value:function(e){this.setState({surname:e})}},{key:"onEmailChange",value:function(e){this.setState({email:e})}},{key:"onDropZone",value:function(e){this.setState({files:e})}},{key:"onGithubChange",value:function(e){this.setState({githubUrl:e})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.setState({isModalActive:!0})}},{key:"setPrivacyModal",value:function(){this.setState({isPrivacyModalActive:!0})}},{key:"closePrivacyModal",value:function(){this.setState({isPrivacyModalActive:!1})}},{key:"closeModal",value:function(){this.setState({name:"",surname:"",email:"",cv:"",sex:"",githubUrl:"",isPrivacyChecked:!1,isModalActive:!1,files:""})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("form",{className:"applicationForm",onSubmit:this.onSubmit,children:[Object(a.jsx)("h1",{className:"applicantionHeader",children:"\u0410\u043d\u043a\u0435\u0442\u0430 \u0441\u043e\u0438\u0441\u043a\u0430\u0442\u0435\u043b\u044f"}),Object(a.jsxs)("div",{className:"personalDataBlock",children:[Object(a.jsx)("h2",{className:"personalDataHeader",children:"\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(a.jsxs)("div",{className:"personalDataContent",children:[Object(a.jsxs)("div",{className:"nameSurname",children:[Object(a.jsx)(j,{required:!0,name:"firstName",label:"\u0418\u043c\u044f*",onChange:this.onNameChange,value:this.state.name,placeholder:"\u0418\u043c\u044f"}),Object(a.jsx)(j,{required:!0,name:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*",onChange:this.onSurnameChange,value:this.state.surname,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"})]}),Object(a.jsxs)("div",{className:"mailAndDropzone",children:[Object(a.jsx)("div",{className:"mailZone",children:Object(a.jsx)(j,{required:!0,name:"email",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430*",onChange:this.onEmailChange,value:this.state.email,type:"email",placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"})}),Object(a.jsx)(f,{onChange:this.onDropZone,arrWithFiles:this.state.files,deleteResume:this.deleteResume})]})]})]}),Object(a.jsxs)("div",{className:"sexBlock",children:[Object(a.jsx)("h2",{className:"sexHeader",children:"\u041f\u043e\u043b*"}),Object(a.jsxs)("div",{className:"radio-btn-container",children:[Object(a.jsx)(b,{name:"sex",required:!0,changed:this.radioChangeHandler,id:"1",isSelected:"Male"===this.state.sex,label:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439",value:"Male"}),Object(a.jsx)(b,{name:"sex",changed:this.radioChangeHandler,id:"2",isSelected:"Female"===this.state.sex,label:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439",value:"Female"})]})]}),Object(a.jsxs)("div",{className:"githubBlock",children:[Object(a.jsx)("h2",{className:"githubHeader",children:"Github"}),Object(a.jsx)(j,{required:!0,name:"githubUrl",label:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 Github*",onChange:this.onGithubChange,value:this.state.githubUrl,placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 Github"})]}),Object(a.jsxs)("div",{className:"privacyBlock",children:[Object(a.jsx)("div",{className:"checkBox",children:Object(a.jsx)(u,{required:!0,onChange:this.onPrivacyCheck,value:this.state.isPrivacyChecked})}),Object(a.jsx)("div",{className:"privacyText",children:Object(a.jsxs)("p",{children:["* \u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 ",Object(a.jsx)("button",{type:"button",onClick:function(){return e.setPrivacyModal()},children:"\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"})]})})]}),Object(a.jsx)("div",{className:"btnSend",children:Object(a.jsx)("button",{type:"submit",className:" btn btn-primary",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]}),Object(a.jsxs)("div",{className:"modalDisplay",children:[Object(a.jsx)(v,{active:this.state.isModalActive,closeModal:this.closeModal,name:this.state.name}),Object(a.jsx)(O,{active:this.state.isPrivacyModalActive,closeModal:this.closePrivacyModal})]})]})}}]),n}(c.Component)),C=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(y,{})})};s.a.render(Object(a.jsx)(C,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f00816de.chunk.js.map