import React, { useContext } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { UserContext } from '../../Main'
import { useTheme, withStyles } from '@material-ui/core/styles';
import { ContentScreen } from '../ContentScreen';
import {Academy} from "../Academy"
export const FeatureTabs = (props) => {
    const rootContext = useContext(UserContext)
    const [value, setValue] = React.useState(0);
    const [tabval, seltab] = React.useState("ALL");
    const handleChange = (event, newValue) => {
        setValue(newValue);
        rootContext.dispatch({ "type": 'select-tab', "value": newValue })
    }

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    const AntTabs = withStyles({
        root: {
            backgroundColor: "#000000",
        },
        indicator: {
            backgroundColor: "#20DCEB",
            height: "6px",
            top: "0px",
            borderRadius: "8px 8px 0px 0px",
        },
    })(Tabs);

    const AntTab = withStyles((theme) => ({
        root: {
            textTransform: 'none',
            maxWidth: '100%',
            height: 12,
            marginRight: theme.spacing(1),
            backgroundColor: "#1F242B",
            color: "#20dceb",
            borderRadius: "8px",
            borderColor: "#e056fd",
            borderWidth: "5px 5px 5px",
            textAlign: 'center',
            fontSize: 'large',

        },
        selected: {},
    }))((props) => <Tab disableRipple {...props} />);
    const myfunction = (type) => {
        console.log("business" + type)
        seltab(type)
    }

    return (<>
        <div>
            <AntTabs
                value={value}
                onChange={handleChange}
                indicatorColor=""

                variant="fullWidth"
                aria-label="full width tabs example"

            >    <AntTab  onClick={() => myfunction("ALL")}  label="All" {...a11yProps(5)} />
                <AntTab  onClick={() => myfunction("Online")}  label="USA" {...a11yProps(0)} />
                <AntTab  onClick={() => myfunction("Business")}  label="INDIA" {...a11yProps(1)} />       
                <AntTab  onClick={() => myfunction("Provisional")}label="EUROPE" {...a11yProps(2)} />                   
                <AntTab  onClick={() => myfunction("Technology")}  label="AUSTRALIA" {...a11yProps(3)} />
                {/* <AntTab  onClick={() => myfunction("Academy")} label="Academy" {...a11yProps(4)} /> */}

            </AntTabs>
        </div>
        {tabval != "Academy"  ? <ContentScreen tabval={tabval} /> : <Academy/>}
    </>
    )
}
