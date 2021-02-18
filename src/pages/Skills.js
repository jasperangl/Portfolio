import React, {Component} from 'react';
import './Projects.css';
import './About.css';
import './Skills.css';
import SkillCollapsible from './SkillCollapsible.js';
import Skillitem from './Skill-Item.js';


class Skills extends Component{

    constructor() {
        super()
        this.state={
            Java:false,
            Python: false,
            JavaScript: false,
            HTML: false,
            CSS: false,
            OPENlanguage: false,
            OPENlibrary: false,
            OPENadditionals: false,
            ReactJS: false,
            Pandas: false,
            scikit: false,
            NumPy: false
        }
    }


    operation(language, category) {

        if (language === 'Java') {
            this.setState({
                Java : !this.state.Java,
                Python: false,
                JavaScript: false,
                HTML: false,
                CSS: false,
                OPENlanguage: true
            })
        }
        if (language === 'Python') {
            this.setState({
                Java : false,
                Python: !this.state.Python,
                JavaScript: false,
                HTML: false,
                CSS: false,
                OPENlanguage: true
            })
        }
        if (language === 'JavaScript') {
            this.setState({
                Java : false,
                Python: false,
                JavaScript: !this.state.JavaScript,
                HTML: false,
                CSS: false,
                OPENlanguage: true
            })
        }
        if (language === 'HTML') {
            this.setState({
                Java : false,
                Python: false,
                JavaScript: false,
                HTML: !this.state.HTML,
                CSS: false,
                OPENlanguage: true
            })
        }
        if (language === 'CSS') {
            this.setState({
                Java : false,
                Python: false,
                JavaScript: false,
                HTML: false,
                CSS: !this.state.CSS,
                OPENlanguage: true
            })
        }
        if (language === 'ReactJS') {
            this.setState({
                ReactJS: !this.state.ReactJS,
                Pandas: false,
                scikit: false,
                NumPy: false,
                OPENlibrary: true
            })
        }
        if (language === 'Pandas') {
            this.setState({
                ReactJS: false,
                Pandas: !this.state.Pandas,
                scikit: false,
                NumPy: false,
                OPENlibrary: true
            })
        }
        if (language === 'scikit-learn') {
            this.setState({
                ReactJS: false,
                Pandas: false,
                scikit: !this.state.scikit,
                NumPy: false,
                OPENlibrary: true
            })
        }
        if (language === 'NumPy') {
            this.setState({
                ReactJS: false,
                Pandas: false,
                scikit: false,
                NumPy: !this.state.NumPy,
                OPENlibrary: true
            })
        }
        if (language === 'Close' && category === 'language') {
            this.setState({
                Java : false,
                Python: false,
                JavaScript: false,
                HTML: false,
                CSS: false
            })
        }
        if (language === 'Close' && category === 'library') {
            this.setState({
                ReactJS: false,
                Pandas: false,
                scikit: false,
                NumPy: false
            })
        }
    }

    
    

    render() {
    return (
        <div id='Skills' className='Skills'>
            <link rel="stylesheet" 
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className='container'>
                <div className='section-title text-center'>
                    <h1>My Skills</h1>
                </div>
                
                <div className='skill-sections'>
                    <div className='skill-section'>
                        <h3>Langauges:</h3>
                        <div className='skill-box'>
                            <Skillitem name={"Java"} langstate={this.state.Java} OPEN={this.state.OPENlanguage} Skill={this} category={'language'}/>
                            <Skillitem name={"Python"} langstate={this.state.Python} OPEN={this.state.OPENlanguage} Skill={this} category={'language'}/>
                            <Skillitem name={"HTML"} langstate={this.state.HTML} OPEN={this.state.OPENlanguage}  Skill={this} category={'language'}/>
                            <Skillitem name={"CSS"} langstate={this.state.CSS} OPEN={this.state.OPENlanguage} Skill={this} category={'language'}/>
                            <Skillitem name={"JavaScript"} langstate={this.state.JavaScript} OPEN={this.state.OPENlanguage} Skill={this} category={'language'}/>
                        </div>
                    </div>
                    <div>
                        <SkillCollapsible name={"Java"} langstate={this.state.Java} infotext={JavaText} Skill={this} category={'language'}/>
                        <SkillCollapsible name={"Python"} langstate={this.state.Python} infotext={PythonText} Skill={this} category={'language'}/>                   
                        <SkillCollapsible name={"JavaScript"} langstate={this.state.JavaScript} infotext={JavaScriptText} Skill={this} category={'language'}/>
                        <SkillCollapsible name={"HTML"} langstate={this.state.HTML} infotext={HTMLText} Skill={this} category={'language'}/>
                        <SkillCollapsible name={"CSS"} langstate={this.state.CSS} infotext={CSSText} Skill={this} category={'language'}/>
                    </div>
                    <div className='skill-section'>
                        <h3>Libraries / Frameworks:</h3>
                        <div className='skill-box'>
                            <div className='skill-box-item'>Pandas</div>
                            <div className='skill-box-item'>sci-kit-learn</div>
                            <div className='skill-box-item'>NumPy</div>
                            <div className='skill-box-item'>PyTorch</div>
                            <div className='skill-box-item'>TensorFlow</div>
                            <div className='skill-box-item'>ReactJS</div>
                        </div>
                    </div>
                    <div className='skill-section'>
                        <h3>Additionals:</h3>
                        <div className='skill-box'>
                            <div className='skill-box-item'>Git</div>
                            <div className='skill-box-item'>Adobe Lightroom</div>
                            <div className='skill-box-item'>Adobe Premiere Pro</div>
                            <div className='skill-box-item'>Affinity Photo</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
}


export default Skills;

const JavaText = "Like most university students I gained most of my coding experience through Java. It taught me object-oriented programming and the object-oriented Design"
+ " principles such as Inheritance, Polymorphism, Abstraction and Encapsulation. Through projects like the Pyramid Solitaire Game" 
+ "I gained meaningful experience in OOD concepts as well as in-depth testing habits with unit tests using the JUnit Library."
+ " My Spreadsheet project expanded on that by working in cooperation with a partner which required good communication and collaboration to remain productive."

const PythonText = "I learned Python through my Intro to Data Science class where I was exposed to the most popular libraries and functionalities that are listed below."
+ " I further improved my Python skills during my AI class where I build the 'PvP Snake AI' using PyTorch as the ML/NN library." 
+ " So far I programmed Reinforcement Learning AI's, ML algorithms, web scrapers and data analysists shown in the projects above."

const HTMLText = "HTML is unavoidable in web-programming. Although this website is a React App I learned a lot of HTML on the way as well. All of my HTML knowledge is self-taught through online tutorials."
const CSSText = "I gained most of my CSS skill through this website and the Recipe Database App. "
+ "Both of them I completely styled myself with CSS3 not using any templates or copies of other styles. "
+ "I decided to do it this way so that I will be capable of styling websites on my own based on designs and don't have to be limited to internet templates."

const JavaScriptText = "I gained basic Javascript knowledge by building this React web application. "
+ "For this website I wrote some of my code in vanilla javascript for logic purposes but most of the functionalities come from React capabilities such as state management."

const MTText = ""
