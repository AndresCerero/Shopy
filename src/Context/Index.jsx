//Hooks React
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Shopping Cart . Increment Quiantity
    // const [count, setCount] = useState(0)

    //Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const toggleProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)

    //Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})

    //Produt Detail . Add products to cart
    const [cardProducts, setCardProducts] = useState([])

    //Shopping Cart . Add products to cart
    const [order, setOrder] = useState([])

    //Check Out Side Menu Open Toggle
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
    const toggleCheckOutSideMenuOpen = () => setIsCheckOutSideMenuOpen(!isCheckOutSideMenuOpen)
    const toggleOpen = () => setIsCheckOutSideMenuOpen(true)

    //Get products
    const [items, setItems] = useState(null)

    //Api Call
    useEffect(() => {

        const API = 'https://api.escuelajs.co/api/v1/products';

        fetch(API)
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])


    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState('')


    //Category Filter 
    const [searchByCategory, setSearchByCategory] = useState('')

    //Product filter
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        const filterItems = () => {
          let filtered = items;
      
          if (searchByTitle) {
            const searchTitle = searchByTitle.toLowerCase();
            filtered = filtered.filter(
              (item) => item.title.toLowerCase().includes(searchTitle)
            );
          }
      
          if (searchByCategory) {
            const searchCategory = searchByCategory.toLowerCase();
            filtered = filtered.filter(
              (item) =>
                item.category.name.toLowerCase().includes(searchCategory)
            );
          }
          setFilteredItems(filtered);
        };

        filterItems();

      }, [items, searchByTitle, searchByCategory]);


    return (
        <ShoppingCartContext.Provider value={
            {
                // count,
                // setCount,
                isProductDetailOpen,
                toggleProductDetail,
                productToShow,
                setProductToShow,
                cardProducts,
                setCardProducts,
                isCheckOutSideMenuOpen,
                toggleCheckOutSideMenuOpen,
                toggleOpen,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory
            }
        }
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

