import {  useState } from "react"

const ColorApp = ()=>{
    const [colors,setColor] = useState(['#000000','#000000','#000000','#000000','#000000']);

 
   
  const generateRandomColor = (index) => {
    const newcolors =[...colors]
            const red = Math.floor(Math.random() * 255).toString(16).padStart(2, 0);
            const green = Math.floor(Math.random() * 255).toString(16).padStart(2, 0);
            const blue = Math.floor(Math.random() * 255).toString(16).padStart(2, 0);
         const randomcolor =`#${red}${green}${blue}`;
         newcolors[index] =randomcolor
         setColor(newcolors)
        };
       

    return (
        <div className="grid grid-cols-5 h-screen">
            {colors.map((color,index)=>(
                <div key={index} className="h-screen flex items-center justify-center" style={{backgroundColor:color}}>
                    <div className="text-center">
                        <h2 className="text-3xl mb-4 text-white shadow-xl">{color}</h2>
                        <button onClick={()=>generateRandomColor(index)} className="bg-white text-black px-6 py-3 rounded-xl shadow-lg">genterat color</button>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default ColorApp;