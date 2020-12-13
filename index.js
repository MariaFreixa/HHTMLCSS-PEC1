//Index container
var elementContainer = document.getElementById('h3');
var h1 = document.createElement('h1');
var p_container = document.createElement('p');

h1.textContent="LA MADRIGUERA";
p_container.textContent="Portal dedicado a ofrecer información sobre diferentes tipos de libros";

elementContainer.appendChild(h1);
elementContainer.appendChild(p_container);

//Index Footer
var elementFooter = document.getElementById('footer');
var p = document.createElement('p');
var p_footer = document.createElement('p');

p.textContent="© 2020-2021 Maria Magdalena Freixa Torres.";
p_footer.textContent="Trabajo realizado para la asignatura Herramientas HTML y CSS. Primer semestre del curso 2020-2021";

elementFooter.appendChild(p);
elementFooter.appendChild(p_footer);



