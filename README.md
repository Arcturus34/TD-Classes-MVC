# Classes-MVC

Ce projet vise à exploiter le TD sur les classes MVC.

### AVEC LES MODULES

En enlevant la balise pour le script counter.js le script application.js n'a plus accès à la variable counter et affiche donc une erreur. Pour résoudre cela on peut exporter la variable counter dans le script application.js.

### UN PEU MIEUX

La fonction getCounter peut être exportée dans le script application.js, cependant, la variable counter n'étant plus exportable, il est necessaire de modifier l'import dans le fichier application.js en remplançant counter par getCounter.
