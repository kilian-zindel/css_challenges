import styles from './expandingSearchBar.module.css'
// import { useState } from 'react';

/*
    default value "Search..." disappears on click 
    expands to fit entire page on click 

*/

const ExpandingSearchBar = () => {

    // const [placeholderText, setPlaceholderText] = useState("Search...");

    return (
        <div className={styles.container}>
            <label className={styles.srOnly}
                htmlFor="search-field">Search</label>
            <input className={styles.search} 
                type="text" 
                id="searchBox"
                name="search-field" 
                placeholder="Search..."
                // placeholder={placeholderText}
                // onFocus={() => {setPlaceholderText("")}}
                // onBlur={() => {setPlaceholderText("Search...")}}
                >
            </input>
        </div>
    )
}

export default ExpandingSearchBar;