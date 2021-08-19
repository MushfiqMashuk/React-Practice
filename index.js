
    class Hello extends React.Component{
        
        render(){
            return(
                <h1>
                    Hello {this.props.name || "Astronomer"} <br/>
                    Age {this.props.age}
                </h1>
            );
        }

    } 


    class Form extends React.Component{
        
        render(){
            return(
            
                <div>
                    <Hello name="Mashuk" age="23"></Hello>
                    <Hello age="23"></Hello>
                    <Hello/>
                    
                    <form method="GET">

                        <label for="email">Email</label>

                        <input type="Email" id="Email" name="Email" placeholder="Email"></input>

                        <label for="password">Password</label>

                        <input type="password" id="password" name="password" placeholder="Password"></input>

                        <input type="submit" value="Login"></input>

                    </form>
                </div>
        
            );
        }
    }

    ReactDOM.render(<Form></Form>, document.getElementById("root"));
    ReactDOM.render(<Form></Form>, document.querySelector("#nice"));