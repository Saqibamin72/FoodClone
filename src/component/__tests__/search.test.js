import { StaticRouter } from "react-router-dom/server"
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom"
import Body from "../Body";
import { RestaurantData } from "../mocks/data";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return promise.resolve(RestaurantData);

        }
    })
})
test("shimmer should load n homepage", ()=> {
     const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
 const shimmer=body.getByTestId("shimmer");
 expect (shimmer).toBeInDocument();
});


test("Restaurant should load on homepage", async ()=> {
    const body=render(
       <StaticRouter>
           <Provider store={store}>
               <Body/>
           </Provider>
       </StaticRouter>
   );
   
await waitFor(()=> expect(body.getByTestId("search-btn")))
const resList=body.getByTestId("resList");
expect (resList.children.length).toBe(20);
});