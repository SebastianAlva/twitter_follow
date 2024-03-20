import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){
    return(<section className="App">
        <TwitterFollowCard userName ="pheralb" name="Sebastian"/>
        <TwitterFollowCard userName ="elonmusk" name="Elon musk"/>
        <TwitterFollowCard userName ="minudev" name="Miguel Angel Duran"/>
    </section>)
}
