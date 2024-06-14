import React from 'react'

function Home() {
    return (
        <div className='App'>
            <div className='add-to-cart'>
                <img src='https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg' />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.pngitem.com/pimgs/m/525-5259250_apple-ios-13-iphone-hd-png-download-apple.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home