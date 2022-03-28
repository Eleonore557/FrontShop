import React, {useState} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';
import Fuse from 'fuse.js'


const ProductGrid = (props) => {

    const [query, setQuery] = useState('')

    const fuse = new Fuse(props.products, {
        keys : [
            'title',
            'price'
        ],
        includeScore: true
    })
      
    const results = fuse.search(query)
    const productsResult = query ? results.map(result => result.item) : props.products
      console.log(productsResult)

    function handleOnSearch({ currentTarget  = {} }) {
        const { value } = currentTarget;
        setQuery(value); 
    }  
    return (
        <>
            <div className={styles.shop__grid}>
                <div className={styles.search}>
                    <input type="text" name="searchBar" placeholder="Rechercher" className={styles.search_bar} value={query} onChange={handleOnSearch}></input>
                </div>
                {
                    productsResult.map((product) => (
                        <ProductCard product={product} key={product.id}/>
                    ) )
                }
            </div>

           
            
        </>
        
    );
}

export default ProductGrid;
