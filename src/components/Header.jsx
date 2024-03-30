import logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return <header id='header'>
        <img src={logo} alt="" />
        <h1>Investment Calculator</h1>
        <p className='center'>Calculate your investments or liabilities up to 100 years</p>
    </header>
}