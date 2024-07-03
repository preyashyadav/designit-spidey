import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#2c2c2c",
  value: 50,
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./py.png",
  fullDecal: "./py.png",
  // titleDecal: "Spidey",
});

export default state;
