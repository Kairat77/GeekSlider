import React, {useEffect} from "react"
import { useDispatch,useSelector } from "react-redux";
import { sliceSelect,getSlice,loadSliceSelect } from "../../redux/slider/Slice";
import { NavLink } from "react-router-dom";
import styles from './css/contact.module.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { CircularProgress } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper";





export default function ContactsPage (){
    const slice = useSelector(sliceSelect);
    const load = useSelector(loadSliceSelect)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getSlice())
    },[dispatch])
    return (
        <div className={styles.container}>
        {
           !load
           ?

            <Swiper
            className={styles.typof}
                autoplay={{delay: 2000, disableOnInteraction:false}}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Autoplay, Pagination]}
                
            >
                
           {
            slice.slice(0,10).map(i =>(
                <SwiperSlide key={i.id} className={styles.slide}>
                    <NavLink className={styles.ajax} to={`/posts/${i.id}`}>
                        <div className={styles.slide_content}>
                            <img style={{
                                objectFit: 'contain'
                            }} src={i?.image} alt="" className={styles.photo}/>
                        </div>
                        <p className={styles.rec}>{i?.title}</p>
                    </NavLink>
                </SwiperSlide>
            ))
           }
             </Swiper>
             :
                <div className={styles.load}>
                    <CircularProgress/>
                </div>
        }
        
        </div>
        
    )
}
