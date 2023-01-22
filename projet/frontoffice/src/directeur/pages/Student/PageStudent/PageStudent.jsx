import React from 'react';
import "./pagestudent.css";
import { students } from "./dummydata";
import styled from '@emotion/styled';
import { Link } from "react-router-dom";


const Heading = styled.div`
    margin-left: 280px;
`

const PageStudent = () => {
    return (
        <div className='portailStudent'>

            <div className='portailSS'>

                <Heading >
                    <h1>Espace Etudiant </h1>
                </Heading>
                
                
                <section className='onlineStudent'>
                 
                    {students.map((val) => (
                    <Link to={"/student/"+val.courseName}  className="link">
                        <div className='box'>
                            <div className='img'>
                                <img src={val.cover} />
                                {/* <img src={val.hoverCover} alt='' className='show' /> */}
                            </div>
                            <h1>{val.courseName}</h1>
                            {/* <span>{val.course}</span> */}
                        </div>
                     </Link>  
                    ))}
                
                </section>
                
            </div>
        </div>
    )
}

export default PageStudent;
