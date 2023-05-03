import { types } from 'mobx-state-tree';

const Account = types.model({
  id: types.identifier,
  name: types.string,
  
});

const AccountStore = types
  .model({
    accounts: types.array(Account),
  })
  .actions((self) => ({
    addAccount(account: typeof Account.Type) {
      self.accounts.push(account);
    },
    // toggleCompleted(accountId: string) {
    //   const todo = self.accounts.find((t) => t.id === accountId);
    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
  }));

export default AccountStore;
