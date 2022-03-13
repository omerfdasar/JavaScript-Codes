const tbody = document.getElementById("tbodyUserList");

window.onload = () => {
  getApiUserList();
  setInterval(getApiUserList, 5000);
  alert(`Your apiKey is ${DecryptStringAES(localStorage.getItem("apiKey"))}`);
};

const getApiUserList = async () => {
  showLoading();
  //////axios
  try {
    const responseData = await axios("https://reqres.in/api/users?page=1");
    const { data: userListArray } = responseData.data;
    if (userListArray.length === 0) {
      alert("userlist not found");
      removeLoading();
    } else {
      tbody.innerHTML = "";
      userListArray.forEach((customer) => {
        tbody.innerHTML += `
            <tr>
                <td>
					${customer.id}
                </td>
                <td>
					<img src="${customer.avatar}">
                </td>
                <td>
                    ${customer.email}
                </td>
                <td>
                    ${customer.first_name}
                </td>
                <td>
                    ${customer.last_name}
                </td>
            </tr>`;
      });
      removeLoading();
    }
  } catch (error) {
    alert(error);
    //send errors to api and database (errorLogs table)
    // postErrorLog("userList", "getApiUserList", error);
    removeLoading();
  }
};
