({
    myAction : function(component, event, helper) {

    },

    doInit : function(component, event, helper) {
        var getListaRegistros = component.get("c.getListaRegistros");
        
        getListaRegistros.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var response = response.getReturnValue(); 
                component.set("v.listaBoxeadoresBD",response)
                console.log('lo que devuelve la llamada a la base para recuperar ' + response);
            }else{
                console.log(response.getError());
            }
        });
        $A.enqueueAction(getListaRegistros);
    },

    guardarPelea : function(component, event, helper) {
    
    }

})
