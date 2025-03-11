Here's an updated README.md in English only, reflecting the correct project structure with the brewing-guides folder:

# Coffee Flavor Explorer

![Coffee Explorer Banner](https://coffeematcher.me/coffee-explorer-preview.jpeg)

An interactive web tool helping coffee enthusiasts discover their perfect coffee beans based on flavor preferences.

**Website:** [https://coffeematcher.me](https://coffeematcher.me)

## 🌟 Features

- **Flavor Preference Matching:** Find coffee beans matching your taste by adjusting sliders for acidity, body, sweetness, and bitterness
- **Simple & Professional Modes:** Choose between simplified controls or detailed, advanced options for coffee connoisseurs
- **Multi-language Support:** Fully bilingual interface (English/Traditional Chinese)
- **Region Filtering:** Filter coffee beans by Africa, Americas, or Asia regions
- **Processing Method Filtering:** (Professional mode) Filter by processing methods including washed, natural, honey, and anaerobic
- **Roast Level Selection:** (Professional mode) Choose from light, medium, or dark roast profiles
- **Detailed Coffee Information:** View comprehensive information about each coffee bean
- **Brewing Guides:** Complete instructions for various brewing methods

## 📂 Project Structure

```
coffeematcher.me/
├── index.html                 # Main page (Coffee Flavor Explorer tool)
├── brewing-guides/            # Coffee brewing guides directory
│   └── index.html             # Main brewing guides page
├── coffee-knowledge/          # Coffee knowledge section
│   └── index.html             # Coffee knowledge main page
├── origin-stories/            # Coffee origin stories  (TBC)
│   └── index.html             # Origin stories main page (TBC)
├── coffee-glossary/           # Coffee terminology glossary (TBC)
│   └── index.html             # Glossary main page (TBC)
├── css/
│   └── coffee-explorer.css    # Main stylesheet
├── js/
│   ├── coffee-explorer.js     # Main JavaScript file
│   └── brewing-calculator.js  # Brewing calculator functionality
├── data/
│   ├── coffee-beans.json      # Coffee bean data
│   └── brewing-methods.json   # Brewing methods data
└── images/                    # Image resources directory
```

## 💻 Technical Details

Coffee Flavor Explorer is built with:

- **HTML5, CSS3, and Vanilla JavaScript:** Pure frontend implementation for maximum compatibility
- **Responsive Design:** Mobile-friendly interface that works across all devices
- **No External Dependencies:** No frameworks or libraries required
- **SEO Optimized:** Structured data, meta tags, and bilingual support
- **Fast Loading:** Optimized assets and minimal footprint
- **Hosted on Cloudflare Pages:** For global CDN distribution and optimal performance

## 🧩 How It Works

### Main Functional Modules

1. **Flavor Matching Algorithm** (`coffee-explorer.js`):
   ```javascript
   // Calculate coffee bean match scores based on user preferences
   function calculateMatchScore(userPreferences, coffeeBean) {
     let score = 0;
     // Weight different flavor characteristics
     const weights = { acidity: 1.2, body: 1.0, sweetness: 1.1, bitterness: 1.3 };
     
     // Calculate match for basic flavor characteristics
     for (const [key, weight] of Object.entries(weights)) {
       const diff = Math.abs(userPreferences[key] - coffeeBean.flavor[key]);
       score += (10 - diff) * weight;
     }
     
     // Additional professional mode characteristics
     if (isProfessionalMode) {
       const proWeights = { fruity: 0.9, nutty: 0.8, chocolate: 0.8, floral: 0.9 };
       for (const [key, weight] of Object.entries(proWeights)) {
         if (userPreferences[key] && coffeeBean.flavor[key]) {
           const diff = Math.abs(userPreferences[key] - coffeeBean.flavor[key]);
           score += (10 - diff) * weight;
         }
       }
     }
     
     return score;
   }
   ```

2. **Brewing Guides** (`brewing-guides/index.html`):
   - Comprehensive instructions for Pour Over, French Press, Moka Pot, and Cold Brew
   - Interactive brewing ratio calculator
   - Step-by-step brewing instructions with professional tips

3. **Language Switching System**:
   ```javascript
   // Switch between languages
   function switchLanguage(lang) {
     document.body.className = lang;
     
     // Update language button active state
     document.querySelectorAll('.language-switcher a').forEach(function(el) {
       el.classList.remove('active');
       if (el.getAttribute('data-lang') === lang) {
         el.classList.add('active');
       }
     });
     
     // Save language preference
     localStorage.setItem('preferredLanguage', lang);
   }
   ```

## 🔧 For Developers & AI Assistants

### Key JavaScript Functions

- `calculateMatchScore(userPreferences, coffeeBean)`: Calculates how well a coffee bean matches user preferences
- `filterCoffeeBeans(beans, filters)`: Filters coffee beans based on user-selected criteria
- `displayResults(matchedBeans)`: Renders the matching coffee beans in the UI
- `calculateWater()`: Calculates water amount for the brewing ratio calculator
- `switchLanguage(lang)`: Toggles between English and Chinese interfaces

### CSS Structure

- Base styling and variables in the beginning of `coffee-explorer.css`
- Responsive design breakpoints for mobile, tablet, and desktop
- Language-specific styling with `.lang-zh` and `.lang-en` classes
- Mode-specific styling with `.simple-mode` and `.professional-mode` classes

### Data Structures

Coffee bean object example from `coffee-beans.json`:
```json
{
  "id": "ethiopia-yirgacheffe",
  "name": "衣索比亞耶加雪菲",
  "name_en": "Ethiopia Yirgacheffe",
  "region": "africa",
  "country": "ethiopia",
  "altitude": "1800-2200",
  "process": "washed",
  "roast": "light",
  "flavor": {
    "acidity": 8,
    "body": 5,
    "sweetness": 7,
    "bitterness": 3,
    "fruity": 9,
    "nutty": 2,
    "chocolate": 3,
    "floral": 8
  },
  "description": "明亮的柑橘酸和茉莉花香，帶有藍莓和柑橘風味。",
  "description_en": "Bright citrus acidity and jasmine aroma with blueberry and citrus notes."
}
```

## 🚀 Getting Started

1. Visit [https://coffeematcher.me](https://coffeematcher.me)
2. Select your preferred language (English/Chinese)
3. Choose between Simple or Professional mode
4. Adjust flavor sliders to match your taste preferences
5. Select regions, processing methods, and roast level (in Professional mode)
6. Click "Find Coffee Beans" to get personalized recommendations
7. Explore matching coffee beans and their detailed profiles
8. Visit the Brewing Guides section to learn proper brewing techniques

## 👥 Contributing

The Coffee Flavor Explorer welcomes contributions:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or suggestions, please contact:
- Email: contact@coffeematcher.me
- GitHub Issues: [https://github.com/lam0819/coffeematcher.me/issues](https://github.com/lam0819/coffeematcher.me/issues)

---
