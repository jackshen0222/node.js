$(function () {
    var $loginBox = $("#loginBox")
    var $registeredBox = $("#registeredBox")
    $loginBox.find('p').on('click',function () {
        $registeredBox.show()
        $loginBox.hide()

    })
    $registeredBox.find('p').on('click',function () {
        $loginBox.show()
        $registeredBox.hide()
    })

    $registeredBox.find('button').on('click',function () {
        $.ajax({
            type:'post',
            url:'/api/user/register',
            data:{
                name : $registeredBox.find('[name = inputName1]').val(),
                password : $registeredBox.find('[name = inputPassword1]').val(),
                repassword : $registeredBox.find('[name = inputRepassword1]').val()
            },
            dataType:'json',
            success:function (result) {
                console.log(result)
            }
        })
    })
})