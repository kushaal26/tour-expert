import React,{useReducer} from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import {CartItems} from "./components/CartItems"
import App from './App';
import { Academy } from './components/Academy';
import {ProductDisplay} from "./components/ProductDisplay"

export const UserContext = React.createContext()
export const initalState = {
  "cartItems": [],
  "searchText": "",
  "selectedTab": "online-presence"
}
const reducer = (state, action) => {
  console.log("action: ",action)
  switch (action.type) {
    case "add":
      return { ...state, cartItems: [...state.cartItems, action.value ]}
    case "remove":
      return { ...state, cartItems: state.cartItems.filter((product)=> product.id !=action.value.id ) }
    case 'reset-cart':
      return { ...state, cartItems: initalState.cartItems }
    case 'select-tab':
      return { ...state, selectedTab: action.value }
    case 'search-text':
      return { ...state, searchText: action.value }
    default:
      return initalState
  }
} 

const Main = () => {
    const [UserState, dispatch ] = useReducer(reducer, initalState)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{ "dispatch": dispatch, "UserState": UserState }}>
        <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/cart-items" component={CartItems}></Route>
            <Route exact path="/Academy" component={Academy}></Route>
            <Route path='/product/:id' component={ProductDisplay}></Route>
            {/* <Route exact path="/Marketplace" component={Mainscreen}></Route>
            <Route exact path="/Requirments" component={Requirments}></Route> */}
                </Switch>
                </UserContext.Provider>
        </BrowserRouter>
        );
}

export default Main;
