import React from 'react';

const clicking = () => {
    alert("꺼져");
}

const Search = (props) => (
    <div class="search">
        <form id="sform" name="sform" action="" method="get">
            <fieldset>
                <span class="green_window">
                    <input class="input_text" name="query" type="text" title="검색어 입력" maxLength="255"/>
                    <div class="autocomplete">

                    </div>
                    <button class="sch_smit" id="search_btn" type="submit" title="검색" onClick={clicking}>
                        <span class="ico_search_submit" style={{backgroundColor:"orange"}}>검색</span>
                    </button>
                </span>
            </fieldset>

        </form>
    </div>
);

export default Search;