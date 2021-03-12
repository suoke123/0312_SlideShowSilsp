$(function(){

    setInterval(fnSlide, 2500);
    //함수명만!, 1/1000

    //fnSlide();                   //함수명( ); : 함수를 실행시키는 코드(= 함수의 호출, 콜 Call)

    function fnSlide() {   // 함수가 호출되었을 때 실행해야하는 내용
                                 // (=함수의 정의, 디파인 Define, 디피니션 Definition)

        $("#slideShuttleFrame").animate(
            {
                "margin-left": "-1000px"
            },
            2500,
            function(){

                //insertAfter 적용위치
                $("#slideShuttleFrame>a:first-child").insertAfter("#slideShuttleFrame>a:last-child");

                $("#slideShuttleFrame").css({
                    "margin-left": "0"
                });
            });

    }

});
