function Explorer(){
    const companies =[
        {name:'company1',picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png'},{name:'company1',picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png'},{name:'company1',picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png'},{name:'company1',picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png'},{name:'company1',picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png'},{name:'company1',picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/1200px-Lululemon_Athletica_logo.svg.png'}

    ]

    return(
        <div>
            <h2>Heading One</h2>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
            <section className="gallery">
                {companies.map(item=><figure>
                    <img src={item.picture} alt={item.name} />
                </figure> )}
            </section>
        </div>
    )
}

export default Explorer