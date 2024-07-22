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
    const logo=header.getAllByTestId("logo");
    console.log(logo);
    expect (logo[0].src).toBe("https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj");
})