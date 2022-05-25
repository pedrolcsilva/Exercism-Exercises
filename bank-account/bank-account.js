//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor(balance) {
    this.balance_val = balance
    this.status = false
  }

  get balance() {
    if(this.status == true) return this.balance_val
    else throw new ValueError("This account is closed.")
  }
  
  open() {
    if(this.status == false) {
      this.status = true
      this.balance_val = 0
    }else throw new ValueError("This account is oppened.")
  }

  close() {
    if(this.status == true){
      this.balance_val = null
      this.status = false
    }
    else throw new ValueError("This account is closed.")
  }

  deposit(value) {
    if(this.status == true) {
      if(value >= 0) this.balance_val+= value
      else throw new ValueError("Trying to deposit a negative amount of money.")
    }else throw new ValueError("This account is closed.")
  }

  withdraw(value) {
    if(this.status == true) {
      if(value <= this.balance_val){ 
        if(value >= 0) this.balance_val-= value
        else throw new ValueError("Trying to withdraw a negative amount of money.")
      }else throw new ValueError("Not enought money in the account.")
    }
    else throw new ValueError("This account is closed.")
  }

}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}