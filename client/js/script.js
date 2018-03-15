$.ajax({
    method: 'post',
    url: "http://localhost:2333/add",
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