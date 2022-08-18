import axios from "axios"
export default function Display(props){
    const deletedata=(id)=>{
        console.log(id)
        axios.delete(`http://localhost:4000/delete/${id}`)
        window.location.reload();
    }
    return props.data.map((inde,r)=>{
        return <div key={r}>
            <h1>{inde.title}</h1>
            <p>{inde.description}</p>
            <button onClick={()=>deletedata(inde._id)}>Done</button>
            <hr></hr>
        </div>
    })
}