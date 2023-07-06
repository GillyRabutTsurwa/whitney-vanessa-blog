// not using yet
export const useGetColours = () => {
    const body = document.querySelector(".body-tings") as HTMLDivElement;
    const computedStyle = getComputedStyle(body);
    const leftBackgroundColour = computedStyle.getPropertyValue("--left-background-colour");
    const rightBackgroundColour = computedStyle.getPropertyValue("--right-background-colour");

    function getContrastColor(leftBackgroundColour: any, rightBackgroundColour: any) {
        const leftRgb = leftBackgroundColour.match(/\d+/g).map(Number);
        const rightRgb = rightBackgroundColour.match(/\d+/g).map(Number);
        const leftBrightness = (leftRgb[0] * 299 + leftRgb[1] * 587 + leftRgb[2] * 114) / 1000;
        const rightBrightness = (rightRgb[0] * 299 + rightRgb[1] * 587 + rightRgb[2] * 114) / 1000;

        return {
            colourOne: leftBrightness > rightBrightness ? "rgb(23, 23, 23)" : "rgb(222, 222, 222)",
            colourTwo: leftBrightness < rightBrightness ? "rgb(23, 23, 23)" : "rgb(222, 222, 222)",
        };
    }

    return {
        getContrastColor: getContrastColor,
    };
};
