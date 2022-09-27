import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Button from '../../components/button/button.component'
import Category from '../category/category.component'
function Shop() {
  return (
    <div className='shop-container'>
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category />}/>
    </Routes>
    </div>
  )
}

export default Shop