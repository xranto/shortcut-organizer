
# Shortcut Organizer

**Shortcut Organizer** est une extension Chrome conçue pour offrir une page de démarrage personnalisée et fonctionnelle. Elle permet de regrouper vos sites web favoris dans des dossiers organisés, avec une interface moderne et intuitive. Grâce à des fonctionnalités comme le drag & drop et la gestion des raccourcis, elle facilite l'accès rapide à vos contenus préférés tout en vous permettant de structurer votre tableau de bord selon vos besoins.

---

## Fonctionnalités

### **Gestion des dossiers**
- **Créer un nouveau dossier**.
- **Renommer les dossiers existants**.
- Trier et réorganiser les dossiers par **drag & drop**.

### **Gestion des raccourcis**
- **Ajouter un raccourci** en fournissant un label et une URL.
- **Modifier les raccourcis existants**.
- Trier et réorganiser les raccourcis par **drag & drop**.
- **Déplacer un raccourci** d’un dossier à un autre via **drag & drop**.

### **Icônes automatiques**
- Les raccourcis récupèrent automatiquement l’icône du site web pour une présentation visuelle claire et esthétique.

### **Idées futures**
- Ajouter un raccourci directement en cliquant sur une icône dans la barre de navigation.
- Personnalisation du thème ou de l’arrière-plan.
- Import/export des raccourcis pour les sauvegarder ou les partager.
- Synchronisation des raccourcis avec un compte Google.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir :
1. **Node.js** version 18 ou plus ([Télécharger Node.js](https://nodejs.org)).
2. **Navigateur Chrome** (version 88 ou supérieure recommandée).

---

## Installation et Utilisation

### Étapes d'installation (Mode développeur)

1. Clonez ou téléchargez ce dépôt :
   ```bash
   git clone https://github.com/xranto/shortcut-organizer.git
   cd shortcut-organizer
   ```
2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```
3. Pour lancer le mode développement et tester localement :
   ```bash
   npm run build
   ```
4. Accédez à [chrome://extensions](chrome://extensions) dans votre navigateur Chrome.
5. Activez le **mode développeur** (coin supérieur droit).
6. Cliquez sur **Charger l'extension non empaquetée**.
7. Sélectionnez le dossier `dist`.


### Gestion de la version

L'extension utilise une fonctionnalité de versioning automatique pour le fichier `manifest.json` :

- À chaque exécution de la commande `npm run build`, la version spécifiée dans le fichier `manifest.json` est automatiquement incrémentée.
- Un message s'affiche pour confirmer si l'utilisateur souhaite incrémenter la version ou la laisser inchangée.

---

## Technologies utilisées

- **Vue.js 3** : Framework JavaScript pour construire l’interface utilisateur.
- **Vue Router** : Gestion des routes internes pour la navigation.
- **Vite** : Outil de build moderne pour un développement rapide.
- **TailwindCSS** : Framework CSS pour un design élégant et personnalisable.
- **vuedraggable** : Pour le drag & drop des dossiers et raccourcis.
- **@imengyu/vue3-context-menu** : Gestion des menus contextuels.

---

## Participation

Nous accueillons vos contributions à **Shortcut Organizer** ! Si vous souhaitez participer :

1. **Signalez un problème** : Ouvrez une issue sur le dépôt GitHub.
2. **Proposez une idée** : Suggérez de nouvelles fonctionnalités ou des améliorations.
3. **Soumettez une Pull Request** : Assurez-vous de tester vos modifications avant de soumettre une proposition.

Merci de garder un code clair et cohérent pour faciliter les contributions.

---

## Crédits

- **Image d'arrière-plan** :  
  Photo de Johannes Plenio, disponible sur [Pexels](https://www.pexels.com/fr-fr/photo/papier-peint-gris-et-blanc-1103970/).

---

## Licence

Ce projet est distribué sous la licence [MIT](https://opensource.org/licenses/MIT).
