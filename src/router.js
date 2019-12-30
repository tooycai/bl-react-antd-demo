import React from 'react';
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Home from './pages/home';
import BasicTable from './pages/table/basic';
import MockTable from './pages/table/mock';
// import HighTable from './pages/table/high';

import NoMatch from "./pages/nomatch";
import Loadings from "./pages/ui/loadings";
import Notice from "./pages/ui/notification";
import Messages from "./pages/ui/messages";
import MyTabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousels";
import FormLogin from "./pages/form/login";
import FormRegister from "./pages/form/register";


export default class MyRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    {/*Table*/}
                                    <Route path="/table/basic" component={BasicTable}/>
                                    <Route path="/table/mock" component={MockTable}/>
                                    {/*<Route path="/table/high" component={HighTable}/>*/}
                                    {/*Form*/}
                                    <Route path="/form/reg" component={FormRegister}/>
                                    <Route path="/form/login" component={FormLogin}/>
                                    {/*UI*/}
                                    <Route path="/ui/carousels" component={Carousels}/>
                                    <Route path="/ui/gallery" component={Gallery}/>
                                    <Route path="/ui/tabs" component={MyTabs}/>
                                    <Route path="/ui/messages" component={Messages}/>
                                    <Route path="/ui/notification" component={Notice}/>
                                    <Route path="/ui/loadings" component={Loadings}/>
                                    <Route path="/ui/buttons" component={Buttons}/>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/" component={Home} exact={true}/>
                                    <Route component={NoMatch}/>
                                    {/*<Route path="/" component={Home}/>*/}
                                </Switch>
                            </Admin>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}