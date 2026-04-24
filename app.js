import { initCanvas, clearCanvas, downloadImage } from "./modules/canvasManager.js";
import { setTool } from "./modules/tools.js";

window.setTool = setTool;
window.clearCanvas = clearCanvas;
window.downloadImage = downloadImage;

initCanvas();
