({
    myAction : function(component, event, helper) {

    },

    doInit : function(component, event, helper) {
        //Cargo la lista de boxeadores con los registros de la BD
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
    
    handleGuardarBoxeadorEvent : function(component, event, helper) { //Funcion que recibe los datos del boxeador
        var nombre = event.getParam("nombre");
        var apellido = event.getParam("apellido");
        var apodo = event.getParam("apodo");
        var edad = event.getParam("edad");
        var peso = event.getParam("peso");
        var altura = event.getParam("altura");

        //Creamos un objeto con los datos del boxeador
        var boxeador = { 
            "nombre": nombre,
            "apellido": apellido,
            "apodo": apodo,
            "edad": edad,
            "peso": peso,
            "altura": altura
        };
        var listaBoxeadores = component.get("v.listaBoxeadores");
        
        //Si la lista esta vacia, insertamos el boxeador en la primera posicion del array. Si no, lo insertamos al final
        if(listaBoxeadores.length == 0){
            listaBoxeadores[0] = boxeador;
        }
        else{
            listaBoxeadores[(listaBoxeadores.length)] = boxeador;
        }
        
        component.set("v.listaBoxeadores", listaBoxeadores);
    },

    guardarBoxeador : function(component, event, helper) { //Funcion que guarda la lista de boxeadores en la BD
        var listaBoxeadoresSesion = component.get("v.listaBoxeadores")
        var insertarBoxeador = component.get("c.insertarBoxeador");

        for (var i = 0; i < listaBoxeadoresSesion.length; i++) {
            var nom = ("Boxeador" + Math.floor(Math.random() * 1000) + 1);

            insertarBoxeador.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log("Success");
            }else{
                console.log(response.getError());
            }
            });
            insertarBoxeador.setParams({
                "numBoxeador": nom,
                "nombre": listaBoxeadoresSesion[i].nombre,
                "apellido": listaBoxeadoresSesion[i].apellido,
                "apodo": listaBoxeadoresSesion[i].apodo,
                "edad": listaBoxeadoresSesion[i].edad,
                "peso": listaBoxeadoresSesion[i].peso,
                "altura": listaBoxeadoresSesion[i].altura
            });
            $A.enqueueAction(insertarBoxeador);
        }
        component.set("v.listaBoxeadores", []); //Vaciamos la lista de boxeadores
    },

    borrarBoxeadores : function(component, event, helper) { //Funcion que borra todos los boxeadores de la BD
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
    },

    listarBoxeadores : function(component, event, helper) { //Funcion que muestra por consola los boxeadores
        var listaBoxeadoresConsola = component.get("v.listaBoxeadoresBD");

        for (var i = 0; i < listaBoxeadoresConsola.length; i++) {
            (function(index) {
                setTimeout(function() {
                    console.log('Boxeador ' + (index + 1) + ' de la lista : ' 
                                                                        + ' Nombre: ' + listaBoxeadoresConsola[index].BillingStreet 
                                                                        + ' Apellido: ' + listaBoxeadoresConsola[index].BillingCity 
                                                                        + ' Apodo: ' + listaBoxeadoresConsola[index].BillingState 
                                                                        + ' Edad: ' + listaBoxeadoresConsola[index].BillingCountry 
                                                                        + ' Peso: ' + listaBoxeadoresConsola[index].ShippingStreet 
                                                                        + ' Altura: ' + listaBoxeadoresConsola[index].ShippingCountry);
                }, 1000 * (index + 1)); // Esperar 1 segundo entre cada console.log
            })(i);
        }
    }
})
