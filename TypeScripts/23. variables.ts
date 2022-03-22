const myName: string | null = null;
//array

let items = [1, "string"];

//objects

const account: {
  name: string;
  balance: number;
  status?: boolean;
} = {
  name: "doe",
  balance: 15,
};

const accounts: {}[] = [{}];

//interface
interface IAccount {
  name: string;
  balance: number;
  status?: boolean;
  deposit?: (amount: number) => number;
}
const accountNew: IAccount = {
  name: "doe",
  balance: 15,
};

const accountsNew: IAccount[] = [
  {
    name: "doe",
    balance: 15,
  },
];

//classes

class InvestmentAccount implements IAccount {
  name;
  balance;
  // constructor(public name, public balance) {}
  private withdraw() {}
}
