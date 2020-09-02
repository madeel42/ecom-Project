import * as adminActionCreator from "../../actionCreator/adminActionCreater";
class adminPanelMiddleWare {
  static cardsData = (data) => {
    let isloading = true;
    console.log(data);

    // let b = {data,data1}
    return (dispatch) => {
      dispatch(adminActionCreator.fetchcCreateDataLoading(isloading));
      let formDAta = new FormData();
      formDAta.append("file", data.cardImage);
      formDAta.append("Pname", data.Pname);
      formDAta.append("counter", data.counter);
      formDAta.append("description", data.description);
      formDAta.append("price", data.price);
      fetch("/createData", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: formDAta,
        // body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          isloading = false;
          dispatch(adminActionCreator.fetchcCreateDataLoading(isloading));
          dispatch(adminActionCreator.productCreateByAdmin(res));
        });
    };
  };
  static getProductData = () => {
    let isloading = true;
    return (dispatch) => {
      dispatch(adminActionCreator.fetchDataLoading(isloading));
      fetch("/getCardItem", {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          dispatch(adminActionCreator.productGettingBydatabase(res));
          isloading = false;
          dispatch(adminActionCreator.fetchDataLoading(isloading));
        });
    };
  };
  static updateProductData(data) {
    // let isupdated = true;
    console.log(data);
    const { _id } = data;
    let formdata = new FormData();
    formdata.append("file", data.file);
    formdata.append("Pname", data.Pname);
    formdata.append("counter", data.counter);
    formdata.append("description", data.description);
    formdata.append("price", data.price);
    return (dispatch) => {
      // dispatch(adminActionCreator.fetchDataupdating(isupdated));
      fetch(`/updateCardsData/${_id}`, {
        method: "PUT",
        body: formdata,
        // headers: {
        //   "Content-Type": "application/json"
        // },
        // body: JSON.stringify(data)
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res, "updated data from backend");
          // let isupdated = false;
          dispatch(adminActionCreator.fetchDataupdating(res));
        });
    };
  }
  static deleteProduct(data) {
    // let deleteFlag = true;
    const { _id } = data;
    return (dispatch) => {
      // dispatch(adminActionCreator.fetchDatadeleting(deleteFlag));
      fetch(`/deleteCardsData/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          // console.log(res);
          // if(res.message){
          // deleteFlag = false;
          // }
          dispatch(adminActionCreator.fetchDatadeleting(res));
        });
    };
  }
}
export default adminPanelMiddleWare;
