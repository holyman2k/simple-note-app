import React from 'react'

const defaultFunc = () => { };

let SearchAndAdd = ({searchText = '', onSearch, onAdd}) => {

    let searchBox;

    const _onTextChange = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchBox.value);
        }
    };

    const _onSearch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onSearch(searchBox.value);
    };

    return (
        <div class='row search-bar'>
            <div class='col-sm-8'>
                <div class='input-group'>
                    <input type='text' class='form-control' placeholder='' ref={(node) => searchBox = node}
                        defaultValue={searchText} onKeyPress={_onTextChange} />
                    <div class='input-group-btn'>
                        <button type='button' class='btn btn-default' onClick={_onSearch}>
                            <span class='glyphicon glyphicon-search'></span>
                        </button>
                    </div>
                </div>
            </div>
            <div class='col-sm-4 text-right'>
                <button class='btn btn-default' onClick={onAdd}>
                    <span class='glyphicon glyphicon-plus'></span> Add
                </button>
            </div>
        </div>
    )
}

SearchAndAdd.propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired,
    searchText: React.PropTypes.string,
}

export default SearchAndAdd;