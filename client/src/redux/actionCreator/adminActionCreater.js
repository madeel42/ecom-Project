import * as allAction from "../Actions/allActions";
export const productCreateByAdmin = (data) => {
  return {
    type: allAction.PRODUCT_CREATED_BY_ADMIN,
    data,
  };
};
export const productGettingBydatabase = (data) => {
  return {
    type: allAction.PRODUCT_GETTING_BY_DATABASE,
    data,
  };
};
export const fetchcCreateDataLoading = (data) => {
  return {
    type:allAction.FETCH_CREATED_DATA_LOADING,
    data
  }
}
export const fetchDataLoading = (data) => {
  return {
    type:allAction.FETCH_DATA_LOADING,
    data
  }
}
export const fetchDataupdating = (data) => {
  return {
    type:allAction.FETCH_DATA_UPDATING,
    data
  }
}
export const fetchDatadeleting = (data) => {
  return {
    type:allAction.DELETE_DATA_UPDATEDOM,
    data
  }
}