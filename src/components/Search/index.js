import React from 'react';
import styles from './styles.module.scss';

const clicking = () => {
    alert("꺼져");
}

const Search = (props) => (
    <div className={styles.search}>
        <form className={styles.form} id="sform" name="sform" action="" method="get">
            <fieldset>
                <span className={styles.green_window}>
                    <input className={styles.input_text} name="query" type="text" title="검색어 입력" maxLength="255" placeholder="통합검색"/>
                    <div className={styles.autoComplete}>

                    </div>
                    <button className={styles.sch_smit} id="search_btn" type="submit" title="검색" onClick={clicking}>
                        <img alt="#" src={require("../../images/btn_search.gif")} className={styles.ico_search_submit}></img>
                    </button>
                </span>
            </fieldset>

        </form>
    </div>
);

export default Search;