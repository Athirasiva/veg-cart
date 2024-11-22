import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Grid,
  Box,
} from "@mui/material";
function row() {
  return (
    <div>
      <Box className="box-class">
      <Card className="card" cols={2}>
            <CardMedia
              component="img"
              className="media"
              image=""
              title="gdfsj"
            />
            <CardContent className="content">
              <Typography variant="h6" className="title">
                Carrot
              </Typography>
              <Typography variant="body2" className="description">
                98
              </Typography>
           
              
            </CardContent>
          </Card>
          
      </Box>
    </div>
  )
}

export default row
