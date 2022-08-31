import React, { useContext, useEffect } from "react"
import AllsolutionData from "../ContentScreen/AllsolutionData"
import { UserContext } from '../../Main';
import { Header } from '../Header';
import { Video } from '../Video';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box, ClickAwayListener } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Products } from "../Products";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SyncDisabled } from "@material-ui/icons";
import { Link } from "react-router-dom";




const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    arrow: {
        color: '#000000',
        backgroundColor: '#000000',
    },
    tooltip: {
        backgroundColor: '#000000',
    },
});
function BootstrapTooltip(props) {
    const classes = useStyles();

    return <Tooltip arrow classes={classes} {...props} />;
}




export const ProductDisplay = (props) => {

    const [open, setOpen] = React.useState(false);
    const [inCart, setInCart] = React.useState(false);
    const [product, setProduct] = React.useState(null);

    const handleTooltipClose = () => {
        setOpen(false);
    };



    const handleTooltipOpen = () => {
        setOpen(true);
    };

    
    const classes = useStyles();
    const { match } = props
    const userContext = useContext(UserContext)
    let cart_products = userContext ? userContext.UserState.cartItems : [];
    let cartUpdate = (product, pricing) => {
        console.log("product: ", product)

        let action = product.selectedPricing == pricing ? "remove" : "add"
        console.log("action: ", action)
        let t_product = { ...product }
        if (action == "add")
            t_product["selectedPricing"] = pricing
        userContext.dispatch({ "type": action, "value": t_product })
    }

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let productId = match ? match.params.id : null
        let t_product = productId ? (inCart ? cart_products.filter((product) => product.id == productId)[0] : AllsolutionData.filter((product) => product.id == productId)[0]) : null
        setProduct(t_product)
        console.log("prd: ", JSON.stringify(product))
    },[])

    
    useEffect(() => {
        let productId = match ? match.params.id : null
        let presence = cart_products.filter((product) => product.id == productId).length > 0;
        if (presence != inCart) {
            setInCart(presence)
            
            let t_product = productId ? (presence ? cart_products.filter((product) => product.id == productId)[0] : AllsolutionData.filter((product) => product.id == productId)[0]) : null
            setProduct(t_product)
        }
        console.log("presence: ", presence)
        console.log("cart items: ",cart_products)
    }, [cart_products]);
    
    return (
        <>

            <Header></Header>
            {product && <>
                <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', }}>
                    <h1 style={{ color: '#20DCEB', paddingTop: '1rem', textAlign: 'center' }}>{product.title}</h1>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <div style={{ marginLeft: '10px', paddingLeft: '.5rem' }}>
                                {product.doubleflag==1? (
                                    <>
                                   <h3 style={{ color: '#20DCEB', paddingTop: '1rem' }}>Promote your business online and grow your business in 3 easy steps:</h3> 
                                   <ul>
                                       <li style={{color:'#20DCEB'}}>Create Your Ad</li>
                                       <p style={{color:'white',marginBottom:'0rem'}}> Pick your business goal and priview your ad</p>
                                       <li style={{color:'#20DCEB'}}>Set Your Budget</li>
                                       <p style={{color:'white',marginBottom:'0rem'}}>Decide how much you want to allocate for your campaign</p>
                                       <li style={{color:'#20DCEB'}}>Get Leads Directly To Your Phone</li>
                                       <p style={{color:'white',marginBottom:'0rem'}}>Your ad goes live, you'll receive Leads directly to your phone</p>
                                   </ul>
                                   <hr style={{ backgroundColor: '#20DCEB' }}></hr>
                                   <h3 style={{ color: '#20DCEB', paddingTop: '1rem' }}>Automate Your Advertising at Scale & Extended Your Reach</h3> 
                                   <p style={{color:'white',marginBottom:'0rem'}}> Our AI algorithms will create the most appealing ads and  </p>
                                   <p style={{color:'white',marginBottom:'0rem'}}> find the best channels to maximize your budget: social   </p>
                                   <p style={{color:'white',marginBottom:'0rem'}}> networks, search engines or leading publishers' sites   </p>
                                   <Grid container spacing={1}>
                                    <ClickAwayListener onClickAway={handleTooltipClose}>
                                        <Grid item xs={4}>

                                            <BootstrapTooltip
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose}
                                                open={open}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title=
                                                {
                                                    <card >
                                                        <CardActionArea >
                                                            <CardContent >
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    <Grid container spacing={1}>
                                                                        <Grid item xs={6}>
                                                                            <Rating name="read-only" style={{ color: '#ffb400' }}
                                                                                value={product.rating}
                                                                                readOnly
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={6}>
                                                                            <p style={{ color: '#20DCEB', marginBottom: '0rem', fontSize: '16px', padding: '0rem' }}>
                                                                                Rating {product.rating} out of 5
                                                                 </p>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <p style={{ color: 'white', fontSize: '12px', marginBottom: '0rem' }}>{product.noofrating} Global ratings</p>
                                                                    <hr style={{ backgroundColor: '#20DCEB', marginBottom: '0rem' }}></hr>
                                                                </Typography>
                                                                <Typography variant="body2" color="#ffffff" component="p">
                                                                    <p style={{ marginBottom: '0rem', fontSize: '20px', fontFamily: 'bold' }}>1. Alaster Cook rating</p>
                                                                    <Grid container spacing={1}>
                                                                        <Grid item xs={6}>
                                                                        <Rating 
                                                                          name="half-rating-read"
                                                                           style={{color:'#ffb400'}}
                                                                          value = {product.user1rating}
                                                                          emptyIcon={<StarBorderIcon fontSize="inherit" style={{color:'#ffb400'}} />}
                                                                             precision={0.1}
                                                                             readOnly
                                                                               />
                                                                        </Grid>
                                                                        <Grid item xs={6}>
                                                                            <p style={{ color: '#20DCEB', marginBottom: '0rem', fontSize: '16px' }}>
                                                                                Rating {product.user1rating} out of 5
                                                                       </p>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <h4 style={{ color: 'white' }}>
                                                                        Great product reduces the time of scheduling business calls and helps in online advertisment of products.Pricing is a bit high for small enterprises.
                                                           </h4>
                                                                    <Link>
                                                                        <p style={{ marginBottom: '0rem', color: '#20DCEB' }}>see all customer reviews</p>
                                                                    </Link>
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </card>
                                                }
                                                placement="bottom" >
                                                <Button onClick={handleTooltipOpen}>
                                                    <Rating name="read-only" style={{ color: '#ffb400', marginTop: '1rem', marginLeft: '2rem' }}
                                                        value={product.rating}
                                                        readOnly
                                                    />
                                                </Button>
                                            </BootstrapTooltip>


                                        </Grid>
                                    </ClickAwayListener>
                                    <Grid item xs={8}>
                                        <h3 style={{ color: '#FFFFFF', marginTop: '1rem' }}>
                                            Powered by :

                                            <img src={process.env.PUBLIC_URL + "/images/" + product.logo} width="auto" style={{ marginLeft: '1rem' }} />
                                        </h3>
                                    </Grid>
                                   
                                </Grid>


                                    </>
                                ) : (
                                    <>
                                
                                {product.LeftPane1.map((section) => (
                                    <>
                                        <h3 style={{ color: '#20DCEB', paddingTop: '1rem' }}>{section.title}</h3>
                                        {
                                            section.paragraphs.map((paragraph) => <p style={{ color: 'white', marginBottom: '0px' }}> {paragraph}</p>)
                                        }
                                        
                                    </>
                                ))}
                               {product.flag == 1 ? (
        <>  
                                <hr style={{ backgroundColor: '#20DCEB' }}></hr>
                                {product.LeftPane2.map((section) => (
                                    <>
                                        <h3 style={{ color: '#20DCEB', paddingTop: '1rem' }}>{section.title}</h3>
                                        {
                                            section.paragraphs.map((paragraph) => <p style={{ color: 'white', marginBottom: '0px' }}> {paragraph}</p>)
                                        }
                                        <hr style={{ backgroundColor: '#20DCEB' }}></hr>
                                    </>
                                ))}
                                {product.LeftPane3.map((section) => (
                                    <>
                                        <h3 style={{ color: '#20DCEB', paddingTop: '1rem' }}>{section.title}</h3>
                                        {
                                            section.paragraphs.map((paragraph) => <p style={{ color: 'white', marginBottom: '0px' }}> {paragraph}</p>)
                                        }
                                        <hr style={{ backgroundColor: '#20DCEB' }}></hr>
                                    </>
                                ))}
                                <Grid container spacing={1}>
                                    <ClickAwayListener onClickAway={handleTooltipClose}>
                                        <Grid item xs={4}>

                                            <BootstrapTooltip
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose}
                                                open={open}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title=
                                                {
                                                    <card >
                                                        <CardActionArea >
                                                            <CardContent >
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    <Grid container spacing={1}>
                                                                        <Grid item xs={6}>
                                                                        <Rating 
                                                                            name="half-rating-read"
                                                                            style={{color:'#ffb400'}}
                                                                           value = {product.rating}
                                                                          emptyIcon={<StarBorderIcon fontSize="inherit" style={{color:'#ffb400'}} />}
                                                                          precision={0.1}
                                                                         readOnly
                                            
                                         />
                                                                        </Grid>
                                                                        <Grid item xs={6}>
                                                                            <p style={{ color: '#20DCEB', marginBottom: '0rem', fontSize: '16px', padding: '0rem' }}>
                                                                                Rating {product.rating} out of 5
                                                                 </p>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <p style={{ color: 'white', fontSize: '12px', marginBottom: '0rem' }}>{product.noofrating} Global ratings</p>
                                                                    <hr style={{ backgroundColor: '#20DCEB', marginBottom: '0rem' }}></hr>
                                                                </Typography>
                                                                <Typography variant="body2" color="#ffffff" component="p">
                                                                    <p style={{ marginBottom: '0rem', fontSize: '20px', fontFamily: 'bold' }}>1. Alaster Cook rating</p>
                                                                    <Grid container spacing={1}>
                                                                        <Grid item xs={6}>
                                                                        <Rating 
                                                                          name="half-rating-read"
                                                                           style={{color:'#ffb400'}}
                                                                          value = {product.user1rating}
                                                                          emptyIcon={<StarBorderIcon fontSize="inherit" style={{color:'#ffb400'}} />}
                                                                             precision={0.1}
                                                                             readOnly
                                                                               />
                                                                        </Grid>
                                                                        <Grid item xs={6}>
                                                                            <p style={{ color: '#20DCEB', marginBottom: '0rem', fontSize: '16px' }}>
                                                                                Rating {product.user1rating} out of 5
                                                                       </p>
                                                                        </Grid>
                                                                    </Grid>
                                                                    <h4 style={{ color: 'white' }}>
                                                                        Great product reduces the time of scheduling business calls and helps in online advertisment of products.Pricing is a bit high for small enterprises.
                                                           </h4>
                                                                    <Link>
                                                                        <p style={{ marginBottom: '0rem', color: '#20DCEB' }}>see all customer reviews</p>
                                                                    </Link>
                                                                </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </card>
                                                }
                                                placement="bottom" >
                                                <Button onClick={handleTooltipOpen}>
                                                <Rating 
                                                                          name="half-rating-read"
                                                                           style={{color:'#ffb400'}}
                                                                          value = {product.rating}
                                                                          emptyIcon={<StarBorderIcon fontSize="inherit" style={{color:'#ffb400'}} />}
                                                                             precision={0.1}
                                                                             readOnly
                                                                               />
                                                </Button>
                                            </BootstrapTooltip>


                                        </Grid>
                                    </ClickAwayListener>
                                    {product.id == 16? (
                                    <>
                                    
                                    </>
                                    ):(
                                        <>
                                          <Grid item xs={8}>
                                        <h3 style={{ color: '#FFFFFF', marginTop: '1rem' }}>
                                            Powered by :

                                            <img src={process.env.PUBLIC_URL + "/images/" + product.logo} width="auto" style={{ marginLeft: '1rem' }} />
                                        </h3>
                                    </Grid>
                                        </>
                                    )}
                                  
                                </Grid>
                                </>
                              ) :(
                                  <>
                                  </>
                              )
}
</>
                                )
                                    }
                            </div>
                             
                        </Grid>
                        <Grid item xs={6}>
                        {product.flag == 1 ? (
        <>  
                            <div style={{ marginLeft: '3rem' }}>
                                <h2 style={{ color: '#20DCEB', textAlign: "center" }}>Watch a demo</h2>
                                <Video url={product.url} width={'35rem'} height={'20rem'}></Video>

                            </div>
                            <div>
                                <h3 style={{ color: '#20DCEB', textAlign: 'center', marginTop: '1rem' }}>Pricing options</h3>

                                <div>
            
                                    {product.pricings1.map((section) =>
                                        <Grid container spacing={1} style={{}}>
                                            <Box style={{ width: '100%', height: '100%', marginRight: '10px', marginBottom: '10px' }}>
                                                <Grid item xs={12} style={{ paddingLeft: '2rem' }}>
                                                    <h3 style={{ color: '#20DCEB' }}>{section.prevalue} {section.value} {section.postvalue}</h3>
                                                    {section.content.map((paragraph) => <p style={{ color: 'white', marginBottom: '0px' }}> {paragraph}</p>)}
                                                </Grid>

                                                <button style={{ width: '6rem' }} className={product.selectedPricing == "pricings1" ? "removeButton" : "addButton"} hidden={product.selectedPricing != null && product.selectedPricing != "pricings1"} onClick={(event) => {
                                                    cartUpdate(product, "pricings1")
                                                }} >{product.selectedPricing == "pricings1" ? "Remove" : (product.selectedPricing == null ? "Add" : "Add")}
                                                </button>
                                            </Box>

                                        </Grid>
                                    )
                                    }
                                    <hr style={{ backgroundColor: '#20DCEB' }}></hr>
                                    {product.pricings2.map((section) =>
                                        <Grid container spacing={1} style={{}}>
                                            <Box style={{ width: '100%', height: '100%', marginRight: '10px', marginBottom: '10px' }}>
                                                <Grid item xs={12} style={{ paddingLeft: '2rem' }}>
                                                    <h3 style={{ color: '#20DCEB' }}>{section.prevalue} {section.value} {section.postvalue}</h3>
                                                    {section.content.map((paragraph) => <p style={{ color: 'white', marginBottom: '0px' }}> {paragraph}</p>)}
                                                </Grid>

                                                <button style={{ width: '6rem' }} className={product.selectedPricing == "pricings1" ? "removeButton" : "addButton"} hidden={product.selectedPricing != null && product.selectedPricing != "pricings2"} onClick={(event) => {
                                                    // product.selectedPricing = product.selectedPricing == "pricings2" ? null : "pricings2"
                                                    cartUpdate(product,"pricings2")
                                                }} >{product.selectedPricing == "pricings2" ? "Remove" : (product.selectedPricing == null ? "Add" : "Add")}
                                                </button>
                                            </Box>
                                        </Grid>
                                    )
                                    }
                                    <hr style={{ backgroundColor: '#20DCEB' }}></hr>
                                    {product.pricings3.map((section) =>
                                        <Grid container spacing={1} style={{}}>
                                            <Box style={{ width: '100%', height: '100%', marginRight: '10px', marginBottom: '30px' }}>
                                                <Grid item xs={12} style={{ paddingLeft: '2rem' }}>
                                                    <h3 style={{ color: '#20DCEB' }}>{section.prevalue} {section.value} {section.postvalue}</h3>
                                                    {section.content.map((paragraph) => <p style={{ color: 'white', marginBottom: '0px' }}> {paragraph}</p>)}
                                                </Grid>

                                                <button style={{ width: '6rem' }} className={product.selectedPricing == "pricings1" ? "removeButton" : "addButton"} hidden={product.selectedPricing != null && product.selectedPricing != "pricings3"} onClick={(event) => {
                                                    // product.selectedPricing = product.selectedPricing == "pricings3" ? null : "pricings3"
                                                    cartUpdate(product,"pricings3")
                                                }} >{product.selectedPricing == "pricings3" ? "Remove" : (product.selectedPricing == null ? "Add" : "Add")}
                                                </button>
                                            </Box>
                                        </Grid>
                                    )
                                    }
                                 
                                </div>
                            </div>
                            </>):(
                                        <>
                                        <div style={{ marginLeft: '3rem' }}>
                                <h2 style={{ color: '#20DCEB', textAlign: "center" }}>Watch a demo</h2>
                                <Video url={product.url} width={'35rem'} height={'20rem'}></Video>

                            </div>

                                        <Button
                                         variant="contained"
                                         style={{ backgroundColor: "#20DCEB",
                                          color: "#1F242B",
                                          width:"13rem",
                                          height:"2.5rem",
                                          marginLeft:"13rem",
                                          marginBottom:"5rem",
                                          marginTop:"1rem",
                                          textAlign:'center',
                                          lineHeight:'0.9',
                                          textTransform: "none"   }}
                    >
                      Notify when this service is available
                    </Button>

                    
                                        </>
                                    )}
                        </Grid>
                        
                    </Grid>

                </div>
            </>}

        </>
    )
}