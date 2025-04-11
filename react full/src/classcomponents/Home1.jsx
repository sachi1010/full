import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Tyre from './Tyre'
import About from './About'

export default class Home1 extends Component {
  render() {
    return (
      <>
      <Header/>
      <Tyre/>
        <div>
            <h1>our products</h1>
            <div className="row">
             <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
             </div>
             {/*  */}
             <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
             </div>
             {/*  */}
             <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
             </div>
             {/*  */}
             <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
             </div>
           </div>
        </div>
        <div>
          <h2>MRF tyre is the no.1 tyre in the manufacturing of strong and quality</h2>
        </div>

        <About/>
        <Footer/>
      </>
    )
  }
}

