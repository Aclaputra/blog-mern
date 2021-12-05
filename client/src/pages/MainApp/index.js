import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../Home'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import { Footer, Header } from '../../components'
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className='main-app-wrapper'>
            <Header/>   
            <div className='content-wrapper'>
                <Router>
                    <Switch>
                        <Route exact path="/create-blog" component={CreateBlog}/>
                        <Route exact path="/detail-blog" component={DetailBlog}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </div>
            <Footer/>
        </div>
    )
}

export default MainApp
