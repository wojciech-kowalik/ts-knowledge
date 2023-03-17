type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

// satisfies allows to use inference and show possible misspelling errors

const greenNormalized = palette.green.toUpperCase();

const paletteTyped = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
};

export {};
