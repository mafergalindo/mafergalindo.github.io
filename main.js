let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#ff0f7b;">Soy Product Designer, me encanta la investigación y desarrollo sitios web</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
