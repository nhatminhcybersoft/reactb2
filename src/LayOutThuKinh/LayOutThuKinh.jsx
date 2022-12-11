import React, { Component } from "react";
import Header from "./Header";

export default class LayOutThuKinh extends Component {

    dataGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    // display glasses list to UI
    renderGlasses = () => {
        return this.dataGlasses.map((pair) => {
            let {id,url} = pair;
            return <div className="col-2" key={`glasses-${pair.id}`}>
            <img style={{cursor: 'pointer'}} onClick={() => {
                this.changeGlasses(pair)
            }} className="img-fluid" src={url} alt="" />
          </div>
        })
    }

    // click event to change glasses
    changeGlasses = (pair) => {
      this.setState({
        glassesDetail: pair
      })
    }

    // set giá trị mặc định đầu tiên
    state = {
        glassesDetail: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    render() {
        let {glassesDetail} = this.state;
        return (
        <div className="myContainer">
            <Header />
                <div className="row">
                    <div className="col-6">
                        <div className="vglasses__card">
                            <div className="vglasses__model" id="avatar">
                                <img className="leftIMG img-fluid" src="./glassesImage/model.jpg" alt="" />
                            </div>
                            <div>
                                <div className="glassesItem">
                                    <img className="glassesLayer img-fluid" src={glassesDetail.url} alt="" />
                                </div>
                                <div id="glassesInfo" className="vglasses__info">
                                    <h2 className="myTitle">{glassesDetail.name}</h2>
                                    <p>{glassesDetail.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="rightIMG img-fluid" src="./img/glassesImage/model.jpg" alt="" />
                    </div>
                </div>
                
            <div className="glassesWrap">
                <div className="row" id="glassesList">
                    {this.renderGlasses()}
                </div>
            </div>
        </div>
        );
    }
}
