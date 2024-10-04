Java.perform(function () {
    // Get the class
    var IMEITaskActivity = Java.use('hpandro.android.security.ui.activity.task.deviceID.IMEITaskActivity');

    // Hook the getDeviceId method
    IMEITaskActivity.getDeviceId.overload('android.content.Context').implementation = function (context) {
        // Define your custom IMEI or Android ID
        var customDeviceId = "131337133713373"; // Return your custom string here
        console.log("Hooked getDeviceId. Returning custom device ID: " + customDeviceId);
        return customDeviceId; // Return the custom device ID
    };
});

