var Links = {
    setColor: function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color= color;
        //     i=i+1;
        // } jQuery가 반복문 대신 처리해줌
        $('a').css('color', color);
        //이 페이지에 있는 모든 a태그를 제이쿼리로 제어하겠다

    }
}
var Body = {
    setColor: function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);    
    },
    setBackgroundColor: function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value ==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('skyblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}