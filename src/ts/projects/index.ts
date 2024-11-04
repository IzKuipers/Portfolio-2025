import colorsea from "colorsea";

export function projectColorVariations(accent: string) {
  const sea = colorsea(accent);

  const border = sea.transparentize(50).hex();
  const gradientColor = sea.darken(41).desaturate(35).hex();
  const gradientTransparent = colorsea(gradientColor).transparentize(100).hex();
  const textColor = sea.lighten(25).hex();

  return {
    gradientTransparent,
    gradientColor,
    accent: sea.hex(),
    textColor,
    border,
  };
}
