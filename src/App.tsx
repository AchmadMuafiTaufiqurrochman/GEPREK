// import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-poppins">
      <Helmet>
        <title>QQ Crispy - Ayam Geprek Terbaik di Sidoarjo | Gurihnya Pas, Rasanya Juara</title>
        <meta name="description" content="QQ Crispy menyajikan ayam geprek dan ayam kentaki terbaik di Sidoarjo. Nikmati ayam crispy dengan berbagai varian rasa di Jl. Raya Pagerwojo No.17, Buduran, Sidoarjo. Pesan sekarang!" />
        
        {/* SEO Keywords */}
        <meta name="keywords" content="ayam geprek, ayam kentaki, geprek, geprek sidoarjo, ayam geprek sidoarjo, ayam crispy sidoarjo, qq crispy, makanan sidoarjo, delivery sidoarjo, grabfood sidoarjo, shopeefood sidoarjo" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qqcrispy.com/" />
        <meta property="og:title" content="QQ Crispy - Ayam Geprek Terbaik di Sidoarjo" />
        <meta property="og:description" content="Ayam geprek dan ayam kentaki terbaik di Sidoarjo dengan berbagai varian rasa. Tersedia di GrabFood dan ShopeeFood. Pesan sekarang!" />
        <meta property="og:image" content="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="QQ Crispy" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://qqcrispy.com/" />
        <meta property="twitter:title" content="QQ Crispy - Ayam Geprek Terbaik di Sidoarjo" />
        <meta property="twitter:description" content="Ayam geprek dan ayam kentaki terbaik di Sidoarjo dengan berbagai varian rasa. Tersedia di GrabFood dan ShopeeFood." />
        <meta property="twitter:image" content="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "QQ Crispy",
            "description": "Ayam geprek dan ayam kentaki terbaik di Sidoarjo dengan berbagai varian rasa",
            "url": "https://qqcrispy.com",
            "telephone": "+62813-5838-2710",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jl. Raya Pagerwojo No.17, Entalsewu",
              "addressLocality": "Buduran",
              "addressRegion": "Sidoarjo",
              "postalCode": "61252",
              "addressCountry": "ID"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -7.4364831,
              "longitude": 112.7006747
            },
            "servesCuisine": ["Indonesian", "Fried Chicken", "Ayam Geprek"],
            "priceRange": "Rp 10.000 - Rp 20.000",
            "image": "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
            "hasMenu": {
              "@type": "Menu",
              "hasMenuSection": [
                {
                  "@type": "MenuSection",
                  "name": "Ayam Crispy",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "QQ Original Sayap",
                      "description": "Ayam sayap crispy original",
                      "offers": {
                        "@type": "Offer",
                        "price": "10000",
                        "priceCurrency": "IDR"
                      }
                    },
                    {
                      "@type": "MenuItem", 
                      "name": "QQ Geprek Paha Bawah",
                      "description": "Ayam geprek paha bawah dengan sambal",
                      "offers": {
                        "@type": "Offer",
                        "price": "11000",
                        "priceCurrency": "IDR"
                      }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "QQ Crispy Cheese",
                      "description": "Ayam crispy dengan saus keju",
                      "offers": {
                        "@type": "Offer",
                        "price": "14000",
                        "priceCurrency": "IDR"
                      }
                    }
                  ]
                }
              ]
            },
            "openingHours": "Mo-Su 10:00-22:00",
            "paymentAccepted": "Cash, GrabFood, ShopeeFood",
            "currenciesAccepted": "IDR"
          })}
        </script>
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="QQ Crispy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="id" />
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Sidoarjo" />
        <meta name="geo.position" content="-7.4364831;112.7006747" />
        <meta name="ICBM" content="-7.4364831, 112.7006747" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://qqcrispy.com/" />
      </Helmet>
      
      <Header />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;