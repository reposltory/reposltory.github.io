document.addEventListener('DOMContentLoaded', function() {
    var noticeList = document.getElementById('_notice_list').firstChild.childElementCount;
    
    if (!noticeList) {
        console.warn("Element with id '_notice_list' not found.");
        return;
    }
    console.log("Total number of children of children:", noticeList);
    
});
