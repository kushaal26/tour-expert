import React, { useState, useEffect,useContext} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from '@material-ui/core/Tooltip';
import { Popover, Button } from 'antd';
import './Product.css';
import {UserContext} from '../../Main';
import { FeatureModal } from '../FeatureModal/FeatureModal';
// import { PopoverContent } from "../Popover"
import {Link} from "react-router-dom"

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);
export const Products = (props) => {
    let {filters} = props
    let productsData = props.products
    const userContext = useContext(UserContext)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalSelected, setModalSelected] = useState(null);
    
    
    // let cartUpdate = (product) => {
    //     console.log("product: ",product)
    //     userContext.dispatch({ "type": product.action, "value": product })
         
    // }

    let searchedData = (data, searchtext) => {
        let temp_data = [];
        console.log("searchtext: ",searchtext)
        for (let i = 0; i < data.length; i++) {
            console.log("title: ",data[i].title)
            if (data[i].title.toLowerCase().indexOf(searchtext.toLowerCase()) == 0) {
                temp_data.push(data[i])
                console.log("match")
            }
                
        }
        return temp_data
    }

    let checkProdFilter = (product) => {
        console.log("tags: "+product.tags)
        for (let i = 0; i < filters.length; i++) {
            console.log(filters[i])
            if (product.tags.indexOf(filters[i]) == -1)
                return false
        }
        return true
    }
    console.log("producsL",productsData)
    let filteredData = productsData ? (filters ? productsData.filter(checkProdFilter): productsData) : []
    console.log("filtered Data: ",filteredData)
    let search_text = userContext ? userContext.UserState.searchText : ""
    console.log("searchText: ",search_text)
    filteredData = (filteredData.length > 0 &&  search_text!= "") ? searchedData(filteredData,search_text) : filteredData
    console.log("search filtered: ", filteredData)
        // console.log("hello"+props.searchProduct);

        const showModal = (product) => {
            console.log("modal button clicked")
            setIsModalVisible(true);
            setModalSelected(product)
          };
        const showhovereffect = (product) =>{
            console.log("hower")
        }
          const handleOk = () => {
            setIsModalVisible(false);
          };
        
          const handleCancel = () => {
            setIsModalVisible(false);
          };
          
        return (
            <div className="allsolutionsclass">
                <p className="allsolutionheader"> </p>
                <GridList cellHeight={'auto'} spacing={4} className='gridList' cols={props.cols ? props.cols : 3}>
                    
                
                    {filteredData && filteredData.map((product) => (
                        
                        <GridListTile key={product.id} cols={1}>
                        
                        
                                {/* <Link to={"/product/" + product.id}><p>Learn More</p></Link>
                            </>} placement="right" title="Title" trigger="hover"> */}
                            
                            <Card className="card" style={{borderRadius:"10px"}}>
                            
                                <CardActionArea 
                        
                                >
                                  <Link to ={'/product/'+product.id}>
                                    <CardMedia
                                        component="img"
                                        image ={product.img}
                                        height='auto'
                                    />
                                    <CardContent className="cardContent">
                                        <p style={{color:"#20DCEB",font:"normal normal normal 0.9rem/1rem Segoe UI"}} className="description">
                                            {product.description}
                                        </p>
                                        
                                    </CardContent>

                               
                                {/* <CardActions> */}
                                <div className="midSection">
                                    <ul>
                                        {product.attributes.map((attr) => (
                                            <p className="attributes all" style={{marginBottom:'0px'}}>
                                                {attr}
                                            </p>
                                        ))}
                                    </ul>
                                    <div>
                                        <p className="price">{product.price}</p>
                                        <p className="priceDesc">{product.priceDesc}</p>
                                    </div>
      
                                </div>
                               
                                <button className={product.action === 'remove' ? 'removeButton' : 'addButton'}> Add
                                 {/* onClick={(event) => {
                                    cartUpdate(product)
                                    product.action = product.action == "remove" ? "Add" : "Remove"
                                     }} >{product.action} */}
                                </button>
                                </Link>
                                <div style={{textAlign:'center',marginRight:'8rem',marginTop:'-1rem'}}>
                                <Rating 
                                name="half-rating-read"
                                style={{color:'#ffb400'}}
                               value = {product.rating}
                               emptyIcon={<StarBorderIcon fontSize="inherit" style={{color:'#ffb400'}} />}
                               precision={0.1}
                               readOnly
                                            
                                         />
                                </div>
                                
                                {/* </CardActions> */}
                                </CardActionArea>
                              
                            </Card>
                           
                
                        </GridListTile>

                    ))}
                
                </GridList>
                <FeatureModal product={modalSelected} handleCancel={handleCancel} handleOk={ handleOk} isModalVisible={isModalVisible} />
            </div>
        );
    
}

