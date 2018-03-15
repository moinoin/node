$.ajax({
  method: 'post',
  url: 'http://localhost:8080/add',
  contentType: 'application/json',
  data: JSON.stringify({
    x: 1,
    y: 2
  }),
  success: function (res) {
    console.log(res);
  },
  error: function () {

  }
});
$.ajax({
    method: 'get',
    url: 'http://localhost:8080/Mr.An',
    success: function (res) {
        console.log(res);
    },
    error: function () {

    }
});
