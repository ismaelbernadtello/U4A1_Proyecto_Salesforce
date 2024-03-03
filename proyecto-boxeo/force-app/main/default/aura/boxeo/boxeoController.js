({
    myAction : function(component, event, helper) {

    },

    guardarBoxeador : function(component, event, helper) {
        var boxeador = component.get("v.boxeador");
        var action = component.get("c.guardarBoxeador");
        action.setParams({
            "boxeador": boxeador
        });

        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var boxeador = response.getReturnValue();
                var boxeadores = component.get("v.boxeadores");
                boxeadores.push(boxeador);
                component.set("v.boxeadores", boxeadores);
                component.set("v.boxeador", {});
            }
        });
        $A.enqueueAction(action);
    }
    
})
