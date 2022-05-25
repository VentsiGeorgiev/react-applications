import { Link } from "react-router-dom"
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div>
      <header>
        <p>Explore</p>
      </header>

      <main>
        <p>Categories</p>
        <div className="exploreCategory">
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImage"
            />
            <p>Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImage"
            />
            <p>Places for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
export default Explore