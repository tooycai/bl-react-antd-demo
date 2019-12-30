import React from 'react';
import {HashRouter as Router ,Route,Link , Switch} from 'react-router-dom';
import Topics from "../route1/topics";
import About from "../route1/about";
import Main from "../route1/main";
import Home from "./home";
import Info from "./info";
import NoMatch from "./nomatch";

export default class IRoute extends React.Component {

    render(){
        return (
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                    <li><Link to="/info/456">dynamic router</Link></li>
                    <li><Link to="/match">other</Link></li>
                </ul>

                <Switch>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route exact={true} path="/about" component={About}></Route>
                    <Route exact={true} path="/topics" component={Topics}></Route>
                    <Route exact={true} path="/info/:value" component={Info}></Route>
                    <Route component={NoMatch}></Route>
                </Switch>

                <hr/>

                <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route exact={true} path="/about" component={About}></Route>
                    <Route exact={true} path="/topics" component={Topics}></Route>
                    <Route exact={true} path="/info/:value" component={Info}></Route>
                    <Route component={NoMatch}></Route>
                </Home>


            </Router>
        );
    }
}