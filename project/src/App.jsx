import './App.css'
import ExpenseInput from './components/expenseInput/ExpenseInput'
import Expenses from './components/expenses/Expenses'
import Header from './components/header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Expenses />
      <ExpenseInput />
    </div>
  )
}

export default App
