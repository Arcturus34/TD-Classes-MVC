# Classes-MVC

Ce projet vise à exploiter le TD sur les classes MVC.

### AVEC LES MODULES

En enlevant la balise pour le script counter.js le script application.js n'a plus accès à la variable counter et affiche donc une erreur. Pour résoudre cela on peut exporter la variable counter dans le script application.js.

### UN PEU MIEUX

La fonction getCounter peut être exportée dans le script application.js, cependant, la variable counter n'étant plus exportable, il n'est plus possible d'utiliser la fonction getCounter qui à besoin de lire la variable counter. Pour résoudre ce problème, il faut également mettre la variable counter en export.
