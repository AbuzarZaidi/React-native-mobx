import { destroy, Instance, SnapshotOut, types } from "mobx-state-tree";
import { BrandAccount, BrandAccountModel } from "./BrandAccount";

export const BrandAccountListModel = types
  .model("BrandAccountList")
  .props({
    brandAccounts: types.optional(types.array(BrandAccountModel), [{name:"abuzar"}]),
  })
  .actions((store) => ({
    addBrandAccount(brandAccount: BrandAccount) {
      console.log("addBrandAccount")
      store.brandAccounts.push(brandAccount);
    },
    removeBrandAccount(brandAccount: BrandAccount) {
      store.brandAccounts.remove(brandAccount);
    },
  }))

export interface BrandAccountList extends Instance<typeof BrandAccountListModel> {}
export interface BrandAccountListSnapshotOut extends SnapshotOut<typeof BrandAccountListModel> {}
// export interface BrandAccountListSnapshotIn extends SnapshotIn<typeof BrandAccountListModel> {}
