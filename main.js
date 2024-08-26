function App() {
    return (
        <div style={{borderBox: '1px solid black', 
            display: 'flex', 
            justifyContent: 'center',
            alignItem: 'center',
            margin: 'auto',
            fontFamily: 'sans-serif',
            fontSize: '20px'
        }}>
            <Profile />
        </div>
)    
}

function Profile() {
    const pic = {borderRadius: '50%', 
        display: 'flex', 
        margin: 'auto',
        width: '150px'
    }
    return(
        <div style={{border: '1px solid silver', padding: '20px', borderRadius: '10px'}}>
             <img style={pic} src='./pic/girl.avif'/>
             <br />
             <Words />
        </div>
    )
}

function Words() {
    return(
        <div style={{ 
            display: 'inline-block',
            alignItem: 'center',
            textAlign: 'center',
        }}>
            <h3>Julienne Moore</h3>
            <p style={{color: 'silver'}}>julienne.moore@company.com</p>
        
            <View />
        </div>
    )
}

function View() {
    const st1 = {fontWeight: '800', fontSize: '24px'}
    const st2 = {color: 'silver'}
    
    return(
        <div style={{display: 'flex', justifyContent: 'space-around', width: '500px'}}>
            <div>
            <p style={st1} >25</p>
            <p style={st2}>Posts</p>
            </div>

            <div>
            <p style={st1}>350</p>
            <p style={st2}>Following</p>
            </div>

            <div>
            <p style={st1}>1.5K</p>
            <p style={st2}>Followers</p>
            </div>

        </div>
    )
}


ReactDOM.createRoot(document.querySelector('#root')).render(<App />)