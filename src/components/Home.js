import React from 'react'
import './home.css'

class Home extends React.Component{
    render(){
        
        return  <div className="home">
                    <div className="homeContent">
                         <div className="wrapper">
                                <div className="wrap">
                                {this.props.items.map((item) => {
                                      return  <div className="flexIt">
                                                <div className="wrapImg">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="wrapTxt">
                                                    <div className="wrapTxtLeft">
                                                        <p className="bm">{item.name}</p>
                                                        <p className="lids">{item.procedure}</p>
                                                    </div>
                                                    <div className="wrapTxtRight">
                                                        <p className="wrapIngredients">Ingredients</p>
                                                        {item.ingredients.map((ingredient) => 
                                                            <ol>
                                                                <li>{ingredient}</li>
                                                            </ol>
                                                        )}        
                                                    </div>
                                                </div>
                                                <div className="closeBtn">
                                                    <button onClick = {() => {this.props.onRemove(item)}} >X</button>
                                                </div>
                                              </div>})}
                        
                                </div>
                         </div> 
                    </div>
                </div>
    }
}

export default Home
