import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    return (
        <div>
            <div class="card text-white bg-dark mb-3" style={{ "max-width": "18rem" }}>

                <div class="card-body">

                    <h5><i class="fas fa-folder-plus"></i> {cart.length}</h5>
                    <ul>
                        {
                            cart.map(data => <li>{data.Title}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cart;