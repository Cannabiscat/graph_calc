import React from 'react';

export default function FuncForm () {
    return (
        <form>
            <label htmlFor="start">Range start</label>
            <input type="number" name="start" id="start"/>
            <label htmlFor="end">Range end</label>
            <input type="number" name="end" id="end"/>
        </form>
    )
}