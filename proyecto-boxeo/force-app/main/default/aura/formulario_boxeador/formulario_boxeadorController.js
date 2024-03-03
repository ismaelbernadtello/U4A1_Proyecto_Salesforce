({
    myAction : function(component, event, helper) {

    },
    guardarBoxeador : function(component, event, helper) {
        var evt = $A.get("e.c:guardarBoxeadorEvent"); //Obtenemos el evento
        evt.setParams({
            nombre: component.get("v.nombre"),
            apellido: component.get("v.apellido"),
            apodo: component.get("v.apodo"),
            edad : component.get("v.edad"),
            peso : component.get("v.peso"),
            altura : component.get("v.altura")
        }); //Asignamos los valores del formulario al evento

        console.log('nombre: ' + component.get("v.nombre") 
        + ' apellido: ' + component.get("v.apellido") 
        + ' apodo: ' + component.get("v.apodo") 
        + ' edad: ' + component.get("v.edad") 
        + ' peso: ' + component.get("v.peso") 
        + ' altura: ' + component.get("v.altura"));

        evt.fire(); //Lanzamos el evento
    }
})
