import FontFaceObserver from "fontfaceobserver";

function loadFonts() {
  const FONTS_DATA = [
    { fontName: "Nunito", data: { weight: 400 } },
    { fontName: "Nunito", data: { weight: 600 } },
    { fontName: "Nunito", data: { weight: 700 } },
    { fontName: "Nunito Sans", data: { weight: 400 } },
    { fontName: "Nunito Sans", data: { weight: 600 } },
    { fontName: "Nunito Sans", data: { weight: 700 } },
    { fontName: "Nunito Sans", data: { weight: 800 } },
  ];

  // Make one observer for each font, by iterating over the data we already have
  const observers = FONTS_DATA.map(
    ({ fontName, data }) => new FontFaceObserver(fontName, data)
  );

  Promise.all(observers)
    .then(() => {
      document.documentElement.style.setProperty("--font-1", "Nunito");
      document.documentElement.style.setProperty("--font-2", "Nunito Sans");

      console.log("fonts loaded");
    })
    .catch((err) => console.warn("Some critical font are not available:", err));
}

export default loadFonts;
