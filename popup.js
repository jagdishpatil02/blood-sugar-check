var alarmClock = {
  onHandler: function (e) {
    // getActiveBtn(e);
    chrome.alarms.create("myAlarm", {
      delayInMinutes: 120,
      periodInMinutes: 120,
    });
  },

  offHandler: function (e) {},

  setup: function () {},
};

document.addEventListener("DOMContentLoaded", function () {
  alarmClock.setup();
  alarmClock.onHandler();
});
