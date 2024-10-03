// Frida script to hook and modify 'isAnyPackageFromListInstalled' method to always return false
Java.perform(function () {
    console.log("Hooking isAnyPackageFromListInstalled...");

    // Find the class that contains the method
    var rootDetectionClass = Java.use("hpandro.android.security.ui.activity.task.rootDetection.RootManagementTaskActivity");

    // Hook the 'isAnyPackageFromListInstalled' method
    rootDetectionClass.isAnyPackageFromListInstalled.implementation = function(context, list) {
        console.log("Hooked 'isAnyPackageFromListInstalled', returning false...");
        
        // Always return false to indicate no root apps are detected
        return false;
    };
});
