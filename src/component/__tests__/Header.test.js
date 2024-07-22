import Header from "../Header"
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import {StaticRouter} from "react-router-dom/server"

test("logo should load on rendering header", ()=>{

    const header=render( 
        <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
        )
    console.log(header);
})