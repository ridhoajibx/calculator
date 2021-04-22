import { useState } from "react";

function useCalculator() {
    const [value, setValue] = useState({
        val1: "",
        val2: "",
        val3: "",
    })
    const [check, setCheck] = useState({
        check1: false,
        check2: false,
        check3: false,
    })
    const [total, setTotal] = useState("");
    const [error, setError] = useState("");

    const tambah = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        let x = eval;
        let errors = "harus 2 atau lebih value untuk di input!"
        try {
            if (check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} + ${value.val2} + ${value.val3}`)))
                setError("");
            } else if (check.check1 && check.check2 && !check.check3) {
                setTotal(String(x(`${value.val1} + ${value.val2}`)))
                setError("");
            } else if (check.check1 && !check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} + ${value.val3}`)))
                setError("");
            } else if (!check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val2} + ${value.val3}`)))
                setError("");
            } else {
                throw errors
            }
        } catch (error) {
            setError(error)
            setTotal("");
        }
    }

    const kurang = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        let x = eval;
        let errors = "harus 2 atau lebih value untuk di input!"
        try {
            if (check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} - ${value.val2} - ${value.val3}`)))
                setError("");
            } else if (check.check1 && check.check2 && !check.check3) {
                setTotal(String(x(`${value.val1} - ${value.val2}`)))
                setError("");
            } else if (check.check1 && !check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} - ${value.val3}`)))
                setError("");
            } else if (!check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val2} - ${value.val3}`)))
                setError("");
            } else {
                throw errors
            }
        } catch (error) {
            setError(error)
            setTotal("");
        }
    }

    const kali = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        let x = eval;
        let errors = "harus 2 atau lebih value untuk di input!"
        try {
            if (check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} * ${value.val2} * ${value.val3}`)))
                setError("");
            } else if (check.check1 && check.check2 && !check.check3) {
                setTotal(String(x(`${value.val1} * ${value.val2}`)))
                setError("");
            } else if (check.check1 && !check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} * ${value.val3}`)))
                setError("");
            } else if (!check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val2} * ${value.val3}`)))
                setError("");
            } else {
                throw errors
            }
        } catch (error) {
            setError(error)
            setTotal("")
        }
    }

    const bagi = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        let x = eval;
        let errors = "harus 2 atau lebih value untuk di input!"
        try {
            if (check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} / ${value.val2} / ${value.val3}`)))
                setError("");
            } else if (check.check1 && check.check2 && !check.check3) {
                setTotal(String(x(`${value.val1} / ${value.val2}`)))
                setError("");
            } else if (check.check1 && !check.check2 && check.check3) {
                setTotal(String(x(`${value.val1} / ${value.val3}`)))
                setError("");
            } else if (!check.check1 && check.check2 && check.check3) {
                setTotal(String(x(`${value.val2} / ${value.val3}`)))
                setError("");
            } else {
                throw errors
            }
        } catch (error) {
            setError(error)
            setTotal("")
        }
    }

    return { 
        value,
        setValue,
        check,
        setCheck,
        total, 
        setTotal,
        tambah,
        kurang,
        kali,
        bagi,
        error
    }
}

export default useCalculator
