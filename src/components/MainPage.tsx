import Footer from "./Footer"
import Nav from "./Nav"
import Menu from "./Menu"
import MainSection from "./MainSection"
import Explorer from "./Explorer"
import LocationSect from "./LocationSect"


function MainPage(){
    const content = [
        {title:"title1", img:"https://images.pexels.com/photos/14983436/pexels-photo-14983436/free-photo-of-church-roof-with-a-cross-on-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text1:"Duerme más que un gato con anemia", text2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut at debitis quidem dolorem ipsa non?"}
        ,{title:"title2", img:"https://images.pexels.com/photos/6703176/pexels-photo-6703176.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text1:"Mugre que no mata, engorda”", text2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut at debitis quidem dolorem ipsa non?"}
        ,{title:"title3", img:"https://images.pexels.com/photos/14850795/pexels-photo-14850795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text1:"No me abra los ojos que no le voy a echar gotas", text2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut at debitis quidem dolorem ipsa non?"}
    ]
    return(
        <div id="main">
            <Nav/>
            <Menu/>
            <MainSection slides={content}/> 
            <Explorer/>
            <LocationSect/>
            <Footer/>
        </div>
        )
}

export default MainPage