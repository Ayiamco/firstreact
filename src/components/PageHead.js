export function PageHeadComponent({screenSize, isShowing, setIsShowing}){
    return (
        <section id="ex2-p-header">
            <h1 className="ex2-center">Exercise 2</h1>
            <br></br>
            <h3  className="ex2-center">Window Size: {screenSize}px</h3>
            <button  onClick={()=>{setIsShowing(!isShowing)}}  className="ex2-center">
                Show/Hide Github Users
            </button>
        </section>
    )
}