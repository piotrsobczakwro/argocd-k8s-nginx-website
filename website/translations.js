// Translation data for PL/ENG language switcher
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Professional Car Service & Repair",
        hero_subtitle: "Trusted by hundreds of drivers. We keep your car running at its best.",
        hero_button: "Book an Appointment",
        
        // Services Section
        services_title: "Our Services",
        service_diagnostics_title: "Engine Diagnostics",
        service_diagnostics_desc: "Advanced computer diagnostics to quickly identify and resolve engine issues.",
        service_repairs_title: "General Repairs",
        service_repairs_desc: "Brake service, suspension, exhaust systems, and complete mechanical repairs.",
        service_oil_title: "Oil & Filter Change",
        service_oil_desc: "Regular maintenance to extend your engine life and ensure peak performance.",
        service_electrical_title: "Electrical Systems",
        service_electrical_desc: "Battery checks, alternator repairs, wiring diagnostics, and lighting services.",
        service_ac_title: "AC & Heating",
        service_ac_desc: "Climate control repair, refrigerant recharge, and heating system service.",
        service_tire_title: "Tire Service",
        service_tire_desc: "Tire replacement, rotation, balancing, and wheel alignment for a smooth ride.",
        
        // About Section
        about_title: "Why Choose Us",
        about_experience_title: "15+ Years Experience",
        about_experience_desc: "Our certified mechanics bring over 15 years of hands-on experience with all makes and models.",
        about_pricing_title: "Transparent Pricing",
        about_pricing_desc: "No hidden fees. We provide detailed estimates before any work begins.",
        about_turnaround_title: "Quick Turnaround",
        about_turnaround_desc: "We value your time. Most standard services are completed the same day.",
        about_parts_title: "Quality Parts",
        about_parts_desc: "We use only OEM and high-quality aftermarket parts backed by warranty.",
        
        // Contact Section
        contact_title: "Get in Touch",
        contact_address: "Address",
        contact_address_value: "ul. Mechaników 12, 50-200 Wrocław, Poland",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_hours: "Hours",
        contact_hours_mon_fri: "Mon - Fri: 8:00 AM - 6:00 PM",
        contact_hours_sat: "Saturday: 9:00 AM - 3:00 PM",
        contact_hours_sun: "Sunday: Closed",
        
        // Footer
        footer_copyright: "© 2026 AutoPro Workshop. All rights reserved."
    },
    pl: {
        // Navigation
        nav_home: "Start",
        nav_services: "Usługi",
        nav_about: "O nas",
        nav_contact: "Kontakt",
        
        // Hero Section
        hero_title: "Profesjonalny Serwis i Naprawa Samochodów",
        hero_subtitle: "Zaufany przez setki kierowców. Dbamy o to, aby Twój samochód działał jak najlepiej.",
        hero_button: "Umów wizytę",
        
        // Services Section
        services_title: "Nasze Usługi",
        service_diagnostics_title: "Diagnostyka Silnika",
        service_diagnostics_desc: "Zaawansowana diagnostyka komputerowa do szybkiego wykrywania i rozwiązywania problemów z silnikiem.",
        service_repairs_title: "Naprawy Ogólne",
        service_repairs_desc: "Serwis hamulców, zawieszenia, układu wydechowego i kompleksowe naprawy mechaniczne.",
        service_oil_title: "Wymiana Oleju i Filtrów",
        service_oil_desc: "Regularna konserwacja wydłużająca żywotność silnika i zapewniająca najlepszą wydajność.",
        service_electrical_title: "Układy Elektryczne",
        service_electrical_desc: "Kontrola akumulatora, naprawy alternatora, diagnostyka okablowania i usługi oświetlenia.",
        service_ac_title: "Klimatyzacja i Ogrzewanie",
        service_ac_desc: "Naprawa klimatyzacji, uzupełnianie czynnika chłodniczego i serwis układu ogrzewania.",
        service_tire_title: "Serwis Opon",
        service_tire_desc: "Wymiana opon, rotacja, wyważanie i geometria kół dla płynnej jazdy.",
        
        // About Section
        about_title: "Dlaczego My",
        about_experience_title: "Ponad 15 Lat Doświadczenia",
        about_experience_desc: "Nasi certyfikowani mechanicy mają ponad 15 lat praktycznego doświadczenia ze wszystkimi markami i modelami.",
        about_pricing_title: "Przejrzyste Ceny",
        about_pricing_desc: "Żadnych ukrytych opłat. Przed rozpoczęciem prac przedstawiamy szczegółową wycenę.",
        about_turnaround_title: "Szybka Realizacja",
        about_turnaround_desc: "Cenimy Twój czas. Większość standardowych usług wykonujemy tego samego dnia.",
        about_parts_title: "Części Wysokiej Jakości",
        about_parts_desc: "Używamy wyłącznie części OEM i wysokiej jakości części zamiennych objętych gwarancją.",
        
        // Contact Section
        contact_title: "Skontaktuj się z nami",
        contact_address: "Adres",
        contact_address_value: "ul. Mechaników 12, 50-200 Wrocław, Polska",
        contact_phone: "Telefon",
        contact_email: "E-mail",
        contact_hours: "Godziny otwarcia",
        contact_hours_mon_fri: "Pon - Pt: 8:00 - 18:00",
        contact_hours_sat: "Sobota: 9:00 - 15:00",
        contact_hours_sun: "Niedziela: Nieczynne",
        
        // Footer
        footer_copyright: "© 2026 AutoPro Workshop. Wszelkie prawa zastrzeżone."
    }
};

// Language switcher functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }

    init() {
        // Apply saved language on page load
        this.applyLanguage(this.currentLang);
        
        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }

    switchLanguage(lang) {
        if (lang !== this.currentLang && (lang === 'en' || lang === 'pl')) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            this.applyLanguage(lang);
            document.documentElement.lang = lang;
            
            // Update active state of language buttons
            this.updateButtonStates();
        }
    }

    applyLanguage(lang) {
        const t = translations[lang];
        
        // Apply all translations using data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });
        
        // Update page title
        const title = lang === 'pl' 
            ? 'AutoPro Workshop - Profesjonalny Serwis i Naprawa Samochodów'
            : 'AutoPro Workshop - Professional Car Service & Repair';
        document.title = title;
    }

    updateButtonStates() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize language switcher when DOM is ready
let langSwitcher;
document.addEventListener('DOMContentLoaded', function() {
    langSwitcher = new LanguageSwitcher();
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            langSwitcher.switchLanguage(lang);
        });
    });
    
    // Set initial active state
    langSwitcher.updateButtonStates();
});
