function checkNoticeList() {
    var noticeListElement = document.getElementById('_notice_list');
    if (!noticeListElement) {
        console.warn("Element with id '_notice_list' not found.");
        return;
    }
    var firstChild = noticeListElement.firstElementChild;
    if (firstChild) {
        var childrenCount = firstChild.childElementCount;
        if (childrenCount === 1) {
            noticeListElement.style.display = 'none';
            clearInterval(intervalId); 
        } else {
            for (var i = 0; i < firstChild.children.length; i++) {
                var child = firstChild.children[i];
                if (child.tagName === 'DIV' && child.innerHTML.trim() === '') {
                    child.remove(); 
                    i--;
                    clearInterval(intervalId); 
                }
            }
        }
    } 
}
var intervalId = setInterval(checkNoticeList, 1);
