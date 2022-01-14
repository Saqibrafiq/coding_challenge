import { Fragment, ReactElement } from "react";
import data from '../../data.json';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from '@mui/material/Grid';

export default function StartupList(props:any): ReactElement {

  return <Fragment>
  {data.map((startup,id) => (
        <Card sx={{ maxWidth: "90%", margin: "auto ", marginTop: "20px" }}>
        <CardContent>
          <Typography variant="body2" sx={{ fontSize: 19, fontWeight: "bold"  }}  gutterBottom>
            {props.datalist.name}
          </Typography>
          <Grid container >
            <Grid item pr={1}>
            <Typography sx={{ fontSize: 13 , fontWeight: 400}} color="text.secondary" gutterBottom>
            Founded {new Date(props.datalist.dateFounded).getFullYear()}
          </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item pl={1} pr={1}>
            <Typography sx={{ fontSize: 13 , fontWeight: 400}} color="text.secondary" gutterBottom>
            {props.datalist.employees} Employees
          </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item pl={1} pr={1}>
            <Typography sx={{ fontSize: 14 , fontWeight: 400}} color="text.secondary" gutterBottom>
             {props.datalist.totalFunding} <span>&#36;</span>
          </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem>
            </Divider>
            <Grid item pl={1} pr={1}>
            <Typography sx={{ fontSize: 13 , fontWeight: 400}} color="text.secondary" gutterBottom>
            {props.datalist.currentInvestmentStage} 
          </Typography>
            </Grid>
          </Grid>
          
          <Typography sx={{ mt:2,fontWeight: "500" }} variant="body2">
          
           {props.datalist.shortDescription}
          </Typography>
        </CardContent>
      </Card>
      ))}
  </Fragment>;
}