// 語言定義
const translations = {
    'zh': {
        'title': '咖啡風味探索器',
        'lang-zh': '中文',
        'lang-en': 'English',
        'simple-mode': '簡易模式',
        'professional-mode': '專業模式',
        'flavor-preference-title': '調整你喜好的咖啡風味',
        'slider-instructions': '拖動滑桿以設定你理想的咖啡特性：',
        'acidity': '酸度：',
        'body': '厚度：',
        'sweetness': '甜度：',
        'bitterness': '苦度：',
        'fruity': '果香：',
        'nutty': '堅果感：',
        'chocolate': '朱古力感：',
        'floral': '花香：',
        'roast-level': '烘焙程度：',
        'light-roast': '淺烘焙',
        'medium-roast': '中烘焙',
        'dark-roast': '深烘焙',
        'region-filter': '產區篩選：',
        'africa': '非洲',
        'americas': '美洲',
        'asia': '亞洲',
        'processing-filter': '處理法篩選：',
        'washed': '水洗',
        'natural': '日曬',
        'honey': '蜜處理',
        'anaerobic': '厭氧發酵',
        'altitude': '海拔高度：',
        'meters': '公尺',
        'results-count': '顯示結果數量：',
        'search-button': '推薦咖啡豆',
        'loading-text': '正在搜尋最合適的咖啡豆...',
        'error-message': '無法載入咖啡豆資料，請稍後再試。',
        'recommendation-title': '為你推薦的咖啡豆',
        'recommendation-subtitle': '根據你的口味喜好，以下是最適合你的咖啡豆：',
        'data-source': '資料來源：咖啡風味資料庫',
        'no-results': '沒有符合你篩選條件的咖啡豆。請嘗試調整產區或處理法篩選。',
        'brewing-tips-title': '沖煮小貼士：',
        'african-region': '非洲',
        'american-region': '美洲',
        'asian-region': '亞洲',
        'washed-process': '水洗',
        'natural-process': '日曬',
        'honey-process': '蜜處理',
        'anaerobic-process': '厭氧發酵',
        'light-roast-level': '淺烘焙',
        'medium-light-roast-level': '中淺烘焙',
        'medium-roast-level': '中烘焙',
        'medium-dark-roast-level': '中深烘焙',
        'dark-roast-level': '深烘焙',
        'origin': '產地：',
        'estate': '莊園：',
        'unknown': '未知',
        'varieties': '品種：',
        'altitude-value': '海拔：',
        'processing': '處理法：',
        'roast': '烘焙：',
        'cupping-score': '杯測分數：',
        'share-results': '分享你的結果：',
        'about-us': '關於我們',
        'footer-about': '咖啡風味探索器是一個幫助咖啡愛好者發現他們最喜愛咖啡風味的平台。我們致力於連接咖啡愛好者與世界各地的優質咖啡豆。',
        'quick-links': '快速連結',
        'home': '首頁',
        'about': '關於',
        'blog': '咖啡知識',
        'contact': '聯絡我們',
        'sitemap': '網站地圖',
        'coffee-resources': '咖啡資源',
        'brewing-guides': '沖煮指南',
        'origin-stories': '產地故事',
        'coffee-glossary': '咖啡術語',
        'privacy-policy': '隱私政策',
        'terms-of-service': '服務條款',
        'site-analytics' : '網站分析'
    },
    'en': {
        'title': 'Coffee Flavor Explorer',
        'lang-zh': '中文',
        'lang-en': 'English',
        'simple-mode': 'Simple Mode',
        'professional-mode': 'Professional Mode',
        'flavor-preference-title': 'Customize Your Coffee Preferences',
        'slider-instructions': 'Adjust the sliders to set your ideal coffee characteristics:',
        'acidity': 'Acidity:',
        'body': 'Body:',
        'sweetness': 'Sweetness:',
        'bitterness': 'Bitterness:',
        'fruity': 'Fruitiness:',
        'nutty': 'Nuttiness:',
        'chocolate': 'Chocolate:',
        'floral': 'Floral:',
        'roast-level': 'Roast Level:',
        'light-roast': 'Light',
        'medium-roast': 'Medium',
        'dark-roast': 'Dark',
        'region-filter': 'Region Filter:',
        'africa': 'Africa',
        'americas': 'Americas',
        'asia': 'Asia',
        'processing-filter': 'Processing Method:',
        'washed': 'Washed',
        'natural': 'Natural',
        'honey': 'Honey',
        'anaerobic': 'Anaerobic',
        'altitude': 'Altitude:',
        'meters': 'meters',
        'results-count': 'Number of results:',
        'search-button': 'Find Coffee Beans',
        'loading-text': 'Searching for the perfect coffee beans...',
        'error-message': 'Unable to load coffee data. Please try again later.',
        'recommendation-title': 'Recommended Coffee Beans',
        'recommendation-subtitle': 'Based on your preferences, here are the best coffee beans for you:',
        'data-source': 'Data source: Coffee Flavor Database',
        'no-results': 'No coffee beans match your filter criteria. Please try adjusting your region or processing method filters.',
        'brewing-tips-title': 'Brewing Tips:',
        'african-region': 'Africa',
        'american-region': 'Americas',
        'asian-region': 'Asia',
        'washed-process': 'Washed',
        'natural-process': 'Natural',
        'honey-process': 'Honey',
        'anaerobic-process': 'Anaerobic',
        'light-roast-level': 'Light',
        'medium-light-roast-level': 'Medium-Light',
        'medium-roast-level': 'Medium',
        'medium-dark-roast-level': 'Medium-Dark',
        'dark-roast-level': 'Dark',
        'origin': 'Origin:',
        'estate': 'Estate:',
        'unknown': 'Unknown',
        'varieties': 'Varieties:',
        'altitude-value': 'Altitude:',
        'processing': 'Processing:',
        'roast': 'Roast:',
        'cupping-score': 'Cupping Score:',
        'share-results': 'Share Your Results:',
        'about-us': 'About Us',
        'footer-about': 'Coffee Flavor Explorer is a platform that helps coffee enthusiasts discover their favorite coffee flavors. We are dedicated to connecting coffee lovers with quality coffee beans from around the world.',
        'quick-links': 'Quick Links',
        'home': 'Home',
        'about': 'About',
        'blog': 'Coffee Knowledge',
        'contact': 'Contact Us',
        'sitemap': 'Sitemap',
        'coffee-resources': 'Coffee Resources',
        'brewing-guides': 'Brewing Guides',
        'origin-stories': 'Origin Stories',
        'coffee-glossary': 'Coffee Glossary',
        'privacy-policy': 'Privacy Policy',
        'terms-of-service': 'Terms of Service',
        'site-analytics' : 'Site Analytics'
    }
};
// English version coffee beans database
const coffeeBeans_en = [
    // Africa
    {
        name: "Ethiopia Yirgacheffe G1",
        origin: "Ethiopia",
        region: "africa",
        estate: "Yirgacheffe Cooperative",
        varieties: "Heirloom/Ethiopian Landrace",
        altitude: 1950,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 4,
        sweetness: 7,
        bitterness: 3,
        fruity: 9,
        nutty: 2,
        chocolate: 3,
        floral: 8,
        cupping_score: 87.5,
        description: "Fresh floral aroma with citrus and blueberry flavors, accompanied by honey-like sweetness.",
        brewingTips: "Water temp: 90-92°C, Grind size: Medium-fine, Brewing time: 2:30 min."
    },
    {
        name: "Ethiopia Sidamo G1",
        origin: "Ethiopia",
        region: "africa",
        estate: "Sidamo Cooperative",
        varieties: "Ethiopian Landrace",
        altitude: 1850,
        processing: "washed",
        roast: "light",
        acidity: 7,
        body: 5,
        sweetness: 8,
        bitterness: 3,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 7,
        cupping_score: 86.5,
        description: "Lemon and citrus flavors with honey sweetness and jasmine floral notes in the finish.",
        brewingTips: "Water temp: 90-92°C, Grind size: Medium-fine, Brewing time: 2:15 min."
    },
    {
        name: "Ethiopia Guji Albasel",
        origin: "Ethiopia",
        region: "africa",
        estate: "Guji Albasel Cooperative",
        varieties: "Ethiopian Landrace/74110/74112",
        altitude: 2000,
        processing: "natural",
        roast: "light",
        acidity: 8,
        body: 4,
        sweetness: 8,
        bitterness: 2,
        fruity: 9,
        nutty: 2,
        chocolate: 2,
        floral: 9,
        cupping_score: 88.5,
        description: "Bright acidity with tropical fruit flavors and sweet floral notes.",
        brewingTips: "Water temp: 89-91°C, Grind size: Medium-fine, Brewing time: 2:20 min."
    },
    {
        name: "Ethiopia Gesha",
        origin: "Ethiopia",
        region: "africa",
        estate: "Gesha Region",
        varieties: "Gesha",
        altitude: 1950,
        processing: "natural",
        roast: "light",
        acidity: 7,
        body: 5,
        sweetness: 8,
        bitterness: 3,
        fruity: 9,
        nutty: 3,
        chocolate: 4,
        floral: 8,
        cupping_score: 88,
        description: "Rich strawberry and blueberry flavors with jasmine floral notes and honey sweetness.",
        brewingTips: "Water temp: 89-91°C, Grind size: Medium-fine, Brewing time: 2:15 min."
    },
    {
        name: "Ethiopia Kochere Washed",
        origin: "Ethiopia",
        region: "africa",
        estate: "Bangi Cooperative",
        varieties: "Ethiopian Landrace",
        altitude: 1900,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 5,
        sweetness: 7,
        bitterness: 3,
        fruity: 8,
        nutty: 3,
        chocolate: 3,
        floral: 8,
        cupping_score: 87,
        description: "Elegant floral notes with citrus and peach flavors, finishing with a refreshing tea-like quality.",
        brewingTips: "Water temp: 90-92°C, Grind size: Medium-fine, Brewing time: 2:20 min."
    },
    {
        name: "Kenya Nyeri AA TOP",
        origin: "Kenya",
        region: "africa",
        estate: "Nyeri Central Region",
        varieties: "SL28/SL34",
        altitude: 1800,
        processing: "washed",
        roast: "medium",
        acidity: 9,
        body: 6,
        sweetness: 7,
        bitterness: 4,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 5,
        cupping_score: 88,
        description: "Intense blackcurrant and grapefruit flavors with floral honey sweetness.",
        brewingTips: "Water temp: 91-93°C, Grind size: Medium-fine, Brewing time: 2:15 min."
    },
    {
        name: "Kenya Kiambu AB",
        origin: "Kenya",
        region: "africa",
        estate: "Kiambu County",
        varieties: "SL28/SL34/Ruiru 11",
        altitude: 1700,
        processing: "washed",
        roast: "medium",
        acidity: 8,
        body: 6,
        sweetness: 6,
        bitterness: 4,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 5,
        cupping_score: 87,
        description: "Bold blackberry and redcurrant notes with a winey acidity and sweet tomato finish.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    {
        name: "Rwanda Nyungwe",
        origin: "Rwanda",
        region: "africa",
        estate: "Nyungwe Cooperative",
        varieties: "Bourbon",
        altitude: 1700,
        processing: "washed",
        roast: "light-medium",
        acidity: 7,
        body: 6,
        sweetness: 7,
        bitterness: 3,
        fruity: 7,
        nutty: 4,
        chocolate: 5,
        floral: 6,
        cupping_score: 86,
        description: "Orange blossom aroma with red fruit notes and a maple syrup sweetness.",
        brewingTips: "Water temp: 91-93°C, Grind size: Medium, Brewing time: 2:20 min."
    },
    {
        name: "Burundi Kayanza",
        origin: "Burundi",
        region: "africa",
        estate: "Kayanza Washing Station",
        varieties: "Bourbon",
        altitude: 1800,
        processing: "washed",
        roast: "light-medium",
        acidity: 8,
        body: 5,
        sweetness: 7,
        bitterness: 3,
        fruity: 7,
        nutty: 3,
        chocolate: 5,
        floral: 6,
        cupping_score: 86.5,
        description: "Bright citrus acidity with red berry notes and a caramel sweetness in the finish.",
        brewingTips: "Water temp: 91-93°C, Grind size: Medium, Brewing time: 2:25 min."
    },
    {
        name: "Tanzania Kilimanjaro AA",
        origin: "Tanzania",
        region: "africa",
        estate: "KNCU Cooperative",
        varieties: "Bourbon/Kent",
        altitude: 1600,
        processing: "washed",
        roast: "medium",
        acidity: 7,
        body: 6,
        sweetness: 6,
        bitterness: 4,
        fruity: 6,
        nutty: 5,
        chocolate: 6,
        floral: 4,
        cupping_score: 85,
        description: "Black tea aroma with notes of blackberry, lemon, and a chocolate finish.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    {
        name: "Ethiopia Harrar Grade 1",
        origin: "Ethiopia",
        region: "africa",
        estate: "Harrar Region",
        varieties: "Ethiopian Landrace",
        altitude: 1850,
        processing: "natural",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 4,
        fruity: 8,
        nutty: 4,
        chocolate: 5,
        floral: 5,
        cupping_score: 86,
        description: "Wild blueberry and dark chocolate notes with a wine-like character and hints of spice.",
        brewingTips: "Water temp: 90-92°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    
    // Americas
    {
        name: "Colombia Supremo Huila",
        origin: "Colombia",
        region: "americas",
        estate: "Huila Region",
        varieties: "Caturra/Castillo",
        altitude: 1800,
        processing: "washed",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 6,
        nutty: 5,
        chocolate: 7,
        floral: 3,
        cupping_score: 85,
        description: "Balanced sweetness and acidity with caramel and red apple flavors, finishing with cocoa notes.",
        brewingTips: "Water temp: 93-94°C, Grind size: Medium, Brewing time: 2:45 min."
    },
    {
        name: "Guatemala Antigua La Minita",
        origin: "Guatemala",
        region: "americas",
        estate: "La Minita Estate",
        varieties: "Bourbon/Caturra",
        altitude: 1700,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 8,
        sweetness: 6,
        bitterness: 6,
        fruity: 4,
        nutty: 7,
        chocolate: 8,
        floral: 2,
        cupping_score: 84.5,
        description: "Rich chocolate flavor with nutty aroma and balanced citrus acidity.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium-coarse, Brewing time: 3:00 min."
    },
    {
        name: "Brazil Yellow Bourbon",
        origin: "Brazil",
        region: "americas",
        estate: "Tolones Farm",
        varieties: "Yellow Bourbon",
        altitude: 1200,
        processing: "natural",
        roast: "medium-dark",
        acidity: 4,
        body: 8,
        sweetness: 6,
        bitterness: 7,
        fruity: 3,
        nutty: 8,
        chocolate: 7,
        floral: 2,
        cupping_score: 83,
        description: "Rich nutty and caramel flavors, low acidity with cocoa finish.",
        brewingTips: "Water temp: 94-95°C, Grind size: Medium, Brewing time: 2:45 min."
    },
    {
        name: "Panama Geisha Esmeralda",
        origin: "Panama",
        region: "americas",
        estate: "Esmeralda Estate",
        varieties: "Geisha",
        altitude: 1700,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 5,
        sweetness: 9,
        bitterness: 3,
        fruity: 9,
        nutty: 3,
        chocolate: 4,
        floral: 9,
        cupping_score: 90,
        description: "Distinct jasmine floral notes with tropical fruit flavors and a tea-like mouthfeel.",
        brewingTips: "Water temp: 88-90°C, Grind size: Medium-fine, Brewing time: 2:15 min."
    },
    {
        name: "Costa Rica Anaerobic Chirripo",
        origin: "Costa Rica",
        region: "americas",
        estate: "Chirripo Estate",
        varieties: "Red Catuai/Villa Sarchi",
        altitude: 1800,
        processing: "anaerobic",
        roast: "medium",
        acidity: 7,
        body: 6,
        sweetness: 8,
        bitterness: 3,
        fruity: 9,
        nutty: 4,
        chocolate: 6,
        floral: 5,
        cupping_score: 89,
        description: "Wine-like flavors with dark berries and tropical fruit notes, complex fermented fruit taste.",
        brewingTips: "Water temp: 91-92°C, Grind size: Medium-fine, Brewing time: 2:20 min."
    },
    {
        name: "Colombia Gesha El Paraiso",
        origin: "Colombia",
        region: "americas",
        estate: "El Paraiso Estate",
        varieties: "Gesha",
        altitude: 1900,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 5,
        sweetness: 8,
        bitterness: 3,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 9,
        cupping_score: 89.5,
        description: "Bergamot and jasmine aroma with tropical fruit flavors and a delicate, silky mouthfeel.",
        brewingTips: "Water temp: 89-91°C, Grind size: Medium-fine, Brewing time: 2:20 min."
    },
    {
        name: "Jamaica Blue Mountain",
        origin: "Jamaica",
        region: "americas",
        estate: "Mavis Bank",
        varieties: "Typica",
        altitude: 1600,
        processing: "washed",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 4,
        fruity: 5,
        nutty: 6,
        chocolate: 6,
        floral: 4,
        cupping_score: 87,
        description: "Clean and mild with perfect balance, hints of sweet herbs and nuts with a remarkable smooth finish.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    {
        name: "Honduras Marcala SHG",
        origin: "Honduras",
        region: "americas",
        estate: "Marcala Region",
        varieties: "Bourbon/Typica/Catuai",
        altitude: 1500,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 7,
        floral: 3,
        cupping_score: 84,
        description: "Chocolate and caramel notes with hazelnut undertones and mild citrus acidity.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:45 min."
    },
    {
        name: "Peru Cajamarca Organic",
        origin: "Peru",
        region: "americas",
        estate: "Cajamarca Cooperative",
        varieties: "Typica/Bourbon/Caturra",
        altitude: 1700,
        processing: "washed",
        roast: "medium-light",
        acidity: 6,
        body: 6,
        sweetness: 7,
        bitterness: 4,
        fruity: 6,
        nutty: 5,
        chocolate: 6,
        floral: 4,
        cupping_score: 85,
        description: "Balanced sweetness with apple and nougat notes, mild acidity and smooth mouthfeel.",
        brewingTips: "Water temp: 91-93°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    {
        name: "Brazil Cerrado Honey",
        origin: "Brazil",
        region: "americas",
        estate: "Cerrado Region",
        varieties: "Mundo Novo/Catuai",
        altitude: 1100,
        processing: "honey",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 8,
        bitterness: 5,
        fruity: 5,
        nutty: 7,
        chocolate: 6,
        floral: 3,
        cupping_score: 84,
        description: "Rich honey sweetness with hazelnut notes and a smooth, creamy body.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:40 min."
    },
    {
        name: "El Salvador Pacamara",
        origin: "El Salvador",
        region: "americas",
        estate: "Santa Ana Region",
        varieties: "Pacamara",
        altitude: 1500,
        processing: "washed",
        roast: "medium-light",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 4,
        fruity: 6,
        nutty: 6,
        chocolate: 7,
        floral: 5,
        cupping_score: 86,
        description: "Complex flavor profile with stone fruit, maple syrup sweetness, and chocolate finish.",
        brewingTips: "Water temp: 91-93°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    
    // Asia
    {
        name: "Indonesia Sumatra Mandheling",
        origin: "Indonesia",
        region: "asia",
        estate: "Lintong Cooperative",
        varieties: "Typica/Sumatra Varietals",
        altitude: 1400,
        processing: "natural",
        roast: "dark",
        acidity: 3,
        body: 9,
        sweetness: 5,
        bitterness: 8,
        fruity: 2,
        nutty: 7,
        chocolate: 9,
        floral: 1,
        cupping_score: 82,
        description: "Rich and full-bodied with earthy, spicy notes and dark chocolate flavors.",
        brewingTips: "Water temp: 94-96°C, Grind size: Medium-coarse, Brewing time: 3:15 min."
    },
    {
        name: "Taiwan Ali Mountain",
        origin: "Taiwan",
        region: "asia",
        estate: "Dabang Farm",
        varieties: "Typica/Red Bourbon",
        altitude: 1100,
        processing: "honey",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 5,
        floral: 5,
        cupping_score: 84,
        description: "Smooth mouthfeel with honey and brown sugar sweetness, finishing with cinnamon and nutty notes.",
        brewingTips: "Water temp: 92-93°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    {
        name: "Yemen Mocha Matari Haraaz",
        origin: "Yemen",
        region: "asia",
        estate: "Haraaz District Cooperative",
        varieties: "Yemen Mocha (Local Landrace)",
        altitude: 2000,
        processing: "natural",
        roast: "medium",
        acidity: 6,
        body: 6,
        sweetness: 7,
        bitterness: 5,
        fruity: 7,
        nutty: 5,
        chocolate: 5,
        floral: 6,
        cupping_score: 87,
        description: "Dried fruit and berry flavors with spice and chocolate notes, pronounced sweetness.",
        brewingTips: "Water temp: 91-93°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    {
        name: "Indonesia Java Estate",
        origin: "Indonesia",
        region: "asia",
        estate: "Government Estate",
        varieties: "Typica/Robusta",
        altitude: 1300,
        processing: "washed",
        roast: "medium-dark",
        acidity: 4,
        body: 8,
        sweetness: 5,
        bitterness: 7,
        fruity: 3,
        nutty: 7,
        chocolate: 8,
        floral: 2,
        cupping_score: 83,
        description: "Clean, full body with herbal notes, low acidity and savory chocolate finish.",
        brewingTips: "Water temp: 94-96°C, Grind size: Medium-coarse, Brewing time: 3:00 min."
    },
    {
        name: "Papua New Guinea Sigri AA",
        origin: "Papua New Guinea",
        region: "asia",
        estate: "Sigri Estate",
        varieties: "Typica/Bourbon/Arusha",
        altitude: 1600,
        processing: "washed",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 7,
        floral: 3,
        cupping_score: 84.5,
        description: "Bright apple acidity with tropical fruit notes and a rich, savory finish.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:40 min."
    },
    {
        name: "India Monsooned Malabar AA",
        origin: "India",
        region: "asia",
        estate: "Malabar Coast",
        varieties: "Kent/S795",
        altitude: 1200,
        processing: "monsooned",
        roast: "medium-dark",
        acidity: 3,
        body: 9,
        sweetness: 5,
        bitterness: 6,
        fruity: 2,
        nutty: 8,
        chocolate: 7,
        floral: 1,
        cupping_score: 82,
        description: "Unique spicy and woody flavors with low acidity, heavy body and earthy finish.",
        brewingTips: "Water temp: 94-96°C, Grind size: Medium-coarse, Brewing time: 3:00 min."
    },
    {
        name: "Vietnam Da Lat Bourbon",
        origin: "Vietnam",
        region: "asia",
        estate: "Da Lat Region",
        varieties: "Bourbon",
        altitude: 1500,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 4,
        nutty: 7,
        chocolate: 7,
        floral: 3,
        cupping_score: 83.5,
        description: "Smooth body with nutty and chocolate notes, mild acidity and hints of caramel.",
        brewingTips: "Water temp: 93-95°C, Grind size: Medium, Brewing time: 2:45 min."
    },
    {
        name: "Laos Bolaven Plateau",
        origin: "Laos",
        region: "asia",
        estate: "Bolaven Plateau Cooperative",
        varieties: "Typica/Catimor",
        altitude: 1300,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 6,
        sweetness: 6,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 6,
        floral: 3,
        cupping_score: 83,
        description: "Balanced profile with herbal notes, mild acidity and caramel sweetness.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:30 min."
    },
    {
        name: "China Yunnan Simao",
        origin: "China",
        region: "asia",
        estate: "Yunnan Province",
        varieties: "Catimor/Local Varietals",
        altitude: 1400,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 4,
        nutty: 7,
        chocolate: 6,
        floral: 3,
        cupping_score: 82.5,
        description: "Smooth and balanced with brown sugar sweetness and walnut notes.",
        brewingTips: "Water temp: 92-94°C, Grind size: Medium, Brewing time: 2:45 min."
    },
    {
        name: "Indonesia Sulawesi Toraja",
        origin: "Indonesia",
        region: "asia",
        estate: "Toraja Region",
        varieties: "S795/Typica",
        altitude: 1500,
        processing: "washed",
        roast: "medium-dark",
        acidity: 4,
        body: 8,
        sweetness: 6,
        bitterness: 6,
        fruity: 3,
        nutty: 7,
        chocolate: 8,
        floral: 2,
        cupping_score: 84,
        description: "Creamy body with herbal notes, dark chocolate flavor and clean, sweet finish.",
        brewingTips: "Water temp: 93-95°C, Grind size: Medium-coarse, Brewing time: 2:50 min."
    }
];

// Chinese version coffee beans database
const coffeeBeans_zh = [
    // 非洲產區
    {
        name: "衣索比亞 耶加雪菲 G1",
        origin: "衣索比亞",
        region: "africa",
        estate: "耶加雪菲合作社",
        varieties: "原生種海勒姆/原生種衣索比亞蘭登品種",
        altitude: 1950,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 4,
        sweetness: 7,
        bitterness: 3,
        fruity: 9,
        nutty: 2,
        chocolate: 3,
        floral: 8,
        cupping_score: 87.5,
        description: "清新花香，柑橘和藍莓風味，帶有蜜糖般的甜味。",
        brewingTips: "水溫: 90-92°C，研磨度: 中細，沖煮時間: 2分30秒。"
    },
    {
        name: "衣索比亞 西達摩 G1",
        origin: "衣索比亞",
        region: "africa",
        estate: "西達摩合作社",
        varieties: "原生種衣索比亞蘭登品種",
        altitude: 1850,
        processing: "washed",
        roast: "light",
        acidity: 7,
        body: 5,
        sweetness: 8,
        bitterness: 3,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 7,
        cupping_score: 86.5,
        description: "檸檬和柑橘風味，尾韻帶有蜂蜜甜感和茉莓花香。",
        brewingTips: "水溫: 90-92°C，研磨度: 中細，沖煮時間: 2分15秒。"
    },
    {
        name: "衣索比亞 古吉 阿爾巴塞爾",
        origin: "衣索比亞",
        region: "africa",
        estate: "古吉 阿爾巴塞爾合作社",
        varieties: "原生種衣索比亞蘭登品種/74110/74112",
        altitude: 2000,
        processing: "natural",
        roast: "light",
        acidity: 8,
        body: 4,
        sweetness: 8,
        bitterness: 2,
        fruity: 9,
        nutty: 2,
        chocolate: 2,
        floral: 9,
        cupping_score: 88.5,
        description: "明亮的酸度，帶有熱帶水果風味和甜美的花香。",
        brewingTips: "水溫: 89-91°C，研磨度: 中細，沖煮時間: 2分20秒。"
    },
    {
        name: "衣索比亞 花魁",
        origin: "衣索比亞",
        region: "africa",
        estate: "花魁產區",
        varieties: "花魁品種",
        altitude: 1950,
        processing: "natural",
        roast: "light",
        acidity: 7,
        body: 5,
        sweetness: 8,
        bitterness: 3,
        fruity: 9,
        nutty: 3,
        chocolate: 4,
        floral: 8,
        cupping_score: 88,
        description: "濃郁的草莓和藍莓風味，帶有茉莉花香和蜂蜜甜感。",
        brewingTips: "水溫: 89-91°C，研磨度: 中細，沖煮時間: 2分15秒。"
    },
    {
        name: "衣索比亞 柯爾扎 水洗",
        origin: "衣索比亞",
        region: "africa",
        estate: "班吉合作社",
        varieties: "原生種衣索比亞蘭登品種",
        altitude: 1900,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 5,
        sweetness: 7,
        bitterness: 3,
        fruity: 8,
        nutty: 3,
        chocolate: 3,
        floral: 8,
        cupping_score: 87,
        description: "優雅的花香，帶有柑橘和蜜桃風味，尾韻有清爽的茶感。",
        brewingTips: "水溫: 90-92°C，研磨度: 中細，沖煮時間: 2分20秒。"
    },
    {
        name: "肯亞 奈洛比 AA TOP",
        origin: "肯亞",
        region: "africa",
        estate: "奈洛比中部產區",
        varieties: "SL28/SL34",
        altitude: 1800,
        processing: "washed",
        roast: "medium",
        acidity: 9,
        body: 6,
        sweetness: 7,
        bitterness: 4,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 5,
        cupping_score: 88,
        description: "強烈的黑醋栗和葡萄柚風味，帶有花蜜甜感。",
        brewingTips: "水溫: 91-93°C，研磨度: 中細，沖煮時間: 2分15秒。"
    },
    {
        name: "肯亞 基安布 AB",
        origin: "肯亞",
        region: "africa",
        estate: "基安布縣",
        varieties: "SL28/SL34/Ruiru 11",
        altitude: 1700,
        processing: "washed",
        roast: "medium",
        acidity: 8,
        body: 6,
        sweetness: 6,
        bitterness: 4,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 5,
        cupping_score: 87,
        description: "濃郁的黑莓和紅醋栗風味，帶有酒香般的酸度和甜番茄尾韻。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    {
        name: "盧旺達 尼揚威",
        origin: "盧旺達",
        region: "africa",
        estate: "尼揚威合作社",
        varieties: "波旁",
        altitude: 1700,
        processing: "washed",
        roast: "light-medium",
        acidity: 7,
        body: 6,
        sweetness: 7,
        bitterness: 3,
        fruity: 7,
        nutty: 4,
        chocolate: 5,
        floral: 6,
        cupping_score: 86,
        description: "橙花香氣，紅色水果風味和楓糖漿般的甜感。",
        brewingTips: "水溫: 91-93°C，研磨度: 中，沖煮時間: 2分20秒。"
    },
    {
        name: "蒲隆地 卡揚扎",
        origin: "蒲隆地",
        region: "africa",
        estate: "卡揚扎水洗站",
        varieties: "波旁",
        altitude: 1800,
        processing: "washed",
        roast: "light-medium",
        acidity: 8,
        body: 5,
        sweetness: 7,
        bitterness: 3,
        fruity: 7,
        nutty: 3,
        chocolate: 5,
        floral: 6,
        cupping_score: 86.5,
        description: "明亮的柑橘酸度，帶有紅色漿果風味和焦糖般甜感的尾韻。",
        brewingTips: "水溫: 91-93°C，研磨度: 中，沖煮時間: 2分25秒。"
    },
    {
        name: "坦桑尼亞 吉力馬札羅 AA",
        origin: "坦桑尼亞",
        region: "africa",
        estate: "KNCU合作社",
        varieties: "波旁/肯特",
        altitude: 1600,
        processing: "washed",
        roast: "medium",
        acidity: 7,
        body: 6,
        sweetness: 6,
        bitterness: 4,
        fruity: 6,
        nutty: 5,
        chocolate: 6,
        floral: 4,
        cupping_score: 85,
        description: "紅茶香氣，帶有黑莓、檸檬風味和朱古力尾韻。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    {
        name: "衣索比亞 哈拉爾 一級",
        origin: "衣索比亞",
        region: "africa",
        estate: "哈拉爾產區",
        varieties: "原生種衣索比亞蘭登品種",
        altitude: 1850,
        processing: "natural",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 4,
        fruity: 8,
        nutty: 4,
        chocolate: 5,
        floral: 5,
        cupping_score: 86,
        description: "野生藍莓和黑朱古力風味，帶有葡萄酒般的特性和香料提示。",
        brewingTips: "水溫: 90-92°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    
    // 美洲產區
    {
        name: "哥倫比亞 蘇普雷莫 烏爾拉奧",
        origin: "哥倫比亞",
        region: "americas",
        estate: "烏爾拉奧產區",
        varieties: "卡杜拉/卡杜愛",
        altitude: 1800,
        processing: "washed",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 6,
        nutty: 5,
        chocolate: 7,
        floral: 3,
        cupping_score: 85,
        description: "平衡的酸甜度，有焦糖和紅蘋果的風味，尾韻帶有可可香。",
        brewingTips: "水溫: 93-94°C，研磨度: 中，沖煮時間: 2分45秒。"
    },
    {
        name: "瓜地馬拉 安提瓜 拉米內薩",
        origin: "瓜地馬拉",
        region: "americas",
        estate: "拉米內薩莊園",
        varieties: "波旁/卡杜拉",
        altitude: 1700,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 8,
        sweetness: 6,
        bitterness: 6,
        fruity: 4,
        nutty: 7,
        chocolate: 8,
        floral: 2,
        cupping_score: 84.5,
        description: "豐富的朱古力風味，帶有堅果香氣，平衡的柑橘酸度。",
        brewingTips: "水溫: 92-94°C，研磨度: 中粗，沖煮時間: 3分鐘。"
    },
    {
        name: "巴西 黃波旁 摩吉安那",
        origin: "巴西",
        region: "americas",
        estate: "托洛內斯農場",
        varieties: "黃波旁",
        altitude: 1200,
        processing: "natural",
        roast: "medium-dark",
        acidity: 4,
        body: 8,
        sweetness: 6,
        bitterness: 7,
        fruity: 3,
        nutty: 8,
        chocolate: 7,
        floral: 2,
        cupping_score: 83,
        description: "濃郁的堅果和焦糖風味，低酸度，帶有可可的尾韻。",
        brewingTips: "水溫: 94-95°C，研磨度: 中，沖煮時間: 2分45秒。"
    },
    {
        name: "巴拿馬 藝伎 翡翠莊園",
        origin: "巴拿馬",
        region: "americas",
        estate: "翡翠莊園",
        varieties: "藝伎",
        altitude: 1700,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 5,
        sweetness: 9,
        bitterness: 3,
        fruity: 9,
        nutty: 3,
        chocolate: 4,
        floral: 9,
        cupping_score: 90,
        description: "特殊的茉莉花香，帶有熱帶水果風味，茶般的口感。",
        brewingTips: "水溫: 88-90°C，研磨度: 中細，沖煮時間: 2分15秒。"
    },
    {
        name: "哥斯達黎加 厭氧發酵 奇里波",
        origin: "哥斯達黎加",
        region: "americas",
        estate: "奇里波莊園",
        varieties: "紅卡杜艾/維拉薩契",
        altitude: 1800,
        processing: "anaerobic",
        roast: "medium",
        acidity: 7,
        body: 6,
        sweetness: 8,
        bitterness: 3,
        fruity: 9,
        nutty: 4,
        chocolate: 6,
        floral: 5,
        cupping_score: 89,
        description: "葡萄酒般的風味，帶有深色莓果和熱帶水果香氣，複雜的發酵果味。",
        brewingTips: "水溫: 91-92°C，研磨度: 中細，沖煮時間: 2分20秒。"
    },
    {
        name: "哥倫比亞 藝伎 埃爾帕萊索",
        origin: "哥倫比亞",
        region: "americas",
        estate: "埃爾帕萊索莊園",
        varieties: "藝伎",
        altitude: 1900,
        processing: "washed",
        roast: "light",
        acidity: 8,
        body: 5,
        sweetness: 8,
        bitterness: 3,
        fruity: 8,
        nutty: 3,
        chocolate: 4,
        floral: 9,
        cupping_score: 89.5,
        description: "佛手柑和茉莉香氣，帶有熱帶水果風味，精緻柔滑的口感。",
        brewingTips: "水溫: 89-91°C，研磨度: 中細，沖煮時間: 2分20秒。"
    },
    {
        name: "牙買加 藍山",
        origin: "牙買加",
        region: "americas",
        estate: "梅維斯銀行",
        varieties: "鐵比卡",
        altitude: 1600,
        processing: "washed",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 4,
        fruity: 5,
        nutty: 6,
        chocolate: 6,
        floral: 4,
        cupping_score: 87,
        description: "乾淨溫和，完美平衡，帶有甜草本和堅果提示，尾韻順滑無比。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    {
        name: "宏都拉斯 馬卡拉 SHG",
        origin: "宏都拉斯",
        region: "americas",
        estate: "馬卡拉產區",
        varieties: "波旁/鐵比卡/卡杜艾",
        altitude: 1500,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 7,
        floral: 3,
        cupping_score: 84,
        description: "朱古力和焦糖風味，帶有榛子底韻和溫和的柑橘酸度。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分45秒。"
    },
    {
        name: "秘魯 卡哈馬卡 有機",
        origin: "秘魯",
        region: "americas",
        estate: "卡哈馬卡合作社",
        varieties: "鐵比卡/波旁/卡杜拉",
        altitude: 1700,
        processing: "washed",
        roast: "medium-light",
        acidity: 6,
        body: 6,
        sweetness: 7,
        bitterness: 4,
        fruity: 6,
        nutty: 5,
        chocolate: 6,
        floral: 4,
        cupping_score: 85,
        description: "平衡的甜度，帶有蘋果和牛軋糖風味，溫和的酸度和順滑的口感。",
        brewingTips: "水溫: 91-93°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    {
        name: "巴西 塞拉多 蜜處理",
        origin: "巴西",
        region: "americas",
        estate: "塞拉多產區",
        varieties: "蒙多諾沃/卡杜艾",
        altitude: 1100,
        processing: "honey",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 8,
        bitterness: 5,
        fruity: 5,
        nutty: 7,
        chocolate: 6,
        floral: 3,
        cupping_score: 84,
        description: "濃郁的蜂蜜甜感，帶有榛子風味和順滑、奶油般的口感。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分40秒。"
    },
    {
        name: "薩爾瓦多 帕卡馬拉",
        origin: "薩爾瓦多",
        region: "americas",
        estate: "聖安娜產區",
        varieties: "帕卡馬拉",
        altitude: 1500,
        processing: "washed",
        roast: "medium-light",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 4,
        fruity: 6,
        nutty: 6,
        chocolate: 7,
        floral: 5,
        cupping_score: 86,
        description: "複雜的風味特徵，帶有核果、楓糖漿甜感和朱古力尾韻。",
        brewingTips: "水溫: 91-93°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    
    // 亞洲產區
    {
        name: "印尼 蘇門答臘曼特寧 林同",
        origin: "印尼",
        region: "asia",
        estate: "林同合作社",
        varieties: "帝皮卡/蘇門答臘種",
        altitude: 1400,
        processing: "natural",
        roast: "dark",
        acidity: 3,
        body: 9,
        sweetness: 5,
        bitterness: 8,
        fruity: 2,
        nutty: 7,
        chocolate: 9,
        floral: 1,
        cupping_score: 82,
        description: "濃郁醇厚，帶有泥土香、香料和黑朱古力味道。",
        brewingTips: "水溫: 94-96°C，研磨度: 中粗，沖煮時間: 3分15秒。"
    },
    {
        name: "台灣 阿里山 達邦",
        origin: "台灣",
        region: "asia",
        estate: "達邦農場",
        varieties: "鐵比卡/紅波旁",
        altitude: 1100,
        processing: "honey",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 7,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 5,
        floral: 5,
        cupping_score: 84,
        description: "滑順口感，帶有蜂蜜和紅糖甜感，尾韻有肉桂和堅果風味。",
        brewingTips: "水溫: 92-93°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    {
        name: "也門 莫卡馬塔里 哈拉茲",
        origin: "也門",
        region: "asia",
        estate: "哈拉茲地區合作社",
        varieties: "也門本地種 (莫卡)",
        altitude: 2000,
        processing: "natural",
        roast: "medium",
        acidity: 6,
        body: 6,
        sweetness: 7,
        bitterness: 5,
        fruity: 7,
        nutty: 5,
        chocolate: 5,
        floral: 6,
        cupping_score: 87,
        description: "乾果和漿果風味，帶有香料和朱古力香氣，甜感明顯。",
        brewingTips: "水溫: 91-93°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    {
        name: "印尼 爪哇 政府莊園",
        origin: "印尼",
        region: "asia",
        estate: "政府莊園",
        varieties: "帝皮卡/羅布斯塔",
        altitude: 1300,
        processing: "washed",
        roast: "medium-dark",
        acidity: 4,
        body: 8,
        sweetness: 5,
        bitterness: 7,
        fruity: 3,
        nutty: 7,
        chocolate: 8,
        floral: 2,
        cupping_score: 83,
        description: "乾淨飽滿的口感，帶有草本風味，低酸度和濃郁的朱古力尾韻。",
        brewingTips: "水溫: 94-96°C，研磨度: 中粗，沖煮時間: 3分鐘。"
    },
    {
        name: "巴布亞新幾內亞 希格里 AA",
        origin: "巴布亞新幾內亞",
        region: "asia",
        estate: "希格里莊園",
        varieties: "帝皮卡/波旁/阿魯沙",
        altitude: 1600,
        processing: "washed",
        roast: "medium",
        acidity: 6,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 7,
        floral: 3,
        cupping_score: 84.5,
        description: "明亮的蘋果酸度，帶有熱帶水果風味和濃郁、香醇的尾韻。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分40秒。"
    },
    {
        name: "印度 季風馬拉巴爾 AA",
        origin: "印度",
        region: "asia",
        estate: "馬拉巴爾海岸",
        varieties: "肯特/S795",
        altitude: 1200,
        processing: "monsooned",
        roast: "medium-dark",
        acidity: 3,
        body: 9,
        sweetness: 5,
        bitterness: 6,
        fruity: 2,
        nutty: 8,
        chocolate: 7,
        floral: 1,
        cupping_score: 82,
        description: "獨特的香料和木質風味，低酸度，重口感和泥土般的尾韻。",
        brewingTips: "水溫: 94-96°C，研磨度: 中粗，沖煮時間: 3分鐘。"
    },
    {
        name: "越南 大叻 波旁",
        origin: "越南",
        region: "asia",
        estate: "大叻產區",
        varieties: "波旁",
        altitude: 1500,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 4,
        nutty: 7,
        chocolate: 7,
        floral: 3,
        cupping_score: 83.5,
        description: "順滑的口感，帶有堅果和朱古力風味，溫和的酸度和焦糖提示。",
        brewingTips: "水溫: 93-95°C，研磨度: 中，沖煮時間: 2分45秒。"
    },
    {
        name: "寮國 博拉文高原",
        origin: "寮國",
        region: "asia",
        estate: "博拉文高原合作社",
        varieties: "帝皮卡/卡蒂摩種",
        altitude: 1300,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 6,
        sweetness: 6,
        bitterness: 5,
        fruity: 5,
        nutty: 6,
        chocolate: 6,
        floral: 3,
        cupping_score: 83,
        description: "平衡的風味特徵，帶有草本風味，溫和的酸度和焦糖甜感。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分30秒。"
    },
    {
        name: "中國 雲南 思茅",
        origin: "中國",
        region: "asia",
        estate: "雲南省",
        varieties: "卡蒂摩種/本地品種",
        altitude: 1400,
        processing: "washed",
        roast: "medium",
        acidity: 5,
        body: 7,
        sweetness: 6,
        bitterness: 5,
        fruity: 4,
        nutty: 7,
        chocolate: 6,
        floral: 3,
        cupping_score: 82.5,
        description: "順滑平衡，帶有紅糖甜感和核桃風味。",
        brewingTips: "水溫: 92-94°C，研磨度: 中，沖煮時間: 2分45秒。"
    },
    {
        name: "印尼 蘇拉威西 托拉加",
        origin: "印尼",
        region: "asia",
        estate: "托拉加產區",
        varieties: "S795/帝皮卡",
        altitude: 1500,
        processing: "washed",
        roast: "medium-dark",
        acidity: 4,
        body: 8,
        sweetness: 6,
        bitterness: 6,
        fruity: 3,
        nutty: 7,
        chocolate: 8,
        floral: 2,
        cupping_score: 84,
        description: "奶油般口感，帶有草本風味，黑朱古力味道和乾淨、甜美的尾韻。",
        brewingTips: "水溫: 93-95°C，研磨度: 中粗，沖煮時間: 2分50秒。"
    }
];

// 視目前語言切換咖啡豆數據庫
function getCoffeeBeansData() {
    const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
    return currentLang === 'zh' ? coffeeBeans_zh : coffeeBeans_en;
}

// 安全存儲用戶偏好
function safelyStorePreference(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn('Unable to store user preference:', e);
    }
}

// 安全獲取用戶偏好
function safelyGetPreference(key, defaultValue) {
    try {
        const value = localStorage.getItem(key);
        return value !== null ? value : defaultValue;
    } catch (e) {
        console.warn('Unable to retrieve user preference:', e);
        return defaultValue;
    }
}

// Update meta tags based on language
function updateMetaTags(lang) {
    // Title
    if (document.querySelector('[data-i18n-title]')) {
        document.title = lang === 'zh' ? 
            '咖啡風味探索器 - 找到最適合你口味的咖啡豆' : 
            'Coffee Flavor Explorer - Find Your Perfect Coffee Bean';
    }
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaDescription.hasAttribute('data-i18n-desc')) {
        metaDescription.content = lang === 'zh' ? 
            '使用咖啡風味探索器根據您的口味偏好，在數十種精選咖啡豆中找到完美匹配。探索來自非洲、美洲和亞洲的頂級咖啡產區。' : 
            'Use the Coffee Flavor Explorer to find the perfect match among dozens of premium coffee beans based on your taste preferences. Explore top coffee regions from Africa, Americas, and Asia.';
    }
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && metaKeywords.hasAttribute('data-i18n-keywords')) {
        metaKeywords.content = lang === 'zh' ? 
            '咖啡豆, 咖啡風味, 手沖咖啡, 精品咖啡, 咖啡推薦, 衣索比亞咖啡, 哥倫比亞咖啡, 咖啡產地, 咖啡處理法, 咖啡對比' : 
            'coffee beans, coffee flavor, pour over coffee, specialty coffee, coffee recommendations, ethiopian coffee, colombian coffee, coffee origins, coffee processing methods, coffee comparison';
    }
    
    // OG Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && ogTitle.hasAttribute('data-i18n-og-title')) {
        ogTitle.content = lang === 'zh' ? 
            '咖啡風味探索器 - 找到最適合你口味的咖啡豆' : 
            'Coffee Flavor Explorer - Find Your Perfect Coffee Bean';
    }
    
    // OG Description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && ogDescription.hasAttribute('data-i18n-og-desc')) {
        ogDescription.content = lang === 'zh' ? 
            '根據您的風味喜好，發現完美匹配的咖啡豆。從輕盈明亮的衣索比亞到醇厚濃郁的印尼，探索全球咖啡風味。' : 
            'Discover the perfect coffee beans based on your flavor preferences. Explore global coffee flavors from bright Ethiopian to rich Indonesian beans.';
    }
    
    // OG Locale
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
        ogLocale.content = lang === 'zh' ? 'zh_HK' : 'en_US';
    }
    
    // Twitter Title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle && twitterTitle.hasAttribute('data-i18n-twitter-title')) {
        twitterTitle.content = lang === 'zh' ? 
            '咖啡風味探索器 - 找到最適合你口味的咖啡豆' : 
            'Coffee Flavor Explorer - Find Your Perfect Coffee Bean';
    }
    
    // Twitter Description
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc && twitterDesc.hasAttribute('data-i18n-twitter-desc')) {
        twitterDesc.content = lang === 'zh' ? 
            '根據您的風味喜好，發現完美匹配的咖啡豆。探索全球咖啡風味。' : 
            'Discover the perfect coffee beans based on your flavor preferences. Explore global coffee flavors.';
    }
    
    // Update canonical and alternate links
    const canonicalLink = document.getElementById('canonical-link');
    if (canonicalLink) {
        canonicalLink.href = lang === 'zh' ? 'https://coffeematcher.me/' : 'https://coffeematcher.me/en/';
    }
}

// 設置頁面語言
function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en';
    
    // 更新所有文本內容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all meta tags
    updateMetaTags(lang);
    
    // 更新語言切換按鈕狀態
    document.querySelectorAll('.language-switcher a').forEach(link => {
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // 如果有搜索結果已顯示，重新生成推薦
    if (document.getElementById('results').style.display === 'block') {
        generateRecommendations(getCoffeeBeansData());
    }
    
    // 安全地存儲用戶語言偏好
    safelyStorePreference('preferredLanguage', lang);
    
    // 更新選擇器寬度以適應不同語言的文本長度
    setTimeout(updateSelectorWidth, 0);
}

// 創建背景咖啡豆
function createCoffeeBeans() {
    const container = document.getElementById('coffee-beans-bg');
    const numBeans = 40;
    
    for (let i = 0; i < numBeans; i++) {
        const bean = document.createElement('div');
        bean.className = 'coffee-bean';
        
        const size = Math.random() * 30 + 20;
        const rotation = Math.random() * 360;
        
        bean.style.width = `${size}px`;
        bean.style.height = `${size * 1.6}px`;
        bean.style.top = `${Math.random() * 100}%`;
        bean.style.left = `${Math.random() * 100}%`;
        bean.style.setProperty('--rotation', `${rotation}deg`);
        
        container.appendChild(bean);
    }
}

// 更新選擇器寬度函數
function updateSelectorWidth() {
    const activeButton = document.querySelector('.toggle-btn.active');
    if (activeButton) {
        const buttonWidth = activeButton.offsetWidth;
        const selector = document.querySelector('.selector');
        selector.style.width = buttonWidth + 'px';
        
        // 更新選擇器位置
        if (activeButton.id === 'professional-mode-btn') {
            const distance = document.getElementById('simple-mode-btn').offsetWidth;
            selector.style.transform = `translateX(${distance}px)`;
        } else {
            selector.style.transform = 'translateX(0)';
        }
    }
}

// 更新烘焙選擇器寬度和位置
function updateRoastSelector() {
    const roastHighlight = document.querySelector('.roast-selector-highlight');
    const activeRoastButton = document.querySelector('.roast-btn.active');
    
    if (activeRoastButton && roastHighlight) {
        const roastButtons = document.querySelectorAll('.roast-btn');
        const index = Array.from(roastButtons).indexOf(activeRoastButton);
        const width = 100 / roastButtons.length;
        
        roastHighlight.style.width = `${width}%`;
        
        // Calculate the exact position based on the index
        if (index === 0) {
            roastHighlight.style.transform = 'translateX(0%)';
        } else if (index === 1) {
            roastHighlight.style.transform = 'translateX(100%)';
        } else if (index === 2) {
            roastHighlight.style.transform = 'translateX(200%)';
        }
    }
}

// Initialize the social sharing functionality
function initSocialSharing() {
    // Facebook share
    document.querySelector('.share-btn.facebook').addEventListener('click', function() {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`, 'facebook-share', 'width=580,height=520');
    });
    
    // Twitter share
    document.querySelector('.share-btn.twitter').addEventListener('click', function() {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`${document.title} - Check out my coffee preferences!`);
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, 'twitter-share', 'width=550,height=420');
    });
    
    // Pinterest share
    document.querySelector('.share-btn.pinterest').addEventListener('click', function() {
        const url = encodeURIComponent(window.location.href);
        const description = encodeURIComponent(document.title);
        const media = encodeURIComponent('https://coffeematcher.me/images/coffee-explorer-preview.jpeg');
        window.open(`https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`, 'pinterest-share', 'width=750,height=530');
    });
    
    // Email share
    document.querySelector('.share-btn.email').addEventListener('click', function() {
        const subject = encodeURIComponent(document.title);
        const body = encodeURIComponent(`Check out my coffee preferences at: ${window.location.href}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    });
}

// Set the current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// 模式切換
let isProfessionalMode = false;

document.addEventListener('DOMContentLoaded', function() {
    const simpleModeBtn = document.getElementById('simple-mode-btn');
    const professionalModeBtn = document.getElementById('professional-mode-btn');
    const professionalElements = document.querySelectorAll('.professional-mode');
    const selector = document.querySelector('.selector');
    
    // 初始設定為簡易模式
    
    // 簡易模式切換
    simpleModeBtn.addEventListener('click', function() {
        isProfessionalMode = false;
        simpleModeBtn.classList.add('active');
        professionalModeBtn.classList.remove('active');
        professionalElements.forEach(element => {
            element.style.display = 'none';
        });
        updateSelectorWidth();
    });
    
    // 專業模式切換
    professionalModeBtn.addEventListener('click', function() {
        isProfessionalMode = true;
        professionalModeBtn.classList.add('active');
        simpleModeBtn.classList.remove('active');
        professionalElements.forEach(element => {
            element.style.display = 'block';
        });
        updateSelectorWidth();
        
        // When switching to professional mode, initialize the roast selector
        setTimeout(updateRoastSelector, 10);
    });
    
    // 更新滑桿值顯示
    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.addEventListener('input', function() {
            document.getElementById(`${this.id}-value`).textContent = this.value;
        });
    });
    
    // 烘焙程度選擇
    const roastButtons = document.querySelectorAll('.roast-btn');
    const roastHighlight = document.querySelector('.roast-selector-highlight');
    
    roastButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // 移除所有按鈕的active類
            roastButtons.forEach(btn => btn.classList.remove('active'));
            // 給當前點擊的按鈕添加active類
            this.classList.add('active');
            
            // Calculate the transform based on index
            if (index === 0) {
                roastHighlight.style.transform = 'translateX(0%)';
            } else if (index === 1) {
                roastHighlight.style.transform = 'translateX(100%)';
            } else if (index === 2) {
                roastHighlight.style.transform = 'translateX(200%)';
            }
        });
    });
    
    // 產區和處理法按鈕
    document.querySelectorAll('.region-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // 搜尋按鈕點擊
    document.getElementById('search-button').addEventListener('click', function() {
        document.getElementById('results').classList.remove('show');
        
        try {
            // 根據當前語言獲取相應的咖啡豆數據庫
            const coffeeBeans = getCoffeeBeansData();
            
            // 隱藏錯誤消息（如果有）
            document.getElementById('error-message').style.display = 'none';
            
            // 生成推薦
            generateRecommendations(coffeeBeans);
        } catch (error) {
            // 顯示錯誤消息
            document.getElementById('loading-indicator').style.display = 'none';
            document.getElementById('error-message').style.display = 'block';
            console.error('無法加載咖啡豆數據:', error);
        }
    });
    
    // 語言切換監聽器
    document.querySelectorAll('.language-switcher a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            setLanguage(this.getAttribute('data-lang'));
        });
    });
    
    // 響應窗口大小變化時更新選擇器寬度
    window.addEventListener('resize', function() {
        updateSelectorWidth();
        if (isProfessionalMode) {
            updateRoastSelector();
        }
    });
    
    // Initialize social sharing
    initSocialSharing();
    
    // Set current year in footer
    setCurrentYear();
    
    // 創建背景咖啡豆動畫
    createCoffeeBeans();
    
    // 設置初始語言
    const savedLang = safelyGetPreference('preferredLanguage', null);
    let browserLang = 'en';
    
    try {
        browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
    } catch (e) {
        console.warn('Unable to detect browser language:', e);
    }
    
    setLanguage(savedLang || browserLang);
    
    // 初始化選擇器寬度和位置
    setTimeout(function() {
        // 初始化烘焙選擇器的寬度和位置
        updateRoastSelector();
        
        // 初始化模式選擇器的寬度和位置
        updateSelectorWidth();
    }, 0);
});

// Generate coffee recommendations function
function generateRecommendations(coffeeBeans) {
    // 顯示載入動畫
    document.getElementById('loading-indicator').style.display = 'block';
    
    setTimeout(() => {
        // 獲取用戶偏好
        const userPreferences = {
            acidity: parseInt(document.getElementById('acidity').value),
            body: parseInt(document.getElementById('body').value),
            sweetness: parseInt(document.getElementById('sweetness').value),
            bitterness: parseInt(document.getElementById('bitterness').value),
            fruity: isProfessionalMode ? parseInt(document.getElementById('fruity').value) : 5,
            nutty: isProfessionalMode ? parseInt(document.getElementById('nutty').value) : 5,
            chocolate: isProfessionalMode ? parseInt(document.getElementById('chocolate').value) : 5,
            floral: isProfessionalMode ? parseInt(document.getElementById('floral').value) : 5,
            altitude: isProfessionalMode ? parseInt(document.getElementById('altitude').value) : 1500
        };
        
        // 獲取烘焙程度
        let selectedRoast = 'medium';
        if (isProfessionalMode) {
            document.querySelectorAll('.roast-btn').forEach(btn => {
                if (btn.classList.contains('active')) {
                    selectedRoast = btn.dataset.roast;
                }
            });
        }
        
        // 取得產區篩選
        const includeAfrica = document.querySelector('[data-region="africa"]').classList.contains('active');
        const includeAmericas = document.querySelector('[data-region="americas"]').classList.contains('active');
        const includeAsia = document.querySelector('[data-region="asia"]').classList.contains('active');
        
        // 取得處理法篩選
        let includeWashed = true;
        let includeNatural = true;
        let includeHoney = true;
        let includeAnaerobic = true;
        
        if (isProfessionalMode) {
            includeWashed = document.querySelector('[data-process="washed"]').classList.contains('active');
            includeNatural = document.querySelector('[data-process="natural"]').classList.contains('active');
            includeHoney = document.querySelector('[data-process="honey"]').classList.contains('active');
            includeAnaerobic = document.querySelector('[data-process="anaerobic"]').classList.contains('active');
        }
        
        // 結果數量
        const numResults = parseInt(document.getElementById('num-results').value);
        
        // 篩選咖啡豆
        let filteredBeans = coffeeBeans.filter(bean => {
            if (bean.region === 'africa' && !includeAfrica) return false;
            if (bean.region === 'americas' && !includeAmericas) return false;
            if (bean.region === 'asia' && !includeAsia) return false;
            
            if (isProfessionalMode) {
                if (bean.processing === 'washed' && !includeWashed) return false;
                if (bean.processing === 'natural' && !includeNatural) return false;
                if (bean.processing === 'honey' && !includeHoney) return false;
                if (bean.processing === 'anaerobic' && !includeAnaerobic) return false;
                
                // 烘焙程度篩選
                if (selectedRoast !== bean.roast && 
                    !(selectedRoast === 'medium' && (bean.roast === 'medium-light' || bean.roast === 'medium-dark'))) {
                    return false;
                }
                
                // 海拔篩選 (允許±300米誤差)
                const altitudeDiff = Math.abs(bean.altitude - userPreferences.altitude);
                if (altitudeDiff > 300) return false;
            }
            
            return true;
        });
        
        // 計算每種咖啡豆與用戶偏好的匹配度
        const scores = filteredBeans.map(bean => {
            const acidityDiff = Math.abs(bean.acidity - userPreferences.acidity);
            const bodyDiff = Math.abs(bean.body - userPreferences.body);
            const sweetnessDiff = Math.abs(bean.sweetness - userPreferences.sweetness);
            const bitternessDiff = Math.abs(bean.bitterness - userPreferences.bitterness);
            
            // 基本分數權重
            let totalDiff = (acidityDiff + bodyDiff + sweetnessDiff + bitternessDiff) * 1.5;
            
            if (isProfessionalMode) {
                const fruityDiff = Math.abs(bean.fruity - userPreferences.fruity);
                const nuttyDiff = Math.abs(bean.nutty - userPreferences.nutty);
                const chocolateDiff = Math.abs(bean.chocolate - userPreferences.chocolate);
                const floralDiff = Math.abs(bean.floral - userPreferences.floral);
                
                totalDiff += fruityDiff + nuttyDiff + chocolateDiff + floralDiff;
                
                // 專業模式下優先考慮杯測分高的咖啡
                if (bean.cupping_score) {
                    totalDiff -= (bean.cupping_score - 80) / 5; // 分數較高的獲得更高優先級
                }
            }
            
            return {
                bean: bean,
                score: totalDiff
            };
        });
        
        // 排序咖啡豆（分數低的排前面）
        scores.sort((a, b) => a.score - b.score);
        
        // 取指定數量的最匹配的咖啡豆
        const topRecommendations = scores.slice(0, numResults);
        
        // 顯示結果
        const recommendationsContainer = document.getElementById('coffee-recommendations');
        const resultsSection = document.getElementById('results');
        
        recommendationsContainer.innerHTML = '';
        resultsSection.style.display = 'block';
        
        // 添加淡入效果
        setTimeout(() => {
            resultsSection.classList.add('show');
        }, 50);
        
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        
        if (topRecommendations.length === 0) {
            recommendationsContainer.innerHTML = `<p>${translations[currentLang]['no-results']}</p>`;
        } else {
            topRecommendations.forEach((item, index) => {
                const bean = item.bean;
                const beanElement = document.createElement('div');
                beanElement.className = 'coffee-bean-card';
                
                // 延遲顯示每個咖啡豆卡片
                setTimeout(() => {
                    beanElement.classList.add('show');
                    
                    if (!isProfessionalMode) {
                        // 添加風味條動畫
                        const bars = beanElement.querySelectorAll('.flavor-fill');
                        bars.forEach(bar => {
                            setTimeout(() => {
                                bar.style.width = bar.dataset.width;
                            }, 200);
                        });
                    }
                }, 150 * (index + 1));
                
                // 地區標籤翻譯
                let regionName = "";
                if (bean.region === "africa") 
                    regionName = translations[currentLang]['african-region'];
                else if (bean.region === "americas") 
                    regionName = translations[currentLang]['american-region'];
                else if (bean.region === "asia") 
                    regionName = translations[currentLang]['asian-region'];
                
                // 處理法翻譯
                let processingName = "";
                if (bean.processing === "washed") 
                    processingName = translations[currentLang]['washed-process'];
                else if (bean.processing === "natural") 
                    processingName = translations[currentLang]['natural-process'];
                else if (bean.processing === "honey") 
                    processingName = translations[currentLang]['honey-process'];
                else if (bean.processing === "anaerobic") 
                    processingName = translations[currentLang]['anaerobic-process'];
                else 
                    processingName = bean.processing;
                
                // 烘焙程度翻譯
                let roastName = "";
                if (bean.roast === "light") 
                    roastName = translations[currentLang]['light-roast-level'];
                else if (bean.roast === "medium-light") 
                    roastName = translations[currentLang]['medium-light-roast-level'];
                else if (bean.roast === "medium") 
                    roastName = translations[currentLang]['medium-roast-level'];
                else if (bean.roast === "medium-dark") 
                    roastName = translations[currentLang]['medium-dark-roast-level'];
                else if (bean.roast === "dark") 
                    roastName = translations[currentLang]['dark-roast-level'];
                else 
                    roastName = bean.roast;
                
                if (isProfessionalMode) {
                    // 專業模式顯示
                    beanElement.innerHTML = `
                        <h3>${bean.name}</h3>
                        <div class="professional-details">
                            <div class="professional-row">
                                <div class="professional-item">
                                    <strong>${translations[currentLang]['origin']}</strong> ${bean.origin} (${regionName})
                                </div>
                                <div class="professional-item">
                                    <strong>${translations[currentLang]['estate']}</strong> ${bean.estate || translations[currentLang]['unknown']}
                                </div>
                            </div>
                            <div class="professional-row">
                                <div class="professional-item">
                                    <strong>${translations[currentLang]['varieties']}</strong> ${bean.varieties || translations[currentLang]['unknown']}
                                </div>
                                <div class="professional-item">
                                    <strong>${translations[currentLang]['altitude-value']}</strong> ${bean.altitude || translations[currentLang]['unknown']} ${translations[currentLang]['meters']}
                                </div>
                            </div>
                            <div class="professional-row">
                                <div class="professional-item">
                                    <strong>${translations[currentLang]['processing']}</strong>
                                    <span class="processing-tag">${processingName}</span>
                                </div>
                                <div class="professional-item">
                                    <strong>${translations[currentLang]['roast']}</strong>
                                    <span class="processing-tag">${roastName}</span>
                                </div>
                            </div>
                            ${bean.cupping_score ? `
                            <div class="professional-row" style="margin-top: 8px;">
                                <div class="professional-item">
                                    <strong>${translations[currentLang]['cupping-score']}</strong> ${bean.cupping_score}
                                </div>
                            </div>
                            ` : ''}
                        </div>
                        <p>${bean.description}</p>
                        <div class="flavor-profile">
                            <span class="flavor-tag">${translations[currentLang]['acidity'].replace('：', '').replace(':', '')}: ${bean.acidity}/10</span>
                            <span class="flavor-tag">${translations[currentLang]['body'].replace('：', '').replace(':', '')}: ${bean.body}/10</span>
                            <span class="flavor-tag">${translations[currentLang]['sweetness'].replace('：', '').replace(':', '')}: ${bean.sweetness}/10</span>
                            <span class="flavor-tag">${translations[currentLang]['bitterness'].replace('：', '').replace(':', '')}: ${bean.bitterness}/10</span>
                        </div>
                        <div class="flavor-profile">
                            <span class="flavor-tag">${translations[currentLang]['fruity'].replace('：', '').replace(':', '')}: ${bean.fruity}/10</span>
                            <span class="flavor-tag">${translations[currentLang]['nutty'].replace('：', '').replace(':', '')}: ${bean.nutty}/10</span>
                            <span class="flavor-tag">${translations[currentLang]['chocolate'].replace('：', '').replace(':', '')}: ${bean.chocolate}/10</span>
                            <span class="flavor-tag">${translations[currentLang]['floral'].replace('：', '').replace(':', '')}: ${bean.floral}/10</span>
                        </div>
                        <p class="brewing-tips"><strong>${translations[currentLang]['brewing-tips-title']}</strong> ${bean.brewingTips}</p>
                    `;
                } else {
                    // 簡易模式顯示
                    beanElement.innerHTML = `
                        <h3>${bean.name} <span class="origin-badge">${regionName}</span></h3>
                        <div class="simple-view">
                            <p>${bean.description}</p>
                            
                            <div class="simple-flavor">
                                <div class="flavor-bar-container">
                                    <span class="flavor-name">${translations[currentLang]['acidity'].replace('：', '').replace(':', '')}</span>
                                    <div class="flavor-bar">
                                        <div class="flavor-fill" data-width="${bean.acidity * 10}%" style="width: 0"></div>
                                    </div>
                                </div>
                                
                                <div class="flavor-bar-container">
                                    <span class="flavor-name">${translations[currentLang]['body'].replace('：', '').replace(':', '')}</span>
                                    <div class="flavor-bar">
                                        <div class="flavor-fill" data-width="${bean.body * 10}%" style="width: 0"></div>
                                    </div>
                                </div>
                                
                                <div class="flavor-bar-container">
                                    <span class="flavor-name">${translations[currentLang]['sweetness'].replace('：', '').replace(':', '')}</span>
                                    <div class="flavor-bar">
                                        <div class="flavor-fill" data-width="${bean.sweetness * 10}%" style="width: 0"></div>
                                    </div>
                                </div>
                                
                                <div class="flavor-bar-container">
                                    <span class="flavor-name">${translations[currentLang]['bitterness'].replace('：', '').replace(':', '')}</span>
                                    <div class="flavor-bar">
                                        <div class="flavor-fill" data-width="${bean.bitterness * 10}%" style="width: 0"></div>
                                    </div>
                                </div>
                            </div>
                            
                            <p class="brewing-tips"><strong>${translations[currentLang]['brewing-tips-title']}</strong> ${bean.brewingTips}</p>
                        </div>
                    `;
                }
                
                recommendationsContainer.appendChild(beanElement);
            });
        }
        
        // 隱藏載入指示器
        document.getElementById('loading-indicator').style.display = 'none';
        
        // 平滑滾動到結果
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 1000); // 模擬載入時間
}