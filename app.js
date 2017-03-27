var emailLog = require('./email_log.json');

var checkEmailList = (function() {

  function sortList(mailObj) {
    var mailList = {};
    var mailVar = "emails";
    var list = mailObj[mailVar];
    for (var i = 0; i < list.length; i++) {
      var receiver = list[i].email;
      if (mailList[receiver] >= 1){
        mailList[receiver] ++;
      } else {
        mailList[receiver] = 1;
      }
    }
    return mailList;
  }

  return {
    sortList
  };
})();

console.log(checkEmailList.sortList(emailLog));