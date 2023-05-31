import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#2c2c2c",
  value: 50,
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./s4.png",
  fullDecal: "./s7.png",
  titleDecal: "Spidey",
});

export default state;
