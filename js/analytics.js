// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-7064TYE36R';

// Initialize Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID, {
    'page_title': document.title,
    'page_location': window.location.href,
    'page_path': window.location.pathname
});

// Track page views
function trackPageView() {
    gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_path': window.location.pathname
    });
}

// Track article reads
function trackArticleRead(articleTitle, readTime) {
    gtag('event', 'article_read', {
        'article_title': articleTitle,
        'read_time': readTime
    });
}

// Track social shares
function trackSocialShare(platform, articleTitle) {
    gtag('event', 'share', {
        'method': platform,
        'content_title': articleTitle
    });
}

// Track outbound links
function trackOutboundLink(url) {
    gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': url,
        'transport_type': 'beacon'
    });
}

// Track search queries
function trackSearch(query) {
    gtag('event', 'search', {
        'search_term': query
    });
}

// Track category filters
function trackCategoryFilter(category) {
    gtag('event', 'filter', {
        'filter_type': 'category',
        'filter_value': category
    });
}

// Initialize tracking when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Track initial page view
    trackPageView();

    // Track article reads (if on article page)
    const articleTitle = document.querySelector('h1')?.textContent;
    if (articleTitle) {
        const readTime = document.querySelector('.article-meta span:first-child')?.textContent;
        if (readTime) {
            trackArticleRead(articleTitle, readTime);
        }
    }

    // Track social shares
    const shareLinks = document.querySelectorAll('.social-share a');
    shareLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const platform = link.getAttribute('aria-label').replace('Share on ', '');
            trackSocialShare(platform, articleTitle);
        });
    });

    // Track outbound links
    const outboundLinks = document.querySelectorAll('a[href^="http"]');
    outboundLinks.forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.addEventListener('click', () => {
                trackOutboundLink(link.href);
            });
        }
    });

    // Track search queries
    const searchForm = document.querySelector('form[role="search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            const searchInput = searchForm.querySelector('input[type="search"]');
            if (searchInput) {
                trackSearch(searchInput.value);
            }
        });
    }

    // Track category filters
    const categoryLinks = document.querySelectorAll('.category-filter a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', () => {
            const category = link.textContent.trim();
            trackCategoryFilter(category);
        });
    });
}); 