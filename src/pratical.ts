enum SystemMode {
  AUTO = "AUTO",
  MANUAL = "MANUAL",
}

type Direction = "left" | "right" | "forwark" | "backward";

const logMovement = (direction: Direction): string => {
  return `Moving` + direction;
};

const setMode = (systemMode: SystemMode): string => {
  return `SystemMode set to ${systemMode} mode`;
};

const processInput = (input: any): any => {
  if (typeof input == "string") {
    console.log(`input length ${input.length}`);
  } else {
    console.log("input:", input);
  }
};

const validateInput = (input: unknown) => {
  if (typeof input == "number") {
    console.log("Received input (any):", input);
  } else {
    console.log("Invalidate input type");
  }
};

const crask = (message: string): never => {
  throw new Error(message);
};

logMovement("left");

setMode(SystemMode.AUTO);

processInput(10);

validateInput(1);

try {
  crask("SYSTEM CRASHED: Overheat detected!");
} catch (error) {
  console.log(error);
}
