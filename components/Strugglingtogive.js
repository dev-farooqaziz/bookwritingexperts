import React from 'react'
import styles from '@/styles/Strugglingtogive.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { TiTick } from 'react-icons/ti'
import Signup from './Signup'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useState } from 'react'

const Strugglingtogive = (props) => {
    var bookrecordingprojects = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const [isSliderActive, setIsSliderActive] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setIsSliderActive(true);
            } else {
                setIsSliderActive(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={styles.strugglingtogive}>

            <Container>
                <Row className={` ${styles.forent} gy-4`}>
                    <Col md={7}>


                        {props.titleills ?
                            props.titleills
                            :
                            // <h2 className='color-blue font50 fw700 font-f mb-4'>Are You Struggling to give <br className='d-none d-md-block' /> Words to your Ideas?</h2>
                            ""
                        }
                        {props.text ?
                            <p className='textcolor font-f mb-4 font15'> {props.text} </p>
                            :
                            <p className='textcolor font-f mb-4 font15'>You may be a victim of the following nuisances</p>
                        }


                        {isSliderActive ?
                            <Slider {...bookrecordingprojects} className='demodots'>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list1}</div>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list2}</div>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list3}</div>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list4}</div>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list5}</div>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list6}</div>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list7}</div>
                                <div className='textcolor font-f mb-4 font15'> <TiTick size={25} className={styles.rightcolor} /> {props.list8}</div>
                            </Slider>
                            :
                            <div className={styles.slow}>
                                <ul className='p-0'>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} /> {props.list1}</li>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} /> {props.list2}</li>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} />{props.list3}</li>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} />{props.list4}</li>
                                </ul>

                                <ul>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} /> {props.list5}</li>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} /> {props.list6} </li>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} /> {props.list7}</li>
                                    <li className='textcolor font-f mb-4 font15'><TiTick size={25} className={styles.rightcolor} /> {props.list8}</li>
                                </ul>

                            </div>
                        }
                        <div>
                            <a href="#footercontact"> <button className={styles.btnget1}> {props.btn1} </button></a>
                            <a href="javascript:$zopim.livechat.window.show();"><button className={styles.btnget2}> {props.btn2} </button></a>
                            <a href="tel:(012) 345 6789"><button className={styles.btnget2}> {props.btn3} </button></a>
                        </div>
                    </Col>

                    <Col md={5}>
                        <Signup
                            bannershome='signup'
                            contacttext='contacttextblack'
                        />
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Strugglingtogive