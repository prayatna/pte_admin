// import React,{Component} from'react';
//
// class API extends Component{
//
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         idq_type:undefined ,
//     //         q_type: undefined,
//     //         order: undefined,
//     //         type: undefined,
//     //     };
//     // }
//
//     constructor(){
//         super();
//         this.state = {
//             data: [],
//             type : undefined
//
//         }
//     }
//
//     componentDidMount() {
//         return fetch('http://52.15.42.223:3000/services/QuestionType')
//             .then((res) => res.json())
//             .then((res) => {
//
//                 this.setState({
//                     data:res,
//                 })
//                 console.log(this.state.data)
//             })
//
//     }
//
//     // assingValue(){
//     //     this.state.data.map((allData)=>
//     //         if(toString(allData.type) == 'speaking'){
//     //
//     //         }
//     //     )
//     //
//     // }
//
//     render(){
//         if(!this.state.data)return <p>Loading...</p>
//
//         return(
//             <div>
//                 {
//                     this.state.data.map( (allData)=>
//
//                         <div>
//                             {allData.type}  {allData.q_type}
//                         </div>
//                     )
//
//                 }
//
//             </div>
//         )
//     }
//
//
// }
// export default API;
//

class API {
    static getAllQuestionType() {
        return fetch('http://pte.novasoftware.com.au:3000/api/questionType')
            .then(response => {
                return response.json();
            }).catch(error => {
                return error
            })
    }
}

export default API