function checkNoticeList() {
    var noticeListElement = document.getElementById('_notice_list');
    
    if (noticeListElement) {
      var noticeList = noticeListElement.firstChild ? noticeListElement.firstChild.childElementCount : undefined;
      
      if (noticeList !== undefined) {
        console.log("Total number of children of children:", noticeList);
        clearInterval(intervalId); // Stop checking once we get the desired result
      }
    } else {
      console.warn("Element with id '_notice_list' not found.");
    }
  }

  // Run checkNoticeList every 1 millisecond
  var intervalId = setInterval(checkNoticeList, 1);
