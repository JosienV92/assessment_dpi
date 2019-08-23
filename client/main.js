import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.pageBody.onCreated(function () {
  this.cSelected = new ReactiveVar(false);
  this.formError = new ReactiveVar(false);

});

Template.pageBody.helpers({
  cSelected() {
    return Template.instance().cSelected.get();
  },
  formError() {
    return Template.instance().formError.get();
  },
});

Template.pageBody.events({
  'change select[name="abc"]'(event, instance) {
    if(event.target.value === 'c') {
      instance.cSelected.set(true);
    } else {
      instance.cSelected.set(false);
    }
  },
  'submit form'(event, instance) {
    event.preventDefault();
    console.log('form', event.target.lastName);
    let formValues = {
      formFirstName: event.target.firstName.value,
      formLastName: event.target.lastName.value,
      formEmail: event.target.emailAddress.value,
      formChoice: event.target.abc.value,
    };
    if(event.target.remarks){
      formValues.formRemarks = event.target.remarks.value;
    }

    if (!!!formValues.formFirstName || !!!formValues.formLastName || !!!formValues.formEmail) {
      instance.formError.set(true);
    } else {
      //send formValues to server
      FlowRouter.go('/bedankt');
    }
  },
});
