/**
 * Keyword -> static 
 * 
 * static variables/functions belong to the calss instead of the object 
 * 
 * non-static variables/functions belongs to the object 
 * 
 * 
 * If a static variable is changed by any object; the value 
 * 
 * 
 * To use static variable or function 
 *      we have to use the className instead of the objectName or this-operator
 *      ++students.idValue instead of ++this.idValue
 * 
 * If the purpose of function should be performed by individual object/entity
 *      then function should be NON-static
 * 
 * 
 * If the purpose of the function should be performed by Class 
 *      then function should be static 
 * 
 * 
 * 
 * 
 * 
 * 
 */

/**
 * Accounts 
 * 
 * 
 * accNumber
 * accBalance
 * accHolderName
 * bankName
 * 
 * 
 * const a1 = new Accounts();
 * a1.deposit(10000);       // a1 accBalance - 10000
 * 
 * 
 * const a2 = new Accounts(); 
 * a2.showMyBalance()       // 10000 -> will show as the balance as the accBalance 
 * a2.withdraw(10000)       //was made static and static belongs to the class not object 
 * 
 * a1.showMyBalance();      // 10000 / 0 
 */

/**
 * Static function -> belong to the 
 * 
 */