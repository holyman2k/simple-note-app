import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
let Nav = ({account}) => {

    return (
        <nav class='navbar navbar-default'>
            <div class='container'>
                <div class='navbar-header'>
                    <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                        <span class='sr-only'>Toggle navigation</span>
                        <span class='icon-bar'></span>
                        <span class='icon-bar'></span>
                        <span class='icon-bar'></span>
                    </button>
                    <a class='navbar-brand' href='#'>Notes</a>
                </div>
                <div class='collapse navbar-collapse'>
                    <ul class='nav navbar-nav navbar-right'>
                        <li class='dropdown'>
                            <a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='false' aria-expanded='false'>
                                {account.name} <span class='caret'></span>
                            </a>
                            <ul class='dropdown-menu'>
                                <li><a href='/logout'>Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Nav = connect((store) => {
    return {
        account: store.notes.account || {},
    }
})(Nav);

export default Nav;