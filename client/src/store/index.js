import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#2c2c2c",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./s4.png",
  fullDecal: "./s7.png",
});

export default state;
