import React from 'react'
import "./Agendas.css"
import { agendas } from "../../dummydata"
import styled from '@emotion/styled'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'


const Heading = styled.div`
    text-align: center;
    padding: 20px 0;
`

const Agendas = () => {
  return (
    <div className='portail'>
      <Sidebar/>
      <div className='portailcontent'>
          <Navbar/>
              <Heading >
                    <h1>Agendas </h1>
                    <h3>Mettre à jour les Emplois  </h3>
                </Heading>
            <section className='online'>
                
                  {agendas.map((val) => (
                   
                     <div className='box'>
                      <Link to={`/agendas/new/${val.profil}`} style={{ textDecoration: "none" }}>
                      <div className='img'>
                        <img src={val.cover} />
                        <img src={val.hoverCover} alt='' className='show' />
                      </div>
                      </Link>
                      <h1>{val.courseName}</h1>
                    </div>
                    
                  ))}
                
            </section>
       </div>
  </div>
  )
}

export default Agendas;
