import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { getPhotos } from '../../redux/slider/photosSlice';
import { NavLink } from "react-router-dom";
import { CircularProgress, Pagination } from "@mui/material";
import styles from './css/main.module.css'
import { loadSliceSelect, getSlice, sliceSelect } from '../../redux/slider/Slice';
import { useEffect } from 'react';



export default function MainPage() {
  const slice = useSelector(sliceSelect);
  const dispatch = useDispatch()
  const load = useSelector(loadSliceSelect)
  useEffect(() => {
    dispatch(getSlice())
  }, [dispatch])
  return (

    <div lg={4} className={styles.container}>
      {
        !load
          ?

          <Card style={{ width: '100%' }} className={styles.display}>

            {
              slice.slice(0, 3).map(i => (
                <CardActionArea key={i.id}>
                  <CardMedia />
                  <NavLink className={styles.ajax} to={`/posts/${i.id}`}>
                    <img style={{
                      objectFit: 'contain'
                    }} src={i?.image} alt="" className={styles.photo} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {i.title}
                      </Typography>

                    </CardContent>
                  </NavLink>


                </CardActionArea>
              ))}

          </Card>
          :
          <div className={styles.load}>
            <CircularProgress />
          </div>
      }
    </div>


  )
}