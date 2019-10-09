import React ,{Fragment,Component} from 'react';


class Formulariofacturacion extends Component {
    constructor() {
    
        super();
        this.state = {
         
           codigo_postal:'',
           municipio:'',
           estado:'',
           colonias:[],
           colonia:'',
           error:false,
           errorCP:false,
           errorColonia:false,
           distancia:'',
           monto:''
        };
        
      this.integral=this.integral.bind(this);
    }
    integral(km,montoCompra){
             var incog;
             var aux;
             var dividendo;
             var dividendo=Math.pow(20.5,2)/2;
             var divisor=km/montoCompra;
             aux=dividendo*divisor;
             
        if(isNaN(aux)){
        incog=0;
        
        }
        else{
         incog=aux;
         console.log(aux);
        }
          console.log(incog)
          return Math.ceil(incog*100);
    }
  
    render(){
      

    return (
      
      <Fragment>

          
        <div className="container jumbotron position-fixed" >
       { this.state.error? <p> no podemos llevar a esa área </p> : '' }

       <div className="row">
      
       <div className="col-sm-6 col-sm-offset-3">
            <div className="form-group ">
          
         <form  onSubmit={e=>{
              
         
              e.preventDefault();
            
              this.setState({
                error:false,
                errorColonia:false,
                errorCP:false
              });
              if(this.state.codigo_postal===''){
                    this.setState({
                      errorCP:true
                    })
              }
              else if(this.state.colonia===''||this.state.colonia==='Colonia'){
                this.setState({
                  errorColonia:true
                })
              }
              
            
              switch(this.state.municipio.trim()){
              case 'Tonalá': case 'Guadalajara':case 'Tlajomulco de Zuñiga': case 'San Pedro Tlaquepaque':
              case 'Tlaquepaque': case 'Zapopan':
                  this.setState({
                    error:false,
                  });
               break;
               case '':this.setState({
                error:false,
              });
               break;
               default:   
               this.setState({
                error:true,
              });
              break;
              }
                 
                 // console.log(this.state.municipio);
              

         }} >
                                              {               /*hasta aqui recibe el formulario*/}
         <div className="form-group">
            <input type="text" className="form-control" placeholder="descripcion"/>
            
         </div>
         <div className="form-group">
           <input type="number" placeholder="kilometros"    className="form-control"   
           onChange={e=>{
           
             this.setState({
               ...this.state,
               distancia:e.target.value

             });
           }}
           />
         </div>
         <div className="form-group">
           <input type="number" placeholder="monto a comprar" className="form-control"    
           onChange={e=>{
           
             this.setState({
               ...this.state,
               monto:e.target.value

             });
           }}
           />
         </div>
         <div className="form-group" >
         { this.state.errorCP? <p> no ingresó Código Postal Válido </p> : '' }
             <input type="number" className="form-control" placeholder="CP" 
             onChange={e=>{
               
                  fetch(`https://api-codigos-postales.herokuapp.com/v2/codigo_postal/${e.target.value}`).
                  then((response)=>{
                      return response.json();
                  }).
                  then((domicilio)=>{
                  
               

                       this.setState({
                        ...this.state,
                        codigo_postal:domicilio.codigo_postal,
                        municipio:domicilio.municipio,
                        estado:domicilio.estado,
                        colonias:domicilio.colonias
                       })
                  })
             }}
            />
             
         </div>
        <div className="form-group" >  
           <input className="form-control"   value={this.state.estado}  key={this.state.estado}/> 
        </div>
        <div className="form-group" >  
           <input className="form-control"   value={this.state.municipio}  key={this.state.municipiol}/> 
        </div>
        <div className="form-group" >  
           <input className="form-control"   value={this.integral(this.state.distancia,this.state.monto)}  key={this.state.municipiol}/> 
        </div>
        <div className="form-group" >  
        { this.state.errorColonia? <p> Elija colonia </p> : '' }
      <select value={this.state.colonia} 
    onChange={e=>{
      this.setState({ 
        ...this.state,
        colonia:e.target.value})
    }} >
    <option value="Colonia">Colonia</option>
   {
     this.state.colonias.map(
       row=>
       <option value={row}  key={row}>{row}</option>
     )
   }
  </select>
         
        </div>
         <button type="submit" className="btn btn-primary">Submit</button>
       
         </form>
        </div>
        </div>
        </div>
        </div>
        </Fragment> 
    );
    }
}

export default Formulariofacturacion;


























/* <div class="col-sm-3 ">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"></a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
    </div>
  </div>*/