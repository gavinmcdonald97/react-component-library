import { useState } from 'react'
import Toggle from './components/Toggle'
import './App.css'

const App = () => {

    const [theme, setTheme] = useState('light')

    return (
        <div className="App" data-theme={theme}>
            <header className="App-header">
                <h1>Generic toggle component used as light/dark theme switcher</h1>
            </header>
            <Toggle
                action={setTheme}
                values={['light', 'dark']}
                labels={['Toggle dark theme', 'Toggle light theme']}
            />
        </div>
    )
}

export default App