import '../components/footer.css'

const Footer=()=>{

    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">

                 Column1
                 <div className="col">
                     <h4> A Pair Of B's</h4>
                     <ul className="list-unstyled">
                        <li>Bronx, NY</li>
                        <li></li>
                     </ul>
                     </div>   
                 Column2 
                 <div className="col">
                     <h4> stuff</h4>
                     <ul className="list-unstyled">
                        <li>stuff</li>
                        <li></li>
                     </ul>
                     </div>   
                 Column3  
                 <div className="col">
                     <h4> one more stuff</h4>
                     <ul className="list-unstyled">
                        <li>Bronx, NY</li>
                        <li></li>
                     </ul>
                     </div>  



                </div>
                <hr/>
                 <div className="row">
                     <p className="col-sm">
                         | All right reserved| Privacy
                     </p>
                     </div>   
            </div>
            
        </div>
    )
}

export default Footer