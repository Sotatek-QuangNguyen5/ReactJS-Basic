
function Ler(props) {

    //console.log(props.key)
    console.log(props.joker)
    return (

        <li>{props.title} {props.hoanler}</li>
    )
}
// const hoanler = (

//     <ul>
//         <ler />
//     </ul>
// )

const Form = {

    Input() {

        return <input />
    },

    Checkbox() {

        return <input type = "checkbox" />
    }
}


function Button({ title, href, onClick }) {

    let Component = 'button'

    const props = {}

    if (href) {

        Component = 'a'
        props.href = href
    }

    if (onClick) {

        props.onClick = onClick
    }

    return (

        <Component {...props}>{title || "joker title"}</Component>
    )
}

function Buttonn({ children }) {

    return (

        <button>{children || "joker title"}</button>
    )
}



function App() {

    const type = 'Input'

    const Component = Form[type]

    return (

        <div id="wrapper">
            <Button 
                //title="Click me!!!"
                //href="https://www.facebook.com"
                onClick = {() => console.log(Math.random())}
            />
            <Buttonn>
                {false || 'Oke buttonn'}
            </Buttonn>
            <Component />
            <Form.Checkbox />
        </div>
    )
}