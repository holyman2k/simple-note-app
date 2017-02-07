import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar.jsx'
import { fetchAccount } from '../actions/notesAction'

class Layout extends React.Component {

    componentDidMount() {

        this.props.dispatch(fetchAccount());
    }

    render() {
        return (
            <div>
                <NavBar />
                <div class='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const LayoutContainer = connect()(Layout);

export default LayoutContainer