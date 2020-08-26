import * as adminActionCreator from "../../actionCreator/adminActionCreater";
class adminPanelMiddleWare {
  static cardsData = (data) => {
    console.log(data);

    // let b = {data,data1}
    return (dispatch) => {
      let formDAta = new FormData();
      formDAta.append("file", data.cardImage);
      formDAta.append("Pname", data.productValue.Pname);
      formDAta.append("counter", data.productValue.counter);
      formDAta.append("description", data.productValue.description);
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
          dispatch(adminActionCreator.productCreatedByAdmin(res));
          isloading = false;
          dispatch(adminActionCreator.fetchDataLoading(isloading));
        });
    };
  };
  static updateProductData(data) {
    console.log(data);
    const { _id } = data;
    let formdata = new FormData();
    formdata.append("file", data.file);
    formdata.append("Pname", data.Pname);
    formdata.append("counter", data.counter);
    formdata.append("description", data.description);
    formdata.append("price", data.price);
    return (dispatch) => {
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
          // console.log(res.message, "updated data from backend");
        });
    };
  }
  static deleteProduct(data) {
    const { _id } = data;
    return (dispatch) => {
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
        });
    };
  }
}
export default adminPanelMiddleWare;
