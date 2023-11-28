import React from "react";
import './MyTable.css';

export default function Gugudan() {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let bases = [2, 3, 4, 5, 6, 7, 8, 9]
    // let trlist = [];
    // for (let i = 2; i <= 9; i++) {
    //     let mulnum = nums.map(num => 
    //         <tr>{i} x {num} = {num * i}</tr>);
    //     trlist.push(
    //         <td key={i}>
    //             <th>{i}단</th>
    //             {mulnum}
    //         </td>
    //     );

    let trlist = bases.map(base => (
        <td key = {base}>
            <th>{base}단</th>
            {nums.map(num => ( 
                <tr key = {num}>{base} x {num} = {base * num}</tr>
            ))}
        </td>
    ));



    return (
        <table className="MyTable">
            <tbody>
                {trlist}
            </tbody>
        </table>
    );
};