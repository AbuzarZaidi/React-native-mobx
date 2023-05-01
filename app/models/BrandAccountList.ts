import { destroy, Instance, SnapshotOut, types } from "mobx-state-tree"
import { BrandAccount, BrandAccountModel } from "./BrandAccount"
import { withSetPropAction } from "./helpers/withSetPropAction"

  export const BrandAccountListModel = types
  .model("BrandAccountList")
  .props({
    brandAccountItems: types.optional(types.array(BrandAccountModel), [])
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    addBrandAccount(brandAccount: BrandAccount) {
      store.brandAccountItems.push(brandAccount)
    },
    removeBrandAccount(brandAccount: BrandAccount) {
      destroy(brandAccount)
    },
  }))

export interface BrandAccountStore extends Instance<typeof BrandAccountListModel> {}
export interface BrandAccountStoreSnapshot extends SnapshotOut<typeof BrandAccountListModel> {}

// @demo remove-file
