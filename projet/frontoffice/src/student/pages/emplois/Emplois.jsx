import React from 'react'
import "./Emplois.css"
import { emplois } from "../../../dummydata"
import styled from '@emotion/styled';
import { Link } from "react-router-dom";

const Heading = styled.div`
    margin-left: 280px;
    padding: 20px 0;
`

export default function Emplois () {
  return (
      <div className='Emploiscontent'>
       
              <Heading >
                    <h1>EMPLOIS DU TEMPS </h1>
                    <h3>  Annee Universitaire 2022/2023  </h3>
                </Heading>
            <section className='onlineEmplois'>
                
                  {emplois.map((val) => (
                    <Link to="/emplois/Emplois-Etudiant" className="link">
                    <div className='box'>
                      <div className='img'>
                        <img src={val.cover} />
                        <img src={val.hoverCover} alt='' className='show' />
                      </div>
                      <h1>{val.courseName}</h1>

                    </div>
                    </Link>
                  ))}
                
            </section>
       </div>
  )
};
