import { destroy,getSnapshot, Instance, SnapshotOut, types } from "mobx-state-tree"
import { BrandAccount, BrandAccountModel } from "./BrandAccount"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const BrandAccountListModel = types
  .model("BrandAccountList")
  .props({
    // brandAccountItems: types.optional(types.array(BrandAccountModel), [])
    brandAccountItems: types.array(BrandAccountModel),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    addBrandAccount(brandAccount: BrandAccount) {
      console.log("addBrandAccount")
      console.log(brandAccount)
      store.brandAccountItems.push(brandAccount);
      console.log(JSON.stringify(store.brandAccountItems));
    },
    
    // addBrandAccount(brandAccount) {
    //   console.log("addBrandAccount");
    //   console.log(brandAccount);
    //   store.brandAccountItems.push(brandAccount);
    //   console.log(JSON.stringify(store.brandAccountItems));
    // },
    // removeBrandAccount(brandAccount: BrandAccount) {
    //   destroy(brandAccount);
    // }
  }))

export interface BrandAccountStore extends Instance<typeof BrandAccountListModel> {}
export interface BrandAccountStoreSnapshot extends SnapshotOut<typeof BrandAccountListModel> {}

// @demo remove-file