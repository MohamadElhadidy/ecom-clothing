import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import {useEffect } from "react";
import { fetchCategoriesAsync } from '../../store/categories/categories.action';
import { useDispatch } from 'react-redux';

function Shop() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoriesAsync())
  }, [dispatch])
  return (
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category />}/>
    </Routes>
  )
}

export default Shop