import * as allAction from "../Actions/allActions";
let initialData = {
  data1: [],
  drawerItem: [],
  itemLength: null,
  modelItem: {},
};

// console.log(arr)
const dataReducer = (state = initialData, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'persist/REHYDRATE':
      if(action.data){
          state = action.data.dataReducer
      }
      return state;

    case allAction.ADD_TO_DRAWER:
      let arr = [...newState.drawerItem];
      let existingItem = arr.find(
        (cartItem) => cartItem._id == action.data._id
      );
      let existingItemMain = newState.data1.find(
        (cartItem) => cartItem._id == action.data._id
      );
      if (existingItem && existingItemMain) {
        existingItem.counter += 1;
        existingItemMain.counter += 1;
        // u.counter += 1;
      } else {
        arr.push(action.data);
      }
      return {
        ...newState,
        drawerItem: arr,
        modelItem: existingItemMain,
      };
    case allAction.DECREMENT_FROM_DRAWER:
      let array = [...newState.drawerItem];
      console.log(action.data);
      // arr.push(action.data);
      let existingItem1 = array.find(
        (cartItem) => cartItem._id == action.data._id
      );
      let existingItemmain = newState.data1.find(
        (cartItem) => cartItem._id == action.data._id
      );
      console.log(existingItem1);
      if (existingItem1 && existingItemmain) {
        let a =
          existingItem1.counter > 1
            ? existingItem1.counter - 1
            : existingItem1.counter;
        let b =
          existingItemmain.counter > 1
            ? existingItemmain.counter - 1
            : existingItemmain.counter;

        existingItem1.counter = a;
        existingItemmain.counter = b;
      } else {
        array.push(action.data);
      }
      console.log(action);
      if (action.data.counter == 1 && existingItem1.counter == 1) {
        let filterItem = newState.drawerItem.filter((item) => {
          return action.data._id !== item._id;
        });
        let itemNumberDecrement =
          newState.itemLength > 0
            ? newState.itemLength - 1
            : newState.itemLength;
        return {
          ...newState,
          drawerItem: filterItem,
          itemLength: itemNumberDecrement,
        };
      }
      return {
        ...newState,
        drawerItem: array,
        modelItem: existingItemmain,
      };
    case allAction.CROSS_ICON:
      let newarr = [...newState.drawerItem];
      let existingItemObj = newarr.find(
        (cartItem) => cartItem._id == action.data._id
      );
      let existingItemmainObj = newState.data1.find(
        (cartItem) => cartItem._id == action.data._id
      );
      console.log(existingItemObj, "objeerwdw");
      if (existingItemObj && existingItemmainObj) {
        existingItemObj.counter = 1;
        existingItemmainObj.counter = 1;
      }
      let newfilterItem = newState.drawerItem.filter((item, index) => {
        return action.index !== index;
      });
      let itemNumberDecremnt =
        newState.itemLength > 0 ? newState.itemLength - 1 : newState.itemLength;
      return {
        ...newState,
        drawerItem: newarr && newfilterItem,
        itemLength: itemNumberDecremnt,
      };
    case allAction.ITEM_LENGTH:
      let number = newState.itemLength;
      number += action.data;
      return {
        ...newState,
        itemLength: number,
      };

    case allAction.MODEL_ITEM:
      return {
        ...newState,
        modelItem: action.data,
      };
    case allAction.PRODUCT_CREATED_BY_ADMIN:
      return {
        ...newState,
        data1: action.data,
      };
  }
  return state;
};
export default dataReducer;
