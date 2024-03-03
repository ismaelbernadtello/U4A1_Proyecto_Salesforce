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

    handleGuardarBoxeadorEvent : function(component, event, helper) {
        // console.log('Llega a: handleGuardarBoxeadorEvent');
        var nombre = event.getParam("nombre");
        var apellido = event.getParam("apellido");
        var apodo = event.getParam("apodo");
        var edad = event.getParam("edad");
        var peso = event.getParam("peso");
        var altura = event.getParam("altura");

        // console.log('nombre: ' + nombre
        // + ' apellido: ' + apellido
        // + ' apodo: ' + apodo
        // + ' edad: ' + edad
        // + ' peso: ' + peso
        // + ' altura: ' + altura);


        var boxeador = {
            "nombre": nombre,
            "apellido": apellido,
            "apodo": apodo,
            "edad": edad,
            "peso": peso,
            "altura": altura
        };
        //console.log('boxeador: ' + boxeador.nombre);
        var listaBoxeadores = component.get("v.listaBoxeadores");
        
        if(listaBoxeadores.length == 0){ //Si es el primer objeto que se inserta en la lista, este se añade a la posición 0
            listaBoxeadores[0] = boxeador;
        }
        else{
            listaBoxeadores[(listaBoxeadores.length)] = boxeador;
        }
        
        component.set("v.listaBoxeadores", listaBoxeadores);
        //console.log('listaBoxeadores: ' + component.get("v.listaBoxeadores[0].nombre"));
    },

    guardarBoxeador : function(component, event, helper) {
        var listaBoxeadoresSesion = component.get("v.listaBoxeadores")
        var insertarBoxeador = component.get("c.insertarBoxeador");

        for (var i = 0; i < listaBoxeadoresSesion.length; i++) { //Inserto cada string del array en la base de datos
            var nom = ("Boxeador" + i+1);

            insertarBoxeador.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log("Success");
            }else{
                console.log(response.getError());
            }
            });
            insertarBoxeador.setParams({ //Pasamos el valor del atributo str al metodo insertStr del controlador de Apex
                "numBoxeador": nom,
                "nombre": listaBoxeadoresSesion[i].nombre,
                "apellido": listaBoxeadoresSesion[i].apellido,
                "apodo": listaBoxeadoresSesion[i].apodo,
                "edad": listaBoxeadoresSesion[i].edad,
                "peso": listaBoxeadoresSesion[i].peso,
                "altura": listaBoxeadoresSesion[i].altura
            });
            $A.enqueueAction(insertarBoxeador); //Metemos en la cola de acciones el metodo insertStr del controlador de Apex
        }
    },


    borrarBoxeadores : function(component, event, helper) {
        var borrarBoxeadores = component.get("c.borrarTodosLosBoxeadores");

        borrarBoxeadores.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log("Success");
            }else{
                console.log(response.getError());
            }
        });
        $A.enqueueAction(borrarBoxeadores);
    }
    
})
