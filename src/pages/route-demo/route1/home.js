import React from 'react';
import {HashRouter , Route , Link , Switch} from 'react-router-dom';
import Main from './main';
import About from './about';
import Topics from './topics';



export default class Home extends React.Component{

    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr/>

                    {/* exact:{true}  精确匹配 */}
                    {/*<Route exact={true} path="/" component={Main}></Route>*/}

                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route exact={true} path="/about" component={About}></Route>
                        <Route exact={true} path="/topics" component={Topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );

    }
}