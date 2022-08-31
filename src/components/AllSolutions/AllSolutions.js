import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Product.css';
import Carousel from 'react-material-ui-carousel';
// import productData from './data/productData';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import data from "./RecommendedProductsData.json"
import { FeatureModal } from '../FeatureModal/FeatureModal';
import {Link} from "react-router-dom";



const useStyles = makeStyles(theme => ({
    recheader: {
        position: "relative",
        top: "0.5rem",
        left: "1rem",
        textAlign: "center",
        font: "normal normal bold 1rem / 1.3rem Segoe UI",
        color: "#20DCEB",

    }
}));

class LeftNavButton extends React.Component {
    render() {
        return <IconButton
            style={{ position: "absolute", left: "2.5rem", top: "20%" }}
            {...this.props}>
            <NavigateBeforeIcon style={{ color: "#8DA2C1" }} />
        </IconButton>
    }
}

class RightNavButton extends React.Component {
    render() {
        return <IconButton
            style={{ position: "absolute", right: "0.8rem", top: "20%" }}
            {...this.props}>
            <NavigateNextIcon style={{ color: "#20DCEB" }} />
        </IconButton>
    }
}

const recproductsData = data.recommendedproductsData

export const AllSolutions = () => {
    const classes = useStyles();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalSelected, setModalSelected] = useState(null);
    const showModal = (product) => {
        console.log("modal button clicked")
        setIsModalVisible(true);
        setModalSelected(product)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div style={{
            position: "relative",
            // backgroundImage: "linear-gradient(to right,rgba(42,48,57,1), rgba(32,220,235,1), rgba(42,48,57,0))",
            overflowX: "hidden"

        }}>
            <div style={{
                position: "relative", width: "100%",
                backgroundColor: "#1A1C1F",
            }}>
                <p className={classes.recheader} style={{ paddingBottom: '2px',fontSize:'25px',paddingTop:'5px' }}>Recommended Places For You</p>
                <Carousel
                    arrows={true}
                    showSides={true}
                    sidesOpacity={.0}
                    sideSize={.2}
                    slidesToScroll={1}
                    slidesToShow={4}
                    prevArrow={<LeftNavButton />}
                    nextArrow={<RightNavButton />}
                    autoPlay
                >
                    {recproductsData.map((product) => (
                        <Card className="card">
                            <CardActionArea>
                            <Link to ={'/product/'+product.id}>
                                <CardMedia
                                    component="img"

                                    height='50%'
                                    image={product.img}

                                />
                                </Link>
                            </CardActionArea>
                            {/* <CardActions> */}


                            {/* <button className='addButton' style={{marginTop:"2rem"}} onClick={() => showModal(product)}>{product.action}</button> */}
                            {/* </CardActions> */}
                        </Card>
                    ))}
                </Carousel>
            </div>
            <FeatureModal product={modalSelected} handleCancel={handleCancel} handleOk={handleOk} isModalVisible={isModalVisible} />
        </div>
    );
}


AllSolutions.propTypes = {
    classes: PropTypes.object.isRequired,
};


