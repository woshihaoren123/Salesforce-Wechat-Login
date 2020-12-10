({
	saveState : function(component, state) {
		var action = component.get("c.createState");
        action.setParams({
            state: state
        });
        action.setCallback(this, function(a){
            var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                window.open(rtnValue, '_self');
            }
        });
        $A.enqueueAction(action);
	},
    
    getState : function(component, state) {
        var code = this.GetQueryString('code');
		var action = component.get("c.getState");
        action.setParams({
            stateId: state,
            code: code
        });
        action.setCallback(this, function(a){
            var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                window.open(rtnValue, '_self');
            }
        });
        $A.enqueueAction(action);
	},
    
    GetQueryString : function(name){
        var query = window.location.search.substring(1);   
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == name){
                return pair[1];
            }
        }
        return '';
        
    }
})
