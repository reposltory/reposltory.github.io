function checkNoticeList() {
var noticeListElement = document.getElementById('_notice_list');

if (!noticeListElement) {
  console.warn("Element with id '_notice_list' not found.");
  return;
}

// Check if '_notice_list' has at least one child
var firstChild = noticeListElement.firstElementChild;

if (firstChild) {
  var childrenCount = firstChild.childElementCount;

  console.log("Total number of children of the first child:", childrenCount);

  // Hide '_notice_list' if the first child has exactly 1 child
  if (childrenCount === 1) {
    noticeListElement.style.display = 'none';
    clearInterval(intervalId); // Stop checking once the condition is met
  }
} else {
  console.warn("The element with id '_notice_list' has no child elements.");
}
}

// Run checkNoticeList every 1 millisecond
var intervalId = setInterval(checkNoticeList, 1);
