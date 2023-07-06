// not using yet
import { writable, type Writable } from "svelte/store";

export const textColour: Writable<object> = writable({});

const body = document.querySelector(".body-tings") as HTMLDivElement;
const computedStyle = getComputedStyle(body);
const leftBackgroundColour = computedStyle.getPropertyValue("--left-background-colour");
const rightBackgroundColour = computedStyle.getPropertyValue("--right-background-colour");

textColour.primaryColour = getContrastColor(leftBackgroundColour, rightBackgroundColour).colourOne;
textColour.secondaryColour = getContrastColor(leftBackgroundColour, rightBackgroundColour).colourTwo;

// NOTE: i think solution is to put this in a store or composable of some sort and globally call it
function getContrastColor(leftBackgroundColour, rightBackgroundColour) {
    const leftRgb = leftBackgroundColour.match(/\d+/g).map(Number);
    const rightRgb = rightBackgroundColour.match(/\d+/g).map(Number);
    const leftBrightness = (leftRgb[0] * 299 + leftRgb[1] * 587 + leftRgb[2] * 114) / 1000;
    const rightBrightness = (rightRgb[0] * 299 + rightRgb[1] * 587 + rightRgb[2] * 114) / 1000;
    return {
        // colourOne: leftBrightness > rightBrightness ? "rgb(170, 0, 0)" : "rgb(218, 165, 32)",
        // colourTwo: leftBrightness < rightBrightness ? "rgb(170, 0, 0)" : "rgb(218, 165, 32)",
        colourOne: leftBrightness > rightBrightness ? "rgb(23, 23, 23)" : "rgb(222, 222, 222)",
        colourTwo: leftBrightness < rightBrightness ? "rgb(23, 23, 23)" : "rgb(222, 222, 222)",
    };
}
