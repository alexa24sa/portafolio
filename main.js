let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:  #8134b4">Instructora en Tecnolochicas y estudiante de programación.</span>')
  .pauseFor(300)
  .deleteChars(10)
  .start();
