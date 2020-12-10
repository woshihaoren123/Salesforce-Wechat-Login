({
	redirectToGetCode : function(component, state) {
		    var action = component.get("c.createState");
        action.setParams({
            state: state
        });
        action.setCallback(this, function(a){
            var rtnValue = a.getReturnValue();
            console.log(rtnValue);
            if (rtnValue !== null) {
                window.open('https://open.weixin.qq.com/connect/qrconnect?appid='+appid+'&redirect_uri='+redirectUrl+'&response_type=code&scope=snsapi_login'+'&state='+rtnValue+'#wechat_redirect','_self');
            }
        });
        $A.enqueueAction(action);
	},
    
    redirectToGetToken : function(component, state) {
		  var action = component.get("c.getState");
        action.setParams({
            stateId: state
        });
        action.setCallback(this, function(a){
            var rtnValue = a.getReturnValue();
            if (rtnValue !== null) {
                var code = this.GetQueryString('code');
                window.open(callbackUrl + '?code='+code+'&state='+rtnValue,'_self');
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
