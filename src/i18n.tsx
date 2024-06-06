import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: {
        "product": "Produkt",
        "name": "Nazwa",
        "price": "Cena",
        "size": "Rozmiar",
        "available": "Dostępny",
        "save": "Zapisz",
        "home": "Strona główna",
        "small": "Mały",
        "medium": "Średni",
        "large": "Duży",
        "category": "Kategoria",
        "order": "Zamówienie",
      }
    },
    en: {
      translation: {
        "product": "Product",
        "name": "Name",
        "price": "Price",
        "size": "Size",
        "available": "Available",
        "save": "Save",
        "home": "Home",
        "small": "Small",
        "medium": "Medium",
        "large": "Large",
        "category": "Category",
        "order": "Order"
      }
    },
    es: {
      translation: {
        "product": "Producto",
        "name": "Nombre",
        "price": "Precio",
        "size": "Tamaño",
        "available": "Disponible",
        "save": "Guardar",
        "home": "Inicio",
        "small": "Pequeño",
        "medium": "Mediano",
        "large": "Grande",
        "category": "Categoría",
        "order": "Pedido"
    }
    }
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
