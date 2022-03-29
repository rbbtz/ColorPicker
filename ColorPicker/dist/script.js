// Box & hue slider
var boxPicker = new iro.ColorPicker("#boxPicker", {
  width: 250,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff",
  layout: [
  {
    component: iro.ui.Box },

  {
    component: iro.ui.Slider,
    options: {
      id: 'hue-slider',
      sliderType: 'hue' } }] });
