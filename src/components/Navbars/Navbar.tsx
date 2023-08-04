import { Link } from 'react-router-dom'
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <div className=" navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="addnote">AddNote</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/note">Note</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/chatboats">Chatboats</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/whatsapp">Whatsapp</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/homepage">HomePage</Link>
            </li>

          </ul>
          {/* <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode (props.id)}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode (props.id)}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode (props.id)}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>
     <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode (props.id)}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>

    </div> 
     */}
          {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary" type="submit">Search</button>
    </form>*/}
          {/* 
      <div className={`form-check form-switch text-${props.mode==='light' ?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>{props.toggleMode (props.id)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>  */}
        </div>
      </div>
    </nav>
  )
}
export default Navbar