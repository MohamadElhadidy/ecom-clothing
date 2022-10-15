import { useParams } from "react-router-dom"
import {useState, useEffect } from "react"
import ProductCard from "../../components/product-card/product-card"
import './category.styles.scss'
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector.js'
const Category = () => {
     const { category } = useParams()
     const categoriesMap = useSelector(selectCategoriesMap)
     const [products, setProducts] = useState([])
     useEffect(() => {
          setProducts(categoriesMap[category])
     }, [category, categoriesMap])
     return <>
          <h2 className="category-title">{category.toUpperCase()}</h2>

          <div className="category-container">
               {
                    products && products.map(product => <ProductCard key={product.id} product={product} />)
               }</div>
     </>
}

export default Category