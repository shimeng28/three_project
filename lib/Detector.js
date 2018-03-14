/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */
var Detector = {
  canvas: !!window.CanvasRenderingContext2D,
  webgl: (function(){
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGlRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    }
    catch(e) {
    }
  })(),
};