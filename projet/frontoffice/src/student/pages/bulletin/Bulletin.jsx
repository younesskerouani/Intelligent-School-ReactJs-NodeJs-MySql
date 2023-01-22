import React from 'react'
import "./Bulletin.css"
import { bulletin } from "../../../dummydata"
import styled from '@emotion/styled';

const Heading = styled.div`
    margin-left: 280px;
    padding: 20px 0;
`

export default function Bulletin () {
  return (
      <div className='Bulletincontent'>
       
              <Heading >
                    <h1>Notes & Bulletin </h1>
                    <h3> Annee Universitaire 2022/2023  </h3>
                </Heading>
            <section className='Bulletinonline'>
                
                  {bulletin.map((val) => (
                    <div className='box'>
                      <div className='img'>
                        <img src={val.cover} />
                        <img src={val.hoverCover} alt='' className='show' />
                      </div>
                      <h1>{val.courseName}</h1>

                    </div>
                  ))}
                
            </section>
       </div>
  )
};
