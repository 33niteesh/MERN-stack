import './App.css';
import axios from 'axios'
import {Component} from 'react'
import Display from './components/display';
export default class App extends Component{
  constructor(){
    super()
  this.state={
    a:[],
    title:"",
    description:""
  }
}
  componentDidMount(){
    axios.get("http://localhost:4000/").then(e=>this.setState({a:e.data}));
  }
  render(){
    const adddata=()=>{
      axios.post("http://localhost:4000/add",this.state)
      window.location.reload();
    }
    return (
      <div>
        <center>
        <input  onChange={(e)=>this.setState({title:e.target.value})}></input><br></br>
        <input  onChange={(e)=>this.setState({description:e.target.value})}></input><br></br>
        <button onClick={adddata}>add task</button>
        <Display data={this.state.a}/>
        </center>
      </div>
    )
  }
}
// function App() {
//   const [a,setA]=useState();
//   async function getdata(){
//     axios.get('http://localhost:3000/').then(e=>setA(e.data)).then(console.log(a))
//   }
//   useEffect(()=>{
//     getdata();
//   },[])
//   return (
//      <div>
//       done
//      </div>
//   );
// }

// export default App;