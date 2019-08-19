import React from "react";
import NavBar from '../../components/NavBar'
import CardBox from "../../components/CardBox"
import BuildFooter from "../../components/BuildFooter"
import Footer from '../../components/Footer'
import dragonborn from "../../assets/images/dragonborn.jpg"
import "./character.css";

const About = (props) => {



    return (

        <div className="character">
            <NavBar />
            <div className="cards">
            <div className="raceCards">
            <CardBox className="charRace" img={dragonborn} imgalt="dragonborn" title="Dragonborn" details="Modifiers: Str +2, Cha +1" />
            <CardBox className="charRace" title="Dwarf" details="Modifiers: " />
            <CardBox className="charRace" title="Elf" details="Modifiers: " />
            <CardBox className="charRace" title="Gnome" details="Modifiers: " />
            <CardBox className="charRace" title="Half-Elf" details="Modifiers: " />
            <CardBox className="charRace" title="Half-Orc" details="Modifiers: " />
            <CardBox className="charRace" title="Halfling" details="Modifiers: " />
            <CardBox className="charRace" title="Human" details="Modifiers: " />
            <CardBox className="charRace" title="Tiefling" details="Modifiers: " />
            </div>
            <div className="classCards">
                <CardBox className="charClass" title="Barbarian" details="Modifiers: " />
                <CardBox className="charClass" title="Bard" details="Modifiers: " />
                <CardBox className="charClass" title="Cleric" details="Modifiers: " />
                <CardBox className="charClass" title="Druid" details="Modifiers: " />
                <CardBox className="charClass" title="Fighter" details="Modifiers: " />
                <CardBox className="charClass" title="Monk" details="Modifiers: " />
                <CardBox className="charClass" title="Paladin" details="Modifiers: " />
                <CardBox className="charClass" title="Ranger" details="Modifiers: " />
                <CardBox className="charClass" title="Rogue" details="Modifiers: " />
                <CardBox className="charClass" title="Sorcerer" details="Modifiers: " />
                <CardBox className="charClass" title="Warlock" details="Modifiers: " />
                <CardBox className="charClass" title="Wizard" details="Modifiers: " />
                </div>
            </div>
            <BuildFooter />

            <Footer />
        </div>
    )
}



export default About;