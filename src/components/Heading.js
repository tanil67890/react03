import React from 'react'
import './heading.css'

class Heading extends React.Component{
    render(){
        return  <div className="heading">
                    <div className="heading-content">
                        <div className="headingImg">
                            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/banana-milkshake_1-f95690e.jpg?quality=90&webp=true&resize=375,341" alt="" />
                        </div>
                        <div className="headingTxt">
                            <h1>Milkshake Recipies</h1>
                            <h3>{this.props.noOfRecipies} Recipies</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur 
                                adipisicing elit. Nisi doloremque 
                                explicabo ea quidem voluptate vel 
                                voluptatem, illum deserunt, blanditiis 
                                amet ut tempora neque error sapiente 
                                cumque pariatur optio tenetur odit sequi, 
                                hil inventore nostrum?</p>
                        </div>
                    </div>
                </div>
    }
}

export default Heading
