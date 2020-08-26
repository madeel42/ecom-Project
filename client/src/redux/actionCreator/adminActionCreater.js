import * as allAction from "../Actions/allActions";
export const productCreatedByAdmin = (data) => {
  return {
    type: allAction.PRODUCT_CREATED_BY_ADMIN,
    data,
  };
};
export const fetchDataLoading = (data) => {
  return {
    type:allAction.FETCH_DATA_LOADING,
    data
  }
}
