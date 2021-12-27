  $(function () {
            $(".psw").focus(function () {
                $(this).parent().css("border", "1px solid rgb(52, 72, 250)");
                $(this).prev().attr("src", "https://ecvv2013.github.io/CSS-JS/img/u3.svg");
            });

            $(".psw").blur(function () {
                $(this).parent().css("border", "1px solid rgb(205, 206, 209)");
                $(this).prev().attr("src", "https://ecvv2013.github.io/CSS-JS/img/u2.svg");
            });

            $(".img1").click(function () {
                if ($(this).attr('src') == 'https://ecvv2013.github.io/CSS-JS/img/u137.svg') {
                    $(this).attr("src", "https://ecvv2013.github.io/CSS-JS/img/u138.svg");
                    $(this).prev().attr("type", "text");
                } else {
                    $(this).attr("src", "https://ecvv2013.github.io/CSS-JS/img/u137.svg");
                    $(this).prev().attr("type", "password");
                }
            });

            $("#psw").focus(function () {
                $(this).parent().css("border", "1px solid rgb(52, 72, 250)");
                $(this).prev().attr("src", "https://ecvv2013.github.io/CSS-JS/img/user1.png");
            });

            $("#psw").blur(function () {
                $(this).parent().css("border", "1px solid rgb(205, 206, 209)");
                $(this).prev().attr("src", "https://ecvv2013.github.io/CSS-JS/img/user.png");
            });
        });
