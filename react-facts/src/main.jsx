
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
root.render(
    <main>
          <img src="/src/assets/react.svg" width="40px" alt="React logo"/>
          <h1>Fun facts about React!</h1>
          <ul>
          <li>Fun facts about React!</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
    </main>
)