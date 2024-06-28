var importantUsers = ["smartertrader", "burtinboy", "PCB"]; // Replace with the list of important users
var textTainted = false;

window.onload = function () {
  const targetDiv = document.getElementById('divMessages');

  if (!targetDiv) {
    console.error('Target div not found');
    return;
  }
  console.log("test");
  const callback = function (mutationsList, observer) {
    mutationsList.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('line-layout-row')) {
          var userNameElement = node.querySelector(".line-layout-row__username");
          if (!userNameElement) return;

          var userName = userNameElement.textContent;
          if (!importantUsers.includes(userName)) {
            node.remove();
            return;
          }
        }
      });
    });
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetDiv, { childList: true, subtree: true });
};

