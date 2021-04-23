import './App.css';
import useCalculator from './useHooks/useCalculator';

function App() {
    const {
        value,
        setValue,
        check,
        setCheck,
        total,
        tambah,
        kurang,
        kali,
        bagi,
        error
    } = useCalculator();

    return (
        <div className="container">
            <div className="App">
                <div>
                    <div className="App-title">
                        <h2>Kalkulator</h2>
                    </div>
                    <main className="calculator-card">
                        <form>
                            <div className="form-group">
                                <label htmlFor="val1">Value 1 </label>
                                <div className="inline">
                                    <input
                                        onChange={(e) => {
                                            const data = value;
                                            setValue({
                                                ...data, val1: e.target.value
                                            })
                                        }}
                                        value={value.val1}
                                        className='form-control'
                                        type="text"
                                        name="value1"
                                        id="val1"
                                    />
                                    <input className="checkmark" type="checkbox"
                                        value={check.check1}
                                        onChange={(e) => {
                                            const data = check;
                                            setCheck({
                                                ...data, check1: !check.check1
                                            })
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="val2">Value 2</label>
                                <div className="inline">
                                    <input
                                        onChange={(e) => {
                                            const data = value;
                                            setValue({
                                                ...data, val2: e.target.value
                                            })
                                        }}
                                        value={value.val2}
                                        className='form-control'
                                        type="text"
                                        name="value2"
                                        id="val2"
                                    />
                                    <input className="checkmark" type="checkbox"
                                        value={check.check2}
                                        onChange={(e) => {
                                            const data = check;
                                            setCheck({
                                                ...data, check2: !check.check2
                                            })
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="val3">Value 3</label>
                                <div className="inline">
                                    <input
                                        onChange={(e) => {
                                            const data = value;
                                            setValue({
                                                ...data, val3: e.target.value
                                            })
                                        }}
                                        value={value.val3}
                                        className='form-control'
                                        type="text"
                                        name="value3"
                                        id="val3"
                                    />
                                    <input className="checkmark" type="checkbox"
                                        value={check.check3}
                                        onChange={(e) => {
                                            const data = check;
                                            setCheck({
                                                ...data, check3: !check.check3
                                            })
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="btn-group">
                                <button onClick={tambah} className="btn">+</button>
                                <button onClick={kurang} className="btn">-</button>
                                <button onClick={kali} className="btn">x</button>
                                <button onClick={bagi} className="btn">/</button>
                            </div>
                        </form>

                        <div style={{ fontSize: "12px" }}>
                            Hasil : {total ? total : <span style={{ color: "red" }}>{error}</span>}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
