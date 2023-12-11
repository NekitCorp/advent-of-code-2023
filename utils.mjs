import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * @param {string} url
 * @returns {string}
 */
export function readInput(url) {
    const __filename = fileURLToPath(url);
    const __dirname = path.dirname(__filename);

    const input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

    return input;
}

/**
 * @param {string} url
 * @param {string} data
 * @param {string} filename
 * @returns
 */
export function writeOutput(url, data, filename) {
    const __filename = fileURLToPath(url);
    const __dirname = path.dirname(__filename);

    return fs.writeFileSync(path.resolve(__dirname, filename + ".txt"), data);
}
