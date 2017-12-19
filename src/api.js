import React,{Component} from'react';

class API extends Component{

    // constructor(){
    //     super();
    //     this.state = {
    //         idq_type:undefined ,
    //         q_type: undefined,
    //         order: undefined,
    //         type: undefined,
    //     };
    // }

    constructor(){
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
     fetch('http://52.15.42.223:3000/services/QuestionType')
            .then(res => res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res,
                })
        })

     }

    render(){
        if(!this.state.data)return <p>Loading...</p>

        return(
            <div>
                {
                    this.state.data.map( (dynamicData,key)=>
                        <div>
                            {
                                dynamicData.q_type
                            }
                        </div>

                    )
                }

            </div>
        )
    }


}
export default API;

