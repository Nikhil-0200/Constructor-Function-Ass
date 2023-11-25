    "use strict";  

    function BankAccount(accountNo, name, type, balance){
        this.accountNo = accountNo;
        this.name = name;
        this.type = type;
        this.balance = balance;
        this.isActive = true;
        
        this.deposit = function(amount){
            this.balance += amount
        }

        this.withdraw = function(amount){
            if(this.balance > amount){
                this.balance -= amount
            }
            else{
                console.log("Insufficient Amount")
            }
        }

        this.TotalBankAmount = function(){
            console.log(this.balance)
        } 
    }

    let p1 = new BankAccount(34810105894, "Nikhil", "Saving", 2000);
    let p2 = new BankAccount(34810103434, "Karan", "Saving", 1000);
    let p3 = new BankAccount(34810133333, "Aman", "Saving", 300);
    let p4 = new BankAccount(34812334894, "Sunil", "Saving", 500);
    let p5 = new BankAccount(34811225894, "Shivam", "Saving", 350);
    let p6 = new BankAccount(34810100004, "Piyush", "Saving", 9000);
    let p7 = new BankAccount(34810105466, "Shubham", "Saving", 100);

    p1.withdraw(500);
    p2.withdraw(400);
    p3.deposit(5000);
    p4.deposit(800);
    p7.deposit(3000);

    let arr = [p1, p2, p3, p4, p5, p6, p7];

    function allTotal(){
        let count = 0
      arr.forEach((ele)=>{
        count += ele.balance
      })
      console.log(count)
    }
allTotal()  


