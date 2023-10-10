import React from 'react'
import './skills.css'
import Card from 'react-bootstrap/Card';
import netlify from '../../Assets/Skills icons/netlify.png'
import html5 from '../../Assets/Skills icons/html5.png'
import css3 from '../../Assets/Skills icons/css3.png'
import bootstrap from '../../Assets/Skills icons/bootstrap.png'
import reactjs from '../../Assets/Skills icons/reactjs.png'
import nodejs from '../../Assets/Skills icons/nodejs.png'
import mongodb from '../../Assets/Skills icons/mongodb.png'
import fontawesome from '../../Assets/Skills icons/fontawesome.png'
import postman from '../../Assets/Skills icons/postman.png'
import github from '../../Assets/Skills icons/github.png'
import materialui from '../../Assets/Skills icons/materialui.png'
import vscode from '../../Assets/Skills icons/vscode.png'
import express from '../../Assets/Skills icons/express.png'
import render from '../../Assets/Skills icons/render.jpg'
import javascript from '../../Assets/Skills icons/javascript.png'
import nodered from '../../Assets/Skills icons/node-red.png'
import mysql from '../../Assets/Skills icons/mysql.png'
import sql_server from '../../Assets/Skills icons/sql_server.jpeg'

function Skills() {
  const skills = [
    {
      skill: 'HTML5',
      imgSrc: html5
    },
    {
      skill: 'CSS3',
      imgSrc: css3
    },
    {
      skill: 'JavaScript',
      imgSrc: javascript
    },
    {
      skill: 'Bootstrap',
      imgSrc: bootstrap
    },
    {
      skill: 'React.js',
      imgSrc: reactjs
    },
    {
      skill: 'Express.js',
      imgSrc: express
    },
    {
      skill: 'Node.js',
      imgSrc: nodejs
    },
    {
      skill: 'Node-RED',
      imgSrc: nodered
    },
    {
      skill: 'MongoDB',
      imgSrc: mongodb
    },
    {
      skill: 'MySQL',
      imgSrc: mysql
    },
    {
      skill: 'SQL Server',
      imgSrc: sql_server
    },
    {
      skill: 'Material UI',
      imgSrc: materialui
    },
    {
      skill: 'Font Awesome',
      imgSrc: fontawesome
    },
    {
      skill: 'VS Code',
      imgSrc: vscode
    },
    {
      skill: 'Postman',
      imgSrc: postman
    },
    {
      skill: 'Render',
      imgSrc: render
    },
    {
      skill: 'Netlify',
      imgSrc: netlify
    },
    {
      skill: 'GitHub',
      imgSrc: github
    }
  ]
  return (
    <>
      <div id='skills' className='skillsMainDiv'>
        <div className='border border-warning border-2 rounded'>
          <div className='skillsHeadingDiv'>
            <h1 className='text-white skills'>SKILLS</h1>
          </div>
          <div className='skillsCardDiv'>
            {
              skills.map((e, i) => {
                return (
                  <Card.Body key={i} className='text-center rounded bg-white'>
                    <Card.Title className='fs-4 cardText'><img src={e.imgSrc} alt="" className='me-2 skillIcon' /> {e.skill}</Card.Title>
                  </Card.Body>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills