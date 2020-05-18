import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './widgets/components/home/home';
import Layout from './widgets/components/layout/layout';
import Bolths from './widgets/components/bolths/bolths';

class Routes extends Component{
    render(){
        return(
            <Layout>
                <Switch>
                <Route path="/home" exact component={Home}/>
                <Route path="/bolths" exact component={Bolths}/>
                <Route path="/" exact component={Home}/>
                <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>
            
        )
    }
}

export default Routes;