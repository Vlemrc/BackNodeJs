Choix des librairies :

J'ai utilisé bcryptjs pour hacher le mot de passe de l'utilisateur, permettant de renforcer la sécurité, de se protéger contre les attaques brutes.

J'ai utilisé cors pour gérer et autoriser les requêtes provenant de domaines spécifiques. Cors garantit que mon API peut être consommée par d'autres domaines de manière sécurisée.

J'ai utilisé body-parser pour extraire les données de la requête et les utiliser. Je l'utilise car c'est plus simple, cela facilite le traitement des données envoyées par les utilisateurs.

J'ai utilisé le jwt pour implémenter l'authentificaiton et l'autorisation dans mon app. Il me permet de générer un token contenant les informations de l'utilisateur, il est unique, avec une clé secrète. Avec Postman, je vérifie la validité du token et vérifie la signature.
# BackNodeJs
# BackNodeJs
# BackNodeJs
