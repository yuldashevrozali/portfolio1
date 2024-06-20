import React from 'react'
import html1 from '../../assets/html.svg'
import css from '../../assets/css.svg'
import bootstrapt from '../../assets/bootstrap.svg'
import javascript from '../../assets/javascript.svg'
import git from '../../assets/git.svg'
import next from '../../assets/next.svg'
import reactjs from '../../assets/reactjs.svg'
import redux from '../../assets/redux.svg'
import typescript from '../../assets/typescript.svg'
import './index.css'

export default function Skills() {
  return (
    <div>
      <h1>My Skills</h1>
      <div className='blocks'>
        <div className='block'>
          <img src={html1} alt="html" />
          <p>html</p>
        </div>
        <div className='block'>
          <img src={css} alt="html" />
          <p>css</p>
        </div>
        <div className='block'>
          <img src={bootstrapt} alt="html" />
          <p>bootstrapt</p>
        </div>
        <div className='block'>
          <img src={git} alt="html" />
          <p>git</p>
        </div>
        <div className='block'>
          <img src={javascript} alt="html" />
          <p>javascript</p>
        </div>
        <div className='block'>
          <img src={reactjs} alt="html" />
          <p>reactjs</p>
        </div>
        <div className='block'>
          <img src={next} alt="html" />
          <p>next js</p>
        </div>
        <div className='block'>
          <img src={redux} alt="html" />
          <p>redux</p>
        </div>
        <div className='block'>
          <img src={typescript} alt="html" />
          <p>typescript</p>
        </div>

      </div>
      <div className='exprience'>
      <h1>My exprience</h1>
      <div className="block2">
        <div className="block-top">
          <h2>rishtansoft</h2>
          <p>03.2024-04.2024</p>
        </div>
        <p>This is the site's mission It is a website for an online learning center! It will have
          the roles of Teacher, Student, Administrator! Each role has its own character!
          I completed the Teacher and Groups page. I have had various problems with it!
          But now I have solved the problems! In eleifend nisl faucibus molestie porttitor.
          </p>
      </div>
      </div>
      
    </div>
  )
}
