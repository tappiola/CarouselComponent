import {Carousel} from './Carousel';
import React from "react";
import clsx from 'clsx';
import classes from './App.css';

const App = () => {
    return (
        <div className={classes.app}>
            <Carousel width="490px" height="100%" infinite={false} autoplay={false}>
                <Carousel.Item>
                    <img
                        className={classes.carouselImg}
                        src="https://images.squarespace-cdn.com/content/v1/55e6b929e4b07156fbd55a20/1503768804980-2GED59A3BO51ZI7W52N6/ke17ZwdGBToddI8pDm48kICeBkGQy753cz3Gsj7QjEp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jRb3i7UjwNNySrgFE_nWatJxnajsfk-AV2dl8dPihLT_iJmbOBHOcjpcB0uTSMH1A/Riikka+Kantinkoski+1.jpg?format=350w"
                        alt="Product1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.carouselImg}
                        src="https://images.squarespace-cdn.com/content/v1/55e6b929e4b07156fbd55a20/1462105140602-4JFM2WT8WLCZCUOBLZ5X/ke17ZwdGBToddI8pDm48kAIqhHhyzwAkcD9nGc_7AeR7gQa3H78H3Y0txjaiv_0foK0_pu8zR-rUACGbiQ0qjI8P4ND6591eyixB1seuwXb95O_BdSBj0epFksuJTcC3ZGjoBKy3azqku80C789l0rQeu_A0VlcGJEiWdfSJ_zUc6vngBtKnnVPQPATSmLXh6JyR5TPFnrzC0yX3ZaU4qA/MK_S%C3%84IL%C3%96NT%C3%84+2016+6.jpg?format=350w"
                        alt="Product2"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.carouselImg}
                        src="https://images.squarespace-cdn.com/content/v1/55e6b929e4b07156fbd55a20/1462104206254-3JWVJIKAJ43KY5VNLK3K/ke17ZwdGBToddI8pDm48kD7MXL0MGxeMExHRW3RZOah7gQa3H78H3Y0txjaiv_0fylIs6t39aXnuxGl3mUYocLNVB1TC0aTx3_rbljJ3eoBkaOgErLdrOqS7zQLvz2XSjw4y9jm25X_CplAKqpK2frdZtuScNYgajNicjcJXBh8ozDGVWjnQqNcd_XBucSBW/Maku_kaudenkasvis+munakoiso+1_preview.jpg?format=350w"
                        alt="Product3"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.carouselImg}
                        src="https://images.squarespace-cdn.com/content/v1/55e6b929e4b07156fbd55a20/1443075593745-W07AM38GXYY1PTGTM4GR/ke17ZwdGBToddI8pDm48kOWf8R63Ms9v_LH1fvFGo7p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mje5KF-1I_-lQufF4ZRUfcj9V22XavSmk07uT25FjOl8g/KES%C3%84_yrtti+fiilis.jpg?format=350w"
                        alt="Product4"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.carouselImg}
                        src="https://images.squarespace-cdn.com/content/v1/55e6b929e4b07156fbd55a20/1442654967233-KZ9PO4NXRZ249IH36PVL/ke17ZwdGBToddI8pDm48kG5ygVLf9Sst_4dkE0IpEpkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2j3m2wIdQyB_YWFAX8ffvfrhneSnbbZxrO9oZ_sJ4Up5kOpdljO7Z-5qh0zg85Jnj/image-asset.jpeg?format=350w"
                        alt="Product5"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.carouselImg}
                        src="https://images.squarespace-cdn.com/content/v1/55e6b929e4b07156fbd55a20/1462103726174-BYR3XRDFI6EEQZ422DJ1/ke17ZwdGBToddI8pDm48kD7MXL0MGxeMExHRW3RZOah7gQa3H78H3Y0txjaiv_0fbtzP5PeX6kTH7ZxcLi-aMNqYdKxYyTpTX9WKW5vOfavx5I5ic132wIHzGMCjyroGi7D7yXkH8nfwsxTs5kW9h4lTk2cSUTnbMaQI-K6ml5dkr5Wh-15Yp9cceqErjOwy/Maku_kaudenkasvis+munakoiso+4_preview.jpg?format=350w"
                        alt="Product6"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.carouselImg}
                        src="https://images.squarespace-cdn.com/content/v1/55e6b929e4b07156fbd55a20/1442679659473-FL0QHGFCDCIXSI81WX9X/ke17ZwdGBToddI8pDm48kOWf8R63Ms9v_LH1fvFGo7p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mje5KF-1I_-lQufF4ZRUfcj9V22XavSmk07uT25FjOl8g/SYKSY_Marja-Leenan+kaneli-sokeripullat.jpg?format=350w"
                        alt="Product7"
                    />
                </Carousel.Item>
            </Carousel>

            <Carousel width="600px" height="50%" infinite={true} autoplay={false}>
                <Carousel.Item>
                    <div
                        className={clsx(classes.carouselBackground, classes.center)}
                        style={{
                            backgroundImage: 'url(https://23nk6014fmlzgm2pd2k35hws-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/SKOG_FragrancePage_Header_Test-1920x960.jpg)',
                            color: "#d7d7d7",
                        }}>
                        <h1>ScandiTravel</h1>
                        <h4>Explore the untouched nature</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className={clsx(classes.carouselBackground, classes.topRight)}
                        style={{
                            backgroundImage: 'url(https://23nk6014fmlzgm2pd2k35hws-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/OY_FragrancePage_Header_Test-1920x1200.jpg)',
                            color: "#4e4e4e",
                        }}
                    >
                        <h1 style={{marginRight: '30px'}}>Studying the abstract</h1>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className={clsx(classes.carouselBackground, classes.center)}
                        style={{
                            backgroundImage: 'url(https://23nk6014fmlzgm2pd2k35hws-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/scentcreation-768x768.jpg)',
                            backgroundPosition: '0 80%',
                            color: "#d7d7d7",
                        }}
                    >
                        <h2>Closer to your roots</h2>
                        <h4>Further from COVID-19</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={clsx(classes.carouselBackground, classes.center, classes.diagonalStripe)}>
                        <div className={classes.motivationText}><p>Your holiday,</p><p>your way</p></div>
                    <button className={classes.contactButton}>Contact Us</button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default App;
