"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Accueil",
          id: "hero",
        },
        {
          name: "À propos",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="La Grillardière"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="La Grillardière Safi"
      description="Découvrez l'authenticité des saveurs grillées au cœur de Safi. Une expérience culinaire mémorable alliant tradition et qualité supérieure."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/moroccan-serving-mint-tea-traditional-way_268835-3983.jpg",
          imageAlt: "Restaurant ambiance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-crab-sticks-eggs-corn-cucumber_114579-44487.jpg",
          imageAlt: "Plats traditionnels",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-vegetables-market_23-2149050782.jpg",
          imageAlt: "Ingrédients frais",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/breakfast-set-table_140725-3715.jpg",
          imageAlt: "Ambiance terrasse",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fried-fish-with-grilled-eggplants-bell-peppers-tomatoes_141793-735.jpg",
          imageAlt: "Spécialité maison",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/greek-salad-with-chopped-tomato-cheese-olives_114579-4634.jpg",
          imageAlt: "Chef au travail",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Une passion pour le goût"
      buttons={[
        {
          text: "En savoir plus",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Service rapide",
          description: "Un personnel réactif et attentif pour que vous profitiez au maximum de votre repas.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-meat-seafood-barbecue-with-vegetables-wooden-skewers-plate-sauce-top-view_1253-954.jpg",
          },
          items: [],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/moroccan-serving-mint-tea-traditional-way_268835-3983.jpg",
          imageAlt: "fresh ingredients market vegetables",
        },
        {
          title: "Qualité premium",
          description: "Sélection rigoureuse de produits locaux frais pour des saveurs inégalées.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/fresh-harvest-basket-beautifully-presented-outside-market-sale_346278-732.jpg",
          },
          items: [],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-crab-sticks-eggs-corn-cucumber_114579-44487.jpg",
          imageAlt: "fresh ingredients market vegetables",
        },
        {
          title: "Ambiance chaleureuse",
          description: "Un cadre accueillant, parfait pour vos repas en famille ou entre amis.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/fresh-fish-white-table_23-2148263876.jpg",
          },
          items: [],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-vegetables-market_23-2149050782.jpg",
          imageAlt: "fresh ingredients market vegetables",
        },
      ]}
      title="Pourquoi nous choisir ?"
      description="Notre engagement envers la qualité fait de nous une référence à Safi."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Tajine de poissons",
          price: "80 MAD",
          imageSrc: "http://img.b2bpic.net/free-photo/female-barista-black-shirt-trousers-with-coffee-brown-dried-tea-equipment-ingredients-making-tea-white-wall_140725-11660.jpg",
        },
        {
          id: "2",
          name: "Grillades mixtes",
          price: "120 MAD",
          imageSrc: "http://img.b2bpic.net/free-photo/peppermint-tea-glass-ready-drink_1150-38035.jpg",
        },
        {
          id: "3",
          name: "Brochettes de viande",
          price: "90 MAD",
          imageSrc: "http://img.b2bpic.net/free-photo/tea-with-lemon-slices_23-2148550450.jpg",
        },
        {
          id: "4",
          name: "Couscous traditionnel",
          price: "70 MAD",
          imageSrc: "http://img.b2bpic.net/free-photo/pottery-pan-with-meat-balls-cooked-egg-with-spinach-topped-with-tomato_140725-8663.jpg",
        },
        {
          id: "5",
          name: "Salade marocaine",
          price: "40 MAD",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-with-food-near-cup-drink-teapot_23-2148080944.jpg",
        },
        {
          id: "6",
          name: "Thé à la menthe",
          price: "15 MAD",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-stewed-chicken-with-chestnuts-onion-clay-bowl-wooden-table_140725-11485.jpg",
        },
      ]}
      title="Notre Menu"
      description="Explorez nos spécialités incontournables."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Solo",
          price: "50 MAD",
          subtitle: "Repas simple et rapide",
          features: [
            "Plat du jour",
            "Boisson incluse",
          ],
          buttons: [
            {
              text: "Commander",
            },
          ],
        },
        {
          id: "pro",
          badge: "Duo",
          price: "150 MAD",
          subtitle: "Pour un moment convivial",
          features: [
            "2 Plats",
            "Entrées",
            "Boissons",
          ],
          buttons: [
            {
              text: "Commander",
            },
          ],
        },
        {
          id: "family",
          badge: "Famille",
          price: "350 MAD",
          subtitle: "Le festin complet",
          features: [
            "Sélection de grillades",
            "Tagine au choix",
            "Desserts",
          ],
          buttons: [
            {
              text: "Commander",
            },
          ],
        },
      ]}
      title="Forfaits Groupes"
      description="Des solutions abordables pour vos événements et grandes tablées."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Clients satisfaits",
          value: "980+",
        },
        {
          id: "m2",
          title: "Années d'expérience",
          value: "10+",
        },
        {
          id: "m3",
          title: "Plats servis",
          value: "50k+",
        },
      ]}
      title="La Grillardière en chiffres"
      description="Une expérience validée par nos clients fidèles."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ahmed B.",
          date: "12/04/2024",
          title: "Excellent",
          quote: "Service rapide et qualité top, je recommande vivement.",
          tag: "Habitué",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-taking-photos_23-2149250046.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/moroccan-serving-mint-tea-traditional-way_268835-3983.jpg",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "2",
          name: "Fatima Z.",
          date: "10/04/2024",
          title: "Délicieux",
          quote: "Un tajine bien cuit et un prix très correct.",
          tag: "Visiteur",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-woman-doing-selfie-with-modern-phone-cafe_7502-7239.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-crab-sticks-eggs-corn-cucumber_114579-44487.jpg",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "3",
          name: "Youssef L.",
          date: "05/04/2024",
          title: "Très bon",
          quote: "Une jolie découverte pour le tajine de poissons.",
          tag: "Client",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-woman-paying-with-her-phone-via-contactless-payment-while-having-lunch-with-boyfriend-bar_637285-647.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-vegetables-market_23-2149050782.jpg",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "4",
          name: "Sarah K.",
          date: "02/04/2024",
          title: "Super",
          quote: "La qualité est toujours au rendez-vous.",
          tag: "Fidèle",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-women-eating-pizza-after-working_23-2148298076.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-fish-with-grilled-eggplants-bell-peppers-tomatoes_141793-735.jpg",
          imageAlt: "happy customer dining restaurant",
        },
        {
          id: "5",
          name: "Omar R.",
          date: "28/03/2024",
          title: "Parfait",
          quote: "Couscous magistral, une vraie tradition.",
          tag: "Local",
          avatarSrc: "http://img.b2bpic.net/free-photo/black-american-male-female-eating-vegan-food-restaurant_613910-7323.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-modern-living-room-illuminated-with-elegance-generated-by-ai_188544-18272.jpg",
          imageAlt: "happy customer dining restaurant",
        },
      ]}
      title="Ce que disent nos clients"
      description="Découvrez les avis de ceux qui nous font confiance."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact"
      title="Réservez votre table"
      description="Contactez-nous pour toute demande ou réservation."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="La Grillardière"
      columns={[
        {
          title: "Navigation",
          items: [
            {
              label: "Accueil",
              href: "#hero",
            },
            {
              label: "Menu",
              href: "#products",
            },
          ],
        },
        {
          title: "Informations",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Horaires",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
