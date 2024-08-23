import React, { useReducer } from "react";
import './content.css';
import Product1 from './assets/apple.jpg';
import Product2 from './assets/avacado.jpg';
import Product3 from './assets/BlueBerry.jpg';
import Product4 from './assets/Orange.jpg';
import Product5 from './assets/Watermelon.jpg';

const initialProduct1 = { prod1: 0 };
const initialProduct2 = { prod2: 0 };
const initialProduct3 = { prod3: 0 };
const initialProduct4 = { prod4: 0 };
const initialProduct5 = { prod5: 0 };

function Calculator(state, action) {
    switch (action.category) {
        case '+': {
            return { ...state, [action.product]: state[action.product] + 1 };
        }
        case '-': {
            return { ...state, [action.product]: Math.max(0, state[action.product] - 1) };
        }
        default:
            return state;
    }
}

function Content() {
    const [state1, dispatch1] = useReducer(Calculator, initialProduct1);
    const [state2, dispatch2] = useReducer(Calculator, initialProduct2);
    const [state3, dispatch3] = useReducer(Calculator, initialProduct3);
    const [state4, dispatch4] = useReducer(Calculator, initialProduct4);
    const [state5, dispatch5] = useReducer(Calculator, initialProduct5);

    return (
        <div>
            <div className="r1">
                <h1>Your Cart</h1>
            </div>
            <div className="r2">
                <table className="cart">
                    <tr className="tr1">
                        <th className="tr1th1">Item</th>
                        <th className="tr1th2">Price</th>
                        <th className="tr1th3">Quantity</th>
                        <th className="tr1th4">Total</th>
                    </tr>
                    <tr className="tr2">
                        <td className="tr2td1">
                            <img src={Product1} id="product1" alt="Product1"></img>
                            <p id="pro1">Apple</p>
                        </td>
                        <td className="tr2td2">
                            <p>50</p>
                        </td>
                        <td className="tr2td3">
                            <button onClick={() => dispatch1({ category: '+', product: 'prod1' })}>+</button>
                            <p>{state1.prod1}</p>
                            <button onClick={() => dispatch1({ category: '-', product: 'prod1' })}>-</button>
                        </td>
                        <td className="tr2td4">
                            <p>{50 * state1.prod1}</p>
                        </td>
                    </tr>
                    <tr className="tr3">
                        <td className="tr3td1">
                            <img src={Product2} id="product2" alt="Product2"></img>
                            <p id="pro1">Avacado</p>
                        </td>
                        <td className="tr3td2">
                            <p>100</p>
                        </td>
                        <td className="tr3td3">
                            <button onClick={() => dispatch2({ category: '+', product: 'prod2' })}>+</button>
                            <p>{state2.prod2}</p>
                            <button onClick={() => dispatch2({ category: '-', product: 'prod2' })}>-</button>
                        </td>
                        <td className="tr3td4">
                            <p>{100 * state2.prod2}</p>
                        </td>
                    </tr>
                    <tr className="tr4">
                        <td className="tr4td1">
                            <img src={Product3} id="product3" alt="Product3"></img>
                            <p id="pro1">BlueBerry</p>
                        </td>
                        <td className="tr4td2">
                            <p>30</p>
                        </td>
                        <td className="tr4td3">
                            <button onClick={() => dispatch3({ category: '+', product: 'prod3' })}>+</button>
                            <p>{state3.prod3}</p>
                            <button onClick={() => dispatch3({ category: '-', product: 'prod3' })}>-</button>
                        </td>
                        <td className="tr4td4">
                            <p>{30 * state3.prod3}</p>
                        </td>
                        
                    </tr>
                    <tr className="tr5">
                        <td className="tr5td1">
                            <img src={Product4} id="product4" alt="Product4"></img>
                            <p id="pro1">Orange</p>
                        </td>
                        <td className="tr5td2">
                            <p>90</p>
                        </td>
                        <td className="tr5td3">
                            <button onClick={() => dispatch4({ category: '+', product: 'prod4' })}>+</button>
                            <p>{state4.prod4}</p>
                            <button onClick={() => dispatch4({ category: '-', product: 'prod4' })}>-</button>
                        </td>
                        <td className="tr5td4">
                            <p>{90 * state4.prod4}</p>
                        </td>
                    </tr>
                    <tr className="tr6">
                        <td className="tr6td1">
                            <img src={Product5} id="product5" alt="Product5"></img>
                            <p id="pro1">Watermelon</p>
                        </td>
                        <td className="tr6td2">
                            <p>170</p>
                        </td>
                        <td className="tr6td3">
                            <button onClick={() => dispatch5({ category: '+', product: 'prod5' })}>+</button>
                            <p>{state5.prod5}</p>
                            <button onClick={() => dispatch5({ category: '-', product: 'prod5' })}>-</button>
                        </td>
                        <td className="tr6td4">
                            <p>{170 * state5.prod5}</p>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="r7">
                <div className="r7r1">
                    <h4>Total Count: {state1.prod1+state2.prod2+state3.prod3+state4.prod4+state5.prod5}</h4>
                </div>
                <div className="r7r2">
                    <h4>Total Amount: {50 * state1.prod1 + 100 * state2.prod2 + 30 * state3.prod3 + 90 * state4.prod4 + 170 * state5.prod5}</h4>
                </div>
            </div>
        </div>
    );
}

export default Content;
