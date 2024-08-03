// 1. Created Variable
//const bankBranchInstance = instance  | I tried this and it give error when I create variable

//Defined class `BankBranch`
class BankBranch {
//

    constructor(getBranchInfo) {
      if (BankBranch.banckBranchInstance) {
        return BankBranch.banckBranchInstance;
      }
      BankBranch.banckBranchInstance = this;
      
      // ... needs log consoles here 
      // Ahh... I'm close but logs - 'undefined' with a "Can't find variable: getBranchInfo"
        
        console.log(`First Log: ${BankBranch.banckBranchInstance}`);
    
        console.log(`${BankBranch.length} LOGS`);
    }
  }
  
  var branchA = new BankBranch()
  var branchB = new BankBranch()
  
  console.log(branchA === branchB)

  const bankBranchInstance = new BankBranch()
        Object.freeze(BankBranch.bankBranchInstance);

   


//3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.


// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.


// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.
/*

*/






//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
//REFERENCE:
/*

    1.      https://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript

    2.      


//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
 COMMENTS & NOTES

    1. First Try and not giving errors any consoles and not console'ing anything.




//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
    TRY OUTS:

    1. class BankBranch {
       static bankBranchInstance 
            constructor(branchInfo) {
                if (bankBranchInstance == null) {
                    branchInfo = bankBranchInstance
                }
                return bankBranchInstance
            }

            getBranchInfo(message) {
                console.log(`First Log: ${message}`);
            }
            printLogCount() {
                console.log(`${branchInfo.length} number of logs.`)    
            }
        }
 
        const logger = new BankBranch()
        Object.freeze(logger);

        2.  class BankBranch {
    
            constructor() {
                if (BankBranch.bankBranchInstance == null) {
                    branchInfo = new bankBranchInstance
                }
                return 
            }
        
            getBranchInfo() {
                console.log(`First Log: ${branchInfo}`);
            }
            printLogCount() {
                console.log(`${branchInfo.length} number of logs.`)    
            }
        }
        
        
        const bankBranchInstance = new BankBranch()
        Object.freeze(bankBranchInstance);



*/
//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"

// 2. Define a class called `BankBranch` for managing branch information.


// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.


// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.


// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
