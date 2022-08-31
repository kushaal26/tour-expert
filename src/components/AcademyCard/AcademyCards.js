import React, { useState, useEffect,useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import './Product.css';
import {UserContext} from '../../Main';
import  {FeatureModal} from '../FeatureModal/FeatureModal';
import {Video} from "../Video";


export const AcademyCards = (props) => {
    let {filters} = props
    let productsData = props.products
    const userContext = useContext(UserContext)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalSelected, setModalSelected] = useState(null);
    
    
    let cartUpdate = (product) => {
        console.log("product: ",product)
        userContext.dispatch({ "type": product.action, "value": product })
         
    }

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
        
          const handleOk = () => {
            setIsModalVisible(false);
          };
        
          const handleCancel = () => {
            setIsModalVisible(false);
          };
        return (
            <div className="allsolutionsclass" style={{backgroundColor:'#000000',paddingLeft:'10px'}}>
                
                <GridList cellHeight={'auto'} spacing={4} className='gridList' cols={props.cols ? props.cols : 3}>
                    
                
                    {filteredData && filteredData.map((product) => (
                        
                        <GridListTile key={product.id} cols={1} style={{marginLeft:'0px',marginTop:'0px',marginBottom:'0px'}}>
                            
                                <Video url={product.url}></Video>
                                    <CardContent className="cardContent">
                                        <p className="title" style={{color:'#20dceb',fontWeight:'bold',marginTop:'-10px'}}>
                                            {product.title}
                                        </p>
                                    </CardContent>
                            
                        </GridListTile>

                    ))}
                
                </GridList>
               
            </div>
        );
    
}

