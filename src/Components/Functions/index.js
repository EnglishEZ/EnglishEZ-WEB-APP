import React from 'react'
import CardOne from '../Card/index';
import CardTwo from '../Card/indexed';
import GC from '../../Assets/GC.jpg';
import Disc from '../../Assets/Discuss.jpg';
import Learn from '../../Assets/Learning.jpg';
import Kid from '../../Assets/Kid.jpg';
function Functions() {
    return (
        <section id="Functions">
            <CardOne ImageSrc={GC} headerText="Graphic on Group Calls" bodyText="Join one of 100s of groups and start practising right away!. Don't like any group? create your own for FREE!!!"/>
            <CardTwo ImageSrc={Disc} headerText="Graphic on AI based Assessment" bodyText="Get a complete detailed assessment and score of your performance in your conversation by our cutting edge AI. Relax, your recordings are deleted right after the assessment. you can always turn this feature off as well."/>
            <CardOne ImageSrc={Learn} headerText="Graphic on One on One Call" bodyText="Talk one to one. connect with each other and talk."/>
            <CardTwo ImageSrc={Kid} headerText="Graphic on Learning with Bot" bodyText="Practise with our English bot and do"/>
        </section>
    )
}

export default Functions