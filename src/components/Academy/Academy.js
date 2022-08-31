// import { Academyproducts } from "./Academyproducts";
import { Products } from "../Products"
import AcademyproductsData from "./AcademyproductsData"
import AcademyproductsData1 from "./AcademyproductData1"
import AcademyproductsData2 from "./AcademyproductData2"
import AcademyproductsData3 from "./AcademyproductData3"
import ContinueWatchingdata from "./ContinueWatchingdata"
import Recommendationvedious from "./Recommendationvedious"
import Aheader from "./Aheader"
import {AcademyCards} from "../AcademyCard"



export const Academy = () => {
    let Headings = [{title:"Continue watching", data:ContinueWatchingdata},{title:"Recommendations for you",data:Recommendationvedious},{title:  "Online Marketing", data: AcademyproductsData},{title:  "Business Operation", data: AcademyproductsData1},{title:  "Be Effective In Social Networks", data: AcademyproductsData2},{title:  "General Business Success", data: AcademyproductsData3}]
    return (
        <>
                <Aheader/>
               <div style={{backgroundColor:'#000000'}}>
                    <h1 style={{textAlign:'center',color:'#20DCEB',marginBottom:'0rem'}}>Academy</h1>
                </div>
            {
                Headings.map((obj) => <>
                    <hr style={{backgroundColor:'#20DCEB',margin:'0rem',padding:'0rem'}}></hr>
                    <h2 style={{color:'#20DCEB',backgroundColor:'#000000',marginBottom:'0rem',paddingLeft:'10px'}}>{obj.title}</h2>
                    <AcademyCards filter={[]}  products={obj.data} cols={5}></AcademyCards>
                </>)
        }    
        
        </>
        )
}

