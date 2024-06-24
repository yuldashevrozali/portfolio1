import React from 'react'
import telegram from '../../assets/telegram.svg'
import meta from '../../assets/meta.png'
import github from '../../assets/github.png'
import facebook from '../../assets/linkedin.svg'
import human from '../../assets/human.svg'
import './index.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Hello I’am <span>Yuldashev Ro'zali. Frontend</span> Developer Based In <span>Uzbekistan.</span></h1>
                {/* <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p> */}
                <div className="hero-links">
                    <button><a href='https://t.me/yuldashev_frontend'><img width={22} src={telegram} alt="telegram" /></a></button>
                    <button><a href='https://github.com/yuldashevrozali'><img width={32} src={meta} alt="meta" /></a></button>
                    <button><a href='https://github.com/yuldashevrozali'><img width={22} src={github} alt="github" /></a></button>
                    <button><a href='https://www.linkedin.com/in/ro-zalibek-yuldashev-733103315'><img width={32} src={facebook} alt="facebook" /></a></button>
                </div>
            </div>
            <div className="hero-right">
                <img src={human} alt="human" />
            </div>
        </div>
    )
}
