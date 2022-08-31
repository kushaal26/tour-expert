import BusinessIcon from '@material-ui/icons/Business';
import SearchIcon from '@material-ui/icons/Search';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import  '../css/filtermenu.css';
import DevicesIcon from '@material-ui/icons/Devices';
import { Menu, Checkbox } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;




export const FilterMenu = (props) => {
  let { filters, updateFilters } = props
  let handleClick = e => {
    console.log('click ', e);
  };
  let filterChange = (e, value) => {
    if (e.target.checked) {
      updateFilters([...filters, value])
    }
    else {
      let temp_filters = [...filters]
      const index = temp_filters.indexOf(value);
      if (index > -1) {
        temp_filters.splice(index, 1);
      }
      updateFilters(temp_filters)
    }
  }


  return (
    <Menu

      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      // theme="dark"
      style={{ width: 'auto',backgroundColor:'#2A3039' }}
      
    >
      <SubMenu key="sub1" style={{color:'#20DCEB',height:'25px',backgroundColor:'#2A3039'}} icon={<SearchIcon style={{fontSize:'25px',color:'#20DCEB'}} />} 
      style={{fontWeight:'bold',color:'#20DCEB',backgroundColor:'#2A3039'}} title="I'm looking to" >

        <Menu.Item style={{height:'25px', backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="1"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "reachcustomers") }}> Reach more customers</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px', backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="2"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "operatebetter") }}> Operate better</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="3"><Checkbox  style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "reduceexpenses") }}> Reduce my expenses</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="4"><Checkbox  style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "expandbusiness") }}> Expand my business</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="5"><Checkbox  style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "protectbusiness") }}> Protect my business</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="6"><Checkbox  style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "All") }}>ALL</Checkbox></Menu.Item>
          
      </SubMenu>
    
      <SubMenu key="sub3" style={{color:'#20DCEB',height:'25px',backgroundColor:'#2A3039'}} icon={<BusinessIcon style={{fontSize:'25px',color:'#20DCEB'}} />}
      style={{fontWeight:'bold',color:'#20DCEB',backgroundColor:'#2A3039'}}  title="Size of business">
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="25"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "justme") }}>Just me</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="26"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "lessthan10") }}>Small -Less than 10 people</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="27"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "lessthan50") }}>Medium -10 to 50 people</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="28"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "lessthan500") }}>Large -51 to 500 people</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="29"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "morethan500") }}>Enterprise -more than 500 people</Checkbox></Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" style={{color:'#20DCEB',height:'25px',backgroundColor:'#2A3039'}} icon={<DevicesIcon style={{fontSize:'25px',color:'#20DCEB'}} />}
      style={{fontWeight:'bold',color:'#20DCEB',backgroundColor:'#2A3039'}} title="Digital level">
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="30"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "nodigi") }}>No Digital at all</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="31"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "basicdigi") }}>Basic website  </Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="32"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "onlinedigi") }}>We promote our business online</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="33"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "saledigi") }}>We sale online </Checkbox></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" style={{color:'#20DCEB',height:'25px',backgroundColor:'#2A3039'}} icon={<BusinessCenterIcon style={{fontSize:'25px',color:'#20DCEB'}} />}
       style={{fontWeight:'bold',color:'#20DCEB',backgroundColor:'#2A3039'}} title="Type of business">
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="7"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "ad/mar") }}>Advertising/Marketing</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="8"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "agriculture") }}>Agriculture</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="9"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "arts/entertainment") }}>Arts & Entertainment</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="10"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "automotive") }}>Automotive & Aviation</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="11"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "beauty") }}>Beauty & Personalcare</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="12"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "commercial") }}>Commercial Services</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="13"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "education") }}>Education</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="14"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "finanleg") }}>Finance & Legal</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="15"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "food") }}>Food & Beverage</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="16"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "tour") }}>Lodging & Tourism</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="17"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "medi") }}>Medical & Health</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="18"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "nonpro") }}>Non-Profit</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="19"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "realesta") }}>Real Estate</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="20"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "Techee") }}>Technology & Engineering</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="21"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "shopreta") }}>Shopping & Retail</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="22"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "sportsrecr") }}>Sports & Recreation</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}} key="23"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "travtra") }}>Travel & Transportation</Checkbox></Menu.Item>
        <Menu.Item style={{height:'25px',backgroundColor:'#2A3039',marginBottom:'0px',marginTop:'0px'}}  key="24"><Checkbox style={{backgroundColor:'#2A3039',color:'white'}} onChange={(e) => { filterChange(e, "others") }}>Others</Checkbox></Menu.Item>
      </SubMenu>
    </Menu>
  );

}