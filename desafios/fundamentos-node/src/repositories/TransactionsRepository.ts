import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.getValues('income');
    const outcome = this.getValues('outcome');

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }

  private getValues(type: 'income' | 'outcome'): number {
    return this.transactions
      .filter(transaction => transaction.type === type)
      .reduce((total: number, { value }) => total + value, 0);
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
