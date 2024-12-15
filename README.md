
---

# Shortcut Organizer

**Shortcut Organizer** is a Chrome extension designed to provide a personalized and functional start page. It allows you to group your favorite websites into organized folders with a modern and intuitive interface. Featuring drag-and-drop and shortcut management functionalities, it simplifies quick access to your favorite content while letting you structure your dashboard to suit your needs.

👉 **[Available on the Chrome Web Store](https://chromewebstore.google.com/detail/shortcut-organizer/olbkpagnnfedofboaojkldnlllangkia)**

---

## **Features**

### **Folder Management**
- Create new folders.  
- Rename existing folders.  
- Sort and reorganize folders using **drag and drop**.  

### **Shortcut Management**
- Add shortcuts with custom labels and URLs.  
- Edit existing shortcuts.  
- Sort and reorganize shortcuts using **drag and drop**.  
- Move shortcuts between folders with **drag and drop**.  
- Add shortcuts directly by clicking an icon in the navigation bar.  

### **Customization**
- Replace the background image to match your style.  
- Enable or disable a search bar.  
- Choose your preferred search engine for a tailored experience.  

### **Automatic Icons**
- Shortcuts automatically fetch website icons for a clean and aesthetic look.  

### **Languages**  
🇫🇷 French and 🇬🇧 English support, adapting the interface to your preferred language.  

### **Future Ideas**
- Advanced theme customization.  
- Import/export shortcuts for backup or sharing.  
- Shortcut synchronization with a Google account.  

---

## Prerequisites

Before you begin, make sure you have:  
1. **Node.js** version 18 or later ([Download Node.js](https://nodejs.org)).  
2. **Google Chrome browser** (version 88 or later recommended).  

---

## Installation and Usage

### Installation Steps (Developer Mode)

1. Clone or download this repository:
   ```bash
   git clone https://github.com/xranto/shortcut-organizer.git
   cd shortcut-organizer
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. To launch the development mode and test locally:
   ```bash
   npm run build
   ```
4. Go to [chrome://extensions](chrome://extensions) in your Chrome browser.  
5. Enable **Developer Mode** (top right corner).  
6. Click **Load unpacked extension**.  
7. Select the `dist` folder.  

### Version Management

The extension includes an automatic versioning feature for the `manifest.json` file:

- Each time you run `npm run build`, the version specified in `manifest.json` is automatically incremented.  
- A prompt confirms if you want to increment the version or keep it unchanged.  

---

## Technologies Used

- **Vue.js 3**: JavaScript framework for building the user interface.  
- **Vue Router**: Internal route management for navigation.  
- **Vite**: Modern build tool for fast development.  
- **TailwindCSS**: CSS framework for elegant and customizable design.  
- **vuedraggable**: For drag-and-drop folder and shortcut management.  
- **@imengyu/vue3-context-menu**: Context menu management.  

---

## Contribution

We welcome your contributions to **Shortcut Organizer**! If you'd like to participate:  

1. **Report an issue**: Open an issue on the GitHub repository.  
2. **Propose an idea**: Suggest new features or improvements.  
3. **Submit a Pull Request**: Be sure to test your changes before submitting.  

Please keep your code clear and consistent to facilitate collaboration.  

---

## Credits

- **Background Image**:  
  Photo by Johannes Plenio, available on [Pexels](https://www.pexels.com/fr-fr/photo/papier-peint-gris-et-blanc-1103970/).  

---

## Suggestions and Feedback

We value user feedback and are constantly working to improve Shortcut Organizer.  
Check out the [suggestions and feedback](FEEDBACK.md) section to see planned ideas or propose your own.  

---

## License

This project is distributed under the [MIT License](https://opensource.org/licenses/MIT).  

---
