import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: {
        "Product": "Produkt",
        "Name": "Nazwa",
        "Price": "Cena",
        "Size": "Rozmiar",
        "Available": "Dostępny",
        "Save": "Zapisz",
        "Home": "Strona główna",
        "Small": "Mały",
        "Medium": "Średni",
        "Large": "Duży",
        "Category": "Kategoria",
        "Order": "Zamówienie",
      }
    },
    en: {
      translation: {
        "Product": "Product",
        "Name": "Name",
        "Price": "Price",
        "Size": "Size",
        "Available": "Available",
        "Save": "Save",
        "Home": "Home",
        "Small": "Small",
        "Medium": "Medium",
        "Large": "Large",
        "Category": "Category",
        "Order": "Order"
      }
    },
    es: {
      translation: {
        "Product": "Producto",
        "Name": "Nombre",
        "Price": "Precio",
        "Size": "Tamaño",
        "Available": "Disponible",
        "Save": "Guardar",
        "Home": "Inicio",
        "Small": "Pequeño",
        "Medium": "Mediano",
        "Large": "Grande",
        "Category": "Categoría",
        "Order": "Pedido"
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
