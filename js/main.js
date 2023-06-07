$(function(){

    // 메뉴
    $(".menu_toggle_btn").click(function(){
        $(".gnb").slideToggle()
    })// click

    //갤러리
    $(".search_select_box, .search_select_list").hover(function(){
        $(".search_select_list").stop().show()
    },function(){
        $(".search_select_list").stop().hide()
    })






})//jquery