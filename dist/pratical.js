"use strict";
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
const logMovement = (direction) => {
    return `Moving` + direction;
};
const setMode = (systemMode) => {
    return `SystemMode set to ${systemMode} mode`;
};
const processInput = (input) => {
    if (typeof input == "string") {
        console.log(`input length ${input.length}`);
    }
    else {
        console.log("input:", input);
    }
};
const validateInput = (input) => {
    if (typeof input == "number") {
        console.log("Received input (any):", input);
    }
    else {
        console.log("Invalidate input type");
    }
};
const crask = (message) => {
    throw new Error(message);
};
logMovement("left");
setMode(SystemMode.AUTO);
processInput(10);
validateInput(1);
try {
    crask("SYSTEM CRASHED: Overheat detected!");
}
catch (error) {
    console.log(error);
}
