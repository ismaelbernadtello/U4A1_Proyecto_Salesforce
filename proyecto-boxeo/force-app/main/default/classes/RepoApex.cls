public with sharing class RepoApex {
    public RepoApex() {

    }

    @AuraEnabled /*Método que inserta un boxeador en la base de datos.*/
    public static void insertarBoxeador(String numBoxeador, String nombre, String apellido, String apodo, String edad, String peso, String altura) {
        Account acc = new Account(Name = numBoxeador,
                                    BillingStreet = nombre,
                                    BillingCity = apellido,
                                    BillingState = apodo);
        try{
            insert acc;
        }
        catch(Exception e){
            System.debug('Error: ' + e.getMessage());
        }
    }

    @AuraEnabled /*Método que borra todos los registros de la base de datos.*/
    public static void borrarTodosLosBoxeadores(){
        try {
            List<Account> accounts = [SELECT Id FROM Account WHERE Name LIKE 'Boxeador%'];
            delete accounts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled /*Método que obtiene los registros de la base de datos.*/
    public static List<Account> getListaRegistros(){
        try {
            Account[] accounts = [SELECT Name, BillingStreet, BillingCity, BillingState, BillingCountry, BillingPostalCode, BillingLatitude
                                    FROM Account 
                                    WHERE Name LIKE 'Boxeador%'];
            return accounts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}