({
    myAction : function(component, event, helper) {

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
    }
})
