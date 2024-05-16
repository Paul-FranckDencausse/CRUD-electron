

# Gestionnaire de Stock de la Cave à Vin

Cette application Electron est conçue pour aider à gérer le stock de vins dans une cave. Elle permet aux utilisateurs d'ajouter, de visualiser, et de supprimer des stocks de vins de manière intuitive grâce à une interface graphique utilisateur simple.

## Fonctionnalités

- **Ajout de stock** : Les utilisateurs peuvent ajouter des stocks en spécifiant le nom du vin et la quantité.
- **Visualisation de stock** : Affichage du stock actuel avec des détails tels que le nom du vin et la quantité disponible.
- **Suppression de stock** : Les utilisateurs peuvent supprimer des stocks existants.

## Prérequis

Pour exécuter cette application, vous aurez besoin de :

- Node.js
- npm (généralement installé avec Node.js)
- Electron

## Installation

Suivez ces étapes pour installer et exécuter l'application sur votre système local :

1. **Cloner le dépôt**
   ```bash
   git clone https://votredepot.com/votreapp.git
   cd votreapp
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application**
   ```bash
   npm start
   ```

## Structure du Projet

- `index.html` - La page principale de l'interface utilisateur pour l'affichage et la gestion du stock.
- `preload.js` - Un script qui s'exécute avant le chargement de la page, utilisé pour initialiser les versions de Node, Chrome et Electron dans l'interface utilisateur.
- `renderer.js` - Gère la logique de l'interface utilisateur pour ajouter, afficher et supprimer des stocks.
- `main.js` - Le point d'entrée principal d'Electron, configurant et créant la fenêtre de l'application.

## Développement

- **Electron** : Le framework principal utilisé pour créer des applications desktop multiplateformes avec des technologies web.
- **HTML/CSS/JavaScript** : Utilisés pour construire l'interface utilisateur et la logique frontale.

## Contribution

Les contributions à ce projet sont les bienvenues. Voici comment vous pouvez contribuer :
- Fork le projet.
- Créez une nouvelle branche pour vos modifications.
- Soumettez une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

