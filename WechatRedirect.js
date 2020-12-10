({
    initialize: function(component, event, helper) {
        var query = window.location.search.substring(1);   
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if(pair[0] == 'stp'){
                helper.saveState(component, pair[1]);
                return ;
            }
            if(pair[0] == 'state'){
                helper.getState(component, pair[1]);
                return ;
            }
        }
    },
})
