require('jquery');
require('bootstrap');
require('./css/style.css');
require('./css/bootstrap.theme.min.css')

import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

render(<App />, document.getElementById('app'));

// enable multiple modal on the same page
$(document).on('hidden.bs.modal', '.modal', function () {
    $('.modal:visible').length && $(document.body).addClass('modal-open');
});

$(document).on('show.bs.modal', '.modal', function () {
    var zIndex = 1040 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);
});