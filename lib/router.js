FlowRouter.route('/', {
    name: 'Home',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {
            main: 'home'
        });
    }
});


FlowRouter.route('/bedankt', {
    name: 'Bedankt',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {
            main: 'bedankt'
        });
    }
});