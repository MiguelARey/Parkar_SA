function Menu(){
    return(
        <nav id="navMenu">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/3660/3660407.png" alt="logo-1" />
                <h1>PARKAR SA</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#navMenu">Home</a></li>
                    <li><a href="#">Parking Options</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#footer">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu