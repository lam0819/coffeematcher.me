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
        'terms-of-service': '服務條款'
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
        'terms-of-service': 'Terms of Service'
    }
};

// 英文版本咖啡豆數據庫
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
    // More coffee beans data...
];

// 中文版咖啡豆數據庫
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
    // More coffee beans data...
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