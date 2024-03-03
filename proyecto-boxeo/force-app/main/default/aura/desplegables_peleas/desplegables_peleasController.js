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
                console.log("Lista boxeadores recuperada correctamente");
            }else{
                console.log(response.getError());
            }
        });
        $A.enqueueAction(getListaRegistros);


        var getListaPeleas = component.get("c.getListaPeleas");

        getListaPeleas.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var response = response.getReturnValue(); 
                component.set("v.listaPeleas",response)
                console.log("Lista peleas recuperada correctamente");
            }else{
                console.log(response.getError());
            }
        }
        );
        $A.enqueueAction(getListaPeleas);

    },

    guardarPelea : function(component, event, helper) {
        var insertarPelea = component.get("c.insertarPelea");

        insertarPelea.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log('Pelea insertada correctamente');
            }else{
                console.log(response.getError());
            }
        });

        insertarPelea.setParams({
            "boxeador1": component.get("v.boxeador1"),
            "boxeador2": component.get("v.boxeador2"),
            "resultado": component.get("v.ganador")
        });

        $A.enqueueAction(insertarPelea);
    },

    borrarPeleas : function(component, event, helper) {
        var borrarPeleasC = component.get("c.borrarTodasLasPeleas");

        borrarPeleasC.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log('Peleas borradas correctamente');
            }else{
                console.log(response.getError());
            }
        });

        $A.enqueueAction(borrarPeleasC);
    }

})
