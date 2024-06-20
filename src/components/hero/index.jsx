import React from 'react'
import telegram from '../../assets/telegram.svg'
import meta from '../../assets/meta.png'
import github from '../../assets/github.png'
import facebook from '../../assets/facebook.webp'
import human from '../../assets/human.svg'
import './index.css'

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Hello I’am <span>Evren Shah. Frontend</span> Developer Based In <span>India.</span></h1>
                <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                <div className="hero-links">
                    <button><img width={22} src={telegram} alt="telegram" /></button>
                    <button><img width={32} src={meta} alt="meta" /></button>
                    <button><img width={22} src={github} alt="github" /></button>
                    <button><img width={32} src={facebook} alt="facebook" /></button>
                </div>
            </div>
            <div className="hero-right">
                <img src={human} alt="human" />
            </div>
        </div>
    )
}
