({
    myAction : function(component, event, helper) {

    },
    guardarBoxeador : function(component, event, helper) { //Funcion que pasa los datos del boxeador al evento
        // Obtener los valores de los campos desde la vista
        var nombre = component.get("v.nombre");
        var apellido = component.get("v.apellido");
        var apodo = component.get("v.apodo");
        var edad = component.get("v.edad");
        var altura = component.get("v.altura");
        var peso = component.get("v.peso");
        

        // Validar los tipos de datos
        if (typeof nombre !== 'string' || typeof apellido !== 'string' || typeof apodo !== 'string' ||
        isNaN(parseInt(edad)) || isNaN(parseInt(altura)) || isNaN(parseInt(peso))) {
        // Si los tipos de datos no son correctos, mostrar un mensaje de error
        // y abortar la operación
        alert('Los datos ingresados no son del tipo correcto. Por favor, verifique los datos ingresados.');
        return;
        }

        var evt = $A.get("e.c:guardarBoxeadorEvent"); //Obtenemos el evento
        
        evt.setParams({ // Asignamos los valores del formulario al evento
            nombre: nombre,
            apellido: apellido,
            apodo: apodo,
            edad: edad,
            peso: peso,
            altura: altura
        }); 

        console.log('nombre: ' + component.get("v.nombre") 
        + ' apellido: ' + component.get("v.apellido") 
        + ' apodo: ' + component.get("v.apodo") 
        + ' edad: ' + component.get("v.edad") 
        + ' peso: ' + component.get("v.peso") 
        + ' altura: ' + component.get("v.altura"));

        evt.fire(); //Lanzamos el evento
    }
})
