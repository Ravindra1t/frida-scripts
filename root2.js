// Frida script to hook and modify 'detectPotentiallyDangerousApps' method to always return false
Java.perform(function () {
    console.log("Hooking detectPotentiallyDangerousApps...");

    // Find the class that contains the method
    var dangerousTaskActivityClass = Java.use("hpandro.android.security.ui.activity.task.rootDetection.PotentiallyDangerousTaskActivity");

    // Hook the 'detectPotentiallyDangerousApps' method
    dangerousTaskActivityClass.detectPotentiallyDangerousApps.implementation = function(mContext, additionalDangerousApps) {
        console.log("Hooked 'detectPotentiallyDangerousApps', returning false...");
        
        // Always return false to indicate no potentially dangerous apps are detected
        return false;
    };
});
