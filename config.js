var path = require("path");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "10",
        deviceName: "Android Emulator",
        app: path.resolve("./apk/com.google.android.calculator.apk"),
        appPackage: "com.google.android.calculator",
        appActivity: "com.android.calculator2.Calculator",
        automationName: "UiAutomator2"
    }
};

module.exports = { opts }