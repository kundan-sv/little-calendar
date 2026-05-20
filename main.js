const { app, BrowserWindow } = require("electron");
const AutoLaunch = require("auto-launch");

const appLauncher = new AutoLaunch({
  name: "Little Calendar",
});

appLauncher.enable();

function createWindow() {
  const win = new BrowserWindow({
    title: "My little calendar",
    width: 214,
    height: 228,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    skipTaskbar: true,
    webPreferences: {
      contextIsolation: true,
    },
  });
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});