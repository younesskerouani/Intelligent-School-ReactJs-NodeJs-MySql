import React from 'react';
import "./pageensei.css";
import { enseignants } from "./dummydata";
import styled from '@emotion/styled';
import { Link } from "react-router-dom";


const Heading = styled.div`
    margin-left: 280px;
    padding: 20px 0;
`

const PageEnseignant = () => {
    return (
        <div className='portail'>

            <div className='portailcontent'>

                <Heading >
                    <h1>Espace Enseignant </h1>
                </Heading>

                <section className='online'>

                    {enseignants.map((val) => (
                        <Link to={"/enseignant/"+val.courseName}  className="link">
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

export default PageEnseignant;
