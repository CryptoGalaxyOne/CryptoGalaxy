
/**
 * 格式化地址
 * ZC3Fmg***vb44rA
 */
export function getFormatAddress(str, index = 4) {
    if (!str) {
      return "";
    }
    if(IsPC()){
      return str;
    }else{
      var h = str.substring(0, index);
      var f = str.substring(str.length - 4);
      return h + " ··· " + f;
    }
  }

/**
 * 格式化地址
 * ZC3Fmg***vb44rA
 */
export function getFormatHashAddress(str, index = 5) {
  if (!str) {
    return "";
  }
  var h = str.substring(0, index);
  var f = str.substring(str.length - 4);
  return h + " ··· " + f;

}

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
     "SymbianOS", "Windows Phone",
     "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
     if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
     }
  }
  return flag;
}
//时间格式化
export function setTimeFormat(times) {

  var date = new Date();
  var time = Date.parse(new Date(times*1000));

  //var offset = date.getTimezoneOffset()*60000;

  //var d = new Date(time-offset);
  var d = new Date(time);
  var year = d.getFullYear();
  var month = formatString(d.getMonth() + 1);
  var day = formatString(d.getDate());
  var hour = formatString(d.getHours());
  var minutes = formatString(d.getMinutes());

  var getDate = year + "-" + month + "-" + day + " " + hour + ":" + minutes;//日期
  var text = "";

  var presentTime = date.getTime() - d.getTime();
  //console.log("第"+flag, date.getTime(), d.getTime(),presentTime)
  var isData = presentTime > 3600 * 24 * 1000 ? true : false;

  if (isData) {
    //大于一天
    text = "";
  } else {
    //小于一天
    getDate = "";
    if (presentTime > 3600 * 1000) {
      //大于一小时
      var t = parseInt(presentTime / 1000 / 60 / 60);
      text = t > 1 ? t + " hours ago" : t + " hour ago";

    } else if (presentTime < 3600 * 1000 && presentTime > 60000) {
      //小于一小时
      var t = parseInt(presentTime / 1000 / 60);
      text = t > 1 ? t + " minutes ago" : t + " minute ago";
    } else {
      //小于一分钟
      var t = parseInt(presentTime / 1000);
      text = t + " seconds ago";
    }

  }

  return getDate + " " + text;
}
function formatString(str) {
  return str > 9 ? str : '0' + str;
}