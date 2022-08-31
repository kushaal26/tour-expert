import React, { useContext, useEffect, useState } from 'react';
import { AllSolutions } from "../AllSolutions"
import Requirments from './requirments';
import { Products } from "../Products"
import { FilterMenu } from "../FilterMenu"
import { UserContext } from "../../Main"
import productData from './productData';
import BusinessoperData from './BusinessoperData';
import ProvisionalserviceData from './ProvisionalserviceData';
import AllsolutionData from './AllsolutionData';
import TechitData from './TechitData';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const ContentScreen = ({ tabval }) => {
  const [filterState, setFilterState] = useState([])
  const rootContext = useContext(UserContext)
  const [productsData, setProductsData] = useState([]);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

  useEffect(() => {
    setProductsData(AllsolutionData)
    if (tabval == "Online") { setProductsData(productData) }
    else if (tabval == "Business") { setProductsData(BusinessoperData) }
    else if (tabval == "Provisional") { setProductsData(ProvisionalserviceData) }
    else if (tabval == "Technology") { setProductsData(TechitData) }



  }, [rootContext.UserState.selectedTab])
  const classes = useStyles();
  return (
    <>
      <div style={{ marginTop: "5px" }}>
        <AllSolutions />
      </div>
      <div>
      <Grid container spacing={1}>
          <Grid item xs={3}>
            <FilterMenu filters={filterState} updateFilters={setFilterState} />
          </Grid>
          <Grid item xs={9}>
            { 
              <>
                 <p style={{color:"#20dceb",textAlign:"center",marginBottom:"0px",marginTop:'10px',font: "normal normal bold 1rem / 1.3rem Segoe UI",fontSize:'25px'}}> Places </p>
                 <Products products={productsData} filters={filterState} ></Products>
              </>
            }
            
          </Grid>
        </Grid>
      </div>
    </>
  )
}




