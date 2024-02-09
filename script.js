function showContent(contentId) {  
    var tabContents = document.getElementsByClassName('tab-content');  
    for (var i = 0; i < tabContents.length; i++) {  
        tabContents[i].classList.remove('active');  
    }  
    document.getElementById(contentId).classList.add('active');  
}